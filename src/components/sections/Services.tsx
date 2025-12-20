import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import wardrobeImage from "@/assets/wardrobe.jpg";
import kitchenImage from "@/assets/kitchen.jpg";
import aluminiumImage from "@/assets/aluminium-doors.jpg";

const services = [
  {
    image: aluminiumImage,
    title: "Aluminium Shopfronts",
    description: "Premium aluminium doors, windows, and commercial entrances crafted for durability and modern aesthetics.",
    features: ["Custom Designs", "Fire Rated Options", "Energy Efficient"],
  },
  {
    image: kitchenImage,
    title: "Kitchen Solutions",
    description: "Bespoke kitchen installations featuring premium cabinets, countertops, and hardware fittings.",
    features: ["Custom Cabinetry", "Premium Handles", "Full Installation"],
  },
  {
    image: wardrobeImage,
    title: "Wardrobes & Storage",
    description: "Luxury wardrobe systems with intelligent storage solutions and sophisticated finishes.",
    features: ["Walk-in Closets", "Sliding Systems", "LED Integration"],
  },
];

export function Services() {
  return (
    <section id="services" className="section-padding gradient-surface">
      <div className="container-wide">
        {/* Section Header */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-16">
          <div className="max-w-2xl">
            <span className="text-accent font-medium uppercase tracking-widest text-sm mb-4 block">
              Interior Solutions
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground">
              Complete Fit-Out
              <span className="text-gradient-premium block mt-1">Services</span>
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md lg:text-right">
            From concept to completion, we deliver exceptional craftsmanship in every 
            interior project. Quality finishes that stand the test of time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="group relative overflow-hidden rounded-2xl bg-card shadow-elevated"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Image */}
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:p-8">
                <h3 className="font-display text-2xl text-primary-foreground mb-2">
                  {service.title}
                </h3>
                <p className="text-primary-foreground/80 text-sm mb-4 line-clamp-2">
                  {service.description}
                </p>

                {/* Features */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {service.features.map((feature) => (
                    <span
                      key={feature}
                      className="text-xs bg-primary-foreground/20 text-primary-foreground px-3 py-1 rounded-full backdrop-blur-sm"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Link */}
                <a
                  href="#contact"
                  className="inline-flex items-center gap-2 text-sm font-medium text-accent group-hover:text-accent-light transition-colors"
                >
                  Learn More
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {[
            { title: "Wall Panelling", desc: "Decorative & acoustic panels" },
            { title: "Office Partitions", desc: "Demountable systems" },
            { title: "Suspended Ceilings", desc: "Acoustic & aesthetic solutions" },
            { title: "Shop Fitting", desc: "Complete retail solutions" },
          ].map((item, index) => (
            <div
              key={item.title}
              className="card-premium p-6 text-center"
              style={{ animationDelay: `${(index + 3) * 100}ms` }}
            >
              <h4 className="font-display text-lg text-foreground mb-2">{item.title}</h4>
              <p className="text-muted-foreground text-sm">{item.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-16">
          <Button variant="teal" size="lg">
            Request a Consultation
            <ArrowRight className="w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
