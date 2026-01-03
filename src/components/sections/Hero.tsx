import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-hardware.jpg";

export function Hero() {
  return (
    <section className="relative min-h-[80vh] flex items-center">
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium architectural hardware"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-foreground/60" />
      </div>

      <div className="relative container-wide py-24">
        <div className="max-w-xl">
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold leading-tight mb-6">
            Premium Architectural Hardware
          </h1>
          <p className="text-primary-foreground/80 text-lg mb-8 leading-relaxed">
            Quality stainless steel ironmongery and interior fit-out solutions 
            for residential and commercial projects.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link to="/products">
                View Products
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
              <Link to="/contact">
                Get a Quote
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
