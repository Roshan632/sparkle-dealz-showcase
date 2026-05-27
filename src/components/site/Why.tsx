import { motion } from "framer-motion";
import { Truck, ShieldCheck, Sparkles, Wrench } from "lucide-react";

const features = [
  {
    icon: ShieldCheck,
    title: "Authentic brands",
    body: "Only genuine products with full manufacturer warranty. No grey market, ever.",
  },
  {
    icon: Truck,
    title: "Doorstep delivery",
    body: "Swift, careful delivery across the city. Installation handled by certified pros.",
  },
  {
    icon: Wrench,
    title: "After-sales care",
    body: "We stand behind every sale with quick service, support and honest advice.",
  },
  {
    icon: Sparkles,
    title: "Best-in-town pricing",
    body: "Loyal customer pricing, festive bundles and flexible EMI plans on request.",
  },
];

export function Why() {
  return (
    <section id="why" className="relative py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-16 md:grid-cols-12">
          <div className="md:col-span-5">
            <span className="text-xs uppercase tracking-[0.3em] text-gold">
              — Why New Janaki
            </span>
            <h2 className="mt-4 font-display text-4xl leading-[1.05] tracking-tight md:text-5xl">
              A family name <br />
              <span className="italic gold-text">homes have trusted</span> <br />
              for two decades.
            </h2>
            <p className="mt-6 max-w-md text-sm leading-relaxed text-muted-foreground">
              We're not a faceless marketplace. We're your neighbourhood store
              — the one that remembers your name, your last purchase, and your
              fridge's exact size.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2 md:col-span-7">
            {features.map((f, i) => (
              <motion.div
                key={f.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="group relative bg-card p-8 transition-colors hover:bg-secondary"
              >
                <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/10 text-gold transition-all group-hover:bg-gold group-hover:text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="mt-5 font-display text-xl">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {f.body}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
