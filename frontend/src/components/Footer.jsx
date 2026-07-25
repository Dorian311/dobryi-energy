import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] bg-nuit" data-testid="site-footer">
      <div className="container-x py-14 flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
        <div className="text-center md:text-left">
          <div className="text-[10px] font-semibold tracking-[0.32em] uppercase prism-gradient-text mb-3">
            Dobryi Energy
          </div>
          <div className="text-sm text-muted2">
            Photovoltaïque · IRVE · Maintenance · Sécurité chantier
          </div>
        </div>

        <nav className="flex flex-wrap gap-6 justify-center">
          <Link to="/solutions" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-casse hover:text-cyan-brand transition-colors">
            Solutions
          </Link>
          <Link to="/realisations" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-casse hover:text-cyan-brand transition-colors">
            Réalisations
          </Link>
          <Link to="/a-propos" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-casse hover:text-cyan-brand transition-colors">
            À propos
          </Link>
          <Link to="/contact" className="text-[11px] font-semibold tracking-[0.2em] uppercase text-casse hover:text-cyan-brand transition-colors">
            Contact
          </Link>
        </nav>

        <div className="text-center md:text-right space-y-1">
          <a
            href="mailto:dobryienergy@gmail.com"
            className="block text-sm text-casse hover:text-cyan-brand transition-colors"
            data-testid="footer-email"
          >
            dobryienergy@gmail.com
          </a>
          <a
            href="tel:+33773674257"
            className="block text-sm text-casse hover:text-cyan-brand transition-colors"
            data-testid="footer-phone"
          >
            07 73 67 42 57
          </a>
          <div className="text-[11px] font-medium tracking-[0.2em] uppercase text-muted2">
            France entière
          </div>
        </div>
      </div>

      <div className="border-t border-white/[0.05]">
        <div className="container-x py-5 text-[11px] font-medium uppercase tracking-[0.2em] text-muted2 text-center">
          © {new Date().getFullYear()} Dobryi Energy · Tous droits réservés
        </div>
      </div>
    </footer>
  );
}
