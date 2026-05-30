import { motion } from "framer-motion";
import { WhatsAppIcon } from "./Navbar";

export function WhatsAppFab() {
  return (
    <motion.a
      href="https://wa.me/9779804973436?text=Hi%20New%20Janaki%20Enterprises%2C%20I%27d%20like%20to%20enquire%20about"
      target="_blank"
      rel="noreferrer"
      aria-label="Chat or call on WhatsApp"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 1.4, type: "spring", stiffness: 220, damping: 16 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2"
    >
      <span className="hidden rounded-full border border-border bg-background/80 px-3 py-1.5 text-xs font-medium text-foreground backdrop-blur md:inline">
        WhatsApp · Call
      </span>
      <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-primary-foreground shadow-glow">
        <span className="absolute inset-0 animate-ping rounded-full bg-whatsapp opacity-40" />
        <WhatsAppIcon className="relative h-7 w-7" />
      </span>
    </motion.a>
  );
}
