import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import EchoHeading from "../components/EchoHeading";
import AuroraLines from "../components/AuroraLines";
import Reveal from "../components/Reveal";
import Counter from "../components/Counter";
import { SOLUTIONS, MARKETS } from "../data/content";

/**
 * Home — one-page storytelling in the sunshinepower.fr spirit:
 * full-height centered sections, deep-blue radial hero, prism echo headings.
 */
export default function Home() {
  return (
    <main className="relative bg-nuit">
      {/* ==================== 01 HERO ==================== */}
      <section
        id="hero"
        className="relative min-h-[100svh] flex flex-col items-center justify-center overflow-hidden px-6"
        data-testid="hero"
      >
        <div className="absolute inset-0 deep-blue-radial" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(5,6,11,0)_0%,rgba(5,6,11,0.6)_60%,#05060B_100%)]" />

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative z-10 text-center mb-10"
        >
          <div className="text-[11px] font-semibold tracking-[0.32em] uppercase prism-gradient-text">
            Dobryi Energy
          </div>
        </motion.div>

        <EchoHeading
          before="Photovoltaïque clé en main,"
          echo="votre partenaire de confiance."
          delay={0.35}
          className="relative z-10 text-[42px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1] tracking-[-0.03em] font-bold max-w-6xl"
        />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4, duration: 0.9 }}
          className="relative z-10 mt-10 text-center text-muted2 text-base md:text-lg"
        >
          <div>Votre énergie.</div>
          <div>Maîtrisée.</div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.6, duration: 0.9 }}
          className="relative z-10 mt-10"
        >
          <Link to="/contact" className="btn-pill btn-pill-primary" data-testid="hero-cta-devis">
            Obtenir une étude gratuite
          </Link>
        </motion.div>

        <motion.a
          href="#stats"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, duration: 1 }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-muted2 hover:text-cyan-brand transition-colors"
          data-testid="hero-cta-solutions"
          aria-label="Section suivante"
        >
          <ChevronDown size={28} className="animate-bounce" strokeWidth={1.5} />
        </motion.a>
      </section>

      {/* ==================== 02 STATS ==================== */}
      <section
        id="stats"
        className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-32 border-t border-white/[0.05]"
        data-testid="stats-section"
      >
        <Reveal>
          <EchoHeading
            before="500 installations."
            echo="15 MW en service."
            className="text-[36px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-[-0.03em] font-bold max-w-5xl"
          />
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-10 text-center text-muted2 text-base max-w-xl">
            Certifié. Garanti. Photovoltaïque, IRVE, maintenance et sécurité chantier
            — un seul partenaire.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <Link to="/solutions" className="mt-10 btn-pill btn-pill-primary">
            Découvrir notre expertise
          </Link>
        </Reveal>
        <Reveal delay={0.35}>
          <div className="mt-16 grid grid-cols-3 gap-10 md:gap-20 text-center">
            <div>
              <div className="text-4xl md:text-6xl font-bold tracking-tight prism-gradient-text">
                <Counter value={500} suffix="+" />
              </div>
              <div className="mt-3 text-[10px] font-medium tracking-[0.28em] uppercase text-muted2">
                Installations
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold tracking-tight text-casse">
                <Counter value={15} suffix="MW" />
              </div>
              <div className="mt-3 text-[10px] font-medium tracking-[0.28em] uppercase text-muted2">
                En service
              </div>
            </div>
            <div>
              <div className="text-4xl md:text-6xl font-bold tracking-tight text-casse">
                <Counter value={10} suffix="ans" />
              </div>
              <div className="mt-3 text-[10px] font-medium tracking-[0.28em] uppercase text-muted2">
                Garantie
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      {/* ==================== 03 MANIFESTE — aurora waves ==================== */}
      <section
        id="manifeste"
        className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-32 overflow-hidden"
        data-testid="manifesto"
      >
        <div className="absolute inset-0">
          <AuroraLines />
        </div>
        <Reveal className="relative z-10">
          <EchoHeading
            before="Nous écoutons, vous décidez,"
            echo="nous avançons ensemble."
            className="text-[36px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-[-0.03em] font-bold max-w-5xl"
          />
        </Reveal>
        <Reveal delay={0.15} className="relative z-10">
          <p className="mt-10 text-center text-muted2 text-base max-w-xl leading-relaxed">
            De la première rencontre au dernier kilowatt livré : transparence,
            exécution, et un interlocuteur unique.
          </p>
        </Reveal>
        <Reveal delay={0.25} className="relative z-10">
          <Link to="/a-propos" className="mt-10 btn-pill btn-pill-primary">
            Qui sommes-nous ?
          </Link>
        </Reveal>
      </section>

      {/* ==================== 04 SOLUTIONS ==================== */}
      <section
        id="solutions"
        className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-32 border-t border-white/[0.05]"
        data-testid="solutions-section"
      >
        <Reveal>
          <EchoHeading
            before="Là où vous produisez,"
            echo="nous installons."
            className="text-[36px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-[-0.03em] font-bold max-w-5xl"
          />
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mt-10 text-center text-muted2 text-base max-w-xl">
            Toitures, hangars, ombrières. Autoconsommation ou revente.
          </p>
        </Reveal>
        <Reveal delay={0.25}>
          <Link to="/solutions" className="mt-10 btn-pill btn-pill-primary" data-testid="solutions-view-all">
            Nos solutions
          </Link>
        </Reveal>

        <div className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl w-full">
          {MARKETS.map((m, i) => (
            <Reveal key={m.id} delay={i * 0.1}>
              <Link
                to="/contact"
                className="group relative block rounded-2xl border border-white/10 bg-white/[0.02] backdrop-blur-sm p-8 hover:border-cyan-brand/40 hover:bg-white/[0.04] transition-all duration-500 text-center"
                data-testid={`market-cta-${m.id}`}
              >
                <div className="text-[10px] font-semibold tracking-[0.3em] uppercase prism-gradient-text mb-6">
                  {m.kicker}
                </div>
                <h3 className="text-2xl text-casse font-bold tracking-[-0.02em] mb-3 group-hover:text-cyan-brand transition-colors duration-500">
                  {m.title}
                </h3>
                <p className="text-muted2 text-sm leading-relaxed">{m.lead}</p>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ==================== 05 EXPERTISE (les 5 solutions en pills) ==================== */}
      <section
        id="expertise"
        className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-32 border-t border-white/[0.05]"
        data-testid="expertise-section"
      >
        <Reveal>
          <EchoHeading
            before="Une chaîne complète,"
            echo="du toit à la borne."
            className="text-[36px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-[-0.03em] font-bold max-w-5xl"
          />
        </Reveal>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 max-w-6xl w-full">
          {SOLUTIONS.map((s, i) => (
            <Reveal key={s.id} delay={i * 0.06}>
              <Link
                to={`/solutions#${s.slug}`}
                data-testid={`solution-card-${s.slug}`}
                className="group relative block h-56 rounded-2xl overflow-hidden border border-white/10 bg-nuit-800"
              >
                <img
                  src={s.image}
                  alt={s.title}
                  className="absolute inset-0 w-full h-full object-cover grayscale-[70%] opacity-60 group-hover:opacity-90 group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-[1200ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nuit via-nuit/70 to-transparent" />
                <div className="relative h-full flex flex-col justify-end p-5">
                  <div className="text-[10px] font-semibold tracking-[0.3em] uppercase text-cyan-brand mb-2">
                    {s.n}
                  </div>
                  <div className="text-lg text-casse font-bold tracking-[-0.02em] group-hover:translate-x-1 transition-transform duration-500">
                    {s.title}
                  </div>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>

      {/* ==================== 06 STANDARDS ==================== */}
      <section
        id="standards"
        className="relative min-h-[70vh] flex flex-col items-center justify-center px-6 py-32 border-t border-white/[0.05] overflow-hidden"
        data-testid="trust-bar"
      >
        <div className="absolute inset-0 deep-blue-radial opacity-40" />
        <Reveal className="relative z-10">
          <EchoHeading
            before="Standards maximums."
            echo="Partout."
            className="text-[36px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-[-0.03em] font-bold max-w-5xl"
          />
        </Reveal>
        <Reveal delay={0.2} className="relative z-10">
          <div className="mt-14 flex flex-wrap gap-3 justify-center max-w-3xl">
            {["QualiPV 500 HTF", "RGE Qualibat", "IRVE 1·2·3", "Garantie 10 ans", "SST · AIPR"].map((c) => (
              <span
                key={c}
                className="text-[11px] font-semibold tracking-[0.2em] uppercase px-4 py-2.5 rounded-full border border-white/15 text-casse bg-white/[0.02] backdrop-blur-sm"
              >
                {c}
              </span>
            ))}
          </div>
        </Reveal>
      </section>

      {/* ==================== 07 CONTACT CTA ==================== */}
      <section
        id="contact-cta"
        className="relative min-h-[80vh] flex flex-col items-center justify-center px-6 py-32 border-t border-white/[0.05] overflow-hidden"
        data-testid="final-cta"
      >
        <div className="absolute inset-0 deep-blue-radial" />
        <Reveal className="relative z-10">
          <EchoHeading
            before="Une étude."
            echo="Zéro engagement."
            className="text-[42px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1] tracking-[-0.03em] font-bold max-w-5xl"
          />
        </Reveal>
        <Reveal delay={0.15} className="relative z-10">
          <p className="mt-10 text-center text-muted2 text-base max-w-md">
            Un expert Dobryi Energy vous rappelle pour cadrer votre projet.
          </p>
        </Reveal>
        <Reveal delay={0.25} className="relative z-10">
          <div className="mt-10 flex flex-wrap gap-3 justify-center">
            <Link to="/contact" className="btn-pill btn-pill-primary" data-testid="final-cta-devis">
              Obtenir une étude gratuite
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
        </Reveal>
        <Reveal delay={0.35} className="relative z-10">
          <div className="mt-10 flex flex-col md:flex-row gap-6 text-[11px] font-medium tracking-[0.2em] uppercase text-muted2">
            <span>Montauban · France</span>
            <span className="hidden md:block">·</span>
            <a href="tel:+33773674257" className="hover:text-cyan-brand transition-colors">
              07 73 67 42 57
            </a>
          </div>
        </Reveal>
      </section>
    </main>
  );
}
