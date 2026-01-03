import { ArrowRight, Grip, Lock, DoorClosed, Bath, Smartphone, CircleDot } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const categories = [
  {
    icon: Grip,
    title: "Lever Handles",
    description: "Premium stainless steel handles with ergonomic design",
    href: "/collections/lever-handles",
  },
  {
    icon: DoorClosed,
    title: "Pull Handles",
    description: "Architectural pull handles for modern entrances",
    href: "/collections/pull-handles",
  },
  {
    icon: Lock,
    title: "Locks & Cylinders",
    description: "Advanced security solutions with Euro profiles",
    href: "/collections/locks-cylinders",
  },
  {
    icon: CircleDot,
    title: "Hinges",
    description: "Heavy-duty hinges for commercial applications",
    href: "/products?category=Hinges",
  },
  {
    icon: Bath,
    title: "Bathroom Accessories",
    description: "Elegant bathroom fittings in premium finishes",
    href: "/collections/bathroom",
  },
  {
    icon: Smartphone,
    title: "Smart Access",
    description: "Electronic locking systems for modern security",
    href: "/products?category=Smart+Access",
  },
];

export function Products() {
  return (
    <section id="products" className="section-padding bg-background">
      <div className="container-wide">
        {/* Section Header */}
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
            Architectural Hardware
          </h2>
          <p className="text-muted-foreground text-sm">
            Discover our comprehensive range of premium stainless-steel ironmongery and 
            advanced door control systems.
          </p>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category) => (
            <Link
              key={category.title}
              to={category.href}
              className="group border border-border p-6 hover:bg-muted transition-colors"
            >
              <category.icon className="w-6 h-6 text-foreground mb-4" />
              <h3 className="font-semibold text-foreground mb-2 group-hover:underline">
                {category.title}
              </h3>
              <p className="text-muted-foreground text-sm">
                {category.description}
              </p>
            </Link>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <Button asChild>
            <Link to="/products">
              Browse Full Catalog
              <ArrowRight className="w-4 h-4 ml-2" />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
