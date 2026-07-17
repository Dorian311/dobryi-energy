import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import MaskedLines from "../components/MaskedLines";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import { SOLUTIONS, MARKETS } from "../data/content";

/**
 * Home — editorial magazine-style layout. Asymmetric hero, numbered chapters,
 * mixed alignment across sections. Champagne + indigo palette.
 */
export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.04, 1.14]);

  return (
    <main className="relative bg-nuit">
      {/* ==================== 01 · HERO — asymmetric editorial ==================== */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] overflow-hidden"
        data-testid="hero"
      >
        <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/29407508/pexels-photo-29407508.jpeg"
            alt="Panneaux solaires"
            className="w-full h-full object-cover img-sepia"
          />
        </motion.div>
        <div className="absolute inset-0 z-10 bg-gradient-to-br from-nuit/95 via-nuit/70 to-nuit/40" />
        <div className="absolute inset-0 z-10 champagne-halo opacity-60" />

        <div className="relative z-20 container-x min-h-[100svh] flex flex-col justify-end pb-16 pt-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-9 lg:col-span-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.9, delay: 0.2 }}
                className="chapter-label mb-10"
              >
                Chapitre 01 · Dobryi Energy
              </motion.div>

              <MaskedLines
                as="h1"
                lines={[
                  <>Photovoltaïque</>,
                  <>clé en main,</>,
                  <><span className="accent-word">votre partenaire.</span></>,
                ]}
                delay={0.35}
                stagger={0.11}
                className="text-casse text-[54px] sm:text-7xl md:text-8xl lg:text-[128px] leading-[0.98] tracking-[-0.035em] font-semibold"
              />
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 1.2 }}
              className="col-span-12 md:col-span-3 lg:col-span-4 md:pl-8 flex flex-col justify-end"
            >
              <p className="text-muted2 text-sm md:text-base leading-relaxed max-w-xs">
                Installation, contrôle, maintenance, IRVE et sécurité chantier.
                Un seul partenaire, certifié <span className="text-casse">QualiPV</span> et{" "}
                <span className="text-casse">RGE Qualibat</span>.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.6, duration: 0.8 }}
            className="mt-14 flex flex-wrap items-center gap-6"
          >
            <Link to="/contact" className="btn-primary" data-testid="hero-cta-devis">
              Étude gratuite
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </Link>
            <Link to="/solutions" className="btn-underline" data-testid="hero-cta-solutions">
              Découvrir nos solutions
              <ArrowUpRight size={12} strokeWidth={2.5} />
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2, duration: 1 }}
            className="mt-16 flex items-center gap-3 text-muted2 text-[10px] font-semibold tracking-[0.3em] uppercase"
          >
            <ArrowDown size={12} className="animate-bounce" />
            Descendre
          </motion.div>
        </div>
      </section>

      {/* ==================== 02 · CHIFFRES — asymmetric ==================== */}
      <section className="relative py-24 md:py-32 border-t border-white/10" data-testid="stats-section">
        <div className="container-x grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <div className="chapter-label mb-10">Chapitre 02 · Chiffres</div>
              <h2 className="text-4xl md:text-5xl text-casse font-semibold tracking-[-0.03em] leading-[1.02] max-w-xs">
                Une décennie d’<span className="accent-word">énergie livrée.</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-8 md:pl-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-white/10">
              {[
                { v: 500, s: "+", l: "Installations" },
                { v: 15, s: "MW", l: "En service" },
                { v: 10, s: "ans", l: "Garantie" },
              ].map((k, i) => (
                <Reveal key={i} delay={i * 0.08}>
                  <div className="px-0 sm:px-8 py-8 sm:py-0 first:pl-0 first:pt-0 sm:first:pl-0">
                    <div className="text-6xl md:text-7xl text-casse font-semibold tracking-tight leading-none">
                      <Counter value={k.v} suffix={k.s} />
                    </div>
                    <div className="mt-5 text-[10px] font-semibold tracking-[0.28em] uppercase text-muted2">
                      {k.l}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 03 · MANIFESTE — editorial ==================== */}
      <section
        className="relative py-24 md:py-40 border-t border-white/10"
        data-testid="manifesto"
      >
        <div className="container-x">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12">
            <div className="md:col-span-5">
              <Reveal>
                <div className="chapter-label mb-10">Chapitre 03 · Manifeste</div>
                <h2 className="text-5xl md:text-6xl lg:text-7xl text-casse font-semibold tracking-[-0.03em] leading-[1.02]">
                  Un métier<br />
                  <span className="accent-word">exigeant,</span><br />
                  exécuté avec soin.
                </h2>
              </Reveal>
            </div>
            <div className="md:col-span-7 md:pl-8 flex flex-col justify-center">
              <div className="space-y-10">
                {[
                  { n: "01", title: "Fiabilité", text: "Équipes certifiées QualiPV et RGE Qualibat. Garantie décennale, matériel Tier 1." },
                  { n: "02", title: "Rendement", text: "Chaque toiture calibrée au watt près. Simulation, dimensionnement, monitoring." },
                  { n: "03", title: "Indépendance", text: "Reprenez la main sur votre facture. Autoconsommation, revente, agrivoltaïsme." },
                ].map((m, i) => (
                  <Reveal key={m.n} delay={i * 0.08}>
                    <div className="flex gap-8 items-start pb-10 border-b border-white/10 last:border-0">
                      <span className="text-[10px] font-semibold tracking-[0.3em] text-champagne shrink-0 pt-2">
                        {m.n}
                      </span>
                      <div className="flex-1">
                        <h3 className="text-2xl md:text-3xl text-casse font-semibold tracking-tight mb-3">
                          {m.title}
                        </h3>
                        <p className="text-muted2 text-sm md:text-base leading-relaxed max-w-md">
                          {m.text}
                        </p>
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 04 · SOLUTIONS — full-bleed magazine grid ==================== */}
      <section className="relative py-24 md:py-32 border-t border-white/10" data-testid="solutions-section">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16">
              <div>
                <div className="chapter-label mb-6">Chapitre 04 · Solutions</div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl text-casse font-semibold tracking-[-0.03em] leading-[1.02] max-w-2xl">
                  Cinq expertises,<br />
                  <span className="accent-word">un partenaire.</span>
                </h2>
              </div>
              <Link to="/solutions" className="btn-underline self-start md:self-end" data-testid="solutions-view-all">
                Voir toutes les solutions
                <ArrowUpRight size={12} />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {SOLUTIONS.map((s, i) => {
              const spans = [
                "md:col-span-7",
                "md:col-span-5",
                "md:col-span-4",
                "md:col-span-4",
                "md:col-span-4",
              ];
              return (
                <Reveal key={s.id} delay={i * 0.06} className={spans[i]}>
                  <Link
                    to={`/solutions#${s.slug}`}
                    className="group relative block h-[380px] md:h-[440px] overflow-hidden border border-white/10 bg-nuit-800"
                    data-testid={`solution-card-${s.slug}`}
                  >
                    <div className="absolute inset-0">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover img-sepia grayscale-[35%] group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-[1400ms] ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-nuit via-nuit/60 to-transparent" />
                    </div>
                    <div className="relative h-full p-6 md:p-8 flex flex-col justify-between">
                      <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-champagne">
                        — {s.n}
                      </span>
                      <div>
                        <h3 className="text-3xl md:text-4xl text-casse leading-[1.05] font-semibold tracking-[-0.02em] mb-4 group-hover:translate-x-1 transition-transform duration-500">
                          {s.title}
                        </h3>
                        <div className="flex items-center gap-2 text-champagne text-[10px] font-semibold uppercase tracking-[0.22em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          Découvrir <ArrowUpRight size={12} />
                        </div>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== 05 · MARCHÉS — centered with three columns ==================== */}
      <section className="relative py-24 md:py-32 border-t border-white/10" data-testid="markets-section">
        <div className="container-x">
          <Reveal>
            <div className="mb-16">
              <div className="chapter-label mb-6">Chapitre 05 · Marchés</div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl text-casse font-semibold tracking-[-0.03em] leading-[1.02] max-w-3xl">
                Pensé pour<br />
                <span className="accent-word">votre secteur.</span>
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {MARKETS.map((m, i) => (
              <Reveal key={m.id} delay={i * 0.1}>
                <div className="group relative bg-nuit p-8 md:p-10 min-h-[320px] flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-25 transition-opacity duration-[900ms]">
                    <img src={m.image} alt={m.title} className="w-full h-full object-cover img-sepia" />
                  </div>
                  <div className="relative">
                    <div className="text-[10px] font-semibold tracking-[0.3em] uppercase text-champagne mb-8">
                      — {m.kicker.replace("/", "")}
                    </div>
                    <h3 className="text-3xl md:text-4xl text-casse leading-[1.02] font-semibold tracking-[-0.02em] mb-4 group-hover:translate-x-1 transition-transform duration-500">
                      {m.title}
                    </h3>
                    <p className="text-muted2 text-sm leading-relaxed max-w-xs">{m.lead}</p>
                  </div>
                  <Link
                    to="/contact"
                    className="relative mt-8 btn-underline self-start"
                    data-testid={`market-cta-${m.id}`}
                  >
                    Parler à un expert
                    <ArrowUpRight size={12} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 06 · CERTIFICATIONS ==================== */}
      <section className="relative py-20 md:py-24 border-t border-white/10" data-testid="trust-bar">
        <div className="container-x grid grid-cols-1 md:grid-cols-12 gap-10 items-center">
          <div className="md:col-span-4">
            <div className="chapter-label">Chapitre 06 · Certifications</div>
          </div>
          <div className="md:col-span-8">
            <div className="flex flex-wrap gap-3">
              {["QualiPV 500 HTF", "RGE Qualibat", "IRVE 1·2·3", "Garantie 10 ans", "SST · AIPR"].map((c) => (
                <span
                  key={c}
                  className="text-[11px] font-semibold tracking-[0.22em] uppercase px-4 py-2.5 border border-white/15 text-casse"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ==================== 07 · CONTACT CTA — editorial closer ==================== */}
      <section
        className="relative py-32 md:py-48 border-t border-white/10 overflow-hidden"
        data-testid="final-cta"
      >
        <div className="absolute inset-0 champagne-halo opacity-90" />
        <div className="container-x relative">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
            <div className="md:col-span-8">
              <Reveal>
                <div className="chapter-label mb-10">Chapitre 07 · Contact</div>
                <h2 className="text-5xl md:text-7xl lg:text-8xl text-casse font-semibold tracking-[-0.035em] leading-[0.98]">
                  Une étude.<br />
                  <span className="accent-word">Zéro engagement.</span>
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.15} className="md:col-span-4">
              <p className="text-muted2 text-base leading-relaxed max-w-xs mb-8">
                Un expert Dobryi Energy vous rappelle sous 24h ouvrées pour cadrer votre projet.
              </p>
              <div className="flex flex-wrap gap-3">
                <Link to="/contact" className="btn-primary" data-testid="final-cta-devis">
                  Étude gratuite
                </Link>
                <a
                  href="https://wa.me/33773674257"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-ghost"
                  data-testid="final-cta-whatsapp"
                >
                  WhatsApp
                </a>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
