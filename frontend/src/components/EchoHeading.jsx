import { motion } from "framer-motion";

/**
 * EchoHeading — signature effect: a headline whose second half echoes
 * 3 times below itself, each iteration in a Prism gradient, fading opacity.
 * Used across the site for the sunshine-power inspired hero moments.
 */
export default function EchoHeading({
  before = "",
  echo = "",
  className = "",
  delay = 0,
}) {
  return (
    <div className={`text-center ${className}`}>
      {before && (
        <div className="block overflow-hidden">
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
      <div className="relative">
        {[0, 1, 2].map((i) => (
          <div key={i} className="block overflow-hidden">
            <motion.div
              initial={{ y: "110%", opacity: 0 }}
              animate={{ y: "0%", opacity: 1 }}
              transition={{
                duration: 0.9,
                delay: delay + 0.15 + i * 0.08,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="prism-gradient-text will-change-transform"
              style={{
                marginTop: i === 0 ? "-0.05em" : "-0.9em",
                opacity: i === 0 ? 1 : i === 1 ? 0.5 : 0.22,
              }}
            >
              {echo}
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
}
