import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/10 bg-nuit" data-testid="site-footer">
      <div className="container-x py-20 grid grid-cols-1 md:grid-cols-12 gap-10">
        <div className="md:col-span-6">
          <div className="chapter-label mb-8">Dobryi Energy</div>
          <h3 className="text-4xl md:text-6xl text-casse font-semibold tracking-[-0.03em] leading-[1.02]">
            L’énergie <br />
            <span className="accent-word">maîtrisée.</span>
          </h3>
        </div>

        <div className="md:col-span-3">
          <div className="text-[10px] font-semibold tracking-[0.3em] text-muted2 uppercase mb-6">
            — Navigation
          </div>
          <ul className="space-y-3 text-casse">
            <li><Link to="/solutions" className="hover:text-champagne transition-colors">Solutions</Link></li>
            <li><Link to="/realisations" className="hover:text-champagne transition-colors">Réalisations</Link></li>
            <li><Link to="/a-propos" className="hover:text-champagne transition-colors">À propos</Link></li>
            <li><Link to="/contact" className="hover:text-champagne transition-colors">Contact</Link></li>
          </ul>
        </div>

        <div className="md:col-span-3">
          <div className="text-[10px] font-semibold tracking-[0.3em] text-muted2 uppercase mb-6">
            — Contact
          </div>
          <ul className="space-y-3">
            <li>
              <a
                href="mailto:dobryienergy@gmail.com"
                className="text-sm text-casse hover:text-champagne transition-colors"
                data-testid="footer-email"
              >
                dobryienergy@gmail.com
              </a>
            </li>
            <li>
              <a
                href="tel:+33773674257"
                className="text-sm text-casse hover:text-champagne transition-colors"
                data-testid="footer-phone"
              >
                07 73 67 42 57
              </a>
            </li>
            <li className="text-sm text-muted2">Montauban · France</li>
          </ul>
          <Link
            to="/contact"
            className="mt-6 inline-flex items-center gap-2 text-champagne text-[11px] font-semibold tracking-[0.22em] uppercase hover:gap-3 transition-all"
          >
            Démarrer un projet <ArrowUpRight size={12} />
          </Link>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-x py-6 flex flex-col md:flex-row justify-between gap-4 text-[10px] font-semibold uppercase tracking-[0.22em] text-muted2">
          <span>© {new Date().getFullYear()} Dobryi Energy</span>
          <span>Montauban · Occitanie</span>
        </div>
      </div>
    </footer>
  );
}
