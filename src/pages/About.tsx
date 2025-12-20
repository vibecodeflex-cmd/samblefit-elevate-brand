import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CheckCircle, Users, Target, Lightbulb, TrendingUp, Award, Shield, Clock, MapPin, Phone, Mail, Building2, Wrench, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const values = [
  { icon: Target, title: "Precision", desc: "Every detail matters in advanced design. We ensure meticulous attention to every component." },
  { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge locking solutions and modern interior technologies for contemporary spaces." },
  { icon: TrendingUp, title: "Quality", desc: "Sustainable quality that endures. Our products are built to last for generations." },
  { icon: Users, title: "Service", desc: "Customer-centric excellence with dedicated support throughout your project journey." },
];

const stats = [
  { value: "2017", label: "Established", icon: Building2 },
  { value: "20+", label: "Years Combined Experience", icon: Clock },
  { value: "500+", label: "Projects Completed", icon: Wrench },
  { value: "100%", label: "Customer Satisfaction", icon: Heart },
];

const milestones = [
  { year: "2017", title: "Company Founded", desc: "Samblefit Shop Fitting Services was established in Lusaka, Zambia." },
  { year: "2018", title: "QS Partnership", desc: "Became an authorized distributor for QS Premium Hardware products." },
  { year: "2019", title: "Service Expansion", desc: "Expanded services to include complete interior fit-out solutions." },
  { year: "2020", title: "Smart Solutions", desc: "Introduced electronic locking systems and smart access solutions." },
  { year: "2022", title: "Major Projects", desc: "Completed flagship projects for leading retail and commercial clients." },
  { year: "2024", title: "Market Leader", desc: "Recognized as a leading provider of architectural hardware in Zambia." },
];

const teamExpertise = [
  "Architectural Hardware Consultation",
  "Interior Design & Space Planning",
  "Project Management & Coordination",
  "Technical Installation Services",
  "Custom Fabrication Solutions",
  "After-Sales Support & Maintenance",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="relative pt-32 pb-20 overflow-hidden">
          <div className="absolute inset-0 gradient-royal opacity-90" />
          <div className="absolute top-1/4 right-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 left-10 w-96 h-96 bg-secondary/20 rounded-full blur-3xl" />
          
          <div className="relative container-wide">
            <span className="text-accent font-medium uppercase tracking-widest text-sm mb-4 block">
              About Samblefit
            </span>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-primary-foreground font-semibold leading-tight mb-6">
              Translating Dreams
              <span className="block text-accent mt-2">Into Reality</span>
            </h1>
            <p className="text-xl text-primary-foreground/80 max-w-2xl leading-relaxed">
              A leading Zambian company offering specialized interior finishing solutions 
              with premium hardware and innovative fitting systems.
            </p>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-card border-b border-border">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                    <stat.icon className="w-7 h-7 text-primary" />
                  </div>
                  <p className="font-display text-3xl md:text-4xl text-primary font-semibold">{stat.value}</p>
                  <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* About Content */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              {/* Left Column - Story */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                  Our Story
                </h2>
                <div className="space-y-6 text-muted-foreground leading-relaxed">
                  <p>
                    Samblefit Shop Fitting Services is a leading Zambian company offering 
                    specialized interior finishing solutions. As an authorized distributor, 
                    we provide premium hardware, fitting systems, and electronic locking systems 
                    to transform architectural visions into reality.
                  </p>
                  <p>
                    Founded in 2017, we have grown to become a trusted partner for architects, 
                    interior designers, contractors, and property developers across Zambia. Our 
                    commitment to quality and customer satisfaction has earned us a reputation 
                    as a reliable service provider in the construction industry.
                  </p>
                  <p>
                    Valuing quality and consistency in every job, we strike a balance between 
                    sound technical finesse and commendable aesthetic sensibility. At Samblefit, 
                    we believe perfection is not an end goal but a process.
                  </p>
                </div>

                {/* Checklist */}
                <div className="mt-10 space-y-4">
                  <h3 className="font-display text-xl text-foreground mb-4">What We Offer</h3>
                  {[
                    "Authorized QS Premium Hardware distributor",
                    "Full range of stainless-steel ironmongery",
                    "Fire-certified door closers for all applications",
                    "Complete interior fit-out services",
                    "Electronic and smart locking solutions",
                    "Custom kitchen and wardrobe solutions",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right Column - Values */}
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                  Our Values
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {values.map((value) => (
                    <div key={value.title} className="card-premium p-6">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-display text-xl text-foreground mb-2">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">{value.desc}</p>
                    </div>
                  ))}
                </div>

                {/* Vision & Mission */}
                <div className="mt-8 space-y-6">
                  <div className="card-premium p-6 gradient-royal text-primary-foreground">
                    <h3 className="font-display text-xl mb-3">Our Vision</h3>
                    <p className="text-primary-foreground/90">
                      To be a distinguished, efficient, and reliable service provider 
                      in the construction industry, setting the standard for quality 
                      and innovation in architectural hardware solutions.
                    </p>
                  </div>
                  <div className="card-premium p-6 bg-secondary/10 border-secondary/20">
                    <h3 className="font-display text-xl text-foreground mb-3">Our Mission</h3>
                    <p className="text-muted-foreground">
                      To deliver exceptional interior finishing solutions that exceed 
                      client expectations through quality products, professional service, 
                      and innovative design approaches.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="section-padding bg-muted/30">
          <div className="container-wide">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Our Journey
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From humble beginnings to becoming a trusted name in architectural hardware
              </p>
            </div>

            <div className="relative">
              <div className="absolute left-1/2 top-0 bottom-0 w-px bg-border hidden md:block" />
              <div className="space-y-8">
                {milestones.map((milestone, index) => (
                  <div key={milestone.year} className={`flex items-center gap-8 ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                    <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right' : 'md:text-left'}`}>
                      <div className="card-premium p-6 inline-block max-w-md">
                        <span className="text-primary font-display text-2xl font-semibold">{milestone.year}</span>
                        <h3 className="font-display text-lg text-foreground mt-2">{milestone.title}</h3>
                        <p className="text-muted-foreground text-sm mt-1">{milestone.desc}</p>
                      </div>
                    </div>
                    <div className="hidden md:flex w-4 h-4 rounded-full bg-primary border-4 border-background shadow-lg z-10" />
                    <div className="flex-1 hidden md:block" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Team Expertise */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl text-foreground mb-6">
                  Expert Team
                </h2>
                <p className="text-muted-foreground leading-relaxed mb-8">
                  Our team brings together decades of combined experience in architectural 
                  hardware, interior design, and project management. We pride ourselves on 
                  providing expert consultation and seamless execution for every project.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {teamExpertise.map((expertise) => (
                    <div key={expertise} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0" />
                      <span className="text-foreground text-sm">{expertise}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Contact Card */}
              <div className="card-premium p-8">
                <h3 className="font-display text-2xl text-foreground mb-6">Get In Touch</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Location</p>
                      <p className="text-muted-foreground text-sm">Plot 2335 Kariba Road, Lusaka, Zambia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Phone className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Phone</p>
                      <p className="text-muted-foreground text-sm">+260 211 123 456</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-foreground font-medium">Email</p>
                      <p className="text-muted-foreground text-sm">info@samblefit.co.zm</p>
                    </div>
                  </div>
                </div>
                <div className="mt-8 flex gap-4">
                  <Button asChild className="flex-1">
                    <Link to="/collections">View Products</Link>
                  </Button>
                  <Button asChild variant="outline" className="flex-1">
                    <Link to="/services">Our Services</Link>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding gradient-royal">
          <div className="container-wide text-center">
            <h2 className="font-display text-3xl md:text-4xl text-primary-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Let us help you bring your architectural vision to life with our premium 
              hardware and expert fitting services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button asChild variant="hero" size="lg">
                <Link to="/collections">Explore Collections</Link>
              </Button>
              <Button asChild variant="heroOutline" size="lg">
                <Link to="/services">View Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
