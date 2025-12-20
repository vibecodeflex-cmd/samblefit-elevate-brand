import { useState, useMemo } from "react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { Search, Filter, ArrowRight, Star, Shield, ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

// Import images
import leverHandlesImg from "@/assets/lever-handles.jpg";
import pullHandlesImg from "@/assets/pull-handles.jpg";
import accessoriesImg from "@/assets/accessories.jpg";
import bathroomAccessoriesImg from "@/assets/bathroom-accessories.jpg";
import pvdRangeImg from "@/assets/pvd-range.jpg";
import aluminiumDoorsImg from "@/assets/aluminium-doors.jpg";
import wardrobeImg from "@/assets/wardrobe.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import hingesImg from "@/assets/hinges.jpg";
import smartAccessImg from "@/assets/smart-access.jpg";
import doorControlsImg from "@/assets/door-controls.jpg";
import locksCylindersImg from "@/assets/locks-cylinders.jpg";
import doorAccessoriesImg from "@/assets/door-accessories.jpg";

const categories = [
  "All Products",
  "Lever Handles",
  "Pull Handles",
  "Locks & Cylinders",
  "Hinges",
  "Door Controls",
  "Bathroom Accessories",
  "PVD Collection",
  "Smart Access",
  "Door Accessories"
];

const products = [
  {
    id: 1,
    name: "ALBOURG Lever Handle",
    category: "Lever Handles",
    description: "Premium stainless steel lever handle with ergonomic design. Perfect for residential and commercial applications.",
    price: "Contact for Price",
    image: leverHandlesImg,
    features: ["5-Year Warranty", "Stainless Steel", "Fire Certified"],
    rating: 5,
    isNew: true
  },
  {
    id: 2,
    name: "ALTA Lever Handle",
    category: "Lever Handles",
    description: "Contemporary lever handle design with smooth operation. Ideal for modern architectural styles.",
    price: "Contact for Price",
    image: leverHandlesImg,
    features: ["5-Year Warranty", "Premium Finish", "Easy Install"],
    rating: 5
  },
  {
    id: 3,
    name: "BERGEN Lever Handle",
    category: "Lever Handles",
    description: "Scandinavian-inspired design combining elegance with durability for any door application.",
    price: "Contact for Price",
    image: leverHandlesImg,
    features: ["5-Year Warranty", "Stainless Steel", "Modern Design"],
    rating: 5
  },
  {
    id: 4,
    name: "Crescent Pull Handle",
    category: "Pull Handles",
    description: "Elegant curved pull handle for entrance doors. Available in various lengths and finishes.",
    price: "Contact for Price",
    image: pullHandlesImg,
    features: ["Heavy Duty", "Multiple Sizes", "Stainless Steel"],
    rating: 5,
    isNew: true
  },
  {
    id: 5,
    name: "T-Handle Pull",
    category: "Pull Handles",
    description: "Classic T-bar design pull handle suitable for glass and wooden doors.",
    price: "Contact for Price",
    image: pullHandlesImg,
    features: ["Versatile", "Easy Grip", "Durable"],
    rating: 4
  },
  {
    id: 6,
    name: "D-Handle Premium",
    category: "Pull Handles",
    description: "Professional D-shaped pull handle for commercial and residential entrance doors.",
    price: "Contact for Price",
    image: pullHandlesImg,
    features: ["Commercial Grade", "Stainless Steel", "5-Year Warranty"],
    rating: 5
  },
  {
    id: 7,
    name: "Mortice Lock System",
    category: "Locks & Cylinders",
    description: "High-security mortice lock with cylinder. Meets international security standards.",
    price: "Contact for Price",
    image: locksCylindersImg,
    features: ["High Security", "Euro Cylinder", "Anti-Pick"],
    rating: 5
  },
  {
    id: 8,
    name: "Euro Profile Cylinder",
    category: "Locks & Cylinders",
    description: "Precision-engineered cylinder with anti-snap and anti-drill protection.",
    price: "Contact for Price",
    image: locksCylindersImg,
    features: ["Anti-Snap", "Anti-Drill", "5 Keys Included"],
    rating: 5
  },
  {
    id: 9,
    name: "Residence Lock Set",
    category: "Locks & Cylinders",
    description: "Complete residential lock set with handle, lock, and cylinder for ultimate security.",
    price: "Contact for Price",
    image: locksCylindersImg,
    features: ["Complete Set", "Easy Install", "Residential Grade"],
    rating: 4
  },
  {
    id: 10,
    name: "Ball Bearing Hinge",
    category: "Hinges",
    description: "Heavy-duty ball bearing hinge for smooth, silent operation. Fire certified.",
    price: "Contact for Price",
    image: hingesImg,
    features: ["Ball Bearing", "Fire Rated", "Heavy Duty"],
    rating: 5
  },
  {
    id: 11,
    name: "Spring Hinge",
    category: "Hinges",
    description: "Self-closing spring hinge for fire doors and high-traffic areas.",
    price: "Contact for Price",
    image: hingesImg,
    features: ["Self-Closing", "Adjustable", "Fire Certified"],
    rating: 5
  },
  {
    id: 12,
    name: "Overhead Door Closer",
    category: "Door Controls",
    description: "Surface-mounted hydraulic door closer with adjustable closing speed and latching action.",
    price: "Contact for Price",
    image: doorControlsImg,
    features: ["Fire Certified", "Adjustable", "Backcheck"],
    rating: 5,
    isNew: true
  },
  {
    id: 13,
    name: "Floor Spring",
    category: "Door Controls",
    description: "Concealed floor spring for frameless glass doors. Heavy-duty construction.",
    price: "Contact for Price",
    image: doorControlsImg,
    features: ["Concealed", "Heavy Duty", "Glass Doors"],
    rating: 5
  },
  {
    id: 14,
    name: "Grab Rail Set",
    category: "Bathroom Accessories",
    description: "Stainless steel grab rail for bathroom safety. Available in multiple lengths.",
    price: "Contact for Price",
    image: bathroomAccessoriesImg,
    features: ["Safety Rated", "Stainless Steel", "Easy Mount"],
    rating: 5
  },
  {
    id: 15,
    name: "Towel Rail Double",
    category: "Bathroom Accessories",
    description: "Double towel rail in brushed stainless steel finish. Elegant and durable.",
    price: "Contact for Price",
    image: bathroomAccessoriesImg,
    features: ["Double Rail", "Brushed Finish", "Wall Mounted"],
    rating: 5
  },
  {
    id: 16,
    name: "Soap Holder Set",
    category: "Bathroom Accessories",
    description: "Complete soap holder with dish in matching stainless steel finish.",
    price: "Contact for Price",
    image: bathroomAccessoriesImg,
    features: ["Complete Set", "Rust-Proof", "Easy Clean"],
    rating: 4
  },
  {
    id: 17,
    name: "BORAS PVD Handle",
    category: "PVD Collection",
    description: "Premium PVD-coated lever handle in gold, rose gold, or black finish. Scratch-resistant coating.",
    price: "Contact for Price",
    image: pvdRangeImg,
    features: ["PVD Coating", "Scratch Resistant", "Luxury Finish"],
    rating: 5,
    isNew: true
  },
  {
    id: 18,
    name: "MOLO PVD Handle",
    category: "PVD Collection",
    description: "Contemporary PVD handle design with superior durability and stunning aesthetics.",
    price: "Contact for Price",
    image: pvdRangeImg,
    features: ["Multiple Colors", "5-Year Warranty", "Premium Quality"],
    rating: 5
  },
  {
    id: 19,
    name: "QS Access Card Reader",
    category: "Smart Access",
    description: "Modern RFID card access system for secure entry. Easy installation and management.",
    price: "Contact for Price",
    image: smartAccessImg,
    features: ["RFID Technology", "Easy Setup", "Audit Trail"],
    rating: 5
  },
  {
    id: 20,
    name: "Smart Lock System",
    category: "Smart Access",
    description: "Complete smart lock solution with keypad, card, and mobile access options.",
    price: "Contact for Price",
    image: smartAccessImg,
    features: ["Multi-Access", "Mobile App", "Battery Backup"],
    rating: 5,
    isNew: true
  },
  {
    id: 21,
    name: "Door Viewer Wide Angle",
    category: "Door Accessories",
    description: "200-degree wide-angle door viewer for enhanced security and visibility.",
    price: "Contact for Price",
    image: doorAccessoriesImg,
    features: ["Wide Angle", "Clear View", "Easy Install"],
    rating: 4
  },
  {
    id: 22,
    name: "Door Stop Floor Mount",
    category: "Door Accessories",
    description: "Heavy-duty floor-mounted door stop in stainless steel finish.",
    price: "Contact for Price",
    image: doorAccessoriesImg,
    features: ["Floor Mount", "Heavy Duty", "Stainless Steel"],
    rating: 5
  },
  {
    id: 23,
    name: "Flush Pull Handle",
    category: "Door Accessories",
    description: "Recessed flush pull handle for sliding doors. Minimalist design.",
    price: "Contact for Price",
    image: doorAccessoriesImg,
    features: ["Recessed", "Sliding Doors", "Modern Design"],
    rating: 5
  },
  {
    id: 24,
    name: "Cabin Hook & Eye",
    category: "Door Accessories",
    description: "Traditional cabin hook for holding doors open. Polished finish.",
    price: "Contact for Price",
    image: doorAccessoriesImg,
    features: ["Classic Design", "Multiple Sizes", "Polished"],
    rating: 4
  }
];

export default function ProductsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Products");
  const [showFilters, setShowFilters] = useState(false);

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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 gradient-surface">
          <div className="container-wide">
            <div className="max-w-3xl">
              <span className="text-secondary font-medium uppercase tracking-widest text-sm mb-4 block">
                Product Catalog
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Premium Hardware
                <span className="text-gradient-premium block mt-2">Collection</span>
              </h1>
              <p className="text-muted-foreground text-lg mb-8">
                Explore our comprehensive range of QS stainless steel ironmongery and door controls. 
                All products backed by a 5-year warranty and available ex-stock.
              </p>
            </div>

            {/* Search and Filter */}
            <div className="flex flex-col sm:flex-row gap-4 mt-8">
              <div className="relative flex-1 max-w-xl">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search products by name, category, or feature..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-xl border border-border bg-background text-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                />
              </div>
              <Button 
                variant="outline" 
                onClick={() => setShowFilters(!showFilters)}
                className="sm:hidden"
              >
                <Filter className="w-4 h-4 mr-2" />
                Filters
                <ChevronDown className={`w-4 h-4 ml-2 transition-transform ${showFilters ? 'rotate-180' : ''}`} />
              </Button>
            </div>
          </div>
        </section>

        {/* Products Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <aside className={`lg:w-64 flex-shrink-0 ${showFilters ? 'block' : 'hidden lg:block'}`}>
                <div className="card-premium p-6 sticky top-24">
                  <h3 className="font-display text-lg text-foreground mb-4">Categories</h3>
                  <div className="space-y-2">
                    {categories.map((category) => (
                      <button
                        key={category}
                        onClick={() => setSelectedCategory(category)}
                        className={`w-full text-left px-4 py-2 rounded-lg transition-all text-sm ${
                          selectedCategory === category
                            ? 'bg-primary text-primary-foreground font-medium'
                            : 'text-muted-foreground hover:bg-muted hover:text-foreground'
                        }`}
                      >
                        {category}
                      </button>
                    ))}
                  </div>

                  {/* Product Count */}
                  <div className="mt-6 pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      Showing <span className="font-medium text-foreground">{filteredProducts.length}</span> products
                    </p>
                  </div>

                  {/* Warranty Badge */}
                  <div className="mt-6 p-4 rounded-xl gradient-teal text-secondary-foreground">
                    <div className="flex items-center gap-2 mb-2">
                      <Shield className="w-5 h-5" />
                      <span className="font-medium">5-Year Warranty</span>
                    </div>
                    <p className="text-secondary-foreground/90 text-xs">
                      All QS products are covered by our comprehensive 5-year warranty.
                    </p>
                  </div>
                </div>
              </aside>

              {/* Product Grid */}
              <div className="flex-1">
                {filteredProducts.length === 0 ? (
                  <div className="text-center py-16">
                    <p className="text-muted-foreground text-lg mb-4">No products found matching your criteria.</p>
                    <Button variant="outline" onClick={() => { setSearchQuery(""); setSelectedCategory("All Products"); }}>
                      Clear Filters
                    </Button>
                  </div>
                ) : (
                  <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredProducts.map((product) => (
                      <Link 
                        key={product.id} 
                        to={`/collections/${product.category.toLowerCase().replace(/ & /g, '-').replace(/ /g, '-')}`}
                        className="card-premium group overflow-hidden hover:shadow-elegant transition-all duration-500"
                      >
                        {/* Image */}
                        <div className="relative aspect-[4/3] overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          {product.isNew && (
                            <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-accent text-accent-foreground text-xs font-medium">
                              New
                            </span>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Content */}
                        <div className="p-6">
                          {/* Category */}
                          <span className="text-secondary text-xs font-medium uppercase tracking-wider">
                            {product.category}
                          </span>

                          {/* Title & Rating */}
                          <div className="flex items-start justify-between gap-2 mt-2 mb-3">
                            <h3 className="font-display text-lg text-foreground group-hover:text-primary transition-colors">
                              {product.name}
                            </h3>
                            <div className="flex items-center gap-0.5">
                              {[...Array(product.rating)].map((_, i) => (
                                <Star key={i} className="w-3 h-3 fill-accent text-accent" />
                              ))}
                            </div>
                          </div>

                          {/* Description */}
                          <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                            {product.description}
                          </p>

                          {/* Features */}
                          <div className="flex flex-wrap gap-2 mb-4">
                            {product.features.slice(0, 2).map((feature, i) => (
                              <span 
                                key={i}
                                className="px-2 py-1 rounded-md bg-muted text-muted-foreground text-xs"
                              >
                                {feature}
                              </span>
                            ))}
                          </div>

                          {/* Price & CTA */}
                          <div className="flex items-center justify-between pt-4 border-t border-border">
                            <span className="text-foreground font-medium text-sm">
                              {product.price}
                            </span>
                            <span className="text-primary text-sm font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                              View Details
                              <ArrowRight className="w-4 h-4" />
                            </span>
                          </div>
                        </div>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
