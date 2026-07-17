import { motion } from "framer-motion";

/**
 * Reveal — generic scroll-triggered reveal with masked container.
 */
export default function Reveal({
  children,
  className = "",
  y = 40,
  delay = 0,
  duration = 0.9,
  once = true,
}) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, margin: "-80px" }}
      transition={{ duration, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
}
