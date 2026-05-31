import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselPrevious,
  CarouselNext,
} from "@/components/ui/carousel";
import fridge from "@/assets/fridge.jpg";
import tv from "@/assets/tv.jpg";
import ac from "@/assets/ac.jpg";
import furniture from "@/assets/furniture.jpg";
import washer from "@/assets/washer.jpg";
import bed from "@/assets/bed.jpg";
import lgcgfridge from "@/assets/lgcgfridge.jpg";
import lgtv from "@/assets/lgtv.jpg";



const products = [
  {
    name: "Premium Fridge",
    category: "Home Appliance",
    img: lgcgfridge,
    details:"Meridia 192 Liter Single Door Refrigerator",
    // details: "Double door, inverter, 340L capacity.",
  },
  {
    name: "Smart TV",
    category: "Home Appliance",
    img: lgtv,
    // details: "65'' 4K UHD, Android TV, Dolby Audio.",
    details: "65-Inch 4K UHD NanoCell Smart TV | AI ThinQ, HDR, HDMI 2.1"
  },
  {
    name: "Washing Machine",
    category: "Home Appliance",
    img: washer,
    // details: "14Kg Fully Automatic Front Load Washing Machine",
    details: "14Kg Fully Automatic Front Load Washing Machine, 7kg, fully automatic, quick wash.",
  },
  {
    name: "Split AC",
    category: "Home Appliance",
    img: ac,
    details: "1.5 Ton, 5-star, copper condenser.",
  },
  {
    name: "Designer Sofa",
    category: "Furniture",
    img: furniture,
    details: "3-seater, plush fabric, modern design.",
  },
  {
    name: "Luxury Bed",
    category: "Furniture",
    img: bed,
    details: "King size, premium comfort, storage.",
  },
];

export function FeaturedProducts() {
  return (
    <section className="py-16 bg-linear-to-b from-background to-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-center">
          Featured Products
        </h2>
        <Carousel opts={{ loop: true, align: 'start' }}>
          <CarouselContent>
            {products.map((product, idx) => (
              <CarouselItem key={idx} className="basis-1/2 md:basis-1/3 flex justify-center">
                <div className="group bg-white dark:bg-zinc-900 rounded-xl shadow-lg p-6 w-72 md:w-80 transition-transform duration-300 hover:scale-105 hover:shadow-2xl border border-transparent hover:border-primary relative overflow-hidden">
                  <img
                    src={product.img}
                    alt={product.name}
                    className="w-full h-44 md:h-48 object-cover rounded-lg mb-4 group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="mb-2 text-lg font-semibold text-primary group-hover:underline">
                    {product.name}
                  </div>
                  <div className="text-xs uppercase tracking-wide text-muted-foreground mb-1">
                    {product.category}
                  </div>
                  <div className="text-sm text-foreground mb-2">
                    {product.details}
                  </div>
                  <span className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
