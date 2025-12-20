import { Star, Quote, Building2, Home } from "lucide-react";

const testimonials = [
  {
    name: "Goldman Properties",
    type: "Commercial",
    icon: Building2,
    rating: 5,
    quote: "Samblefit delivered exceptional quality hardware for our entire commercial complex. Their attention to detail and professional installation exceeded our expectations. The QS stainless steel products have proven to be incredibly durable.",
    project: "Office Complex Hardware Installation"
  },
  {
    name: "British Council",
    type: "Commercial",
    icon: Building2,
    rating: 5,
    quote: "We chose Samblefit for their reputation and they delivered beyond our expectations. The security locks and access systems installed are world-class, meeting all our international standards for safety and reliability.",
    project: "Security & Access Systems"
  },
  {
    name: "Shade Control P/L",
    type: "Commercial",
    icon: Building2,
    rating: 5,
    quote: "The shopfitting service from Samblefit transformed our retail space completely. From aluminium shopfronts to interior hardware, every element was crafted with precision. Highly recommended for any commercial project.",
    project: "Complete Shopfitting Solution"
  },
  {
    name: "Lilayi Lodge",
    type: "Hospitality",
    icon: Home,
    rating: 5,
    quote: "For our luxury lodge, we needed hardware that combines elegance with durability. Samblefit provided beautiful PVD finish handles and bathroom accessories that perfectly complement our premium hospitality environment.",
    project: "Hospitality Hardware & Accessories"
  },
  {
    name: "French Embassy",
    type: "Diplomatic",
    icon: Building2,
    rating: 5,
    quote: "Security and sophistication were our top priorities. Samblefit understood our requirements perfectly, providing high-security locking systems with an elegant finish befitting a diplomatic mission.",
    project: "High-Security Door Systems"
  },
  {
    name: "Victoria Hospital",
    type: "Healthcare",
    icon: Building2,
    rating: 5,
    quote: "The hospital required durable, hygienic hardware solutions. Samblefit supplied stainless steel bathroom accessories and door controls that meet healthcare standards. Their after-sales support has been excellent.",
    project: "Healthcare Facility Hardware"
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 rounded-full bg-secondary blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary font-medium uppercase tracking-widest text-sm mb-4 block">
            Client Testimonials
          </span>
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
            Trusted by Leading
            <span className="text-gradient-premium block mt-1">Organizations in Zambia</span>
          </h2>
          <p className="text-muted-foreground text-lg">
            From prestigious embassies to renowned lodges, our clients trust Samblefit 
            for quality, reliability, and exceptional service.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="card-premium p-8 group hover:shadow-elegant transition-all duration-500 relative"
            >
              {/* Quote Icon */}
              <div className="absolute top-6 right-6 opacity-10 group-hover:opacity-20 transition-opacity">
                <Quote className="w-12 h-12 text-primary" />
              </div>

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground leading-relaxed mb-6 text-sm">
                "{testimonial.quote}"
              </p>

              {/* Project Tag */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  {testimonial.project}
                </span>
              </div>

              {/* Client Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-border">
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                  <testimonial.icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <h4 className="font-display text-foreground font-medium">
                    {testimonial.name}
                  </h4>
                  <p className="text-muted-foreground text-sm">
                    {testimonial.type} Client
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Location Banner */}
        <div className="mt-16 card-premium p-8 gradient-primary text-primary-foreground text-center">
          <h3 className="font-display text-2xl mb-3">Visit Our Showroom</h3>
          <p className="text-primary-foreground/90 mb-4 max-w-2xl mx-auto">
            Experience our premium hardware collections in person at our state-of-the-art showroom
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <Building2 className="w-5 h-5" />
              <span>Ibex 88 Shopping Complex</span>
            </div>
            <div className="w-px h-6 bg-primary-foreground/30 hidden sm:block" />
            <span>Lusaka, Zambia</span>
          </div>
        </div>
      </div>
    </section>
  );
}
