import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast, Toaster } from "sonner";
import { ArrowUpRight, Check, Mail, MessageCircle, MapPin } from "lucide-react";
import MaskedLines from "../components/MaskedLines";
import Reveal from "../components/Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

const SECTORS = [
  { v: "agricole", label: "Agricole" },
  { v: "industriel", label: "Industriel / Tertiaire" },
  { v: "collectivite", label: "Collectivité" },
  { v: "particulier", label: "Particulier" },
];
const PROJECTS = [
  { v: "photovoltaique", label: "Installation PV" },
  { v: "controle", label: "Contrôle chantier PV" },
  { v: "maintenance", label: "Maintenance & nettoyage" },
  { v: "irve", label: "Bornes IRVE" },
  { v: "securite", label: "Sécurité chantier" },
  { v: "autre", label: "Autre" },
];

const INITIAL = {
  name: "",
  email: "",
  phone: "",
  company: "",
  sector: "agricole",
  project_type: "photovoltaique",
  message: "",
};

export default function Contact() {
  const [form, setForm] = useState(INITIAL);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => window.scrollTo(0, 0), []);

  const update = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const submit = async (e) => {
    e.preventDefault();
    if (submitting) return;
    if (!form.name.trim() || !form.email.trim() || form.message.trim().length < 5) {
      toast.error("Merci de renseigner nom, email et un message.");
      return;
    }
    setSubmitting(true);
    try {
      await axios.post(`${API}/devis`, form);
      setSuccess(true);
      setForm(INITIAL);
      toast.success("Demande envoyée. Nous vous répondons sous 24h ouvrées.");
    } catch (err) {
      toast.error("Envoi impossible. Contactez-nous par email ou WhatsApp.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <main className="bg-nuit pt-32 md:pt-40 pb-24">
      <Toaster position="bottom-center" theme="dark" richColors />

      {/* Hero */}
      <section className="container-x pb-16" data-testid="contact-hero">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-10 bg-emerald-brand" />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-emerald-brand">
            Contact · Devis gratuit
          </span>
        </div>
        <MaskedLines
          as="h1"
          lines={[
            <>Parlons de</>,
            <>votre <span className="italic text-emerald-brand">projet.</span></>,
          ]}
          className="font-serif text-casse text-[52px] sm:text-7xl md:text-8xl lg:text-[128px] leading-[0.98] tracking-[-0.02em]"
        />
      </section>

      {/* Contact grid */}
      <section className="container-x border-t border-white/10 pt-16 grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Left column - info */}
        <div className="lg:col-span-4 space-y-10">
          <Reveal>
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted2 mb-4">
                /01 · Écrivez-nous
              </div>
              <a
                href="mailto:dobryienergy@gmail.com"
                className="group inline-flex items-center gap-3 text-casse text-lg hover:text-emerald-brand transition-colors"
                data-testid="contact-email"
              >
                <Mail size={16} className="text-emerald-brand" />
                dobryienergy@gmail.com
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted2 mb-4">
                /02 · WhatsApp
              </div>
              <a
                href="https://wa.me/33773674257?text=Bonjour%20Dobryi%20Energy%2C%20je%20souhaite%20un%20devis."
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 text-casse text-lg hover:text-emerald-brand transition-colors"
                data-testid="contact-whatsapp"
              >
                <MessageCircle size={16} className="text-emerald-brand" />
                07 73 67 42 57
                <ArrowUpRight size={14} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div>
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted2 mb-4">
                /03 · Adresse
              </div>
              <div className="flex gap-3 items-start text-casse">
                <MapPin size={16} className="text-emerald-brand mt-1 shrink-0" />
                <p className="text-base leading-relaxed">
                  8 Rue Roger Carpentier<br />
                  Logement 13<br />
                  82000 Montauban, France
                </p>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.15}>
            <div className="pt-8 border-t border-white/10">
              <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted2 mb-4">
                Certifications
              </div>
              <div className="flex flex-wrap gap-2">
                {["QualiPV 500 HTF", "RGE Qualibat", "IRVE 1·2·3"].map((c) => (
                  <span key={c} className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 border border-white/15 text-casse">
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>

        {/* Right column - form */}
        <div className="lg:col-span-8 lg:pl-8 lg:border-l border-white/10">
          {success ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center py-20"
              data-testid="contact-success"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-emerald-brand text-nuit mb-8">
                <Check size={28} strokeWidth={2.5} />
              </div>
              <h3 className="font-serif text-4xl md:text-5xl text-casse mb-4">
                Merci, <span className="italic text-emerald-brand">c’est reçu.</span>
              </h3>
              <p className="text-muted2 max-w-md mx-auto">
                Votre demande a bien été envoyée à nos équipes. Nous vous
                recontactons sous 24h ouvrées.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-10 font-mono text-[11px] tracking-[0.2em] uppercase text-emerald-brand border-b border-emerald-brand pb-1"
                data-testid="contact-new"
              >
                Envoyer une autre demande
              </button>
            </motion.div>
          ) : (
            <form onSubmit={submit} data-testid="contact-form" className="space-y-6">
              <Reveal>
                <div className="font-mono text-[10px] tracking-[0.3em] uppercase text-emerald-brand mb-8">
                  /04 · Demande de devis
                </div>
              </Reveal>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <div>
                  <label className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted2">Nom complet *</label>
                  <input
                    type="text"
                    className="editorial-input"
                    value={form.name}
                    onChange={update("name")}
                    required
                    data-testid="contact-input-name"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted2">Email *</label>
                  <input
                    type="email"
                    className="editorial-input"
                    value={form.email}
                    onChange={update("email")}
                    required
                    data-testid="contact-input-email"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted2">Téléphone</label>
                  <input
                    type="tel"
                    className="editorial-input"
                    value={form.phone}
                    onChange={update("phone")}
                    data-testid="contact-input-phone"
                  />
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted2">Entreprise / Exploitation</label>
                  <input
                    type="text"
                    className="editorial-input"
                    value={form.company}
                    onChange={update("company")}
                    data-testid="contact-input-company"
                  />
                </div>
              </div>

              <div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <div>
                  <label className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted2 block mb-4">Secteur *</label>
                  <div className="flex flex-wrap gap-2">
                    {SECTORS.map((s) => (
                      <button
                        type="button"
                        key={s.v}
                        onClick={() => setForm((f) => ({ ...f, sector: s.v }))}
                        data-testid={`contact-sector-${s.v}`}
                        className={`font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-2.5 border transition-colors duration-300 ${
                          form.sector === s.v
                            ? "border-emerald-brand text-emerald-brand bg-emerald-brand/5"
                            : "border-white/15 text-muted2 hover:text-casse hover:border-white/40"
                        }`}
                      >
                        {s.label}
                      </button>
                    ))}
                  </div>
                </div>
                <div>
                  <label className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted2 block mb-4">Type de projet *</label>
                  <div className="flex flex-wrap gap-2">
                    {PROJECTS.map((p) => (
                      <button
                        type="button"
                        key={p.v}
                        onClick={() => setForm((f) => ({ ...f, project_type: p.v }))}
                        data-testid={`contact-project-${p.v}`}
                        className={`font-mono text-[10px] tracking-[0.2em] uppercase px-4 py-2.5 border transition-colors duration-300 ${
                          form.project_type === p.v
                            ? "border-emerald-brand text-emerald-brand bg-emerald-brand/5"
                            : "border-white/15 text-muted2 hover:text-casse hover:border-white/40"
                        }`}
                      >
                        {p.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <label className="font-mono text-[10px] tracking-[0.3em] uppercase text-muted2">Votre message *</label>
                <textarea
                  className="editorial-input"
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Décrivez brièvement votre projet, votre besoin, la surface, les contraintes..."
                  required
                  data-testid="contact-input-message"
                />
              </div>

              <div className="pt-8 flex flex-col md:flex-row items-start md:items-center gap-4">
                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="contact-submit"
                  className="group inline-flex items-center gap-3 bg-solar text-nuit font-mono text-[11px] tracking-[0.2em] uppercase px-8 py-5 hover:bg-emerald-brand transition-colors duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Envoi en cours…" : "Envoyer ma demande"}
                  <ArrowUpRight
                    size={16}
                    strokeWidth={2.5}
                    className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
                <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-muted2">
                  Réponse sous 24h ouvrées
                </p>
              </div>
            </form>
          )}
        </div>
      </section>
    </main>
  );
}
