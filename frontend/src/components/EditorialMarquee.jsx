import Marquee from "react-fast-marquee";

/**
 * EditorialMarquee — a single, slow, big editorial marquee.
 */
export default function EditorialMarquee({ items = [] }) {
  return (
    <section className="relative py-16 md:py-24 border-y border-white/10 overflow-hidden" data-testid="editorial-marquee">
      <Marquee gradient={false} speed={30} pauseOnHover>
        <div className="flex items-center gap-16 pr-16">
          {items.map((t, i) => (
            <span
              key={i}
              className="font-serif italic text-[64px] md:text-[112px] leading-none text-stroke whitespace-nowrap"
            >
              {t}
              <span className="mx-8 not-italic text-emerald-brand text-[24px] md:text-[36px] align-middle">✦</span>
            </span>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
