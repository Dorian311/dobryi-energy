import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import MaskedLines from "../components/MaskedLines";
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
    <main className="bg-nuit pt-32 md:pt-40">
      {/* Hero */}
      <section className="container-x pb-16 md:pb-24" data-testid="solutions-hero">
        <div className="chapter-label mb-10">Nos solutions</div>
        <MaskedLines
          as="h1"
          lines={[
            <>Une chaîne</>,
            <>de valeur</>,
            <><span className="accent-word">complète.</span></>,
          ]}
          className="text-casse text-[54px] sm:text-7xl md:text-8xl lg:text-[120px] leading-[0.98] tracking-[-0.035em] font-semibold"
        />
        <Reveal delay={0.5}>
          <p className="mt-12 max-w-md text-muted2 text-base leading-relaxed">
            Photovoltaïque, contrôle, maintenance, IRVE et sécurité chantier —
            cinq expertises, un seul partenaire.
          </p>
        </Reveal>
      </section>

      {/* Solutions detail — editorial alternating */}
      <div className="border-t border-white/10">
        {SOLUTIONS.map((s, i) => {
          const reversed = i % 2 === 1;
          return (
            <section
              key={s.id}
              id={s.slug}
              className="border-b border-white/10 py-24 md:py-32"
              data-testid={`solution-section-${s.slug}`}
            >
              <div className="container-x grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12">
                <Reveal className={`md:col-span-6 ${reversed ? "md:order-2" : ""}`}>
                  <div className="overflow-hidden bg-nuit-800 border border-white/10">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-[420px] md:h-[560px] object-cover img-sepia grayscale-[25%] hover:grayscale-0 hover:scale-105 transition-all duration-[1200ms] ease-out"
                    />
                  </div>
                </Reveal>

                <div
                  className={`md:col-span-6 flex flex-col justify-center ${
                    reversed ? "md:order-1 md:pr-8" : "md:pl-8"
                  }`}
                >
                  <Reveal>
                    <div className="chapter-label mb-8">— {s.n}</div>
                    <h2 className="text-5xl md:text-7xl text-casse leading-[1] font-semibold tracking-[-0.035em] mb-8">
                      {s.title}
                    </h2>
                    <p className="text-muted2 text-base md:text-lg leading-relaxed max-w-md mb-10">
                      {s.lead}
                    </p>
                    <Link
                      to="/contact"
                      className="btn-primary self-start"
                      data-testid={`solution-cta-${s.slug}`}
                    >
                      Demander un devis
                      <ArrowUpRight size={14} strokeWidth={2.5} />
                    </Link>
                  </Reveal>
                </div>
              </div>
            </section>
          );
        })}
      </div>

      {/* Bottom CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 champagne-halo" />
        <div className="container-x relative grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <Reveal>
              <h3 className="text-5xl md:text-7xl text-casse leading-[0.98] font-semibold tracking-[-0.035em]">
                Un projet ?<br />
                <span className="accent-word">Parlons-en.</span>
              </h3>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="md:col-span-4">
            <Link to="/contact" className="btn-primary">
              Contacter Dobryi Energy <ArrowUpRight size={14} strokeWidth={2.5} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
