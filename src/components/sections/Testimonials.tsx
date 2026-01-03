import { Star, Building2, Home } from "lucide-react";

const testimonials = [
  {
    name: "Goldman Properties",
    type: "Commercial",
    icon: Building2,
    quote: "Samblefit delivered exceptional quality hardware for our entire commercial complex. Their attention to detail and professional installation exceeded our expectations.",
    project: "Office Complex Hardware Installation"
  },
  {
    name: "Lilayi Lodge",
    type: "Hospitality",
    icon: Home,
    quote: "For our luxury lodge, we needed hardware that combines elegance with durability. Samblefit provided beautiful PVD finish handles and bathroom accessories.",
    project: "Hospitality Hardware & Accessories"
  },
  {
    name: "French Embassy",
    type: "Diplomatic",
    icon: Building2,
    quote: "Security and sophistication were our top priorities. Samblefit understood our requirements perfectly, providing high-security locking systems with an elegant finish.",
    project: "High-Security Door Systems"
  }
];

export function Testimonials() {
  return (
    <section className="section-padding bg-background border-t border-border">
      <div className="container-wide">
        <div className="max-w-2xl mb-12">
          <h2 className="font-display text-2xl md:text-3xl text-foreground mb-4">
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-sm">
            Trusted by leading organizations across Zambia.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="border border-border p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-foreground text-foreground" />
                ))}
              </div>
              <p className="text-muted-foreground text-sm mb-6 leading-relaxed">
                "{testimonial.quote}"
              </p>
              <p className="text-xs text-muted-foreground mb-4">
                Project: {testimonial.project}
              </p>
              <div className="flex items-center gap-3 pt-4 border-t border-border">
                <div className="w-10 h-10 bg-muted flex items-center justify-center">
                  <testimonial.icon className="w-5 h-5 text-foreground" />
                </div>
                <div>
                  <p className="font-medium text-foreground text-sm">{testimonial.name}</p>
                  <p className="text-xs text-muted-foreground">{testimonial.type}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
