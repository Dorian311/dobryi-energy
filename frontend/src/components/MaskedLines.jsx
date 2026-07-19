import { motion } from "framer-motion";

/**
 * MaskedLines — Kinetic masked line-by-line reveal.
 * Each line renders inside overflow-hidden with padding-bottom to prevent
 * descender clipping (ç, é, y letters).
 */
export default function MaskedLines({
  lines = [],
  as: Tag = "h1",
  className = "",
  lineClassName = "",
  delay = 0,
  stagger = 0.09,
  duration = 0.9,
}) {
  return (
    <Tag className={className}>
      {lines.map((line, i) => (
        <span
          key={i}
          className="block overflow-hidden pb-1"
          style={{ lineHeight: 1.1 }}
        >
          <motion.span
            className={`block will-change-transform ${lineClassName}`}
            initial={{ y: "110%" }}
            animate={{ y: "0%" }}
            transition={{
              duration,
              delay: delay + i * stagger,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {line}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
