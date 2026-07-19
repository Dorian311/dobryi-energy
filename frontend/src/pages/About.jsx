import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, MapPin, Users, Award, Zap } from "lucide-react";
import EchoHeading from "../components/EchoHeading";
import AuroraLines from "../components/AuroraLines";
import Reveal from "../components/Reveal";

const VALEURS = [
  {
    n: "01",
    title: "Local",
    text: "Ancrés à Montauban, au plus près du terrain et des acteurs de la région Occitanie.",
  },
  {
    n: "02",
    title: "Rigoureux",
    text: "Chaque installation est étudiée, dimensionnée et contrôlée. Rien n'est laissé au hasard.",
  },
  {
    n: "03",
    title: "Engagés",
    text: "La transition énergétique est notre métier, notre expertise, notre raison d'être.",
  },
];

const EXPERTISES = [
  { icon: Zap, title: "Photovoltaïque", text: "Toitures, hangars, ombrières, pose au sol." },
  { icon: Award, title: "Contrôle indépendant", text: "Audit électrique, mécanique, conformité." },
  { icon: Users, title: "Maintenance", text: "Nettoyage, monitoring, dépannage rapide." },
  { icon: MapPin, title: "IRVE", text: "Installation et supervision de bornes de recharge." },
];

const HABILITATIONS = [
  "Habilitation électrique BR-BC",
  "Travail en hauteur",
  "SST — Sauveteur Secouriste du Travail",
  "AIPR — Intervention à proximité des réseaux",
  "IRVE Niveau 1 · 2 · 3",
  "CACES nacelle & chariot",
  "Pose de filets périphériques et sous-face",
];

export default function About() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <main className="bg-nuit">
      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 pt-32 pb-16 overflow-hidden"
        data-testid="about-hero"
      >
        <div className="absolute inset-0 deep-blue-radial" />
        <div className="relative z-10 text-[11px] font-semibold tracking-[0.32em] uppercase prism-gradient-text mb-6">
          À propos
        </div>
        <EchoHeading
          before="Votre partenaire local"
          echo="de la transition énergétique."
          className="relative z-10 text-[42px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1.05] tracking-[-0.03em] font-bold max-w-5xl"
        />
        <Reveal delay={0.4} className="relative z-10">
          <p className="mt-10 text-center text-muted2 text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
            Basée à Montauban, en Tarn-et-Garonne, Dobryi Energy conçoit,
            installe et maintient des solutions solaires et électriques pour
            les agriculteurs, les entreprises et les collectivités.
          </p>
        </Reveal>
      </section>

      {/* Notre histoire */}
      <section className="relative py-24 md:py-32 border-t border-white/[0.05]">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://images.pexels.com/photos/29407508/pexels-photo-29407508.jpeg"
                alt="Installation Dobryi Energy"
                className="w-full h-[420px] md:h-[560px] object-cover grayscale-[20%] hover:grayscale-0 hover:scale-105 transition-all duration-[1200ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nuit/50 to-transparent pointer-events-none" />
            </div>
          </Reveal>
          <div className="lg:col-span-6">
            <Reveal>
              <div className="text-[11px] font-semibold tracking-[0.32em] uppercase prism-gradient-text mb-6">
                — 01 · Notre histoire
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-casse font-bold tracking-[-0.03em] leading-[1.05] mb-8">
                Une conviction : le solaire, bien fait.
              </h2>
              <div className="space-y-5 text-muted2 text-base md:text-lg leading-relaxed max-w-lg">
                <p>
                  Dobryi Energy est née d'un constat simple : trop d'installations
                  photovoltaïques sont posées sans étude sérieuse, mal dimensionnées,
                  ou livrées sans suivi.
                </p>
                <p>
                  Nous avons choisi la voie inverse. Chaque projet commence par une
                  étude technique complète — cadastre solaire, calepinage, simulation
                  de production, choix des composants — et se prolonge par un
                  monitoring et une maintenance sur toute la durée de vie de la
                  centrale.
                </p>
                <p>
                  Notre équipe, formée et certifiée, intervient sur toute la
                  région Occitanie et au-delà, pour des projets de 9 kWc à
                  plusieurs MWc.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Chiffres clés */}
      <section className="relative py-24 md:py-32 border-t border-white/[0.05]" data-testid="about-stats">
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-16">
              <div className="text-[11px] font-semibold tracking-[0.32em] uppercase prism-gradient-text mb-6">
                — 02 · L'entreprise en chiffres
              </div>
              <h2 className="text-3xl md:text-5xl text-casse font-bold tracking-[-0.03em]">
                Une décennie d'expertise solaire.
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 max-w-6xl mx-auto">
            {[
              { v: "500+", l: "Installations réalisées" },
              { v: "15 MW", l: "Puissance en service" },
              { v: "12", l: "Techniciens certifiés" },
              { v: "10 ans", l: "Garantie décennale" },
            ].map((k, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="bg-nuit p-8 md:p-10 text-center">
                  <div className="text-4xl md:text-5xl font-bold tracking-tight prism-gradient-text leading-none">
                    {k.v}
                  </div>
                  <div className="mt-5 text-[10px] font-semibold tracking-[0.28em] uppercase text-muted2">
                    {k.l}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nos expertises */}
      <section className="relative py-24 md:py-32 border-t border-white/[0.05]" data-testid="about-expertises">
        <div className="container-x">
          <Reveal>
            <div className="mb-16 max-w-3xl">
              <div className="text-[11px] font-semibold tracking-[0.32em] uppercase prism-gradient-text mb-6">
                — 03 · Nos expertises
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-casse font-bold tracking-[-0.03em] leading-[1.05]">
                Une chaîne complète, du toit à la borne.
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {EXPERTISES.map((e, i) => (
              <Reveal key={e.title} delay={i * 0.06}>
                <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 h-full hover:border-cyan-brand/30 hover:bg-white/[0.04] transition-all duration-500">
                  <e.icon size={28} className="text-cyan-brand mb-6" strokeWidth={1.5} />
                  <h3 className="text-xl text-casse font-bold tracking-[-0.02em] mb-3">
                    {e.title}
                  </h3>
                  <p className="text-muted2 text-sm leading-relaxed">{e.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Nos valeurs — Aurora */}
      <section
        className="relative py-32 md:py-40 border-t border-white/[0.05] overflow-hidden"
        data-testid="about-valeurs"
      >
        <div className="absolute inset-0">
          <AuroraLines />
        </div>
        <div className="container-x relative z-10">
          <Reveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="text-[11px] font-semibold tracking-[0.32em] uppercase prism-gradient-text mb-6">
                — 04 · Nos valeurs
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-casse font-bold tracking-[-0.03em] leading-[1.05]">
                Écouter, exécuter, avancer ensemble.
              </h2>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {VALEURS.map((v, i) => (
              <Reveal key={v.n} delay={i * 0.08}>
                <div className="rounded-2xl border border-white/10 bg-nuit/60 backdrop-blur-sm p-8 h-full hover:border-cyan-brand/30 transition-all duration-500">
                  <div className="text-[10px] font-semibold tracking-[0.3em] uppercase prism-gradient-text mb-4">
                    {v.n}
                  </div>
                  <h3 className="text-2xl text-casse font-bold tracking-[-0.02em] mb-3">
                    {v.title}
                  </h3>
                  <p className="text-muted2 text-sm leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Équipe & habilitations */}
      <section className="relative py-24 md:py-32 border-t border-white/[0.05]" data-testid="about-habilitations">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-12">
          <Reveal className="lg:col-span-5">
            <div className="text-[11px] font-semibold tracking-[0.32em] uppercase prism-gradient-text mb-6">
              — 05 · Équipe & habilitations
            </div>
            <h2 className="text-4xl md:text-5xl text-casse font-bold tracking-[-0.03em] leading-[1.05] mb-8">
              Une équipe formée et certifiée.
            </h2>
            <p className="text-muted2 text-base leading-relaxed max-w-md">
              Nos techniciens sont habilités pour intervenir en toute sécurité
              sur des chantiers sensibles, à proximité des réseaux, en hauteur
              et sur des installations électriques haute puissance.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="lg:col-span-7">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {HABILITATIONS.map((h, i) => (
                <li
                  key={h}
                  className="flex items-center justify-between py-5 group hover:pl-2 transition-[padding] duration-500"
                >
                  <span className="flex items-center gap-6">
                    <span className="text-[10px] font-semibold text-cyan-brand tracking-[0.3em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-casse text-base md:text-lg">{h}</span>
                  </span>
                  <span className="text-[10px] font-semibold tracking-[0.28em] text-muted2 uppercase">
                    Actif
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* Certifications */}
      <section className="relative py-20 border-t border-white/[0.05]" data-testid="about-certifications">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.32em] uppercase prism-gradient-text mb-3">
                  — 06 · Certifications
                </div>
                <div className="text-xl md:text-2xl text-casse font-bold tracking-[-0.02em]">
                  Standards maximums, partout.
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                {["QualiPV 500 HTF", "RGE Qualibat", "IRVE 1·2·3", "Garantie 10 ans", "SST · AIPR"].map((c) => (
                  <span
                    key={c}
                    className="text-[11px] font-semibold tracking-[0.2em] uppercase px-4 py-2.5 rounded-full border border-white/15 text-casse bg-white/[0.02] backdrop-blur-sm"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* CTA final */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 py-32 border-t border-white/[0.05] overflow-hidden">
        <div className="absolute inset-0 deep-blue-radial opacity-70" />
        <Reveal className="relative z-10">
          <EchoHeading
            before="Discutons de"
            echo="votre projet."
            className="text-[36px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1.05] tracking-[-0.03em] font-bold"
          />
        </Reveal>
        <Reveal delay={0.2} className="relative z-10">
          <Link to="/contact" className="mt-10 btn-pill btn-pill-primary" data-testid="about-cta">
            Prendre contact
            <ArrowUpRight size={14} strokeWidth={2.5} />
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
