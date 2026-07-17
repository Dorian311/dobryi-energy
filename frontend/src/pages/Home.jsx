import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown, Sun, Zap, Shield, Wrench, PlugZap } from "lucide-react";
import MaskedLines from "../components/MaskedLines";
import Reveal from "../components/Reveal";
import EditorialMarquee from "../components/EditorialMarquee";
import Counter from "../components/Counter";
import { SOLUTIONS, MARKETS, PROCESS, KPIS } from "../data/content";

const iconMap = {
  photovoltaique: Sun,
  controle: Shield,
  maintenance: Wrench,
  irve: PlugZap,
  securite: Zap,
};

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.05, 1.18]);
  const overlayOpacity = useTransform(scrollYProgress, [0, 1], [0.55, 0.85]);

  return (
    <main className="relative bg-nuit">
      {/* ============ HERO ============ */}
      <section
        ref={heroRef}
        className="relative min-h-[100svh] flex flex-col justify-end overflow-hidden"
        data-testid="hero"
      >
        <motion.div
          style={{ y: imageY, scale: imageScale }}
          className="absolute inset-0 z-0"
        >
          <img
            src="https://images.pexels.com/photos/29407508/pexels-photo-29407508.jpeg"
            alt="Panneaux solaires"
            className="w-full h-full object-cover"
          />
        </motion.div>
        <motion.div
          style={{ opacity: overlayOpacity }}
          className="absolute inset-0 z-10 bg-gradient-to-b from-nuit/70 via-nuit/50 to-nuit"
        />
        <div className="absolute inset-0 z-10 bg-[radial-gradient(circle_at_70%_20%,rgba(0,229,153,0.15),transparent_60%)]" />

        <div className="relative z-20 container-x pb-16 md:pb-24 pt-32">
          <div className="grid grid-cols-12 gap-6">
            <div className="col-span-12 md:col-span-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="flex items-center gap-3 mb-8"
              >
                <span className="h-px w-8 bg-emerald-brand" />
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-emerald-brand">
                  01 / Transition énergétique · Montauban · Occitanie
                </span>
              </motion.div>

              <MaskedLines
                as="h1"
                lines={[
                  <>L’énergie <span className="italic text-emerald-brand">solaire</span>,</>,
                  <>maîtrisée</>,
                  <>de <span className="italic">A à Z.</span></>,
                ]}
                delay={0.35}
                className="font-serif text-casse text-[52px] sm:text-[80px] md:text-[112px] lg:text-[140px] leading-[0.95] tracking-[-0.02em] font-medium"
              />

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="mt-10 md:mt-14 max-w-xl text-muted2 text-base md:text-lg leading-relaxed"
              >
                Installation photovoltaïque, contrôle indépendant, maintenance,
                bornes IRVE et sécurité de chantier — un partenaire unique,
                certifié <span className="text-casse">QualiPV</span> et{" "}
                <span className="text-casse">RGE Qualibat</span>.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.4, duration: 0.8 }}
                className="mt-10 flex flex-wrap items-center gap-4"
              >
                <Link
                  to="/contact"
                  data-testid="hero-cta-devis"
                  className="group inline-flex items-center gap-3 bg-solar text-nuit font-mono text-[11px] tracking-[0.2em] uppercase px-7 py-4 hover:bg-emerald-brand transition-colors duration-500"
                >
                  Obtenir mon devis gratuit
                  <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2.5} />
                </Link>
                <Link
                  to="/solutions"
                  data-testid="hero-cta-solutions"
                  className="group inline-flex items-center gap-3 text-casse font-mono text-[11px] tracking-[0.2em] uppercase px-2 py-4 border-b border-casse hover:border-emerald-brand hover:text-emerald-brand transition-colors duration-500"
                >
                  Découvrir nos solutions
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.6, duration: 0.9 }}
              className="col-span-12 md:col-span-4 md:pl-8 flex md:flex-col justify-between gap-6 md:items-end"
            >
              <div className="text-right hidden md:block">
                <div className="font-mono text-[10px] tracking-[0.3em] text-muted2 uppercase mb-1">Fondée</div>
                <div className="font-serif text-4xl text-casse">2020</div>
              </div>
              <div className="text-right hidden md:block">
                <div className="font-mono text-[10px] tracking-[0.3em] text-muted2 uppercase mb-1">Garantie</div>
                <div className="font-serif text-4xl text-casse">10 <span className="text-emerald-brand text-xl">ans</span></div>
              </div>
              <div className="text-right">
                <div className="font-mono text-[10px] tracking-[0.3em] text-muted2 uppercase mb-1">Basée</div>
                <div className="font-serif text-2xl md:text-4xl text-casse">Montauban</div>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.9, duration: 1 }}
            className="mt-16 flex items-center gap-3 text-muted2"
          >
            <ArrowDown size={14} className="animate-bounce" />
            <span className="font-mono text-[10px] tracking-[0.3em] uppercase">Scroll · manifeste</span>
          </motion.div>
        </div>
      </section>

      {/* ============ MANIFESTO ============ */}
      <section className="relative border-t border-white/10" data-testid="manifesto">
        <div className="container-x py-24 md:py-40">
          <Reveal>
            <div className="flex items-center gap-4 mb-14">
              <span className="h-px w-10 bg-emerald-brand" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-emerald-brand">
                Manifeste · 4 convictions
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-6">
            {[
              { n: "01", title: "Fiabilité", text: "Un seul interlocuteur, des équipes certifiées, une garantie décennale." },
              { n: "02", title: "Rendement", text: "Chaque toiture calibrée au watt près. Le solaire est un investissement." },
              { n: "03", title: "Sécurité", text: "Chantiers sécurisés — filets, habilitations travail en hauteur, AIPR." },
              { n: "04", title: "Indépendance", text: "Produisez votre énergie, décarbonez, reprenez la main sur votre facture." },
            ].map((m, i) => (
              <Reveal key={m.n} delay={i * 0.08} className="md:col-span-3 group">
                <div className="border-t border-white/10 pt-6">
                  <div className="font-mono text-[10px] tracking-[0.3em] text-emerald-brand mb-6">
                    {m.n} /
                  </div>
                  <h3 className="font-serif text-4xl md:text-5xl text-casse mb-6 group-hover:text-emerald-brand transition-colors duration-500">
                    {m.title}
                  </h3>
                  <p className="text-muted2 text-sm leading-relaxed">{m.text}</p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <div className="mt-20 md:mt-32 max-w-3xl">
              <p className="font-serif text-2xl md:text-3xl text-casse leading-[1.35]">
                Basée à Montauban, <span className="text-emerald-brand italic">Dobryi Energy</span>{" "}
                accompagne exploitations agricoles, entreprises et collectivités.
                De l’installation à la maintenance, en passant par le contrôle
                indépendant, l’IRVE et la sécurisation de chantier — nous couvrons
                l’ensemble de la chaîne de valeur.
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ MARQUEE ============ */}
      <EditorialMarquee
        items={["Photovoltaïque", "Contrôle PV", "Maintenance", "IRVE", "Sécurité chantier", "QualiPV", "RGE Qualibat"]}
      />

      {/* ============ SOLUTIONS BENTO ============ */}
      <section className="relative py-24 md:py-32" data-testid="solutions-section">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <span className="h-px w-10 bg-emerald-brand" />
                  <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-emerald-brand">
                    Chapitre 02 · Nos solutions
                  </span>
                </div>
                <h2 className="font-serif text-4xl md:text-6xl text-casse leading-[1.05] max-w-3xl">
                  Une expertise <span className="italic">complète,</span> du toit
                  à la borne.
                </h2>
              </div>
              <Link
                to="/solutions"
                className="inline-flex items-center gap-2 font-mono text-[11px] tracking-[0.2em] uppercase text-casse border-b border-emerald-brand pb-1 hover:text-emerald-brand hover:gap-4 transition-all duration-300"
                data-testid="solutions-view-all"
              >
                Voir toutes les solutions <ArrowUpRight size={14} />
              </Link>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
            {SOLUTIONS.map((s, i) => {
              const Icon = iconMap[s.slug];
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
                    className="group relative block h-[380px] md:h-[440px] overflow-hidden clip-corner bg-nuit-800 border border-white/10"
                    data-testid={`solution-card-${s.slug}`}
                  >
                    <div className="absolute inset-0">
                      <img
                        src={s.image}
                        alt={s.title}
                        className="w-full h-full object-cover grayscale-[70%] group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-[1200ms] ease-out"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-nuit via-nuit/60 to-transparent" />
                    </div>
                    <div className="relative h-full p-6 md:p-8 flex flex-col justify-between">
                      <div className="flex items-start justify-between">
                        <span className="font-mono text-[10px] tracking-[0.3em] text-emerald-brand">
                          {s.n} /
                        </span>
                        {Icon && <Icon size={22} className="text-casse/70 group-hover:text-emerald-brand transition-colors duration-500" strokeWidth={1.5} />}
                      </div>
                      <div>
                        <div className="font-mono text-[10px] tracking-[0.28em] uppercase text-muted2 mb-3">
                          {s.subtitle}
                        </div>
                        <h3 className="font-serif text-3xl md:text-4xl text-casse leading-[1.05] mb-4 group-hover:translate-x-1 transition-transform duration-500">
                          {s.title}
                        </h3>
                        <div className="flex items-center gap-2 text-emerald-brand font-mono text-[10px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          Découvrir <ArrowUpRight size={14} />
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

      {/* ============ MARKETS ============ */}
      <section className="relative py-24 md:py-32 border-t border-white/10" data-testid="markets-section">
        <div className="container-x">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-emerald-brand" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-emerald-brand">
                Chapitre 03 · Nos marchés
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-casse leading-[1.05] max-w-3xl mb-14">
              Des solutions pensées <span className="italic">pour votre secteur.</span>
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/10">
            {MARKETS.map((m, i) => (
              <Reveal key={m.id} delay={i * 0.1}>
                <div className="group relative bg-nuit p-8 md:p-10 min-h-[380px] flex flex-col justify-between overflow-hidden">
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-[900ms]">
                    <img src={m.image} alt={m.title} className="w-full h-full object-cover" />
                  </div>
                  <div className="relative">
                    <div className="font-mono text-[10px] tracking-[0.3em] text-emerald-brand mb-8">
                      {m.kicker}
                    </div>
                    <h3 className="font-serif text-4xl md:text-5xl text-casse leading-[1.05] mb-6 group-hover:translate-x-1 transition-transform duration-500">
                      {m.title}
                    </h3>
                    <p className="text-muted2 text-sm leading-relaxed max-w-xs">{m.lead}</p>
                  </div>
                  <Link
                    to="/contact"
                    className="relative mt-8 inline-flex items-center gap-2 font-mono text-[10px] tracking-[0.2em] uppercase text-casse border-b border-white/20 pb-1 self-start group-hover:border-emerald-brand group-hover:text-emerald-brand group-hover:gap-4 transition-all duration-500"
                    data-testid={`market-cta-${m.id}`}
                  >
                    Parler à un expert <ArrowUpRight size={12} />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ TRUST BAR / COUNTERS ============ */}
      <section className="relative py-24 md:py-32 border-t border-white/10 bg-nuit-800" data-testid="trust-bar">
        <div className="container-x">
          <Reveal>
            <div className="flex items-center gap-3 mb-14">
              <span className="h-px w-10 bg-emerald-brand" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-emerald-brand">
                Chapitre 04 · Certifications
              </span>
            </div>
          </Reveal>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10">
            {KPIS.map((k, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <div className="bg-nuit-800 p-8 md:p-10">
                  <div className="font-serif text-6xl md:text-7xl text-casse leading-none">
                    <Counter value={k.value} suffix={k.suffix} />
                  </div>
                  <div className="mt-6 font-mono text-[10px] tracking-[0.28em] uppercase text-muted2">
                    {k.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.3}>
            <div className="mt-16 flex flex-wrap gap-4">
              {["QualiPV 500 HTF", "RGE Qualibat", "Habilitations IRVE 1·2·3", "SST · AIPR · CACES"].map((c) => (
                <span
                  key={c}
                  className="font-mono text-[11px] tracking-[0.2em] uppercase px-4 py-2.5 border border-white/15 text-casse"
                >
                  {c}
                </span>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ============ PROCESS ============ */}
      <section className="relative py-24 md:py-32 border-t border-white/10" data-testid="process-section">
        <div className="container-x">
          <Reveal>
            <div className="flex items-center gap-3 mb-6">
              <span className="h-px w-10 bg-emerald-brand" />
              <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-emerald-brand">
                Chapitre 05 · Processus
              </span>
            </div>
            <h2 className="font-serif text-4xl md:text-6xl text-casse leading-[1.05] max-w-3xl mb-14">
              Votre projet, en <span className="italic">4 étapes</span> maîtrisées.
            </h2>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {PROCESS.map((p, i) => (
              <Reveal key={p.n} delay={i * 0.08}>
                <div className="border-t border-white/10 pt-6 group">
                  <div className="flex items-center justify-between mb-8">
                    <span className="font-mono text-[10px] tracking-[0.3em] text-emerald-brand">
                      {p.n} /
                    </span>
                    <span className="h-px w-8 bg-white/20 group-hover:w-16 group-hover:bg-emerald-brand transition-all duration-500" />
                  </div>
                  <h3 className="font-serif text-3xl text-casse mb-4">{p.title}</h3>
                  <p className="text-muted2 text-sm leading-relaxed">{p.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============ FINAL CTA ============ */}
      <section className="relative py-32 md:py-48 border-t border-white/10 overflow-hidden" data-testid="final-cta">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,229,153,0.15),transparent_60%)]" />
        <div className="container-x relative">
          <Reveal>
            <div className="max-w-4xl">
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-10 bg-solar" />
                <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-solar">
                  Chapitre 06 · Passons à l’action
                </span>
              </div>
              <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-casse leading-[0.98] mb-10">
                Prêt à passer à <br />
                <span className="italic text-emerald-brand">l’énergie solaire</span> ?
              </h2>
              <p className="text-muted2 text-lg max-w-xl mb-10">
                Un projet, une contrainte, une simple question : nous vous répondons sous 24h ouvrées.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link
                  to="/contact"
                  className="group inline-flex items-center gap-3 bg-solar text-nuit font-mono text-[11px] tracking-[0.2em] uppercase px-8 py-5 hover:bg-emerald-brand transition-colors duration-500"
                  data-testid="final-cta-devis"
                >
                  Demander mon étude gratuite
                  <ArrowUpRight size={16} className="transition-transform duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" strokeWidth={2.5} />
                </Link>
                <a
                  href="https://wa.me/33773674257"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-3 border border-white/20 text-casse font-mono text-[11px] tracking-[0.2em] uppercase px-8 py-5 hover:border-emerald-brand hover:text-emerald-brand transition-colors duration-500"
                  data-testid="final-cta-whatsapp"
                >
                  WhatsApp direct
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
