import { motion } from "framer-motion";

const reviews = [
  {
    quote:
      "Bought our entire kitchen here — fridge, microwave, and a washing machine. Honest advice, fair price and installation was painless.",
    name: "Anjali R.",
    role: "Homeowner",
  },
  {
    quote:
      "I've been a customer for over 12 years. Three TVs, two ACs, one sofa set later — still my first call for anything for the home.",
    name: "Mahesh K.",
    role: "Regular customer",
  },
  {
    quote:
      "They delivered our refrigerator in three hours and the technician stayed until everything was perfect. That's old-school service.",
    name: "Priya S.",
    role: "First-time buyer",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="max-w-2xl">
          <span className="text-xs uppercase tracking-[0.3em] text-gold">
            — Words from our customers
          </span>
          <h2 className="mt-4 font-display text-4xl leading-[1.05] md:text-5xl">
            Loved by the homes <span className="italic gold-text">we serve.</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {reviews.map((r, i) => (
            <motion.figure
              key={r.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.08 }}
              className="relative flex flex-col justify-between rounded-2xl border border-border bg-card p-7"
            >
              <span className="font-display text-6xl leading-none text-gold/30">
                "
              </span>
              <blockquote className="-mt-6 text-base leading-relaxed text-foreground">
                {r.quote}
              </blockquote>
              <figcaption className="mt-8 flex items-center gap-3 border-t border-border pt-5">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-gold/40 to-gold/10 font-display text-sm">
                  {r.name[0]}
                </div>
                <div>
                  <div className="text-sm font-medium">{r.name}</div>
                  <div className="text-xs text-muted-foreground">{r.role}</div>
                </div>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
