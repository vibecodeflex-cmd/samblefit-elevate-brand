import { useState, useEffect } from "react";
import { Menu, X, ChevronDown, Search } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link, useLocation, useNavigate } from "react-router-dom";

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
    ],
  },
  { name: "Collections", href: "/collections" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsMobileMenuOpen(false);
  };

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/products?search=${encodeURIComponent(searchQuery.trim())}`);
      setSearchOpen(false);
      setSearchQuery("");
    }
  };

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
        isScrolled
          ? "bg-background border-b border-border py-3"
          : "bg-background py-4"
      )}
    >
      <nav className="container-wide flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <span className="font-display text-xl font-bold tracking-tight text-foreground uppercase">
            Samblefit
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6">
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
                  "flex items-center gap-1 text-sm font-medium transition-colors py-2",
                  location.pathname === item.href
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {item.name}
                {item.dropdown && <ChevronDown className="w-3 h-3" />}
              </Link>

              {/* Dropdown */}
              {item.dropdown && activeDropdown === item.name && (
                <div className="absolute top-full left-0 pt-2 animate-fade-in">
                  <div className="bg-background border border-border py-2 min-w-[200px] shadow-elevated">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
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

        {/* Search & CTA */}
        <div className="hidden lg:flex items-center gap-4">
          {searchOpen ? (
            <form onSubmit={handleSearch} className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-48 px-3 py-1.5 text-sm border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground"
                autoFocus
              />
              <Button type="submit" variant="ghost" size="sm" className="px-2">
                <Search className="w-4 h-4" />
              </Button>
              <Button
                type="button"
                variant="ghost"
                size="sm"
                onClick={() => {
                  setSearchOpen(false);
                  setSearchQuery("");
                }}
                className="px-2"
              >
                <X className="w-4 h-4" />
              </Button>
            </form>
          ) : (
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setSearchOpen(true)}
              className="px-2"
            >
              <Search className="w-4 h-4" />
            </Button>
          )}
          <Button asChild size="sm">
            <Link to="/contact">Get Quote</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setSearchOpen(!searchOpen)}
            className="px-2"
          >
            <Search className="w-4 h-4" />
          </Button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="p-2 text-foreground"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Mobile Search */}
      {searchOpen && (
        <div className="lg:hidden border-t border-border bg-background px-4 py-3">
          <form onSubmit={handleSearch} className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search products..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="flex-1 px-3 py-2 text-sm border border-border bg-background focus:outline-none focus:ring-1 focus:ring-foreground"
              autoFocus
            />
            <Button type="submit" size="sm">
              Search
            </Button>
          </form>
        </div>
      )}

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-fade-in">
          <div className="container-wide py-4 space-y-1">
            {navigation.map((item) => (
              <div key={item.name}>
                <Link
                  to={item.href}
                  className="block py-2 text-foreground font-medium hover:text-muted-foreground transition-colors"
                  onClick={() => handleNavClick(item.href)}
                >
                  {item.name}
                </Link>
                {item.dropdown && (
                  <div className="pl-4 space-y-1 border-l border-border ml-2">
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        to={subItem.href}
                        className="block py-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <div className="pt-4">
              <Button asChild size="sm" className="w-full">
                <Link to="/contact">Get Quote</Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
