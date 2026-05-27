import { motion } from "framer-motion";
import fridge from "@/assets/fridge.jpg";
import tv from "@/assets/tv.jpg";
import ac from "@/assets/ac.jpg";
import furniture from "@/assets/furniture.jpg";
import washer from "@/assets/washer.jpg";

const items = [
  { title: "Refrigerators", tag: "Cool & quiet", img: fridge, span: "md:col-span-2 md:row-span-2" },
  { title: "Televisions", tag: "Cinema at home", img: tv, span: "md:col-span-2" },
  { title: "Air Conditioners", tag: "Calm cool air", img: ac, span: "" },
  { title: "Washing Machines", tag: "Effortless care", img: washer, span: "" },
  { title: "Furniture", tag: "Live beautifully", img: furniture, span: "md:col-span-2" },
];

export function Collections() {
  return (
    <section id="collections" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              — Collections
            </span>
            <h2 className="mt-4 max-w-2xl font-display text-4xl leading-[1.05] tracking-tight md:text-6xl">
              Built for every room, <span className="italic gold-text">curated for taste.</span>
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-muted-foreground">
            From the kitchen to the living room — explore an extensive line-up
            from the brands you already trust.
          </p>
        </div>

        <div className="mt-14 grid auto-rows-[260px] grid-cols-1 gap-4 md:grid-cols-4 md:gap-5">
          {items.map((it, i) => (
            <motion.a
              key={it.title}
              href="#contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card ${it.span}`}
            >
              <img
                src={it.img}
                alt={it.title}
                loading="lazy"
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-[1.4s] ease-out group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/5" />

              <div className="absolute bottom-0 left-0 right-0 flex items-end justify-between p-6">
                <div>
                  <div className="text-[10px] uppercase tracking-[0.3em] text-gold">
                    {it.tag}
                  </div>
                  <h3 className="mt-2 font-display text-2xl md:text-3xl">
                    {it.title}
                  </h3>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-background/40 text-gold backdrop-blur transition-all group-hover:bg-gold group-hover:text-primary-foreground group-hover:rotate-[-45deg]">
                  →
                </div>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
