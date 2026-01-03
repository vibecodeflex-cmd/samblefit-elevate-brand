import { useState, useMemo, useEffect } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Search, ArrowRight, ChevronDown } from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";

// Import images
import leverHandlesImg from "@/assets/lever-handles.jpg";
import pullHandlesImg from "@/assets/pull-handles.jpg";
import bathroomAccessoriesImg from "@/assets/bathroom-accessories.jpg";
import pvdRangeImg from "@/assets/pvd-range.jpg";
import hingesImg from "@/assets/hinges.jpg";
import smartAccessImg from "@/assets/smart-access.jpg";
import doorControlsImg from "@/assets/door-controls.jpg";
import locksCylindersImg from "@/assets/locks-cylinders.jpg";

const categories = [
  "All Products",
  "Lever Handles",
  "Pull Handles",
  "Locks & Cylinders",
  "Hinges",
  "Door Controls",
  "Bathroom Accessories",
  "PVD Collection",
  "Smart Access"
];

const products = [
  {
    id: 1,
    name: "ALBOURG Lever Handle",
    category: "Lever Handles",
    description: "Premium stainless steel lever handle with ergonomic design.",
    image: leverHandlesImg,
  },
  {
    id: 2,
    name: "ALTA Lever Handle",
    category: "Lever Handles",
    description: "Contemporary lever handle design with smooth operation.",
    image: leverHandlesImg,
  },
  {
    id: 3,
    name: "BERGEN Lever Handle",
    category: "Lever Handles",
    description: "Scandinavian-inspired design combining elegance with durability.",
    image: leverHandlesImg,
  },
  {
    id: 4,
    name: "HELSINKI Lever Handle",
    category: "Lever Handles",
    description: "Modern lever handle with clean lines and premium finish.",
    image: leverHandlesImg,
  },
  {
    id: 5,
    name: "Crescent Pull Handle",
    category: "Pull Handles",
    description: "Elegant curved pull handle for entrance doors.",
    image: pullHandlesImg,
  },
  {
    id: 6,
    name: "T-Handle Pull",
    category: "Pull Handles",
    description: "Classic T-bar design pull handle for glass and wooden doors.",
    image: pullHandlesImg,
  },
  {
    id: 7,
    name: "D-Handle Premium",
    category: "Pull Handles",
    description: "Professional D-shaped pull handle for commercial use.",
    image: pullHandlesImg,
  },
  {
    id: 8,
    name: "Mortice Lock System",
    category: "Locks & Cylinders",
    description: "High-security mortice lock with cylinder.",
    image: locksCylindersImg,
  },
  {
    id: 9,
    name: "Euro Profile Cylinder",
    category: "Locks & Cylinders",
    description: "Precision-engineered cylinder with anti-snap protection.",
    image: locksCylindersImg,
  },
  {
    id: 10,
    name: "Residence Lock Set",
    category: "Locks & Cylinders",
    description: "Complete residential lock set with handle and cylinder.",
    image: locksCylindersImg,
  },
  {
    id: 11,
    name: "Ball Bearing Hinge",
    category: "Hinges",
    description: "Heavy-duty ball bearing hinge for smooth operation.",
    image: hingesImg,
  },
  {
    id: 12,
    name: "Spring Hinge",
    category: "Hinges",
    description: "Self-closing spring hinge for fire doors.",
    image: hingesImg,
  },
  {
    id: 13,
    name: "Overhead Door Closer",
    category: "Door Controls",
    description: "Surface-mounted hydraulic door closer.",
    image: doorControlsImg,
  },
  {
    id: 14,
    name: "Floor Spring",
    category: "Door Controls",
    description: "Concealed floor spring for frameless glass doors.",
    image: doorControlsImg,
  },
  {
    id: 15,
    name: "Grab Rail Set",
    category: "Bathroom Accessories",
    description: "Stainless steel grab rail for bathroom safety.",
    image: bathroomAccessoriesImg,
  },
  {
    id: 16,
    name: "Towel Rail Double",
    category: "Bathroom Accessories",
    description: "Double towel rail in brushed stainless steel.",
    image: bathroomAccessoriesImg,
  },
  {
    id: 17,
    name: "Soap Holder Set",
    category: "Bathroom Accessories",
    description: "Complete soap holder with dish in stainless steel.",
    image: bathroomAccessoriesImg,
  },
  {
    id: 18,
    name: "BORAS PVD Handle",
    category: "PVD Collection",
    description: "Premium PVD-coated lever handle in gold finish.",
    image: pvdRangeImg,
  },
  {
    id: 19,
    name: "MOLO PVD Handle",
    category: "PVD Collection",
    description: "Contemporary PVD handle in rose gold or black.",
    image: pvdRangeImg,
  },
  {
    id: 20,
    name: "QS Access Card Reader",
    category: "Smart Access",
    description: "Modern RFID card access system for secure entry.",
    image: smartAccessImg,
  },
  {
    id: 21,
    name: "Smart Lock System",
    category: "Smart Access",
    description: "Complete smart lock with keypad and mobile access.",
    image: smartAccessImg,
  },
];

export default function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialSearch = searchParams.get("search") || "";
  const initialCategory = searchParams.get("category") || "All Products";
  
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    const search = searchParams.get("search");
    const category = searchParams.get("category");
    if (search) setSearchQuery(search);
    if (category) setSelectedCategory(category);
  }, [searchParams]);

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesSearch = 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase());
      
      const matchesCategory = 
        selectedCategory === "All Products" || product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, selectedCategory]);

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    if (category === "All Products") {
      searchParams.delete("category");
    } else {
      searchParams.set("category", category);
    }
    setSearchParams(searchParams);
  };

  const handleSearchChange = (value: string) => {
    setSearchQuery(value);
    if (value) {
      searchParams.set("search", value);
    } else {
      searchParams.delete("search");
    }
    setSearchParams(searchParams);
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-12 border-b border-border">
          <div className="container-wide">
            <div className="max-w-2xl">
              <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Products
              </h1>
              <p className="text-muted-foreground">
                Explore our comprehensive range of premium stainless steel hardware and door controls.
              </p>
            </div>

            {/* Search */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 border border-border bg-background text-foreground text-sm focus:outline-none focus:ring-1 focus:ring-foreground transition-all"
                />
              </div>
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden"
              >
                Filters
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="py-12">
          <div className="container-wide">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <aside className={`lg:w-48 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                <div className="sticky top-24">
                  <h3 className="font-semibold text-sm uppercase tracking-wider text-foreground mb-4">Categories</h3>
                  <div className="space-y-1">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => handleCategoryChange(category)}
                        className={`w-full text-left px-3 py-2 transition-all text-sm ${
                          selectedCategory === category
                            ? 'bg-foreground text-background font-medium'
                            : 'text-muted-foreground hover:text-foreground'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  {/* Product Count */}
                  <div className="mt-8 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      {filteredProducts.length} products
                    </p>
                  </div>
                </div>
              </aside>

              {/* Product Grid */}
              <div className="flex-1">
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground mb-4">No products found.</p>
                    <Button variant="outline" onClick={() => { setSearchQuery(""); handleCategoryChange("All Products"); }}>
                      Clear Filters
                    </Button>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {filteredProducts.map((product) => (
                      <Link 
                        key={product.id} 
                        to={`/collections/${product.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                        className="group"
                      >
                        {/* Image */}
                        <div className="aspect-square overflow-hidden bg-muted mb-4">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                          />
                        </div>

                        {/* Content */}
                        <div>
                          <span className="text-xs text-muted-foreground uppercase tracking-wider">
                            {product.category}
                          </span>
                          <h3 className="font-medium text-foreground mt-1 group-hover:underline">
                            {product.name}
                          </h3>
                          <p className="text-sm text-muted-foreground mt-1 line-clamp-2">
                            {product.description}
                          </p>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 border-t border-border">
          <div className="container-wide text-center">
            <h2 className="font-display text-2xl text-foreground mb-4">
              Need Help Choosing?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Contact our team for expert advice on selecting the right hardware for your project.
            </p>
            <Button asChild>
              <Link to="/contact">
                Get in Touch
                <ArrowRight className="w-4 h-4 ml-2" />
              </Link>
            </Button>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
