import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import EchoHeading from "../components/EchoHeading";
import Reveal from "../components/Reveal";
import { SOLUTIONS } from "../data/content";

export default function Solutions() {
  const loc = useLocation();

  useEffect(() => {
    if (loc.hash) {
      const el = document.getElementById(loc.hash.slice(1));
      if (el) setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 200);
    } else {
      window.scrollTo(0, 0);
    }
  }, [loc]);

  return (
    <main className="bg-nuit">
      {/* Hero */}
      <section
        className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 pt-32 pb-16 overflow-hidden"
        data-testid="solutions-hero"
      >
        <div className="absolute inset-0 deep-blue-radial" />
        <div className="relative z-10 text-[11px] font-semibold tracking-[0.32em] uppercase prism-gradient-text mb-6">
          Nos solutions
        </div>
        <EchoHeading
          before="Une chaîne de valeur"
          echo="solaire complète."
          className="relative z-10 text-[42px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1] tracking-[-0.03em] font-bold max-w-5xl"
        />
        <Reveal delay={0.4} className="relative z-10">
          <p className="mt-10 text-center text-muted2 text-base max-w-xl">
            Photovoltaïque, contrôle, maintenance, IRVE et sécurité chantier.
            Cinq expertises, un partenaire.
          </p>
        </Reveal>
      </section>

      {/* Solutions cards */}
      <section className="relative py-24 md:py-32 border-t border-white/[0.05]">
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SOLUTIONS.map((s, i) => (
              <Reveal key={s.id} delay={i * 0.06} className="h-full">
                <div
                  id={s.slug}
                  data-testid={`solution-section-${s.slug}`}
                  className="group relative h-full flex flex-col rounded-2xl overflow-hidden border border-white/10 bg-white/[0.02] backdrop-blur-sm hover:border-cyan-brand/30 hover:bg-white/[0.04] transition-all duration-500"
                >
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-full object-cover grayscale-[50%] group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-[1200ms] ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nuit-800/95 via-nuit-800/30 to-transparent" />
                    <div className="absolute top-4 left-4 text-[10px] font-semibold tracking-[0.3em] uppercase text-cyan-brand">
                      {s.n} /
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="text-2xl text-casse font-bold tracking-[-0.02em] mb-3">
                      {s.title}
                    </h3>
                    <p className="text-muted2 text-sm leading-relaxed mb-6 flex-1">
                      {s.lead}
                    </p>
                    <Link
                      to="/contact"
                      className="btn-pill btn-pill-ghost self-start"
                      data-testid={`solution-cta-${s.slug}`}
                    >
                      Demander un devis
                    </Link>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 py-32 border-t border-white/[0.05] overflow-hidden">
        <div className="absolute inset-0 deep-blue-radial opacity-60" />
        <Reveal className="relative z-10">
          <EchoHeading
            before="Un projet ?"
            echo="Parlons-en."
            className="text-[36px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-[-0.03em] font-bold"
          />
        </Reveal>
        <Reveal delay={0.2} className="relative z-10">
          <Link to="/contact" className="mt-10 btn-pill btn-pill-primary">
            Contacter Dobryi Energy
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
