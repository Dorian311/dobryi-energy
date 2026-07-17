import { useEffect } from "react";
import { Link } from "react-router-dom";
import EchoHeading from "../components/EchoHeading";
import AuroraLines from "../components/AuroraLines";
import Reveal from "../components/Reveal";

const VALEURS = [
  { n: "01", title: "Local", text: "Ancrés à Montauban, au plus près du terrain." },
  { n: "02", title: "Rigoureux", text: "Chaque installation étudiée, dimensionnée, contrôlée." },
  { n: "03", title: "Engagés", text: "La transition énergétique, notre métier." },
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
          before="Votre partenaire"
          echo="local et engagé."
          className="relative z-10 text-[42px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1] tracking-[-0.03em] font-bold max-w-5xl"
        />
        <Reveal delay={0.4} className="relative z-10">
          <p className="mt-10 text-center text-muted2 text-base max-w-md">
            Basée à Montauban. Une équipe formée, certifiée QualiPV et RGE Qualibat.
          </p>
        </Reveal>
      </section>

      {/* Aurora manifesto */}
      <section
        className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 py-32 overflow-hidden border-t border-white/[0.05]"
        data-testid="about-valeurs"
      >
        <div className="absolute inset-0">
          <AuroraLines />
        </div>
        <Reveal className="relative z-10">
          <EchoHeading
            before="Écouter, exécuter,"
            echo="avancer ensemble."
            className="text-[36px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-[-0.03em] font-bold max-w-4xl"
          />
        </Reveal>
        <div className="relative z-10 mt-20 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
          {VALEURS.map((v, i) => (
            <Reveal key={v.n} delay={i * 0.08}>
              <div className="rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 text-center h-full hover:border-cyan-brand/30 hover:bg-white/[0.04] transition-all duration-500">
                <div className="text-[10px] font-semibold tracking-[0.3em] uppercase prism-gradient-text mb-4">
                  {v.n}
                </div>
                <h3 className="text-2xl text-casse font-bold tracking-[-0.02em] mb-3">{v.title}</h3>
                <p className="text-muted2 text-sm leading-relaxed">{v.text}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 py-32 border-t border-white/[0.05] overflow-hidden">
        <div className="absolute inset-0 deep-blue-radial opacity-60" />
        <Reveal className="relative z-10">
          <EchoHeading
            before="Discutons de"
            echo="votre projet."
            className="text-[36px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-[-0.03em] font-bold"
          />
        </Reveal>
        <Reveal delay={0.2} className="relative z-10">
          <Link to="/contact" className="mt-10 btn-pill btn-pill-primary" data-testid="about-cta">
            Prendre contact
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
