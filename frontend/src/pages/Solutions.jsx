import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Check } from "lucide-react";
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
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-10 bg-emerald-brand" />
          <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-emerald-brand">
            Chapitre 01 · Nos solutions
          </span>
        </div>
        <MaskedLines
          as="h1"
          lines={[
            <>Une chaîne de <span className="italic">valeur</span></>,
            <>solaire, <span className="text-emerald-brand italic">intégrale.</span></>,
          ]}
          className="font-serif text-casse text-[52px] sm:text-7xl md:text-8xl lg:text-[128px] leading-[0.98] tracking-[-0.02em]"
        />
        <Reveal delay={0.6}>
          <p className="mt-10 max-w-2xl text-muted2 text-base md:text-lg leading-relaxed">
            De l’étude à la maintenance, en passant par le contrôle indépendant et
            la sécurisation des chantiers — cinq expertises portées par des équipes
            certifiées QualiPV et RGE Qualibat.
          </p>
        </Reveal>
      </section>

      {/* Solutions detail */}
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
                  <div className="clip-corner overflow-hidden bg-nuit-800 border border-white/10">
                    <img
                      src={s.image}
                      alt={s.title}
                      className="w-full h-[420px] md:h-[560px] object-cover grayscale-[30%] hover:grayscale-0 hover:scale-105 transition-all duration-[1200ms] ease-out"
                    />
                  </div>
                </Reveal>

                <div className={`md:col-span-6 flex flex-col justify-center ${reversed ? "md:order-1 md:pr-8" : "md:pl-8"}`}>
                  <Reveal>
                    <div className="flex items-center gap-3 mb-6">
                      <span className="font-mono text-[10px] tracking-[0.3em] text-emerald-brand">
                        {s.n} /
                      </span>
                      <span className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted2">
                        {s.subtitle}
                      </span>
                    </div>
                    <h2 className="font-serif text-5xl md:text-7xl text-casse leading-[1] mb-8">
                      {s.title}
                    </h2>
                    <p className="text-muted2 text-base md:text-lg leading-relaxed max-w-xl mb-8">
                      {s.lead}
                    </p>
                    <ul className="space-y-3 mb-10">
                      {s.bullets.map((b) => (
                        <li key={b} className="flex items-center gap-4 text-casse">
                          <Check size={16} strokeWidth={2.5} className="text-emerald-brand shrink-0" />
                          <span className="text-sm">{b}</span>
                        </li>
                      ))}
                    </ul>
                    <Link
                      to="/contact"
                      className="group inline-flex items-center gap-3 bg-solar text-nuit font-mono text-[11px] tracking-[0.2em] uppercase px-6 py-4 hover:bg-emerald-brand transition-colors duration-500 self-start"
                      data-testid={`solution-cta-${s.slug}`}
                    >
                      Demander un devis
                      <ArrowUpRight size={14} strokeWidth={2.5} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
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
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,153,0.12),transparent_60%)]" />
        <div className="container-x relative text-center md:text-left">
          <Reveal>
            <h3 className="font-serif text-5xl md:text-7xl text-casse leading-[0.98] max-w-4xl">
              Un projet ? <span className="italic text-emerald-brand">Parlons-en.</span>
            </h3>
            <Link
              to="/contact"
              className="mt-10 inline-flex items-center gap-3 bg-solar text-nuit font-mono text-[11px] tracking-[0.2em] uppercase px-8 py-5 hover:bg-casse transition-colors duration-500"
            >
              Contacter Dobryi Energy <ArrowUpRight size={14} strokeWidth={2.5} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
