import { motion } from "framer-motion";
import { MapPin, Phone, Clock } from "lucide-react";
import { WhatsAppIcon } from "./Navbar";

export function Contact() {
  return (
    <section id="contact" className="relative overflow-hidden py-24 md:py-32">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-secondary/30 to-background" />
      <div
        className="absolute left-1/2 top-0 -z-10 h-[600px] w-[800px] -translate-x-1/2 rounded-full opacity-40 blur-[120px]"
        style={{ background: "radial-gradient(circle, var(--gold) 0%, transparent 60%)" }}
      />

      <div className="mx-auto max-w-5xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.3em] text-gold"
        >
          — Visit or chat
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="mt-5 font-display text-4xl leading-[1.05] tracking-tight md:text-6xl text-balance"
        >
          Tell us what your home needs. <br />
          <span className="italic gold-text">We'll handle the rest.</span>
        </motion.h2>
        <p className="mx-auto mt-6 max-w-xl text-base text-muted-foreground">
          Drop by the showroom or send a quick WhatsApp message — we usually
          reply within minutes.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="https://wa.me/919999999999?text=Hi%20New%20Janaki%20Enterprises%2C%20I%27m%20interested%20in"
            target="_blank"
            rel="noreferrer"
            className="group inline-flex items-center gap-3 rounded-full bg-whatsapp px-7 py-4 text-sm font-semibold text-primary-foreground shadow-glow transition-transform hover:-translate-y-0.5"
          >
            <WhatsAppIcon className="h-5 w-5" />
            Chat on WhatsApp
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a
            href="tel:+919999999999"
            className="inline-flex items-center gap-3 rounded-full border border-gold/40 bg-gold/5 px-7 py-4 text-sm font-medium text-gold transition-colors hover:bg-gold hover:text-primary-foreground"
          >
            <Phone className="h-4 w-4" /> +91 99999 99999
          </a>
        </div>

        <div className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-border bg-border text-left sm:grid-cols-3">
          {[
            { icon: MapPin, title: "Showroom", body: "Main Road, Your City\nLandmark nearby" },
            { icon: Clock, title: "Open", body: "Mon — Sat · 10:00 — 21:00\nSun · 11:00 — 19:00" },
            { icon: Phone, title: "Reach us", body: "+91 99999 99999\nhello@newjanaki.in" },
          ].map((c) => (
            <div key={c.title} className="bg-card p-6">
              <c.icon className="h-5 w-5 text-gold" />
              <div className="mt-4 text-xs uppercase tracking-[0.25em] text-muted-foreground">
                {c.title}
              </div>
              <div className="mt-2 whitespace-pre-line text-sm text-foreground">
                {c.body}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
