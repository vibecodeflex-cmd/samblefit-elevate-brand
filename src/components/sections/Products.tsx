import { ArrowRight, Lock, Grip, CircleDot, DoorClosed, Bath, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Grip,
    title: "Lever Handles",
    description: "Premium stainless steel handles with ergonomic design",
    models: ["Albourg", "Alta", "Bergen", "Helsinki", "Malmo"],
    color: "primary",
    href: "/collections/lever-handles",
  },
  {
    icon: DoorClosed,
    title: "Pull Handles",
    description: "Architectural pull handles for modern entrances",
    models: ["T-Bar", "D-Line", "Offset", "Back-to-Back"],
    color: "secondary",
    href: "/collections/pull-handles",
  },
  {
    icon: Lock,
    title: "Locks & Cylinders",
    description: "Advanced security solutions with Euro profiles",
    models: ["Mortice Locks", "Deadlocks", "Euro Cylinders"],
    color: "accent",
    href: "/collections/locks-cylinders",
  },
  {
    icon: CircleDot,
    title: "Hinges",
    description: "Heavy-duty hinges for commercial applications",
    models: ["Ball Bearing", "Fire Rated", "Concealed"],
    color: "primary",
    href: "/products?category=Hinges",
  },
  {
    icon: Bath,
    title: "Bathroom Accessories",
    description: "Elegant bathroom fittings in premium finishes",
    models: ["Towel Rails", "Robe Hooks", "Paper Holders"],
    color: "secondary",
    href: "/collections/bathroom",
  },
  {
    icon: Smartphone,
    title: "QS Access Smart",
    description: "Electronic locking systems for modern security",
    models: ["Smart Locks", "Access Control", "Digital Keypads"],
    color: "accent",
    href: "/products?category=Smart+Access",
  },
];

const colorStyles = {
  primary: {
    bg: "bg-primary/10",
    icon: "text-primary",
    hover: "group-hover:bg-primary group-hover:text-primary-foreground",
  },
  secondary: {
    bg: "bg-secondary/10",
    icon: "text-secondary",
    hover: "group-hover:bg-secondary group-hover:text-secondary-foreground",
  },
  accent: {
    bg: "bg-accent/10",
    icon: "text-accent",
    hover: "group-hover:bg-accent group-hover:text-accent-foreground",
  },
};

export function Products() {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-medium uppercase tracking-widest text-sm mb-4 block">
            Our Collections
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Architectural Hardware
            <span className="text-gradient-premium block mt-1">Crafted for Excellence</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            Discover our comprehensive range of premium stainless-steel ironmongery and 
            advanced door control systems. All backed by a 5-year warranty.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {categories.map((category, index) => {
            const colors = colorStyles[category.color as keyof typeof colorStyles];
            return (
              <div
                key={category.title}
                className="group card-premium p-8 cursor-pointer"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div
                  className={`w-14 h-14 rounded-xl ${colors.bg} ${colors.hover} flex items-center justify-center mb-6 transition-all duration-300`}
                >
                  <category.icon className={`w-7 h-7 ${colors.icon} group-hover:text-inherit transition-colors`} />
                </div>

                {/* Content */}
                <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                  {category.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {category.description}
                </p>

                {/* Models */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {category.models.slice(0, 3).map((model) => (
                    <span
                      key={model}
                      className="text-xs bg-muted text-muted-foreground px-3 py-1 rounded-full"
                    >
                      {model}
                    </span>
                  ))}
                  {category.models.length > 3 && (
                    <span className="text-xs text-muted-foreground px-2 py-1">
                      +{category.models.length - 3} more
                    </span>
                  )}
                </div>

                {/* Link */}
                <Link
                  to={category.href}
                  className="inline-flex items-center gap-2 text-sm font-medium text-primary group-hover:text-primary-light transition-colors"
                >
                  View Collection
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild variant="premium" size="lg">
            <Link to="/products">
              Browse Full Catalog
              <ArrowRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
