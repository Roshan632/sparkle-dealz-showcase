import { motion } from "framer-motion";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import heroImg from "@/assets/hero.jpg";

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      gsap.to(".hero-parallax", {
        yPercent: 18,
        ease: "none",
        scrollTrigger: {
          trigger: ref.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    },
    { scope: ref }
  );

  return (
    <section
      id="top"
      ref={ref}
      className="relative isolate min-h-svh overflow-hidden"
    >
      {/* Background image */}
      <div className="hero-parallax absolute inset-0 -z-10">
        <img
          src={heroImg}
          alt="Premium home appliance showroom"
          className="h-full w-full object-cover"
          width={1600}
          height={1100}
        />
        <div className="absolute inset-0 bg-linear-to-b from-background/85 via-background/60 to-background" />
        <div className="absolute inset-0 bg-linear-to-r from-background via-background/30 to-transparent" />
      </div>
      <div className="grain pointer-events-none absolute inset-0 -z-10 opacity-30 mix-blend-overlay" />

      <div className="relative mx-auto flex min-h-svh max-w-7xl flex-col justify-center px-6 pt-32 pb-20">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="inline-flex w-fit items-center gap-2 rounded-full border border-gold/30 bg-gold/5 px-3.5 py-1.5 text-xs uppercase tracking-[0.25em] text-gold"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-gold animate-pulse" />
          Est. Trusted Home Appliances
        </motion.div>

        <h1 className="mt-7 max-w-4xl font-display text-5xl leading-[0.95] tracking-tight text-balance md:text-7xl lg:text-[6.5rem]">
          <AnimatedWords text="Every appliance" delay={0.2} />
          <span className="block">
            <AnimatedWords text="your home" delay={0.5} />
            <span className="ml-3 italic gold-text">deserves.</span>
          </span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg"
        >
          Refrigerators, televisions, air conditioners, furniture and more —
          handpicked from leading brands, delivered with the warmth only a
          family-run store can offer.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 1.05 }}
          className="mt-9 flex flex-wrap items-center gap-4"
        >
          <a
            href="#collections"
            className="group relative inline-flex items-center gap-2 rounded-full bg-linear-to-r from-gold to-gold-soft px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            Explore Collections
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-background/50 px-6 py-3.5 text-sm font-medium text-foreground backdrop-blur transition-colors hover:bg-secondary"
          >
            Visit Showroom
          </a>
        </motion.div>

        {/* Stats strip */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.3 }}
          className="mt-20 grid max-w-2xl grid-cols-3 gap-8 border-t border-border pt-8"
        >
          {[
            ["10+", "Years of trust"],
            [ " LG-CG Brand partners"],
            ["10k+", "Happy homes"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-3xl md:text-4xl gold-text">{n}</div>
              <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                {l}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.4em] text-muted-foreground"
      >
        <span className="block animate-bounce">scroll</span>
      </motion.div>
    </section>
  );
}

function AnimatedWords({ text, delay = 0 }: { text: string; delay?: number }) {
  return (
    <span className="inline-block overflow-hidden pb-2 align-bottom">
      <motion.span
        className="inline-block"
        initial={{ y: "110%" }}
        animate={{ y: 0 }}
        transition={{ duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] }}
      >
        {text}
      </motion.span>
    </span>
  );
}
