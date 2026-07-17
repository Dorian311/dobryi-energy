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
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
        className={`fixed top-0 left-0 right-0 z-50 transition-[background-color,backdrop-filter,border-color] duration-500 ${
          scrolled
            ? "bg-nuit/70 backdrop-blur-xl border-b border-white/10"
            : "bg-transparent border-b border-transparent"
        }`}
        data-testid="site-header"
      >
        <div className="container-x flex items-center justify-between h-16 md:h-20">
          <Link
            to="/"
            className="group flex items-center gap-2"
            data-testid="header-logo"
          >
            <span className="inline-flex h-8 w-8 items-center justify-center border border-white/20 rounded-sm">
              <span className="font-mono text-[11px] text-emerald-brand">DE</span>
            </span>
            <span className="hidden sm:block">
              <div className="font-mono text-[10px] tracking-[0.28em] text-muted2 uppercase">Dobryi</div>
              <div className="font-serif text-lg leading-none text-casse -mt-0.5">Energy</div>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-10">
            {NAV.map((n) => (
              <NavLink
                key={n.to}
                to={n.to}
                data-testid={`nav-${n.to.replace("/", "")}`}
                className={({ isActive }) =>
                  `group relative font-mono text-[11px] tracking-[0.2em] uppercase transition-colors ${
                    isActive ? "text-casse" : "text-muted2 hover:text-casse"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span className="text-emerald-brand/70 mr-2">
                      {String(NAV.findIndex((x) => x.to === n.to) + 1).padStart(2, "0")}
                    </span>
                    {n.label}
                    <span
                      className={`absolute left-0 -bottom-1 h-px bg-emerald-brand transition-all duration-500 ${
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
              className="hidden md:inline-flex items-center gap-2 bg-solar text-nuit font-mono text-[11px] tracking-[0.2em] uppercase px-5 py-3 hover:bg-casse transition-colors duration-300"
            >
              Devis gratuit
              <ArrowUpRight size={14} strokeWidth={2.5} />
            </Link>
            <button
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center border border-white/15"
              aria-label="Menu"
              data-testid="header-menu-toggle"
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
                    className="flex items-baseline gap-4"
                  >
                    <span className="font-mono text-xs text-emerald-brand">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-serif text-4xl text-casse">{n.label}</span>
                  </Link>
                </motion.div>
              ))}
              <Link
                to="/contact"
                onClick={() => setOpen(false)}
                className="mt-8 inline-flex items-center justify-center gap-2 bg-solar text-nuit font-mono text-xs tracking-[0.2em] uppercase px-6 py-4"
              >
                Devis gratuit <ArrowUpRight size={14} />
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
