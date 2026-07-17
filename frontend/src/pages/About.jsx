import { useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import MaskedLines from "../components/MaskedLines";
import Reveal from "../components/Reveal";

const VALEURS = [
  { n: "01", title: "Local", text: "Ancrés à Montauban, au plus près du terrain et des acteurs de la région." },
  { n: "02", title: "Rigoureux", text: "Chaque installation étudiée, dimensionnée, contrôlée. Rien laissé au hasard." },
  { n: "03", title: "Engagés", text: "La transition énergétique est notre métier, notre expertise, notre raison d’être." },
];

export default function About() {
  useEffect(() => window.scrollTo(0, 0), []);
  return (
    <main className="bg-nuit pt-32 md:pt-40">
      {/* Hero */}
      <section className="container-x pb-16 md:pb-24" data-testid="about-hero">
        <div className="chapter-label mb-10">À propos</div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-8">
            <MaskedLines
              as="h1"
              lines={[
                <>Votre partenaire</>,
                <>local de la</>,
                <><span className="accent-word">transition énergétique.</span></>,
              ]}
              className="text-casse text-[48px] sm:text-6xl md:text-7xl lg:text-[104px] leading-[0.98] tracking-[-0.035em] font-semibold"
            />
          </div>
          <Reveal delay={0.5} className="md:col-span-4 md:pt-8">
            <p className="text-muted2 text-base md:text-lg leading-relaxed">
              Basée à Montauban, Dobryi Energy réunit des professionnels du solaire,
              de l’électrotechnique et de la sécurité chantier. Une équipe formée,
              certifiée QualiPV et RGE Qualibat.
            </p>
          </Reveal>
        </div>
      </section>

      {/* Editorial image */}
      <section className="container-x pb-24">
        <Reveal>
          <div className="overflow-hidden border border-white/10">
            <img
              src="https://images.pexels.com/photos/34347028/pexels-photo-34347028.jpeg"
              alt="Dobryi Energy Montauban"
              className="w-full h-[420px] md:h-[620px] object-cover img-sepia"
            />
          </div>
        </Reveal>
      </section>

      {/* Valeurs — editorial */}
      <section className="border-t border-white/10 py-24 md:py-32" data-testid="about-valeurs">
        <div className="container-x grid grid-cols-1 md:grid-cols-12 gap-12">
          <div className="md:col-span-4">
            <Reveal>
              <div className="chapter-label mb-8">Nos valeurs</div>
              <h2 className="text-4xl md:text-5xl text-casse font-semibold tracking-[-0.03em] leading-[1.02]">
                Un métier <span className="accent-word">de conviction.</span>
              </h2>
            </Reveal>
          </div>
          <div className="md:col-span-8 md:pl-8">
            <div className="space-y-10">
              {VALEURS.map((v, i) => (
                <Reveal key={v.n} delay={i * 0.08}>
                  <div className="flex gap-8 items-start pb-10 border-b border-white/10 last:border-0">
                    <span className="text-[10px] font-semibold tracking-[0.3em] text-champagne shrink-0 pt-2">
                      {v.n}
                    </span>
                    <div className="flex-1">
                      <h3 className="text-2xl md:text-3xl text-casse font-semibold tracking-tight mb-3">
                        {v.title}
                      </h3>
                      <p className="text-muted2 text-sm md:text-base leading-relaxed max-w-md">
                        {v.text}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-32 border-t border-white/10 relative overflow-hidden">
        <div className="absolute inset-0 champagne-halo" />
        <div className="container-x relative grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <Reveal>
              <h3 className="text-5xl md:text-7xl text-casse leading-[0.98] font-semibold tracking-[-0.035em]">
                Discutons de<br />
                <span className="accent-word">votre projet.</span>
              </h3>
            </Reveal>
          </div>
          <Reveal delay={0.15} className="md:col-span-4">
            <Link to="/contact" className="btn-primary" data-testid="about-cta">
              Prendre contact <ArrowUpRight size={14} strokeWidth={2.5} />
            </Link>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
