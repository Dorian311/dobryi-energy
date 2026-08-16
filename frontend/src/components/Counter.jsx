import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

/**
 * Counter — animates from 0 to `value` when scrolled into view.
 */
export default function Counter({ value = 0, duration = 1600, suffix = "", className = "" }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const start = performance.now();
    let raf;
    const tick = (now) => {
      const p = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - p, 3);
      setDisplay(Math.round(eased * Number(value)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {display}
      {suffix && (
        <span className="ml-2 text-emerald-brand text-[0.4em] align-super font-bold">
          {suffix}
        </span>
      )}
    </span>
  );
}
