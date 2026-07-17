import { Link } from "react-router-dom";
import { MapPin, Mail, Phone, ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-nuit" data-testid="site-footer">
      <div className="container-x py-20 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-5">
          <div className="font-mono text-[10px] tracking-[0.3em] text-emerald-brand uppercase mb-4">
            /01 · Dobryi Energy
          </div>
          <h3 className="font-serif text-4xl md:text-5xl text-casse leading-[1.05]">
            L’énergie<br />
            <span className="text-stroke">maîtrisée</span><br />
            de A à Z.
          </h3>
          <div className="mt-8 flex flex-wrap gap-3">
            {["QualiPV 500 HTF", "RGE Qualibat", "Garantie 10 ans"].map((c) => (
              <span
                key={c}
                className="font-mono text-[10px] tracking-[0.2em] uppercase px-3 py-1.5 border border-white/15 text-muted2"
              >
                {c}
              </span>
            ))}
          </div>
        </div>

        <div className="md:col-span-3">
          <div className="font-mono text-[10px] tracking-[0.3em] text-muted2 uppercase mb-4">
            /02 · Navigation
          </div>
          <ul className="space-y-3 font-sans text-casse">
            <li><Link to="/solutions" className="hover:text-emerald-brand transition-colors">Solutions</Link></li>
            <li><Link to="/realisations" className="hover:text-emerald-brand transition-colors">Réalisations</Link></li>
            <li><Link to="/a-propos" className="hover:text-emerald-brand transition-colors">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-emerald-brand transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-4">
          <div className="font-mono text-[10px] tracking-[0.3em] text-muted2 uppercase mb-4">
            /03 · Contact
          </div>
          <ul className="space-y-4 text-casse">
            <li className="flex gap-3 items-start">
              <MapPin size={16} className="text-emerald-brand mt-1 shrink-0" />
              <span className="text-sm">8 Rue Roger Carpentier, Logement 13 — 82000 Montauban</span>
            </li>
            <li className="flex gap-3 items-center">
              <Mail size={16} className="text-emerald-brand shrink-0" />
              <a href="mailto:dobryienergy@gmail.com" className="text-sm hover:text-emerald-brand" data-testid="footer-email">
                dobryienergy@gmail.com
              </a>
            </li>
            <li className="flex gap-3 items-center">
              <Phone size={16} className="text-emerald-brand shrink-0" />
              <a href="tel:+33773674257" className="text-sm hover:text-emerald-brand" data-testid="footer-phone">
                07 73 67 42 57
              </a>
            </li>
          </ul>

          <Link
            to="/contact"
            className="mt-8 inline-flex items-center gap-2 border-b border-emerald-brand text-emerald-brand pb-1 font-mono text-[11px] tracking-[0.2em] uppercase hover:gap-4 transition-all duration-300"
          >
            Démarrer un projet
            <ArrowUpRight size={14} />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between gap-4 text-[11px] font-mono uppercase tracking-[0.2em] text-muted2">
          <span>© {new Date().getFullYear()} Dobryi Energy — Tous droits réservés</span>
          <span>Montauban · Occitanie · France</span>
        </div>
      </div>
    </footer>
  );
}
