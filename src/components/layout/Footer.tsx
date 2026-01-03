import { ArrowUp } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  products: [
    { name: "Lever Handles", href: "/collections/lever-handles" },
    { name: "Pull Handles", href: "/collections/pull-handles" },
    { name: "Locks & Cylinders", href: "/collections/locks-cylinders" },
    { name: "Door Controls", href: "/collections/door-controls" },
    { name: "Bathroom Accessories", href: "/collections/bathroom" },
    { name: "Smart Access", href: "/collections/smart-access" },
  ],
  services: [
    { name: "Aluminium Shopfronts", href: "/collections/aluminium" },
    { name: "Kitchen Solutions", href: "/collections/kitchens" },
    { name: "Wardrobes & Storage", href: "/collections/wardrobes" },
    { name: "Wall Panelling", href: "/collections/wall-panelling" },
    { name: "Office Partitions", href: "/collections/office-partitions" },
    { name: "Shop Fitting", href: "/collections/shopfitting" },
  ],
  quickLinks: [
    { name: "Home", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/services" },
    { name: "Collections", href: "/collections" },
    { name: "About Us", href: "/about" },
    { name: "Contact", href: "/contact" },
  ],
};

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-foreground text-primary-foreground">
      {/* Main Footer */}
      <div className="container-wide py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <span className="font-display text-xl font-bold tracking-tight uppercase">
              Samblefit
            </span>
            <p className="text-primary-foreground/70 mt-4 mb-6 max-w-sm text-sm leading-relaxed">
              Premium architectural hardware and interior fit-out solutions. 
              Transforming visions into enduring excellence since 2017.
            </p>
            <div className="text-primary-foreground/60 text-sm space-y-1">
              <p>Plot 2335 Kariba Road</p>
              <p>Lusaka, Zambia</p>
              <p className="pt-2">info@samblefit.co.zm</p>
              <p>+260 211 123 456</p>
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Products</h4>
            <ul className="space-y-2">
              {footerLinks.products.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-sm uppercase tracking-wider mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {footerLinks.quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.href}
                    className="text-primary-foreground/70 hover:text-primary-foreground transition-colors text-sm"
                  >
                    {link.name}
                  </Link>
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
            className="flex items-center gap-2 text-primary-foreground/60 hover:text-primary-foreground text-sm transition-colors"
          >
            Back to top
            <ArrowUp className="w-4 h-4" />
          </button>
        </div>
      </div>
    </footer>
  );
}
