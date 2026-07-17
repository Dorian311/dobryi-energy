from fastapi import FastAPI, APIRouter, HTTPException
from dotenv import load_dotenv
from starlette.middleware.cors import CORSMiddleware
from motor.motor_asyncio import AsyncIOMotorClient
import os
import logging
import httpx
from pathlib import Path
from pydantic import BaseModel, Field, ConfigDict, EmailStr
from typing import List, Optional
import uuid
from datetime import datetime, timezone


ROOT_DIR = Path(__file__).parent
load_dotenv(ROOT_DIR / '.env')

# MongoDB connection
mongo_url = os.environ['MONGO_URL']
client = AsyncIOMotorClient(mongo_url)
db = client[os.environ['DB_NAME']]

# Email (Emergent-managed Resend)
EMAIL_BASE_URL = "https://integrations.emergentagent.com"
EMAIL_KEY = os.environ.get("EMERGENT_EMAIL_KEY")
EMAIL_FROM_NAME = os.environ.get("EMAIL_FROM_NAME", "Dobryi Energy")
CONTACT_TO_EMAIL = os.environ.get("CONTACT_TO_EMAIL", "dobryienergy@gmail.com")

app = FastAPI(title="Dobryi Energy API")
api_router = APIRouter(prefix="/api")

logging.basicConfig(
    level=logging.INFO,
    format='%(asctime)s - %(name)s - %(levelname)s - %(message)s'
)
logger = logging.getLogger(__name__)


# ---------- Models ----------
class DevisRequest(BaseModel):
    model_config = ConfigDict(extra="ignore")
    name: str = Field(..., min_length=2, max_length=120)
    email: EmailStr
    phone: Optional[str] = None
    company: Optional[str] = None
    sector: str = Field(..., description="agricole | industriel | collectivite | particulier")
    project_type: str = Field(..., description="photovoltaique | controle | maintenance | irve | securite | autre")
    message: str = Field(..., min_length=5, max_length=4000)


class DevisRecord(BaseModel):
    id: str = Field(default_factory=lambda: str(uuid.uuid4()))
    name: str
    email: str
    phone: Optional[str] = None
    company: Optional[str] = None
    sector: str
    project_type: str
    message: str
    created_at: str = Field(default_factory=lambda: datetime.now(timezone.utc).isoformat())


# ---------- Helpers ----------
def _build_email_html(payload: DevisRequest) -> str:
    sector_labels = {
        "agricole": "Agricole",
        "industriel": "Industriel / Tertiaire",
        "collectivite": "Collectivités / Public",
        "particulier": "Particulier",
    }
    project_labels = {
        "photovoltaique": "Installation Photovoltaïque",
        "controle": "Contrôle Indépendant de Chantier PV",
        "maintenance": "Maintenance & Nettoyage PV",
        "irve": "Bornes de Recharge (IRVE)",
        "securite": "Sécurité de Chantier (Filets)",
        "autre": "Autre",
    }
    sector = sector_labels.get(payload.sector, payload.sector)
    project = project_labels.get(payload.project_type, payload.project_type)
    safe_message = (payload.message or "").replace("<", "&lt;").replace(">", "&gt;").replace("\n", "<br>")
    return f"""
    <table width="100%" cellpadding="0" cellspacing="0" style="background:#040914;padding:32px 0;font-family:Arial,Helvetica,sans-serif;">
      <tr><td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background:#0A1128;border:1px solid rgba(244,244,240,0.1);">
          <tr><td style="padding:32px 32px 8px 32px;">
            <div style="color:#FFD600;font-size:11px;letter-spacing:3px;text-transform:uppercase;font-weight:700;">Dobryi Energy — Nouvelle demande</div>
            <h1 style="color:#F4F4F0;font-size:26px;margin:12px 0 0 0;font-weight:600;">{payload.name}</h1>
            <div style="color:#8F9BB3;font-size:13px;margin-top:6px;">{payload.company or "—"} · {sector}</div>
          </td></tr>
          <tr><td style="padding:24px 32px;">
            <table width="100%" cellpadding="0" cellspacing="0" style="border-top:1px solid rgba(244,244,240,0.08);">
              <tr>
                <td style="padding:14px 0;color:#8F9BB3;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Projet</td>
                <td style="padding:14px 0;color:#00E599;font-size:13px;text-align:right;">{project}</td>
              </tr>
              <tr>
                <td style="padding:14px 0;border-top:1px solid rgba(244,244,240,0.08);color:#8F9BB3;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Email</td>
                <td style="padding:14px 0;border-top:1px solid rgba(244,244,240,0.08);color:#F4F4F0;font-size:13px;text-align:right;">{payload.email}</td>
              </tr>
              <tr>
                <td style="padding:14px 0;border-top:1px solid rgba(244,244,240,0.08);color:#8F9BB3;font-size:11px;letter-spacing:2px;text-transform:uppercase;">Téléphone</td>
                <td style="padding:14px 0;border-top:1px solid rgba(244,244,240,0.08);color:#F4F4F0;font-size:13px;text-align:right;">{payload.phone or "—"}</td>
              </tr>
            </table>
            <div style="margin-top:22px;padding:20px;background:#040914;border-left:2px solid #00E599;">
              <div style="color:#8F9BB3;font-size:11px;letter-spacing:2px;text-transform:uppercase;margin-bottom:10px;">Message</div>
              <div style="color:#F4F4F0;font-size:14px;line-height:1.7;">{safe_message}</div>
            </div>
          </td></tr>
          <tr><td style="padding:20px 32px;border-top:1px solid rgba(244,244,240,0.08);color:#8F9BB3;font-size:11px;">
            Reçu depuis dobryi-energy.fr · {datetime.now(timezone.utc).strftime('%d/%m/%Y %H:%M UTC')}
          </td></tr>
        </table>
      </td></tr>
    </table>
    """


async def _send_notification(payload: DevisRequest) -> None:
    if not EMAIL_KEY:
        logger.warning("EMERGENT_EMAIL_KEY missing — skipping email send")
        return
    body = {
        "to": [CONTACT_TO_EMAIL],
        "subject": f"Nouvelle demande de devis — {payload.name}",
        "html": _build_email_html(payload),
        "from_name": EMAIL_FROM_NAME,
        "contact_email": payload.email,
    }
    try:
        async with httpx.AsyncClient(timeout=30) as ac:
            resp = await ac.post(
                f"{EMAIL_BASE_URL}/api/v1/email/send",
                headers={"X-Email-Key": EMAIL_KEY},
                json=body,
            )
        resp.raise_for_status()
        logger.info(f"Devis email sent id={resp.json().get('id')}")
    except httpx.HTTPStatusError as e:
        logger.error(f"Devis email failed: {e.response.status_code} {e.response.text}")
    except Exception as e:
        logger.error(f"Devis email error: {e}")


# ---------- Routes ----------
@api_router.get("/")
async def root():
    return {"service": "Dobryi Energy API", "status": "ok"}


@api_router.get("/health")
async def health():
    return {"status": "healthy", "time": datetime.now(timezone.utc).isoformat()}


@api_router.post("/devis")
async def create_devis(payload: DevisRequest):
    record = DevisRecord(**payload.model_dump())
    try:
        await db.devis.insert_one(record.model_dump())
    except Exception as e:
        logger.error(f"Mongo insert failed: {e}")
        raise HTTPException(status_code=500, detail="Impossible d'enregistrer la demande")

    await _send_notification(payload)
    return {"status": "success", "id": record.id, "message": "Votre demande a bien été envoyée. Nous vous recontactons sous 24h."}


@api_router.get("/realisations")
async def list_realisations():
    """Curated portfolio items, served from backend for future extensibility."""
    items = [
        {
            "id": "toiture-agricole-tarn",
            "title": "Toiture agricole 500 kWc",
            "location": "Tarn-et-Garonne",
            "sector": "Agricole",
            "year": 2024,
            "image": "https://images.unsplash.com/photo-1509391366360-2e959784a276?auto=format&fit=crop&w=1600&q=80",
            "kpi": "500 kWc",
        },
        {
            "id": "ombriere-industrie",
            "title": "Ombrière parking industriel",
            "location": "Montauban",
            "sector": "Industriel",
            "year": 2024,
            "image": "https://images.unsplash.com/photo-1466611653911-95081537e5b7?auto=format&fit=crop&w=1600&q=80",
            "kpi": "1.2 MWc",
        },
        {
            "id": "irve-flotte-tertiaire",
            "title": "Déploiement IRVE flotte",
            "location": "Toulouse",
            "sector": "Tertiaire",
            "year": 2025,
            "image": "https://images.pexels.com/photos/33508509/pexels-photo-33508509.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "kpi": "24 bornes",
        },
        {
            "id": "mairie-ombriere",
            "title": "Ombrière communale",
            "location": "Occitanie",
            "sector": "Collectivité",
            "year": 2024,
            "image": "https://images.unsplash.com/photo-1595437193398-f24279553f4f?auto=format&fit=crop&w=1600&q=80",
            "kpi": "220 kWc",
        },
        {
            "id": "hangar-elevage",
            "title": "Hangar élevage bovin",
            "location": "Aveyron",
            "sector": "Agricole",
            "year": 2023,
            "image": "https://images.unsplash.com/photo-1497440001374-f26997328c1b?auto=format&fit=crop&w=1600&q=80",
            "kpi": "310 kWc",
        },
        {
            "id": "filets-securite-chantier",
            "title": "Sécurisation filets chantier",
            "location": "Bordeaux",
            "sector": "Sécurité",
            "year": 2025,
            "image": "https://images.pexels.com/photos/8961034/pexels-photo-8961034.jpeg?auto=compress&cs=tinysrgb&w=1600",
            "kpi": "4200 m²",
        },
    ]
    return {"items": items}


app.include_router(api_router)

app.add_middleware(
    CORSMiddleware,
    allow_credentials=True,
    allow_origins=os.environ.get('CORS_ORIGINS', '*').split(','),
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.on_event("shutdown")
async def shutdown_db_client():
    client.close()
