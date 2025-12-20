import { useState, useEffect } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigation = [
  { name: "Home", href: "#home" },
  {
    name: "Products",
    href: "#products",
    dropdown: [
      "Lever Handles",
      "Pull Handles",
      "Locks & Cylinders",
      "Hinges",
      "Door Controls",
      "Bathroom Accessories",
      "QS Access Smart Systems",
    ],
  },
  { name: "Services", href: "#services" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
        <a href="#home" className="flex items-center gap-3 group">
          <div className="w-12 h-12 gradient-royal rounded-lg flex items-center justify-center shadow-royal group-hover:shadow-glow transition-all duration-300">
            <span className="text-primary-foreground font-display font-bold text-xl">S</span>
          </div>
          <div className="hidden sm:block">
            <span className={cn(
              "font-display text-xl font-semibold tracking-tight transition-colors",
              isScrolled ? "text-foreground" : "text-primary-foreground"
            )}>
              Samblefit
            </span>
            <span className={cn(
              "block text-xs tracking-widest uppercase transition-colors",
              isScrolled ? "text-muted-foreground" : "text-primary-foreground/70"
            )}>
              Design Gallery
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={item.href}
                className={cn(
                  "flex items-center gap-1 text-sm font-medium transition-colors link-underline py-2",
                  isScrolled
                    ? "text-foreground hover:text-primary"
                    : "text-primary-foreground/90 hover:text-primary-foreground"
                )}
              >
                {item.name}
                {item.dropdown && <ChevronDown className="w-4 h-4" />}
              </a>

              {/* Dropdown */}
              {item.dropdown && activeDropdown === item.name && (
                <div className="absolute top-full left-0 pt-2 animate-fade-up">
                  <div className="bg-card rounded-lg shadow-elevated border border-border/50 py-2 min-w-[220px]">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href={`#${subItem.toLowerCase().replace(/ /g, "-")}`}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      >
                        {subItem}
                      </a>
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
            variant={isScrolled ? "outline" : "heroOutline"}
            size="sm"
          >
            Get Quote
          </Button>
          <Button
            variant={isScrolled ? "default" : "hero"}
            size="sm"
          >
            View Catalog
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className={cn(
            "lg:hidden p-2 rounded-lg transition-colors",
            isScrolled
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
                <a
                  href={item.href}
                  className="block py-3 text-foreground font-medium hover:text-primary transition-colors"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item.name}
                </a>
                {item.dropdown && (
                  <div className="pl-4 space-y-1 border-l-2 border-border ml-2">
                    {item.dropdown.map((subItem) => (
                      <a
                        key={subItem}
                        href={`#${subItem.toLowerCase().replace(/ /g, "-")}`}
                        className="block py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="flex gap-3 pt-4">
              <Button variant="outline" size="sm" className="flex-1">
                Get Quote
              </Button>
              <Button variant="default" size="sm" className="flex-1">
                View Catalog
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
