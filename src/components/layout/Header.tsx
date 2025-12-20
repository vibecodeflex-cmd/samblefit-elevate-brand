import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation } from "react-router-dom";

const navigation = [
  { name: "Home", href: "/" },
  {
    name: "Products",
    href: "/products",
    dropdown: [
      { name: "Lever Handles", href: "/collections/lever-handles" },
      { name: "Pull Handles", href: "/collections/pull-handles" },
      { name: "Locks & Cylinders", href: "/collections/locks-cylinders" },
      { name: "Hinges", href: "/collections/hinges" },
      { name: "Door Controls", href: "/collections/door-controls" },
      { name: "Bathroom Accessories", href: "/collections/bathroom" },
      { name: "PVD Collection", href: "/collections/pvd-collection" },
      { name: "Smart Access", href: "/collections/smart-access" },
    ],
  },
  {
    name: "Services",
    href: "/services",
    dropdown: [
      { name: "Shopfitting", href: "/collections/shopfitting" },
      { name: "Kitchen Solutions", href: "/collections/kitchens" },
      { name: "Wardrobes & Storage", href: "/collections/wardrobes" },
      { name: "Aluminium Doors & Windows", href: "/collections/aluminium" },
      { name: "Wall Panelling", href: "/collections/wall-panelling" },
      { name: "Office Partitions", href: "/collections/office-partitions" },
      { name: "Suspended Ceilings", href: "/collections/suspended-ceilings" },
    ],
  },
  { name: "Collections", href: "/collections" },
  { name: "About", href: "/about" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith("/#") && isHomePage) {
      const element = document.querySelector(href.replace("/", ""));
      element?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-card/95 backdrop-blur-md shadow-elevated py-3"
          : "bg-transparent py-5"
      )}
    >
      <nav className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 group">
          <div className="w-12 h-12 gradient-royal rounded-lg flex items-center justify-center shadow-royal group-hover:shadow-glow transition-all duration-300">
            <span className="text-primary-foreground font-display font-bold text-xl">S</span>
          </div>
          <div className="hidden sm:block">
            <span className={cn(
              "font-display text-xl font-semibold tracking-tight transition-colors",
              isScrolled || !isHomePage ? "text-foreground" : "text-primary-foreground"
            )}>
              Samblefit
            </span>
            <span className={cn(
              "block text-xs tracking-widest uppercase transition-colors",
              isScrolled || !isHomePage ? "text-muted-foreground" : "text-primary-foreground/70"
            )}>
              Design Gallery
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.href}
                onClick={() => handleNavClick(item.href)}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors link-underline py-2",
                  isScrolled || !isHomePage
                    ? "text-foreground hover:text-primary"
                    : "text-primary-foreground/90 hover:text-primary-foreground"
                )}
              >
                {item.name}
                {item.dropdown && <ChevronDown className="w-4 h-4" />}
              </Link>

              {/* Dropdown */}
              {item.dropdown && activeDropdown === item.name && (
                <div className="absolute top-full left-0 pt-2 animate-fade-up">
                  <div className="bg-card rounded-lg shadow-elevated border border-border/50 py-2 min-w-[220px]">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* CTA Buttons */}
        <div className="hidden lg:flex items-center gap-4">
          <Button
            asChild
            variant={isScrolled || !isHomePage ? "outline" : "heroOutline"}
            size="sm"
          >
            <Link to="/#contact">Get Quote</Link>
          </Button>
          <Button
            asChild
            variant={isScrolled || !isHomePage ? "default" : "hero"}
            size="sm"
          >
            <Link to="/products">View Catalog</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "lg:hidden p-2 rounded-lg transition-colors",
            isScrolled || !isHomePage
              ? "text-foreground hover:bg-muted"
              : "text-primary-foreground hover:bg-primary-foreground/10"
          )}
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-card border-t border-border animate-fade-up">
          <div className="container-wide py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className="block py-3 text-foreground font-medium hover:text-primary transition-colors"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 space-y-1 border-l-2 border-border ml-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex gap-3 pt-4">
              <Button asChild variant="outline" size="sm" className="flex-1">
                <Link to="/#contact">Get Quote</Link>
              </Button>
              <Button asChild variant="default" size="sm" className="flex-1">
                <Link to="/products">View Catalog</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
