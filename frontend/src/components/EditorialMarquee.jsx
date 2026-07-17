import Marquee from "react-fast-marquee";

/**
 * EditorialMarquee — a single, slow, big editorial marquee.
 */
export default function EditorialMarquee({ items = [] }) {
  return (
    <section
      className="relative py-16 md:py-24 border-y border-white/10 overflow-hidden"
      data-testid="editorial-marquee"
    >
      <Marquee gradient={false} speed={30} pauseOnHover>
        <div className="flex items-center gap-16 pr-16">
          {items.map((t, i) => (
            <span
              key={i}
              className="text-[64px] md:text-[112px] leading-none text-stroke whitespace-nowrap font-semibold tracking-[-0.03em]"
            >
              {t}
              <span className="mx-10 not-italic text-cyan-brand text-[20px] md:text-[28px] align-middle">
                ◆
              </span>
            </span>
          ))}
        </div>
      </Marquee>
    </section>
  );
}
