import { CheckCircle, Users, Target, Lightbulb, TrendingUp } from "lucide-react";

const values = [
  { icon: Target, title: "Precision", desc: "Every screw matters in advanced design" },
  { icon: Lightbulb, title: "Innovation", desc: "Cutting-edge locking solutions" },
  { icon: TrendingUp, title: "Quality", desc: "Sustainable quality that endures" },
  { icon: Users, title: "Service", desc: "Customer-centric excellence" },
];

const stats = [
  { value: "2017", label: "Established" },
  { value: "20+", label: "Years Combined Experience" },
  { value: "500+", label: "Projects Completed" },
  { value: "100%", label: "Customer Satisfaction" },
];

export function About() {
  return (
    <section id="about" className="section-padding bg-background overflow-hidden">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div>
            <span className="text-secondary font-medium uppercase tracking-widest text-sm mb-4 block">
              About Samblefit
            </span>
            <h2 className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6">
              Translating Dreams
              <span className="text-gradient-premium block mt-1">Into Reality</span>
            </h2>

            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              Samblefit Shop Fitting Services is a leading Zambian company offering 
              specialized interior finishing solutions. As an authorized distributor, 
              we provide premium hardware, fitting systems, and electronic locking systems.
            </p>

            <p className="text-muted-foreground mb-8 leading-relaxed">
              Valuing quality and consistency in every job, we strike a balance between 
              sound technical finesse and commendable aesthetic sensibility. At Samblefit, 
              we believe perfection is not an end goal but a process.
            </p>

            {/* Checklist */}
            <div className="space-y-4 mb-10">
              {[
                "Authorized QS Premium Hardware distributor",
                "Full range of stainless-steel ironmongery",
                "Fire-certified door closers for all applications",
                "Complete interior fit-out services",
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              {stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-display text-3xl text-primary font-semibold">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values Grid */}
          <div className="relative">
            {/* Decorative Background */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-accent/10 rounded-full blur-3xl" />

            <div className="relative grid grid-cols-2 gap-6">
              {values.map((value, index) => (
                <div
                  key={value.title}
                  className={`card-premium p-8 ${index % 2 === 1 ? "mt-8" : ""}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.desc}</p>
                </div>
              ))}
            </div>

            {/* Vision Card */}
            <div className="mt-8 card-premium p-8 gradient-royal text-primary-foreground">
              <h3 className="font-display text-xl mb-3">Our Vision</h3>
              <p className="text-primary-foreground/90">
                To be a distinguished, efficient, and reliable service provider 
                in the construction industry.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
