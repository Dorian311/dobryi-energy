import { NavLink, Link, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

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
      <motion.header
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? "bg-nuit/80 backdrop-blur-xl border-b border-white/10"
            : "bg-gradient-to-b from-nuit/70 to-transparent border-b border-transparent"
        }`}
        data-testid="site-header"
      >
        <div className="container-x h-16 md:h-20 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" data-testid="header-logo">
            <span className="inline-flex h-8 w-8 items-center justify-center border border-champagne/50 rounded-sm">
              <span className="text-[10px] font-bold text-champagne">DE</span>
            </span>
            <span className="hidden sm:block">
              <div className="text-[9px] font-semibold tracking-[0.3em] text-muted2 uppercase leading-none">
                Dobryi
              </div>
              <div className="text-[15px] font-semibold text-casse tracking-tight mt-0.5 leading-none">
                Energy
              </div>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV.map((n, i) => (
              <NavLink
                key={n.to}
                to={n.to}
                data-testid={`nav-${n.to.replace("/", "")}`}
                className={({ isActive }) =>
                  `group relative text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors ${
                    isActive ? "text-champagne" : "text-casse hover:text-champagne"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="text-champagne/60 mr-2">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    {n.label}
                    <span
                      className={`absolute left-0 -bottom-1 h-px bg-champagne transition-all duration-500 ${
                        isActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    />
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              data-testid="header-cta-devis"
              className="hidden md:inline-flex items-center gap-2 btn-primary py-2.5 px-5 text-[10px]"
            >
              Étude gratuite
              <ArrowUpRight size={12} strokeWidth={2.5} />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              data-testid="header-menu-toggle"
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center border border-white/15 text-casse hover:border-champagne hover:text-champagne transition-colors"
              aria-label="Menu"
            >
              {open ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </motion.header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="fixed inset-0 z-40 lg:hidden bg-nuit/95 backdrop-blur-xl pt-24 px-6"
            data-testid="mobile-menu"
          >
            <div className="flex flex-col gap-8">
              {NAV.map((n, i) => (
                <motion.div
                  key={n.to}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.06, duration: 0.6 }}
                >
                  <Link
                    to={n.to}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 border-b border-white/10 pb-6"
                  >
                    <span className="text-[11px] font-semibold text-champagne tracking-[0.3em]">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-5xl text-casse font-semibold tracking-[-0.03em]">
                      {n.label}
                    </span>
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-8 btn-primary self-start"
              >
                Étude gratuite <ArrowUpRight size={12} strokeWidth={2.5} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
