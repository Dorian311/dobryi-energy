import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import MaskedLines from "../components/MaskedLines";
import Reveal from "../components/Reveal";

const API = `${process.env.REACT_APP_BACKEND_URL}/api`;

export default function Realisations() {
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState("Tous");

  useEffect(() => {
    window.scrollTo(0, 0);
    let mounted = true;
    axios
      .get(`${API}/realisations`)
      .then((r) => mounted && setItems(r.data.items || []))
      .catch(() => {});
    return () => {
      mounted = false;
    };
  }, []);

  const sectors = ["Tous", ...Array.from(new Set(items.map((i) => i.sector)))];
  const filtered = filter === "Tous" ? items : items.filter((i) => i.sector === filter);

  return (
    <main className="bg-nuit pt-32 md:pt-40">
      <section className="container-x pb-16 md:pb-24" data-testid="realisations-hero">
        <div className="chapter-label mb-10">Réalisations</div>
        <MaskedLines
          as="h1"
          lines={[
            <>Ils nous ont</>,
            <>fait <span className="accent-word">confiance.</span></>,
          ]}
          className="text-casse text-[54px] sm:text-7xl md:text-8xl lg:text-[120px] leading-[0.98] tracking-[-0.035em] font-semibold"
        />
      </section>

      {/* Filters */}
      <section className="container-x">
        <Reveal>
          <div
            className="flex flex-wrap gap-2 border-y border-white/10 py-6"
            data-testid="realisations-filters"
          >
            {sectors.map((s) => (
              <button
                key={s}
                onClick={() => setFilter(s)}
                data-testid={`filter-${s}`}
                className={`text-[11px] font-semibold tracking-[0.22em] uppercase px-4 py-2.5 border transition-colors duration-300 ${
                  filter === s
                    ? "border-champagne text-champagne bg-champagne/5"
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
      <section className="container-x py-16 md:py-24">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-6">
          {filtered.map((it, i) => {
            const layouts = [
              "md:col-span-8",
              "md:col-span-4",
              "md:col-span-4",
              "md:col-span-8",
              "md:col-span-6",
              "md:col-span-6",
            ];
            const cls = layouts[i % layouts.length];
            return (
              <Reveal key={it.id} delay={i * 0.05} className={cls}>
                <motion.div
                  whileHover={{ y: -4 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative h-[420px] md:h-[520px] overflow-hidden bg-nuit-800 border border-white/10"
                  data-testid={`realisation-${it.id}`}
                >
                  <img
                    src={it.image}
                    alt={it.title}
                    className="w-full h-full object-cover img-sepia grayscale-[70%] group-hover:grayscale-0 scale-105 group-hover:scale-110 transition-all duration-[1400ms] ease-out"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-nuit via-nuit/50 to-transparent" />
                  <div className="absolute top-6 left-6 text-[10px] font-semibold tracking-[0.3em] uppercase text-champagne px-3 py-1.5 border border-champagne/50 backdrop-blur-sm">
                    {it.sector}
                  </div>
                  <div className="absolute top-6 right-6 text-[10px] font-semibold tracking-[0.3em] uppercase text-casse">
                    {it.kpi}
                  </div>
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="text-[10px] font-semibold tracking-[0.3em] text-muted2 uppercase mb-2">
                      {it.location} · {it.year}
                    </div>
                    <h3 className="text-3xl md:text-4xl text-casse leading-[1.05] font-semibold tracking-[-0.02em] group-hover:translate-x-1 transition-transform duration-500">
                      {it.title}
                    </h3>
                  </div>
                </motion.div>
              </Reveal>
            );
          })}
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-24 border-t border-white/10">
        <div className="container-x">
          <Reveal>
            <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
              <h3 className="text-4xl md:text-6xl text-casse leading-[0.98] font-semibold tracking-[-0.035em] max-w-2xl">
                Le prochain projet,<br />
                <span className="accent-word">c'est le vôtre.</span>
              </h3>
              <Link to="/contact" className="btn-primary self-start">
                Démarrer <ArrowUpRight size={14} strokeWidth={2.5} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
