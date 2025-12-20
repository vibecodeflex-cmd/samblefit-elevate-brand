import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft, Wrench, Building2, Home, Store } from "lucide-react";
import { Link } from "react-router-dom";

// Import images
import shopfrontImg from "@/assets/shopfront.jpg";
import shopfront2Img from "@/assets/shopfront-2.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import wardrobeImg from "@/assets/wardrobe.jpg";
import aluminiumDoorsImg from "@/assets/aluminium-doors.jpg";
import wallPanellingImg from "@/assets/wall-panelling.jpg";
import officePartitionsImg from "@/assets/office-partitions.jpg";
import suspendedCeilingsImg from "@/assets/suspended-ceilings.jpg";
import homeDecoImg from "@/assets/home-deco.jpg";

const services = [
  {
    id: "shopfitting",
    title: "Complete Shopfitting",
    description: "Full turnkey retail and commercial shopfitting solutions including aluminium shopfronts, custom displays, signage, and complete interior fit-outs.",
    images: [shopfrontImg, shopfront2Img],
    icon: Store,
    features: ["Custom Displays", "Signage Integration", "Full Fit-out"],
    stats: { projects: "50+", experience: "15+ Years" }
  },
  {
    id: "kitchens",
    title: "Kitchen Solutions",
    description: "Bespoke kitchen designs from premium wood species with custom cabinetry, countertops, and integrated appliance solutions for homes and commercial spaces.",
    images: [kitchenImg, homeDecoImg],
    icon: Home,
    features: ["Custom Cabinetry", "Premium Counters", "Full Installation"],
    stats: { projects: "100+", experience: "Premium Quality" }
  },
  {
    id: "wardrobes",
    title: "Wardrobes & Storage",
    description: "Luxury wardrobe systems with walk-in closets, built-in storage, and dressing rooms. Available in matt, semi, and high gloss finishes.",
    images: [wardrobeImg, kitchenImg],
    icon: Home,
    features: ["Walk-in Closets", "Sliding Systems", "LED Lighting"],
    stats: { projects: "80+", experience: "Luxury Design" }
  },
  {
    id: "aluminium",
    title: "Aluminium Doors & Windows",
    description: "Premium aluminium doors, windows, and shopfronts with thermal break systems, security glazing, and fire-rated options.",
    images: [aluminiumDoorsImg, shopfrontImg],
    icon: Building2,
    features: ["Thermal Break", "Security Glass", "Fire Rated"],
    stats: { projects: "200+", experience: "10-Year Warranty" }
  },
  {
    id: "wall-panelling",
    title: "Wall Panelling & Partitions",
    description: "Decorative wall treatments including dado rails, demountable partitions, and drywall solutions for commercial and residential spaces.",
    images: [wallPanellingImg, officePartitionsImg],
    icon: Wrench,
    features: ["Dado Rails", "Acoustic Options", "Fire Resistant"],
    stats: { projects: "60+", experience: "Commercial Grade" }
  },
  {
    id: "office-partitions",
    title: "Office Partitions",
    description: "Demountable glass and aluminium partition systems for modern workspaces. Create flexible office layouts with professional finishes.",
    images: [officePartitionsImg, wallPanellingImg],
    icon: Building2,
    features: ["Glass Partitions", "Demountable", "Acoustic Glazing"],
    stats: { projects: "75+", experience: "Corporate" }
  },
  {
    id: "suspended-ceilings",
    title: "Suspended Ceilings",
    description: "Acoustic and decorative suspended ceiling solutions for offices, hospitals, schools, and commercial buildings with integrated lighting.",
    images: [suspendedCeilingsImg, officePartitionsImg],
    icon: Building2,
    features: ["Acoustic Tiles", "Integrated Lights", "Fire Rated"],
    stats: { projects: "90+", experience: "Acoustic Control" }
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 gradient-surface relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-secondary blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-accent blur-3xl" />
          </div>
          
          <div className="container-wide relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <div className="max-w-3xl">
              <span className="text-accent font-medium uppercase tracking-widest text-sm mb-4 block">
                Interior Solutions
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Complete Fit-Out
                <span className="text-gradient-premium block mt-2">Services</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                From concept to completion, Samblefit Design Gallery delivers exceptional craftsmanship 
                in every interior project. Quality finishes that stand the test of time across 
                residential, commercial, and retail environments.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service) => (
                <Link 
                  key={service.id}
                  to={`/collections/${service.id}`}
                  className="card-premium group overflow-hidden hover:shadow-elegant transition-all duration-500"
                >
                  {/* Image */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                    
                    {/* Icon Badge */}
                    <div className="absolute top-4 left-4 w-12 h-12 rounded-xl bg-background/20 backdrop-blur-sm flex items-center justify-center">
                      <service.icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    
                    {/* Stats */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="text-background">
                        <span className="block text-xl font-display font-bold">{service.stats.projects}</span>
                        <span className="text-background/70 text-xs">Projects</span>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-background/20 backdrop-blur-sm text-background text-xs font-medium">
                        {service.stats.experience}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="font-display text-xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                      {service.description}
                    </p>

                    {/* Features */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {service.features.map((feature, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-4 border-t border-border">
                      <span className="text-foreground font-medium text-sm">View Details</span>
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <ArrowRight className="w-4 h-4" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding gradient-surface">
          <div className="container-wide text-center">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Ready to Transform Your Space?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your project requirements and discover how Samblefit 
              can bring your vision to life with exceptional craftsmanship.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild variant="premium" size="lg">
                <Link to="/#contact">
                  Request Consultation
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
                <Link to="/collections">
                  View All Collections
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}