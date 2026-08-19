import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown, ArrowUpRight, Sun, Shield, Wrench, PlugZap, HardHat } from "lucide-react";
import EchoHeading from "../components/EchoHeading";
import AuroraLines from "../components/AuroraLines";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import { SOLUTIONS, MARKETS } from "../data/content";

const iconMap = {
  photovoltaique: Sun,
  controle: Shield,
  maintenance: Wrench,
  irve: PlugZap,
  securite: HardHat,
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imgScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.16]);

  return (
    <main className="relative bg-nuit">
      {/* ==================== 01 · HERO — photo background ==================== */}
      <section
        ref={heroRef}
        id="hero"
        className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-6"
        data-testid="hero"
      >
        <motion.div style={{ y: imgY, scale: imgScale }} className="absolute inset-0 z-0">
          <img
            src="https://plus.unsplash.com/premium_photo-1682148014710-095131cd99a8?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Panneaux solaires"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <div className="absolute inset-0 z-10 bg-gradient-to-b from-nuit/80 via-nuit/60 to-nuit" />
        <div className="absolute inset-0 z-10 deep-blue-radial" />

        <EchoHeading
          before="Photovoltaïque clé en main,"
          echo="votre partenaire de confiance."
          delay={0.35}
          className="relative z-20 text-[35px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1] tracking-[-0.03em] font-bold max-w-6xl"
        />

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.9 }}
          className="relative z-20 mt-10 text-center text-muted2 text-base md:text-lg max-w-xl"
        >
          Installation, contrôle, maintenance, IRVE et sécurité chantier.
          Un partenaire certifié QualiPV et RGE Qualibat.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 1.5 }}
          className="relative z-20 text-center mt-6"
        >
          <div className="text-[11px] font-semibold tracking-[0.32em] uppercase prism-gradient-text">
            Dobryi Energy · Interventions partout en France
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.9 }}
          className="relative z-20 mt-10 flex flex-wrap gap-3 justify-center"
        >
          <Link to="/contact" className="btn-pill btn-pill-primary" data-testid="hero-cta-devis">
            Obtenir une étude gratuite
          </Link>
          <Link to="/solutions" className="btn-pill btn-pill-ghost">
            Nos solutions
          </Link>
        </motion.div>

        <motion.a
          href="#stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 text-muted2 hover:text-cyan-brand transition-colors"
          data-testid="hero-cta-solutions"
          aria-label="Section suivante"
        >
          <ChevronDown size={28} className="animate-bounce" strokeWidth={1.5} />
        </motion.a>
      </section>

      {/* ==================== 02 · CHIFFRES — big & airy ==================== */}
      <section
        id="stats"
        className="relative py-32 md:py-40 border-t border-white/[0.05]"
        data-testid="stats-section"
      >
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-20">
              <div className="text-[11px] font-semibold tracking-[0.32em] uppercase prism-gradient-text mb-6">
                — 01 · Chiffres —
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl text-casse font-bold tracking-[-0.03em] leading-[1.02] max-w-4xl mx-auto">
                Deux décennies d'énergie livrée.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10 max-w-5xl mx-auto">
            {[
              { v: 500, s: "+", l: "Installations réalisées" },
              { v: 45, s: "MWc", l: "Puissance en service" },
              { v: 10, s: "ans", l: "Garantie décennale" },
            ].map((k, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-nuit p-10 md:p-14 text-center">
                  <div className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight prism-gradient-text leading-none">
                    <Counter value={k.v} suffix={k.s} />
                  </div>
                  <div className="mt-6 text-[10px] font-semibold tracking-[0.3em] uppercase text-muted2">
                    {k.l}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 03 · PRÉSENTATION — image split editorial ==================== */}
      <section className="relative py-32 md:py-40 border-t border-white/[0.05]">
        <div className="container-x grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center">
          <Reveal className="lg:col-span-6">
            <div className="relative overflow-hidden rounded-2xl border border-white/10">
              <img
                src="https://images.unsplash.com/photo-1648135327756-b606e2eb8caa?q=80&w=2342&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Équipe Dobryi Energy"
                className="w-full h-[500px] md:h-[620px] object-cover grayscale-[15%] hover:grayscale-0 hover:scale-105 transition-all duration-[1200ms]"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-nuit/40 to-transparent pointer-events-none" />
            </div>
          </Reveal>

          <div className="lg:col-span-6">
            <Reveal>
              <div className="text-[11px] font-semibold tracking-[0.32em] uppercase prism-gradient-text mb-6">
                — 02 · Qui sommes-nous —
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-6xl text-casse font-bold tracking-[-0.03em] leading-[1.05] mb-8">
                Un métier exigeant,<br />
                exécuté avec soin.
              </h2>
              <p className="text-muted2 text-base md:text-lg leading-relaxed mb-6 max-w-lg">
                Dobryi Energy accompagne agriculteurs, entreprises
                et collectivités <span className="text-casse">partout en France</span> dans leur transition énergétique.
              </p>
              <p className="text-muted2 text-base md:text-lg leading-relaxed mb-10 max-w-lg">
                De l'étude à la maintenance, en passant par le contrôle indépendant
                et la sécurisation des chantiers — un seul interlocuteur, cinq expertises.
              </p>
              <Link to="/a-propos" className="btn-pill btn-pill-primary">
                En savoir plus
                <ArrowUpRight size={14} strokeWidth={2.5} />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ==================== 04 · MARCHÉS — 3 photo cards ==================== */}
      <section
        id="markets"
        className="relative py-32 md:py-40 border-t border-white/[0.05]"
        data-testid="markets-section"
      >
        <div className="container-x">
          <Reveal>
            <div className="text-center mb-20">
              <div className="text-[11px] font-semibold tracking-[0.32em] uppercase prism-gradient-text mb-6">
                — 03 · Nos marchés —
              </div>
              <h2 className="text-4xl md:text-6xl lg:text-7xl text-casse font-bold tracking-[-0.03em] leading-[1.02] max-w-3xl mx-auto">
                Pensé pour votre secteur.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {MARKETS.map((m, i) => (
              <Reveal key={m.id} delay={i * 0.1}>
                <Link
                  to="/contact"
                  className="group relative block h-[420px] rounded-2xl overflow-hidden border border-white/10"
                  data-testid={`market-cta-${m.id}`}
                >
                  <img
                    src={m.image}
                    alt={m.title}
                    className="absolute inset-0 w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-[1400ms]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nuit via-nuit/50 to-nuit/10" />
                  <div className="relative h-full flex flex-col justify-between p-8">
                    <div className="text-[10px] font-semibold tracking-[0.32em] uppercase prism-gradient-text">
                      {m.kicker}
                    </div>
                    <div>
                      <h3 className="text-3xl md:text-4xl text-casse font-bold tracking-[-0.02em] mb-3 group-hover:translate-x-1 transition-transform duration-500">
                        {m.title}
                      </h3>
                      <p className="text-muted2 text-sm leading-relaxed mb-6 max-w-xs">
                        {m.lead}
                      </p>
                      <span className="inline-flex items-center gap-2 text-cyan-brand text-[10px] font-semibold tracking-[0.22em] uppercase group-hover:gap-3 transition-all">
                        Parler à un expert <ArrowUpRight size={12} />
                      </span>
                    </div>
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ==================== 05 · MANIFESTE — aurora lines ==================== */}
      <section
        className="relative py-40 md:py-56 border-t border-white/[0.05] overflow-hidden"
        data-testid="manifesto"
      >
        <div className="absolute inset-0">
          <AuroraLines />
        </div>
        <div className="container-x relative z-10">
          <Reveal>
            <div className="text-center max-w-4xl mx-auto">
              <div className="text-[11px] font-semibold tracking-[0.32em] uppercase prism-gradient-text mb-8">
                — 04 · Manifeste —
              </div>
              <EchoHeading
                before="Nous écoutons, vous décidez,"
                echo="nous avançons ensemble."
                className="text-[36px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-[-0.03em] font-bold"
              />
              <p className="mt-12 text-muted2 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
                De la première rencontre au dernier kilowatt livré : transparence,
                exécution, et un interlocuteur unique.
              </p>
              <Link to="/a-propos" className="mt-12 btn-pill btn-pill-primary">
                Notre approche
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ==================== 06 · EXPERTISES — 5 cards with photos ==================== */}
      <section
        className="relative py-32 md:py-40 border-t border-white/[0.05]"
        data-testid="expertise-section"
      >
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-20">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.32em] uppercase prism-gradient-text mb-6">
                  — 05 · Expertises —
                </div>
                <h2 className="text-4xl md:text-6xl lg:text-7xl text-casse font-bold tracking-[-0.03em] leading-[1.02] max-w-2xl">
                  Une chaîne complète, du toit à la borne.
                </h2>
              </div>
              <Link to="/solutions" className="btn-pill btn-pill-ghost self-start md:self-end" data-testid="solutions-view-all">
                Voir toutes les solutions
                <ArrowUpRight size={12} />
              </Link>
            </div>
          </Reveal>

          <div id="solutions" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" data-testid="solutions-section">
            {SOLUTIONS.map((s, i) => {
              const Icon = iconMap[s.slug];
              return (
                <Reveal key={s.id} delay={i * 0.06}>
                  <Link
                    to={`/solutions#${s.slug}`}
                    data-testid={`solution-card-${s.slug}`}
                    className="group relative block h-[400px] rounded-2xl overflow-hidden border border-white/10 bg-nuit-800"
                  >
                    <img
                      src={s.image}
                      alt={s.title}
                      className="absolute inset-0 w-full h-full object-cover grayscale-[55%] opacity-80 group-hover:opacity-100 group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-[1200ms]"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-nuit via-nuit/50 to-transparent" />
                    <div className="relative h-full flex flex-col justify-between p-6 md:p-7">
                      <div className="flex items-start justify-between">
                        <span className="text-[10px] font-semibold tracking-[0.3em] uppercase text-cyan-brand">
                          {s.n} /
                        </span>
                        {Icon && (
                          <Icon
                            size={22}
                            className="text-casse/70 group-hover:text-cyan-brand transition-colors duration-500"
                            strokeWidth={1.5}
                          />
                        )}
                      </div>
                      <div>
                        <h3 className="text-2xl md:text-3xl text-casse font-bold tracking-[-0.02em] mb-3 group-hover:translate-x-1 transition-transform duration-500">
                          {s.title}
                        </h3>
                        <p className="text-muted2 text-sm leading-relaxed mb-4 max-w-xs">
                          {s.lead.split(".")[0]}.
                        </p>
                        <span className="inline-flex items-center gap-2 text-cyan-brand text-[10px] font-semibold tracking-[0.22em] uppercase opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          Découvrir <ArrowUpRight size={12} />
                        </span>
                      </div>
                    </div>
                  </Link>
                </Reveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* ==================== 07 · CERTIFICATIONS ==================== */}
      <section
        className="relative py-24 md:py-28 border-t border-white/[0.05]"
        data-testid="trust-bar"
      >
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
              <div>
                <div className="text-[11px] font-semibold tracking-[0.32em] uppercase prism-gradient-text mb-3">
                  — 06 · Certifications —
                </div>
                <div className="text-2xl md:text-3xl text-casse font-bold tracking-[-0.02em]">
                  Standards maximums. Partout.
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

      {/* ==================== 08 · CTA FINAL — photo background ==================== */}
      <section
        className="relative min-h-[80vh] flex items-center overflow-hidden border-t border-white/[0.05]"
        data-testid="final-cta"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.pexels.com/photos/15751136/pexels-photo-15751136.jpeg?_gl=1*1v6unpx*_ga*MzI0MDc1ODEyLjE3ODY4ODM2ODY.*_ga_8JE65Q40S6*czE3ODY4OTg3MjQkbzIkZzEkdDE3ODY4OTkyMDIkajIyJGwwJGgw"
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
        <div className="absolute inset-0 z-10 bg-gradient-to-r from-nuit via-nuit/85 to-nuit/50" />
        <div className="absolute inset-0 z-10 deep-blue-radial" />

        <div className="container-x relative z-20 py-32">
          <Reveal>
            <div className="max-w-3xl">
              <div className="text-[11px] font-semibold tracking-[0.32em] uppercase prism-gradient-text mb-6">
                — 07 · Contact —
              </div>
              <EchoHeading
                before="Une étude."
                echo="Zéro engagement."
                className="!text-left text-[42px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1] tracking-[-0.03em] font-bold"
              />
              <p className="mt-10 text-muted2 text-lg max-w-md">
                Un expert Dobryi Energy vous rappelle sous 24h ouvrées pour cadrer votre projet.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link to="/contact" className="btn-pill btn-pill-primary" data-testid="final-cta-devis">
                  Étude gratuite
                </Link>
                <a
                  href="https://wa.me/33773674257"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pill btn-pill-ghost"
                  data-testid="final-cta-whatsapp"
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
