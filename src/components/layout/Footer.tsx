import { ArrowUp } from "lucide-react";

const footerLinks = {
  products: [
    "Lever Handles",
    "Pull Handles",
    "Locks & Cylinders",
    "Door Controls",
    "Bathroom Accessories",
    "QS Access Smart",
  ],
  services: [
    "Aluminium Shopfronts",
    "Kitchen Solutions",
    "Wardrobes & Storage",
    "Wall Panelling",
    "Office Partitions",
    "Shop Fitting",
  ],
  company: [
    "About Us",
    "Our Vision",
    "Quality Assurance",
    "Careers",
    "Contact",
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide section-padding">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 gradient-royal rounded-lg flex items-center justify-center shadow-royal">
                <span className="text-primary-foreground font-display font-bold text-xl">S</span>
              </div>
              <div>
                <span className="font-display text-xl font-semibold tracking-tight">
                  Samblefit
                </span>
                <span className="block text-xs tracking-widest uppercase text-primary-foreground/70">
                  Design Gallery
                </span>
              </div>
            </div>
            <p className="text-primary-foreground/70 mb-6 max-w-sm">
              Premium architectural hardware and interior fit-out solutions. 
              Transforming visions into enduring excellence since 2017.
            </p>
            <div className="flex gap-4">
              {["facebook", "instagram", "linkedin", "twitter"].map((social) => (
                <a
                  key={social}
                  href={`#${social}`}
                  className="w-10 h-10 rounded-lg bg-primary-foreground/10 hover:bg-primary-foreground/20 flex items-center justify-center transition-colors"
                  aria-label={social}
                >
                  <span className="text-sm capitalize">{social[0].toUpperCase()}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-display text-lg mb-6">Products</h4>
            <ul className="space-y-3">
              {footerLinks.products.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg mb-6">Services</h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-display text-lg mb-6">Company</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link}>
                  <a
                    href={`#${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-primary-foreground/10">
        <div className="container-wide py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © {new Date().getFullYear()} Samblefit Design Gallery. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="group flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
          >
            Back to top
            <span className="w-8 h-8 rounded-lg bg-primary-foreground/10 group-hover:bg-primary-foreground/20 flex items-center justify-center transition-colors">
              <ArrowUp className="w-4 h-4" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  );
}
