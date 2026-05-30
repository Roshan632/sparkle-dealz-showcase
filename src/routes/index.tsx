import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { Marquee } from "@/components/site/Marquee";
import { Collections } from "@/components/site/Collections";
import { Showcase } from "@/components/site/Showcase";
import { Why } from "@/components/site/Why";
import { FeaturedProducts } from "@/components/site/FeaturedProducts";
import { Testimonials } from "@/components/site/Testimonials";
import { Contact } from "@/components/site/Contact";
import { Footer } from "@/components/site/Footer";
import { WhatsAppFab } from "@/components/site/WhatsAppFab";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "New Janaki Enterprises — Home Appliances, Furniture & More" },
      {
        name: "description",
        content:
          "New Janaki Enterprises — your trusted family-run store for refrigerators, televisions, ACs, washing machines,fans and furniture. Authentic brands, fair prices, doorstep delivery.",
      },
      { property: "og:title", content: "New Janaki Enterprises" },
      {
        property: "og:description",
        content:
          "Refrigerators, TVs, ACs, washing machines and furniture from the brands you trust.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    return () => {
      ScrollTrigger.getAll().forEach((s) => s.kill());
    };
  }, []);

  return (
    <main className="relative bg-background text-foreground">
      <link
        rel="preconnect"
        href="https://fonts.googleapis.com"
      />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Fraunces:ital,opsz,wght@0,9..144,400;0,9..144,500;0,9..144,600;0,9..144,700;1,9..144,400;1,9..144,600&family=Inter:wght@300;400;500;600;700&display=swap"
      />
      <Navbar />
      <Hero />
      <Marquee />
      <Collections />
      <Showcase />
      <FeaturedProducts />
      <Why />
      <Testimonials />
      <Contact />
      <Footer />
      <WhatsAppFab />
    </main>
  );
}
