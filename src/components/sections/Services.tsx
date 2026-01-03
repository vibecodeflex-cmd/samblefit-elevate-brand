import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import wardrobeImage from "@/assets/wardrobe.jpg";
import kitchenImage from "@/assets/kitchen.jpg";
import aluminiumImage from "@/assets/aluminium-doors.jpg";

const services = [
  {
    image: aluminiumImage,
    title: "Aluminium Shopfronts",
    description: "Premium aluminium doors, windows, and commercial entrances.",
    href: "/collections/aluminium",
  },
  {
    image: kitchenImage,
    title: "Kitchen Solutions",
    description: "Bespoke kitchen installations with premium finishes.",
    href: "/collections/kitchens",
  },
  {
    image: wardrobeImage,
    title: "Wardrobes & Storage",
    description: "Luxury wardrobe systems with intelligent storage solutions.",
    href: "/collections/wardrobes",
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding bg-muted">
      <div className="container-wide">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
            Complete Fit-Out Services
          </h2>
          <p className="text-muted-foreground text-sm">
            From concept to completion, we deliver exceptional craftsmanship in every 
            interior project.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.href}
              className="group"
            >
              <div className="aspect-[4/3] overflow-hidden bg-background mb-4">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="font-semibold text-foreground mb-2 group-hover:underline">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {service.description}
              </p>
            </Link>
          ))}
        </div>

        {/* Additional Services */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-12">
          {[
            { title: "Wall Panelling", href: "/collections/wall-panelling" },
            { title: "Office Partitions", href: "/collections/office-partitions" },
            { title: "Shop Fitting", href: "/collections/shopfitting" },
            { title: "Hardware", href: "/collections/hardware" },
          ].map((item) => (
            <Link
              to={item.href}
              key={item.title}
              className="border border-border bg-background p-4 text-center hover:bg-muted transition-colors"
            >
              <span className="text-sm font-medium text-foreground">{item.title}</span>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild>
            <Link to="/contact">
              Request a Consultation
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
