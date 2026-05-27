import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";
import fridge from "@/assets/fridge.jpg";
import tv from "@/assets/tv.jpg";
import furniture from "@/assets/furniture.jpg";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    img: fridge,
    kicker: "Cool tech",
    title: "Side-by-side refrigerators with inverter precision",
    body: "Stay-fresh humidity control, whisper-quiet compressors and 10-year warranties on top brands.",
  },
  {
    img: tv,
    kicker: "Picture perfect",
    title: "QLED & OLED televisions tuned for every room",
    body: "From cozy 32-inch bedrooms to 75-inch cinematic living spaces, all wall-mounted for free.",
  },
  {
    img: furniture,
    kicker: "Live in",
    title: "Furniture that finishes the story your home tells",
    body: "Hand-finished sofas, dining sets and beds — designed for Indian homes and Indian weather.",
  },
];

export function Showcase() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const panels = gsap.utils.toArray<HTMLElement>(".showcase-panel");
      panels.forEach((panel, i) => {
        if (i === 0) return;
        gsap.fromTo(
          panel,
          { clipPath: "inset(100% 0 0 0)" },
          {
            clipPath: "inset(0% 0 0 0)",
            ease: "none",
            scrollTrigger: {
              trigger: ref.current,
              start: () => `top+=${(i - 1) * window.innerHeight} top`,
              end: () => `+=${window.innerHeight}`,
              scrub: true,
            },
          }
        );
      });
    },
    { scope: ref }
  );

  return (
    <section
      id="showcase"
      ref={ref}
      className="relative"
      style={{ height: `${slides.length * 100}svh` }}
    >
      <div className="sticky top-0 h-svh overflow-hidden">
        {slides.map((s, i) => (
          <div
            key={i}
            className="showcase-panel absolute inset-0 grid grid-cols-1 md:grid-cols-2"
            style={{ zIndex: i + 1 }}
          >
            <div className="relative order-2 flex flex-col justify-center bg-background px-6 py-16 md:order-1 md:px-16 lg:px-24">
              <span className="text-xs uppercase tracking-[0.3em] text-gold">
                — {s.kicker}
              </span>
              <h3 className="mt-5 max-w-lg font-display text-3xl leading-[1.1] md:text-5xl">
                {s.title}
              </h3>
              <p className="mt-5 max-w-md text-sm leading-relaxed text-muted-foreground md:text-base">
                {s.body}
              </p>
              <div className="mt-8 inline-flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-muted-foreground">
                <span className="text-gold">{String(i + 1).padStart(2, "0")}</span>
                <span className="h-px w-12 bg-border" />
                <span>{String(slides.length).padStart(2, "0")}</span>
              </div>
            </div>
            <div className="relative order-1 h-[40svh] md:order-2 md:h-svh">
              <img
                src={s.img}
                alt={s.title}
                loading="lazy"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-background/40 via-transparent to-transparent md:from-background/60" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
