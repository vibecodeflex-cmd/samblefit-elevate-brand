import { Button } from "@/components/ui/button";
import { ArrowRight, Shield, Award, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import heroImage from "@/assets/hero-hardware.jpg";

export function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Premium architectural hardware"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/40 via-transparent to-secondary/20" />
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/4 right-10 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl animate-float delay-300" />

      {/* Content */}
      <div className="relative container-wide section-padding pt-32">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/20 rounded-full px-4 py-2 mb-8 animate-fade-up opacity-0">
            <Sparkles className="w-4 h-4 text-accent" />
            <span className="text-sm text-primary-foreground/90 font-medium">
              Premium Architectural Hardware
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-primary-foreground font-semibold leading-[1.1] mb-6 opacity-0 animate-fade-up delay-100">
            Elevating Spaces Through
            <span className="block text-accent mt-2">Precision Design</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mb-10 leading-relaxed opacity-0 animate-fade-up delay-200">
            From sophisticated locking systems to bespoke interior solutions, we transform 
            architectural visions into enduring excellence. 5-year warranty on all products.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap gap-4 mb-16 opacity-0 animate-fade-up delay-300">
            <Button asChild variant="hero" size="xl" className="group">
              <Link to="/collections">
                Explore Collections
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button asChild variant="heroOutline" size="xl">
              <Link to="/#contact">Request Consultation</Link>
            </Button>
          </div>

          {/* Trust Indicators */}
          <div className="flex flex-wrap gap-8 opacity-0 animate-fade-up delay-400">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                <Shield className="w-6 h-6 text-accent" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">5-Year Warranty</p>
                <p className="text-primary-foreground/60 text-sm">On all products</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-full bg-primary-foreground/10 backdrop-blur-sm flex items-center justify-center">
                <Award className="w-6 h-6 text-secondary" />
              </div>
              <div>
                <p className="text-primary-foreground font-semibold">Authorized Distributor</p>
                <p className="text-primary-foreground/60 text-sm">QS Premium Hardware</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-primary-foreground/50 text-xs uppercase tracking-widest">Scroll</span>
        <div className="w-6 h-10 border-2 border-primary-foreground/30 rounded-full flex justify-center pt-2">
          <div className="w-1.5 h-3 bg-primary-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
}
