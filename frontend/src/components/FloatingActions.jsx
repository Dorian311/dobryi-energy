import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { Phone, MessageCircle, X } from "lucide-react";

const WHATSAPP =
  "https://wa.me/33773674257?text=Bonjour%20Dobryi%20Energy%2C%20je%20souhaite%20un%20devis.";
const PHONE = "tel:+33773674257";

export default function FloatingActions() {
  const [open, setOpen] = useState(false);
  return (
    <div className="fixed bottom-6 right-6 z-50" data-testid="floating-actions">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: 16, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="mb-3 flex flex-col gap-2 items-end"
          >
            <a
              href={WHATSAPP}
              target="_blank"
              rel="noreferrer"
              data-testid="floating-whatsapp"
              className="inline-flex items-center gap-3 pl-4 pr-5 py-3 bg-nuit-800/95 backdrop-blur-xl border border-white/15 text-casse text-[10px] font-semibold uppercase tracking-[0.22em] hover:border-champagne hover:text-champagne transition-colors"
            >
              <MessageCircle size={14} strokeWidth={2.5} />
              WhatsApp
            </a>
            <a
              href={PHONE}
              data-testid="floating-phone"
              className="inline-flex items-center gap-3 pl-4 pr-5 py-3 bg-nuit-800/95 backdrop-blur-xl border border-white/15 text-casse text-[10px] font-semibold uppercase tracking-[0.22em] hover:border-champagne hover:text-champagne transition-colors"
            >
              <Phone size={14} strokeWidth={2.5} />
              07 73 67 42 57
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.button
        onClick={() => setOpen((v) => !v)}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.94 }}
        className="relative h-14 w-14 rounded-full bg-champagne text-nuit shadow-[0_12px_36px_-8px_rgba(20,119,107,0.6)] flex items-center justify-center border border-white/10"
        aria-label="Contact rapide"
        data-testid="floating-toggle"
      >
        <span className="absolute inset-0 rounded-full animate-ping bg-champagne/20" />
        {open ? <X size={20} strokeWidth={2.5} /> : <MessageCircle size={20} strokeWidth={2.5} />}
      </motion.button>
    </div>
  );
}
