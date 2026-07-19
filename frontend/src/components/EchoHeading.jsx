import { motion } from "framer-motion";

/**
 * EchoHeading — headline with a "before" phrase in white and an accent
 * "echo" phrase in gradient. Simplified: single accent line (no repetition)
 * to avoid the visual duplication that reads as a bug.
 */
export default function EchoHeading({
  before = "",
  echo = "",
  className = "",
  delay = 0,
}) {
  return (
    <div className={`text-center ${className}`} style={{ lineHeight: 1.1 }}>
      {before && (
        <div className="block overflow-hidden pb-1">
          <motion.div
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
            className="will-change-transform text-casse"
          >
            {before}
          </motion.div>
        </div>
      )}
      {echo && (
        <div className="block overflow-hidden pb-1">
          <motion.div
            initial={{ y: "110%", opacity: 0 }}
            animate={{ y: "0%", opacity: 1 }}
            transition={{
              duration: 0.9,
              delay: delay + 0.15,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="prism-gradient-text will-change-transform"
          >
            {echo}
          </motion.div>
        </div>
      )}
    </div>
  );
}
