export function Footer() {
  return (
    <footer className="border-t border-border py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-6 text-xs text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2.5">
          <span className="flex h-7 w-7 items-center justify-center rounded-full bg-gradient-to-br from-gold to-gold-soft text-primary-foreground font-display text-xs font-bold">
            N
          </span>
          <span>© {new Date().getFullYear()} New Janaki Enterprises. All rights reserved.</span>
        </div>
        <div className="flex items-center gap-5">
          <a href="#collections" className="hover:text-foreground">Collections</a>
          <a href="#why" className="hover:text-foreground">Why us</a>
          <a href="#contact" className="hover:text-foreground">Visit</a>
        </div>
      </div>
    </footer>
  );
}
