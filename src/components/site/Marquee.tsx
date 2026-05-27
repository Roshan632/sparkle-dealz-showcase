const items = [
  "Samsung", "LG", "Sony", "Whirlpool", "Godrej", "Voltas",
  "Daikin", "Panasonic", "Bosch", "Haier", "IFB", "Hitachi",
];

export function Marquee() {
  return (
    <section className="relative border-y border-border bg-secondary/40 py-6">
      <div className="flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
        <div className="flex shrink-0 animate-marquee items-center gap-14 pr-14">
          {[...items, ...items].map((brand, i) => (
            <span
              key={i}
              className="font-display text-2xl tracking-tight text-muted-foreground/70 whitespace-nowrap"
            >
              {brand}
              <span className="ml-14 text-gold/40">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
