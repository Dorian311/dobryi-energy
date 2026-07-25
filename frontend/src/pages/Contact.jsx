import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { toast, Toaster } from "sonner";
import { Check, Mail, MessageCircle, MapPin } from "lucide-react";
import EchoHeading from "../components/EchoHeading";
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
  { v: "controle", label: "Contrôle chantier" },
  { v: "maintenance", label: "Maintenance" },
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
    <main className="bg-nuit pb-24">
      <Toaster position="bottom-center" theme="dark" richColors />

      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 pt-32 pb-16 overflow-hidden"
        data-testid="contact-hero"
      >
        <div className="absolute inset-0 deep-blue-radial" />
        <div className="relative z-10 text-[11px] font-semibold tracking-[0.32em] uppercase prism-gradient-text mb-6">
          Contact
        </div>
        <EchoHeading
          before="Une étude."
          echo="Zéro engagement."
          className="relative z-10 text-[42px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1] tracking-[-0.03em] font-bold max-w-5xl"
        />
        <Reveal delay={0.4} className="relative z-10">
          <p className="mt-10 text-center text-muted2 text-base max-w-md">
            Un expert Dobryi Energy vous rappelle sous 24h ouvrées.
          </p>
        </Reveal>
      </section>

      {/* Quick contact pills */}
      <section className="container-x">
        <Reveal>
          <div className="flex flex-wrap gap-3 justify-center">
            <a
              href="mailto:dobryienergy@gmail.com"
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase px-4 py-2.5 rounded-full border border-white/15 text-casse hover:text-cyan-brand hover:border-cyan-brand transition-colors"
              data-testid="contact-email"
            >
              <Mail size={14} />
              dobryienergy@gmail.com
            </a>
            <a
              href="https://wa.me/33773674257"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase px-4 py-2.5 rounded-full border border-white/15 text-casse hover:text-cyan-brand hover:border-cyan-brand transition-colors"
              data-testid="contact-whatsapp"
            >
              <MessageCircle size={14} />
              07 73 67 42 57
            </a>
            <span className="inline-flex items-center gap-2 text-[11px] font-semibold tracking-[0.2em] uppercase px-4 py-2.5 rounded-full border border-white/15 text-muted2">
              <MapPin size={14} />
              Montauban · France entière
            </span>
          </div>
        </Reveal>
      </section>

      {/* Form */}
      <section className="container-x mt-20 max-w-3xl">
        <div className="rounded-3xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 md:p-12">
          {success ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-center py-12"
              data-testid="contact-success"
            >
              <div className="inline-flex h-16 w-16 items-center justify-center rounded-full bg-cyan-brand text-casse mb-8">
                <Check size={28} strokeWidth={2.5} />
              </div>
              <EchoHeading
                before="Merci,"
                echo="c'est reçu."
                className="text-3xl md:text-5xl font-bold tracking-[-0.03em] leading-[1]"
              />
              <p className="text-casse/85 max-w-md mx-auto mt-8 text-base leading-relaxed">
                Votre demande a bien été envoyée. Nous vous recontactons sous 24h ouvrées.
              </p>
              <button
                onClick={() => setSuccess(false)}
                className="mt-10 btn-pill btn-pill-ghost"
                data-testid="contact-new"
              >
                Envoyer une autre demande
              </button>
            </motion.div>
          ) : (
            <form onSubmit={submit} data-testid="contact-form" className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-2">
                <div>
                  <label className="text-[10px] font-semibold tracking-[0.3em] uppercase text-muted2">
                    Nom complet *
                  </label>
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
                  <label className="text-[10px] font-semibold tracking-[0.3em] uppercase text-muted2">
                    Email *
                  </label>
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
                  <label className="text-[10px] font-semibold tracking-[0.3em] uppercase text-muted2">
                    Téléphone
                  </label>
                  <input
                    type="tel"
                    className="editorial-input"
                    value={form.phone}
                    onChange={update("phone")}
                    data-testid="contact-input-phone"
                  />
                </div>
                <div>
                  <label className="text-[10px] font-semibold tracking-[0.3em] uppercase text-muted2">
                    Entreprise / Exploitation
                  </label>
                  <input
                    type="text"
                    className="editorial-input"
                    value={form.company}
                    onChange={update("company")}
                    data-testid="contact-input-company"
                  />
                </div>
              </div>

              <div className="pt-6">
                <label className="text-[10px] font-semibold tracking-[0.3em] uppercase text-muted2 block mb-4">
                  Secteur *
                </label>
                <div className="flex flex-wrap gap-2">
                  {SECTORS.map((s) => (
                    <button
                      type="button"
                      key={s.v}
                      onClick={() => setForm((f) => ({ ...f, sector: s.v }))}
                      data-testid={`contact-sector-${s.v}`}
                      className={`text-[10px] font-semibold tracking-[0.2em] uppercase px-4 py-2.5 rounded-full border transition-colors duration-300 ${
                        form.sector === s.v
                          ? "border-cyan-brand text-cyan-brand bg-cyan-brand/5"
                          : "border-white/15 text-muted2 hover:text-casse hover:border-white/40"
                      }`}
                    >
                      {s.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-2">
                <label className="text-[10px] font-semibold tracking-[0.3em] uppercase text-muted2 block mb-4">
                  Type de projet *
                </label>
                <div className="flex flex-wrap gap-2">
                  {PROJECTS.map((p) => (
                    <button
                      type="button"
                      key={p.v}
                      onClick={() => setForm((f) => ({ ...f, project_type: p.v }))}
                      data-testid={`contact-project-${p.v}`}
                      className={`text-[10px] font-semibold tracking-[0.2em] uppercase px-4 py-2.5 rounded-full border transition-colors duration-300 ${
                        form.project_type === p.v
                          ? "border-cyan-brand text-cyan-brand bg-cyan-brand/5"
                          : "border-white/15 text-muted2 hover:text-casse hover:border-white/40"
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="pt-4">
                <label className="text-[10px] font-semibold tracking-[0.3em] uppercase text-muted2">
                  Votre message *
                </label>
                <textarea
                  className="editorial-input"
                  rows={4}
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Décrivez brièvement votre projet, la surface, les contraintes..."
                  required
                  data-testid="contact-input-message"
                />
              </div>

              <div className="pt-8 flex flex-col md:flex-row items-center gap-4 justify-center">
                <button
                  type="submit"
                  disabled={submitting}
                  data-testid="contact-submit"
                  className="btn-pill btn-pill-primary disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {submitting ? "Envoi en cours…" : "Envoyer ma demande"}
                </button>
                <p className="text-[10px] font-medium tracking-[0.2em] uppercase text-muted2">
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
