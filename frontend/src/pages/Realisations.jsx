import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import EchoHeading from "../components/EchoHeading";
import Reveal from "../components/Reveal";
import realisationsData from "../data/realisations.json";

export default function Realisations() {
  const [items, setItems] = useState(realisationsData);
  const [filter, setFilter] = useState("Tous");

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const sectors = ["Tous", ...Array.from(new Set(items.map((i) => i.sector)))];
  const filtered = filter === "Tous" ? items : items.filter((i) => i.sector === filter);

  return (
    <main className="bg-nuit">
      {/* Hero */}
      <section
        className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 pt-32 pb-16 overflow-hidden"
        data-testid="realisations-hero"
      >
        <div className="absolute inset-0 deep-blue-radial" />
        <div className="relative z-10 text-[11px] font-semibold tracking-[0.32em] uppercase prism-gradient-text mb-6">
          Réalisations
        </div>
        <EchoHeading
          before="Ils nous ont"
          echo="fait confiance."
          className="relative z-10 text-[42px] sm:text-6xl md:text-7xl lg:text-[88px] leading-[1] tracking-[-0.03em] font-bold max-w-5xl"
        />
      </section>

      {/* Filters */}
      <section className="container-x">
        <Reveal>
          <div
            className="flex flex-wrap gap-2 justify-center py-8"
            data-testid="realisations-filters"
          >
            {sectors.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                data-testid={`filter-${s}`}
                className={`text-[11px] font-semibold tracking-[0.2em] uppercase px-4 py-2.5 rounded-full border transition-colors duration-300 ${
                  filter === s
                    ? "border-cyan-brand text-cyan-brand bg-cyan-brand/5"
                    : "border-white/15 text-muted2 hover:text-casse hover:border-white/40"
                }`}
              >
                {s}
              </button>
            ))}
          </div>
        </Reveal>
      </section>

      {/* Gallery */}
      <section className="container-x py-8 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filtered.map((it, i) => (
            <Reveal key={it.id} delay={i * 0.05}>
              <motion.div
                whileHover={{ y: -4 }}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="group relative h-[400px] overflow-hidden rounded-2xl border border-white/10"
                data-testid={`realisation-${it.id}`}
              >
                <img
                  src={it.image}
                  alt={it.title}
                  className="w-full h-full object-cover grayscale-[70%] group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-[1400ms] ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nuit via-nuit/40 to-transparent" />
                <div className="absolute top-4 left-4 text-[10px] font-semibold tracking-[0.3em] uppercase px-3 py-1.5 rounded-full border border-cyan-brand/40 text-cyan-brand backdrop-blur-sm">
                  {it.sector}
                </div>
                <div className="absolute top-4 right-4 text-[10px] font-semibold tracking-[0.3em] uppercase text-casse">
                  {it.kpi}
                </div>
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="text-[10px] font-medium tracking-[0.3em] text-muted2 uppercase mb-2">
                    {it.location} · {it.year}
                  </div>
                  <h3 className="text-xl text-casse leading-[1.15] font-bold tracking-[-0.02em] group-hover:translate-x-1 transition-transform duration-500">
                    {it.title}
                  </h3>
                </div>
              </motion.div>
            </Reveal>
          ))}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="relative min-h-[60vh] flex flex-col items-center justify-center px-6 py-32 border-t border-white/[0.05] overflow-hidden">
        <div className="absolute inset-0 deep-blue-radial opacity-60" />
        <Reveal className="relative z-10">
          <EchoHeading
            before="Le prochain projet,"
            echo="c'est le vôtre."
            className="text-[36px] sm:text-5xl md:text-6xl lg:text-7xl leading-[1] tracking-[-0.03em] font-bold"
          />
        </Reveal>
        <Reveal delay={0.2} className="relative z-10">
          <Link to="/contact" className="mt-10 btn-pill btn-pill-primary">
            Démarrer
          </Link>
        </Reveal>
      </section>
    </main>
  );
}
