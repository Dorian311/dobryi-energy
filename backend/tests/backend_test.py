"""Backend API tests for Dobryi Energy site."""
import os
import time
import uuid
import pytest
import requests

BASE_URL = os.environ.get("REACT_APP_BACKEND_URL", "").rstrip("/")
if not BASE_URL:
    # Fallback: read from frontend .env
    env_path = "/app/frontend/.env"
    if os.path.exists(env_path):
        with open(env_path) as f:
            for line in f:
                if line.strip().startswith("REACT_APP_BACKEND_URL="):
                    BASE_URL = line.strip().split("=", 1)[1].strip().rstrip("/")
                    break

API = f"{BASE_URL}/api"


@pytest.fixture(scope="module")
def session():
    s = requests.Session()
    s.headers.update({"Content-Type": "application/json"})
    return s


# ---------- Health ----------
def test_health(session):
    r = session.get(f"{API}/health", timeout=15)
    assert r.status_code == 200, r.text
    data = r.json()
    assert data.get("status") == "healthy"
    assert "time" in data


# ---------- Realisations ----------
def test_realisations_returns_six_items(session):
    r = session.get(f"{API}/realisations", timeout=15)
    assert r.status_code == 200, r.text
    data = r.json()
    assert "items" in data
    items = data["items"]
    assert isinstance(items, list)
    assert len(items) >= 6, f"Expected >=6 items, got {len(items)}"
    for item in items:
        for key in ("id", "title", "sector", "image", "kpi"):
            assert key in item, f"Missing key '{key}' in item {item}"
        assert isinstance(item["title"], str) and len(item["title"]) > 0
        assert item["image"].startswith("http")


# ---------- Devis ----------
def _valid_payload():
    unique = uuid.uuid4().hex[:8]
    return {
        "name": f"TEST_User_{unique}",
        "email": f"test_{unique}@example.com",
        "phone": "+33600000000",
        "company": "TEST_Farm",
        "sector": "agricole",
        "project_type": "photovoltaique",
        "message": "Bonjour, ceci est un test automatisé du formulaire de devis.",
    }


def test_devis_valid_payload_returns_success(session):
    payload = _valid_payload()
    t0 = time.time()
    r = session.post(f"{API}/devis", json=payload, timeout=35)
    elapsed = time.time() - t0
    assert r.status_code == 200, r.text
    assert elapsed < 30, f"Endpoint too slow: {elapsed:.2f}s"
    data = r.json()
    assert data.get("status") == "success"
    assert "id" in data
    assert isinstance(data["id"], str) and len(data["id"]) > 0


def test_devis_invalid_missing_name(session):
    payload = _valid_payload()
    payload.pop("name")
    r = session.post(f"{API}/devis", json=payload, timeout=15)
    assert r.status_code == 422, r.text


def test_devis_invalid_missing_email(session):
    payload = _valid_payload()
    payload.pop("email")
    r = session.post(f"{API}/devis", json=payload, timeout=15)
    assert r.status_code == 422, r.text


def test_devis_invalid_email_format(session):
    payload = _valid_payload()
    payload["email"] = "not-an-email"
    r = session.post(f"{API}/devis", json=payload, timeout=15)
    assert r.status_code == 422, r.text


def test_devis_invalid_short_message(session):
    """422 when message is too short (min_length=5). Does NOT send email."""
    payload = _valid_payload()
    payload["message"] = "hi"
    r = session.post(f"{API}/devis", json=payload, timeout=15)
    assert r.status_code == 422, r.text
