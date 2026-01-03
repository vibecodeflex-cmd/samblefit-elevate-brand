import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle, Users, Target, Lightbulb, TrendingUp, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
  { icon: Target, title: "Precision", desc: "Every detail matters in advanced design. We ensure meticulous attention to every component." },
  { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge locking solutions and modern interior technologies for contemporary spaces." },
  { icon: TrendingUp, title: "Quality", desc: "Sustainable quality that endures. Our products are built to last for generations." },
  { icon: Users, title: "Service", desc: "Customer-centric excellence with dedicated support throughout your project journey." },
];

const milestones = [
  { year: "2017", title: "Company Founded", desc: "Samblefit Shop Fitting Services was established in Lusaka, Zambia." },
  { year: "2018", title: "QS Partnership", desc: "Became an authorized distributor for QS Premium Hardware products." },
  { year: "2019", title: "Service Expansion", desc: "Expanded services to include complete interior fit-out solutions." },
  { year: "2020", title: "Smart Solutions", desc: "Introduced electronic locking systems and smart access solutions." },
  { year: "2022", title: "Major Projects", desc: "Completed flagship projects for leading retail and commercial clients." },
  { year: "2024", title: "Market Leader", desc: "Recognized as a leading provider of architectural hardware in Zambia." },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-12 border-b border-border">
          <div className="container-wide">
            <div className="max-w-2xl">
              <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                About Us
              </h1>
              <p className="text-muted-foreground">
                A leading Zambian company offering specialized interior finishing solutions 
                with premium hardware and innovative fitting systems.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-12">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="font-semibold text-xl text-foreground mb-4">Our Story</h2>
                <div className="space-y-4 text-muted-foreground text-sm leading-relaxed">
                  <p>
                    Samblefit Shop Fitting Services was founded in 2017 with a clear mission: 
                    to provide Zambia with access to world-class architectural hardware and 
                    interior finishing solutions. What started as a small operation has grown 
                    into a trusted name in the construction and interior design industry.
                  </p>
                  <p>
                    As an authorized distributor of QS Premium Hardware, we offer a comprehensive 
                    range of stainless steel ironmongery, door controls, and electronic locking 
                    systems. Our commitment to quality has earned us partnerships with architects, 
                    interior designers, contractors, and property developers across Zambia.
                  </p>
                  <p>
                    We believe perfection is not an end goal but a process. Every project we 
                    undertake reflects our dedication to combining technical excellence with 
                    aesthetic sensibility, delivering results that stand the test of time.
                  </p>
                </div>

                <div className="mt-8 space-y-3">
                  <h3 className="font-medium text-foreground text-sm">What We Offer</h3>
                  {[
                    "Authorized QS Premium Hardware distributor",
                    "Full range of stainless-steel ironmongery",
                    "Complete interior fit-out services",
                    "Electronic and smart locking solutions",
                    "Custom kitchen and wardrobe solutions",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-4 h-4 text-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <h2 className="font-semibold text-xl text-foreground mb-4">Our Values</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {values.map((value) => (
                    <div key={value.title} className="border border-border p-5">
                      <value.icon className="w-5 h-5 text-foreground mb-3" />
                      <h3 className="font-medium text-foreground text-sm mb-2">{value.title}</h3>
                      <p className="text-muted-foreground text-xs leading-relaxed">{value.desc}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 border border-border p-5 bg-foreground text-primary-foreground">
                  <h3 className="font-medium text-sm mb-2">Our Vision</h3>
                  <p className="text-primary-foreground/80 text-xs leading-relaxed">
                    To be a distinguished, efficient, and reliable service provider 
                    in the construction industry, setting the standard for quality 
                    and innovation in architectural hardware solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-12 border-t border-border bg-muted">
          <div className="container-wide">
            <h2 className="font-semibold text-xl text-foreground mb-8 text-center">
              Our Journey
            </h2>

            <div className="max-w-3xl mx-auto">
              <div className="space-y-6">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className="flex gap-6">
                    <div className="w-16 flex-shrink-0 text-right">
                      <span className="font-semibold text-foreground">{milestone.year}</span>
                    </div>
                    <div className="w-px bg-border relative">
                      <div className="absolute top-1 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-foreground" />
                    </div>
                    <div className="flex-1 pb-6">
                      <h3 className="font-medium text-foreground text-sm">{milestone.title}</h3>
                      <p className="text-muted-foreground text-xs mt-1">{milestone.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="py-12 border-t border-border">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-semibold text-xl text-foreground mb-4">Get In Touch</h2>
                <p className="text-muted-foreground text-sm mb-6">
                  Ready to start your project? Contact our team for expert advice and consultation.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-foreground" />
                    <span className="text-sm text-muted-foreground">Plot 2335 Kariba Road, Lusaka, Zambia</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="w-4 h-4 text-foreground" />
                    <span className="text-sm text-muted-foreground">+260 211 123 456</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-4 h-4 text-foreground" />
                    <span className="text-sm text-muted-foreground">info@samblefit.co.zm</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-4">
                <Button asChild className="flex-1">
                  <Link to="/contact">Contact Us</Link>
                </Button>
                <Button asChild variant="outline" className="flex-1">
                  <Link to="/collections">View Collections</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
