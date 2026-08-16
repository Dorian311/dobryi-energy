import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const NAV = [
  { to: "/", label: "Accueil" },
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
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => setOpen(false), [loc.pathname]);

  return (
    <>
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-nuit/85 backdrop-blur-xl border-b border-white/10"
            : "bg-gradient-to-b from-nuit/80 to-transparent border-b border-transparent"
        }`}
        data-testid="site-header"
      >
        <div className="container-x h-20 md:h-24 flex items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5 shrink-0" data-testid="header-logo">
            <img
              src="/logo/dobryi-energy.png"
              alt="Dobryi Energy"
              className="h-16 md:h-20 w-auto"
            />
          </Link>

          {/* Desktop nav */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                end={n.to === "/"}
                data-testid={`nav-${n.to === "/" ? "accueil" : n.to.replace("/", "")}`}
                className={({ isActive }) =>
                  `group relative text-[11px] font-semibold tracking-[0.2em] uppercase transition-colors ${
                    isActive ? "text-cyan-brand" : "text-casse hover:text-cyan-brand"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {n.label}
                    <span
                      className={`absolute left-0 -bottom-1.5 h-px bg-cyan-brand transition-all duration-500 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* CTA + mobile toggle */}
          <div className="flex items-center gap-2 shrink-0">
            <Link
              to="/contact"
              data-testid="header-cta-devis"
              className="hidden sm:inline-flex btn-pill btn-pill-primary text-[11px] py-2.5 px-4"
            >
              Étude gratuite
              <ArrowUpRight size={12} strokeWidth={2.5} />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              data-testid="header-menu-toggle"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-casse"
              aria-label="Menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 md:hidden bg-nuit/95 backdrop-blur-xl pt-24 px-6"
            data-testid="mobile-menu"
          >
            <nav className="flex flex-col gap-6">
              {NAV.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.6 }}
                >
                  <NavLink
                    to={n.to}
                    end={n.to === "/"}
                    onClick={() => setOpen(false)}
                    data-testid={`nav-mobile-${n.to === "/" ? "accueil" : n.to.replace("/", "")}`}
                    className={({ isActive }) =>
                      `flex items-baseline gap-4 border-b border-white/10 pb-5 ${
                        isActive ? "text-cyan-brand" : "text-casse"
                      }`
                    }
                  >
                    <span className="text-[11px] font-semibold text-cyan-brand tracking-[0.3em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-4xl font-bold tracking-[-0.03em]">{n.label}</span>
                  </NavLink>
                </motion.div>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-6 btn-pill btn-pill-primary self-start"
              >
                Étude gratuite <ArrowUpRight size={12} />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
