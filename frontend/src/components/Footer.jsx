import { Link } from "react-router-dom";
import { Linkedin } from "lucide-react";

const LINKEDIN_URL = "https://www.linkedin.com/in/shaid-dobryiev-36b63236a/recent-activity/all/";

export default function Footer() {
  return (
    <footer className="relative border-t border-white/[0.05] bg-nuit" data-testid="site-footer">
      <div className="container-x py-14 grid grid-cols-1 md:grid-cols-3 items-center gap-10 md:gap-8">
        <div className="text-center md:text-left">
          <img
            src="/logo/dobryi-energy.png"
            alt="Dobryi Energy"
            className="h-28 md:h-32 w-auto mb-4 mx-auto md:mx-0"
          />
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

        <div className="text-center md:text-right space-y-2">
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
          <div className="flex justify-center md:justify-end pt-1">
            <a
              href={LINKEDIN_URL}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn Dobryi Energy"
              data-testid="footer-linkedin"
              className="inline-flex items-center justify-center h-9 w-9 rounded-full border border-white/15 text-casse hover:text-cyan-brand hover:border-cyan-brand transition-colors"
            >
              <Linkedin size={16} strokeWidth={2} />
            </a>
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
