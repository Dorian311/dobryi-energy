import { useEffect, useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, MapPin, Calendar, Zap, Play } from "lucide-react";

// Détecte si une URL est une vidéo selon son extension
const isVideo = (url = "") =>
  /\.(mp4|webm|ogg|mov)(\?.*)?$/i.test(url);

// Miniature : image pour les photos, fond sombre + icône ▶ pour les vidéos
function Thumbnail({ src, active, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`flex-shrink-0 h-14 w-20 rounded-lg overflow-hidden border-2 transition-all duration-200 relative ${
        active ? "border-cyan-brand scale-105" : "border-white/10 opacity-60 hover:opacity-90"
      }`}
    >
      {isVideo(src) ? (
        <>
          <video src={src} className="w-full h-full object-cover" muted preload="metadata" />
          <div className="absolute inset-0 flex items-center justify-center bg-nuit/50">
            <Play size={14} className="text-cyan-brand" fill="currentColor" />
          </div>
        </>
      ) : (
        <img src={src} alt="" className="w-full h-full object-cover" />
      )}
    </button>
  );
}

// Média actif : <video> ou <img> selon le type
function ActiveMedia({ src, title }) {
  const videoRef = useRef(null);

  // Relancer la vidéo à chaque changement de source
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.load();
    }
  }, [src]);

  if (isVideo(src)) {
    return (
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        controls
        autoPlay
        playsInline
        preload="metadata"
      >
        <source src={src} />
        Votre navigateur ne supporte pas la lecture vidéo.
      </video>
    );
  }

  return (
    <motion.img
      key={src}
      src={src}
      alt={title}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.35 }}
      className="w-full h-full object-cover"
    />
  );
}

export default function RealisationModal({ item, onClose }) {
  const [activeIdx, setActiveIdx] = useState(0);
  const media = item?.images?.length ? item.images : [item?.image].filter(Boolean);
  const currentSrc = media[activeIdx];

  // Fermer avec Échap
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [onClose]);

  // Bloquer le scroll du body
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = ""; };
  }, []);

  // Remettre à 0 à chaque réalisation ouverte
  useEffect(() => { setActiveIdx(0); }, [item]);

  const prev = () => setActiveIdx((i) => (i - 1 + media.length) % media.length);
  const next = () => setActiveIdx((i) => (i + 1) % media.length);

  return (
    <AnimatePresence>
      {item && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-[80] bg-nuit/90 backdrop-blur-xl"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.96, y: 20 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-4 md:inset-8 lg:inset-12 z-[90] flex flex-col lg:flex-row rounded-2xl overflow-hidden border border-white/10 bg-nuit-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* ── Galerie gauche ── */}
            <div className="relative w-full lg:w-3/5 flex-shrink-0 bg-nuit min-h-[260px] lg:min-h-0">

              {/* Média actif */}
              <AnimatePresence mode="wait">
                <ActiveMedia key={currentSrc} src={currentSrc} title={item.title} />
              </AnimatePresence>

              {/* Gradient bas (masqué pour les vidéos car elles ont leurs contrôles) */}
              {!isVideo(currentSrc) && (
                <div className="absolute inset-0 bg-gradient-to-t from-nuit/60 to-transparent pointer-events-none" />
              )}

              {/* Flèches navigation */}
              {media.length > 1 && (
                <>
                  <button
                    onClick={prev}
                    className="absolute left-3 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-nuit/70 border border-white/15 text-casse hover:bg-nuit hover:border-cyan-brand hover:text-cyan-brand transition-colors backdrop-blur-sm z-10"
                    aria-label="Précédent"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  <button
                    onClick={next}
                    className="absolute right-3 top-1/2 -translate-y-1/2 h-10 w-10 flex items-center justify-center rounded-full bg-nuit/70 border border-white/15 text-casse hover:bg-nuit hover:border-cyan-brand hover:text-cyan-brand transition-colors backdrop-blur-sm z-10"
                    aria-label="Suivant"
                  >
                    <ChevronRight size={18} />
                  </button>

                  {/* Compteur */}
                  <div className="absolute top-4 left-4 z-10 flex items-center gap-1.5 text-[10px] font-semibold tracking-[0.2em] text-casse/80 bg-nuit/60 backdrop-blur-sm rounded-full px-3 py-1">
                    {isVideo(currentSrc) && <Play size={9} className="text-cyan-brand" fill="currentColor" />}
                    {activeIdx + 1} / {media.length}
                  </div>

                  {/* Dots */}
                  <div className="absolute bottom-[88px] left-1/2 -translate-x-1/2 flex gap-2 z-10">
                    {media.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => setActiveIdx(i)}
                        className={`h-1.5 rounded-full transition-all duration-300 ${
                          i === activeIdx ? "w-6 bg-cyan-brand" : "w-1.5 bg-white/40"
                        }`}
                        aria-label={`Média ${i + 1}`}
                      />
                    ))}
                  </div>
                </>
              )}

              {/* Miniatures */}
              {media.length > 1 && (
                <div className="absolute bottom-0 left-0 right-0 flex gap-2 p-3 pt-10 bg-gradient-to-t from-nuit to-transparent overflow-x-auto z-10">
                  {media.map((src, i) => (
                    <Thumbnail
                      key={i}
                      src={src}
                      active={i === activeIdx}
                      onClick={() => setActiveIdx(i)}
                    />
                  ))}
                </div>
              )}
            </div>

            {/* ── Panneau droit ── */}
            <div className="flex-1 overflow-y-auto p-6 md:p-8 flex flex-col gap-6">
              <div>
                <div className="text-[10px] font-semibold tracking-[0.3em] uppercase text-cyan-brand mb-3">
                  {item.sector}
                </div>
                <h2 className="text-2xl md:text-3xl font-bold tracking-[-0.02em] text-casse leading-[1.1]">
                  {item.title}
                </h2>
              </div>

              <div className="flex flex-wrap gap-4">
                <div className="flex items-center gap-2 text-sm text-muted2">
                  <MapPin size={14} className="text-cyan-brand flex-shrink-0" />
                  {item.location}
                </div>
                <div className="flex items-center gap-2 text-sm text-muted2">
                  <Calendar size={14} className="text-cyan-brand flex-shrink-0" />
                  {item.year}
                </div>
                <div className="flex items-center gap-2 text-sm text-casse font-semibold">
                  <Zap size={14} className="text-cyan-brand flex-shrink-0" />
                  {item.kpi}
                </div>
              </div>

              <div className="h-px bg-white/10" />

              <p className="text-sm md:text-base text-muted2 leading-relaxed">
                {item.description}
              </p>

              <div className="mt-auto pt-4">
                <a
                  href="/contact"
                  onClick={onClose}
                  className="inline-flex items-center gap-2 btn-pill btn-pill-primary text-sm"
                >
                  Demander une étude similaire
                </a>
              </div>
            </div>

            {/* Bouton fermer */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-[100] h-9 w-9 flex items-center justify-center rounded-full bg-nuit/80 border border-white/15 text-casse hover:text-cyan-brand hover:border-cyan-brand transition-colors backdrop-blur-sm"
              aria-label="Fermer"
            >
              <X size={16} />
            </button>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
