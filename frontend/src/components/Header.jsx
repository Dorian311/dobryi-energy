import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const NAV = [
  { to: "/solutions", label: "Solutions" },
  { to: "/realisations", label: "Réalisations" },
  { to: "/a-propos", label: "À propos" },
  { to: "/contact", label: "Contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <>
      {/* Floating central Devis pill — always visible */}
      <motion.div
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
        className="fixed top-4 left-1/2 -translate-x-1/2 z-50"
      >
        <Link
          to="/contact"
          data-testid="header-cta-devis"
          className="btn-pill bg-nuit/80 backdrop-blur-xl border border-white/15 text-casse hover:bg-cyan-brand hover:text-nuit hover:border-cyan-brand"
        >
          Obtenir une étude gratuite
        </Link>
      </motion.div>

      {/* Left corner — logo */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="fixed top-4 left-6 z-50"
      >
        <Link to="/" className="flex items-center gap-2" data-testid="header-logo">
          <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 bg-nuit/80 backdrop-blur-xl">
            <span className="text-[10px] font-bold prism-gradient-text">DE</span>
          </span>
          <span className="hidden sm:block text-[10px] font-semibold tracking-[0.28em] text-casse uppercase">
            Dobryi Energy
          </span>
        </Link>
      </motion.div>

      {/* Right corner — hamburger */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 0.3 }}
        className="fixed top-4 right-6 z-50"
      >
        <button
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-nuit/80 backdrop-blur-xl text-casse hover:border-cyan-brand hover:text-cyan-brand transition-colors"
          aria-label="Menu"
          data-testid="header-menu-toggle"
        >
          {open ? <X size={18} /> : <Menu size={18} />}
        </button>
      </motion.div>

      {/* Sticky sentinel — kept for backwards compat only */}
      <header data-testid="site-header" className="sr-only" aria-hidden />

      {/* Full-screen menu overlay */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 bg-nuit/95 backdrop-blur-xl pt-32 px-6"
            data-testid="mobile-menu"
          >
            <nav className="max-w-3xl mx-auto flex flex-col gap-8">
              {NAV.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.15 + i * 0.06, duration: 0.6 }}
                >
                  <NavLink
                    to={n.to}
                    onClick={() => setOpen(false)}
                    data-testid={`nav-${n.to.replace("/", "")}`}
                    className={({ isActive }) =>
                      `group flex items-baseline gap-5 border-b border-white/10 pb-6 ${
                        isActive ? "text-cyan-brand" : "text-casse hover:text-cyan-brand"
                      } transition-colors duration-300`
                    }
                  >
                    <span className="text-[11px] font-semibold text-cyan-brand tracking-[0.3em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-5xl md:text-7xl font-bold tracking-[-0.03em]">
                      {n.label}
                    </span>
                  </NavLink>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                className="mt-8 flex flex-col md:flex-row gap-3 items-start"
              >
                <Link
                  to="/contact"
                  onClick={() => setOpen(false)}
                  className="btn-pill btn-pill-primary"
                >
                  Obtenir une étude gratuite
                </Link>
                <a
                  href="https://wa.me/33773674257"
                  target="_blank"
                  rel="noreferrer"
                  className="btn-pill btn-pill-ghost"
                >
                  WhatsApp
                </a>
              </motion.div>
              <div className="mt-8 text-[11px] font-medium tracking-[0.2em] uppercase text-muted2">
                Montauban · France · 07 73 67 42 57
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
