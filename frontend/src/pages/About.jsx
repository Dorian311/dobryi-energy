import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import MaskedLines from "../components/MaskedLines";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";

const HABILITATIONS = [
  "Habilitation électrique BR-BC",
  "Travail en hauteur",
  "SST — Sauveteur Secouriste du Travail",
  "AIPR — Intervention à proximité des réseaux",
  "IRVE Niveau 1 · 2 · 3",
  "CACES nacelle & chariot",
  "Pose de filets périphériques et sous-face",
];

const VALEURS = [
  { n: "01", title: "Local", text: "Ancrés à Montauban, nous connaissons le territoire et ses acteurs." },
  { n: "02", title: "Rigoureux", text: "Chaque installation est étudiée, dimensionnée, contrôlée." },
  { n: "03", title: "Transparent", text: "Devis clairs, contrats lisibles, aucun coût caché." },
  { n: "04", title: "Engagés", text: "La transition énergétique n’est pas un slogan — c’est notre métier." },
];

export default function About() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <main className="bg-nuit pt-32 md:pt-40">
      {/* Hero */}
      <section className="container-x pb-16 md:pb-24" data-testid="about-hero">
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-10 bg-emerald-brand" />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-emerald-brand">
            À propos · Dobryi Energy
          </span>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <MaskedLines
              as="h1"
              lines={[
                <>Votre partenaire</>,
                <><span className="italic">local</span> de la transition</>,
                <><span className="text-emerald-brand italic">énergétique.</span></>,
              ]}
              className="font-serif text-casse text-[48px] sm:text-6xl md:text-7xl lg:text-[112px] leading-[0.98] tracking-[-0.02em]"
            />
          </div>
          <Reveal delay={0.4} className="md:col-span-4 md:pt-8">
            <p className="text-muted2 text-base md:text-lg leading-relaxed">
              Basée à Montauban, Dobryi Energy réunit des professionnels du solaire,
              de l’électrotechnique et de la sécurité chantier. Une équipe agile,
              formée, et engagée pour un solaire fiable et rentable.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Editorial image */}
      <section className="container-x pb-24" data-testid="about-image">
        <Reveal>
          <div className="clip-corner overflow-hidden border border-white/10">
            <img
              src="https://images.pexels.com/photos/34347028/pexels-photo-34347028.jpeg"
              alt="Dobryi Energy Montauban"
              className="w-full h-[420px] md:h-[620px] object-cover"
            />
          </div>
        </Reveal>
      </section>

      {/* Valeurs */}
      <section className="border-t border-white/10 py-24 md:py-32" data-testid="valeurs">
        <div className="container-x">
          <Reveal>
            <div className="flex items-center gap-3 mb-14">
              <span className="h-px w-10 bg-emerald-brand" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-emerald-brand">
                Nos valeurs
              </span>
            </div>
          </Reveal>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {VALEURS.map((v, i) => (
              <Reveal key={v.n} delay={i * 0.08}>
                <div className="border-t border-white/10 pt-6">
                  <div className="font-mono text-[10px] tracking-[0.3em] text-emerald-brand mb-6">
                    {v.n} /
                  </div>
                  <h3 className="font-serif text-4xl text-casse mb-4">{v.title}</h3>
                  <p className="text-muted2 text-sm leading-relaxed">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Chiffres */}
      <section className="border-t border-white/10 py-24 bg-nuit-800">
        <div className="container-x grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
          {[
            { v: 500, s: "HTF", l: "QualiPV certifié" },
            { v: 10, s: "ans", l: "Garantie décennale" },
            { v: 24, s: "h", l: "Réponse projet" },
            { v: 100, s: "%", l: "Chantiers assurés" },
          ].map((k, i) => (
            <Reveal key={i} delay={i * 0.08}>
              <div className="bg-nuit-800 p-8 md:p-10">
                <div className="font-serif text-6xl md:text-7xl text-casse leading-none">
                  <Counter value={k.v} suffix={k.s} />
                </div>
                <div className="mt-6 font-mono text-[10px] tracking-[0.28em] uppercase text-muted2">
                  {k.l}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Habilitations */}
      <section className="border-t border-white/10 py-24 md:py-32" data-testid="habilitations">
        <div className="container-x grid grid-cols-1 md:grid-cols-12 gap-8">
          <Reveal className="md:col-span-5">
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-emerald-brand" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-emerald-brand">
                Équipe & habilitations
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-casse leading-[1.02]">
              Des compétences <span className="italic">certifiées.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15} className="md:col-span-7">
            <ul className="divide-y divide-white/10 border-y border-white/10">
              {HABILITATIONS.map((h, i) => (
                <li
                  key={h}
                  className="flex items-center justify-between py-5 group hover:pl-2 transition-[padding] duration-500"
                >
                  <span className="flex items-center gap-6">
                    <span className="font-mono text-[10px] text-emerald-brand tracking-[0.3em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-casse text-base md:text-lg">{h}</span>
                  </span>
                  <span className="font-mono text-[10px] tracking-[0.28em] text-muted2 uppercase">
                    Actif
                  </span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,153,0.1),transparent_60%)]" />
        <div className="container-x relative">
          <Reveal>
            <h3 className="font-serif text-5xl md:text-7xl text-casse leading-[0.98] max-w-3xl mb-10">
              Discutons de <span className="italic text-emerald-brand">votre projet.</span>
            </h3>
            <Link
              to="/contact"
              className="inline-flex items-center gap-3 bg-solar text-nuit font-mono text-[11px] tracking-[0.2em] uppercase px-8 py-5 hover:bg-casse transition-colors duration-500"
              data-testid="about-cta"
            >
              Prendre contact <ArrowUpRight size={14} strokeWidth={2.5} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
