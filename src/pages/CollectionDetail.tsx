import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check, Star, Shield, Phone } from "lucide-react";

// Import images
import shopfrontImg from "@/assets/shopfront.jpg";
import shopfront2Img from "@/assets/shopfront-2.jpg";
import dutyfreeImg from "@/assets/dutyfree.jpg";
import homeDecoImg from "@/assets/home-deco.jpg";
import aluminiumShopfrontImg from "@/assets/aluminium-shopfront.jpg";
import wallPanellingImg from "@/assets/wall-panelling.jpg";
import kitchenImg from "@/assets/kitchen.jpg";
import wardrobeImg from "@/assets/wardrobe.jpg";
import aluminiumDoorsImg from "@/assets/aluminium-doors.jpg";
import leverHandlesImg from "@/assets/lever-handles.jpg";
import pullHandlesImg from "@/assets/pull-handles.jpg";
import accessoriesImg from "@/assets/accessories.jpg";
import bathroomAccessoriesImg from "@/assets/bathroom-accessories.jpg";
import pvdRangeImg from "@/assets/pvd-range.jpg";
import testimonialProjectsImg from "@/assets/testimonial-projects.jpg";

const collectionsData: Record<string, {
  title: string;
  description: string;
  longDescription: string;
  images: string[];
  features: string[];
  specifications: { label: string; value: string }[];
  relatedProducts: { name: string; image: string; link: string }[];
}> = {
  "shopfitting": {
    title: "Shopfitting Projects",
    description: "Complete retail and commercial shopfitting solutions",
    longDescription: "Samblefit Shop Fitting Services specializes in creating stunning retail environments that capture attention and drive sales. From aluminium shopfronts to complete interior fit-outs, we deliver turnkey solutions that transform commercial spaces. Our work includes duty-free shops, retail stores, and commercial buildings across Zambia.",
    images: [shopfrontImg, shopfront2Img, dutyfreeImg],
    features: [
      "Custom aluminium shopfronts in various colours and styles",
      "Complete interior fit-out solutions",
      "Display systems and fixtures",
      "Signage and branding integration",
      "Lighting design and installation",
      "Security features and access control"
    ],
    specifications: [
      { label: "Materials", value: "Premium Aluminium, Stainless Steel, Glass" },
      { label: "Finishes", value: "Powder Coated, Anodized, PVD" },
      { label: "Lead Time", value: "4-8 weeks depending on scope" },
      { label: "Warranty", value: "5 years on hardware, 2 years on installation" }
    ],
    relatedProducts: [
      { name: "Aluminium Doors", image: aluminiumDoorsImg, link: "/collections/aluminium" },
      { name: "Door Hardware", image: leverHandlesImg, link: "/collections/hardware" },
      { name: "Wall Panelling", image: wallPanellingImg, link: "/collections/wall-panelling" }
    ]
  },
  "kitchens": {
    title: "Kitchen Solutions",
    description: "Bespoke kitchen designs for homes and businesses",
    longDescription: "Our kitchen range is made from a variety of wood species that offer practical and visually appealing looks providing high performance that can stand the test of time. From contemporary designs to classic styles, we create kitchens that are both functional and beautiful, tailored to your specific needs and lifestyle.",
    images: [kitchenImg, homeDecoImg, wardrobeImg],
    features: [
      "Custom cabinet design and manufacturing",
      "Premium countertop solutions",
      "Integrated appliance planning",
      "Soft-close hinges and drawer systems",
      "Multiple finish options including matt, semi and high gloss",
      "Ergonomic design for maximum functionality"
    ],
    specifications: [
      { label: "Materials", value: "Solid Wood, MDF, Laminate, Granite" },
      { label: "Finishes", value: "Matt, Semi-Gloss, High-Gloss" },
      { label: "Lead Time", value: "6-10 weeks" },
      { label: "Warranty", value: "5 years" }
    ],
    relatedProducts: [
      { name: "Wardrobes", image: wardrobeImg, link: "/collections/wardrobes" },
      { name: "Bathroom Accessories", image: bathroomAccessoriesImg, link: "/collections/bathroom" },
      { name: "Door Handles", image: pullHandlesImg, link: "/collections/hardware" }
    ]
  },
  "wardrobes": {
    title: "Wardrobe Systems",
    description: "Luxury wardrobes tailored to your style",
    longDescription: "Our wardrobe systems offer flexibility of luxury design and style suited to your specific needs and taste. From walk-in wardrobes to built-in closets, we create storage solutions that maximize space while adding elegance to your bedroom. Our different designed range is available in a variety of finishes.",
    images: [wardrobeImg, homeDecoImg, kitchenImg],
    features: [
      "Walk-in wardrobe design",
      "Built-in closet systems",
      "Sliding and hinged door options",
      "Internal organizers and accessories",
      "LED lighting integration",
      "Mirror and dressing area solutions"
    ],
    specifications: [
      { label: "Materials", value: "Melamine, Lacquer, Wood Veneer" },
      { label: "Finishes", value: "Matt, Semi-Gloss, High-Gloss Colours" },
      { label: "Lead Time", value: "4-8 weeks" },
      { label: "Warranty", value: "5 years" }
    ],
    relatedProducts: [
      { name: "Kitchens", image: kitchenImg, link: "/collections/kitchens" },
      { name: "Home Décor", image: homeDecoImg, link: "/collections/wall-panelling" },
      { name: "Door Accessories", image: accessoriesImg, link: "/collections/hardware" }
    ]
  },
  "aluminium": {
    title: "Aluminium Doors & Windows",
    description: "Premium aluminium solutions for any project",
    longDescription: "We supply and fit premium aluminium doors and windows, carefully designed and constructed to be the face of your business or home. Our aluminium shopfronts are available in a wide variety of colours and styles, providing durability, security, and stunning aesthetics for both residential and commercial applications.",
    images: [aluminiumDoorsImg, aluminiumShopfrontImg, shopfront2Img],
    features: [
      "Custom aluminium door and window fabrication",
      "Shopfront design and installation",
      "Thermal break systems for energy efficiency",
      "Multiple colour options via powder coating",
      "Security glazing options",
      "Fire-rated solutions available"
    ],
    specifications: [
      { label: "Frame Profiles", value: "Standard, Slim-line, Heavy-duty" },
      { label: "Glass Options", value: "Single, Double, Laminated, Tinted" },
      { label: "Lead Time", value: "3-6 weeks" },
      { label: "Warranty", value: "10 years on frames, 5 years on hardware" }
    ],
    relatedProducts: [
      { name: "Shopfitting", image: shopfrontImg, link: "/collections/shopfitting" },
      { name: "Pull Handles", image: pullHandlesImg, link: "/products" },
      { name: "Door Controls", image: accessoriesImg, link: "/products" }
    ]
  },
  "wall-panelling": {
    title: "Wall Panelling & Partitions",
    description: "Interior wall solutions for modern spaces",
    longDescription: "Our wall panelling and partition systems include dado rails, demountable partitions, and drywall solutions designed for commercial and residential environments. These artistic and contemporary wall treatments protect walls while adding sophistication to any space, from offices to shopping centres and hospitals.",
    images: [wallPanellingImg, testimonialProjectsImg, homeDecoImg],
    features: [
      "Demountable partition systems",
      "Decorative dado rails at various heights",
      "Drywall partitioning solutions",
      "Acoustic treatment options",
      "Fire-resistant materials available",
      "Quick installation with minimal disruption"
    ],
    specifications: [
      { label: "Panel Types", value: "MDF, Gypsum, Acoustic, Fire-rated" },
      { label: "Dado Height", value: "900mm - 1500mm standard" },
      { label: "Lead Time", value: "2-4 weeks" },
      { label: "Applications", value: "Office, Retail, Healthcare, Education" }
    ],
    relatedProducts: [
      { name: "Shopfitting", image: shopfrontImg, link: "/collections/shopfitting" },
      { name: "Kitchens", image: kitchenImg, link: "/collections/kitchens" },
      { name: "Wardrobes", image: wardrobeImg, link: "/collections/wardrobes" }
    ]
  },
  "hardware": {
    title: "Architectural Hardware",
    description: "Premium QS stainless steel ironmongery",
    longDescription: "QS products is an uncomplicated, focused range of stainless-steel ironmongery and door controls. Its combination of superb quality and very competitive pricing makes it the best value for money option available in Zambia. The signature range of stainless-steel door handles is supported by a full complement of accessories, locks, cylinders, hinges and hydraulic door controls.",
    images: [leverHandlesImg, pullHandlesImg, accessoriesImg],
    features: [
      "Lever handles in 20+ designs",
      "Pull handles for entrance doors",
      "High-security locks and cylinders",
      "Ball bearing and fire-rated hinges",
      "Overhead and floor spring door closers",
      "Complete panic hardware range"
    ],
    specifications: [
      { label: "Material", value: "Grade 304 Stainless Steel" },
      { label: "Finish", value: "Satin, Polished, PVD options" },
      { label: "Fire Rating", value: "Full certification available" },
      { label: "Warranty", value: "5 years on all products" }
    ],
    relatedProducts: [
      { name: "PVD Collection", image: pvdRangeImg, link: "/collections/pvd-collection" },
      { name: "Bathroom Accessories", image: bathroomAccessoriesImg, link: "/collections/bathroom" },
      { name: "Door Controls", image: accessoriesImg, link: "/products" }
    ]
  },
  "bathroom": {
    title: "Bathroom Accessories",
    description: "Premium stainless steel bathroom fittings",
    longDescription: "Our complete range of stainless steel bathroom accessories includes grab rails, towel holders, soap dishes, and luxury fittings designed for hospitality, healthcare, and residential projects. All products are manufactured from high-grade stainless steel for durability and hygiene, meeting international standards for quality.",
    images: [bathroomAccessoriesImg, accessoriesImg, pvdRangeImg],
    features: [
      "Safety grab rails in multiple lengths",
      "Towel rails and rings",
      "Soap holders and dispensers",
      "Toilet roll holders",
      "Robe hooks and accessories",
      "Disability-compliant options"
    ],
    specifications: [
      { label: "Material", value: "Grade 304 Stainless Steel" },
      { label: "Finish", value: "Brushed, Polished, Matt" },
      { label: "Mounting", value: "Concealed fixings" },
      { label: "Warranty", value: "5 years" }
    ],
    relatedProducts: [
      { name: "Hardware Collection", image: leverHandlesImg, link: "/collections/hardware" },
      { name: "PVD Finishes", image: pvdRangeImg, link: "/collections/pvd-collection" },
      { name: "Door Accessories", image: accessoriesImg, link: "/products" }
    ]
  },
  "pvd-collection": {
    title: "PVD Finish Collection",
    description: "Luxury finishes for premium projects",
    longDescription: "Our exclusive PVD (Physical Vapor Deposition) coated hardware range offers stunning gold, rose gold, and black finishes that add unmatched luxury to any project. The scratch-resistant coating ensures lasting beauty, making these products ideal for high-end residences, boutique hotels, and premium commercial spaces.",
    images: [pvdRangeImg, leverHandlesImg, pullHandlesImg],
    features: [
      "BORAS and MOLO PVD lever handles",
      "Gold, rose gold, and black finishes",
      "Scratch-resistant PVD coating",
      "Matching pull handles and accessories",
      "Residential lock sets in PVD",
      "Complete suite coordination"
    ],
    specifications: [
      { label: "Base Material", value: "Grade 304 Stainless Steel" },
      { label: "PVD Finishes", value: "Gold, Rose Gold, Matt Black" },
      { label: "Coating Durability", value: "10+ years under normal use" },
      { label: "Warranty", value: "5 years" }
    ],
    relatedProducts: [
      { name: "Lever Handles", image: leverHandlesImg, link: "/products" },
      { name: "Pull Handles", image: pullHandlesImg, link: "/products" },
      { name: "Bathroom Accessories", image: bathroomAccessoriesImg, link: "/collections/bathroom" }
    ]
  },
  "lever-handles": {
    title: "Lever Handles Collection",
    description: "Premium stainless steel lever handles",
    longDescription: "Our signature range of stainless-steel lever handles features over 20 designs to suit any architectural style. From the contemporary ALBOURG to the classic OSLO, each handle is precision-manufactured from Grade 304 stainless steel and covered by our comprehensive 5-year warranty.",
    images: [leverHandlesImg, accessoriesImg, pvdRangeImg],
    features: [
      "20+ design options including ALBOURG, ALTA, BERGEN, BODO",
      "DALA, EKERO, HELSINKI, KOLARI, IYA, MALINDI",
      "MALMO, MOLO, MOROMBE, NAMSOS, NUUK",
      "OSLO, OULU, SALO, SAMBAVA, UMEÅ",
      "All available in satin or polished finish",
      "Fire door certified options"
    ],
    specifications: [
      { label: "Material", value: "Grade 304 Stainless Steel" },
      { label: "Finish", value: "Satin, Polished, PVD" },
      { label: "Rose Diameter", value: "52mm standard" },
      { label: "Warranty", value: "5 years" }
    ],
    relatedProducts: [
      { name: "Pull Handles", image: pullHandlesImg, link: "/collections/pull-handles" },
      { name: "PVD Collection", image: pvdRangeImg, link: "/collections/pvd-collection" },
      { name: "Door Controls", image: accessoriesImg, link: "/products" }
    ]
  },
  "pull-handles": {
    title: "Pull Handles Collection",
    description: "Entrance and glass door pull handles",
    longDescription: "Our pull handle range includes crescent handles, T handles, D handles, cranked designs, and handles on plate. Perfect for entrance doors, glass doors, and feature doors, these handles make a strong first impression while providing comfortable, ergonomic grip.",
    images: [pullHandlesImg, leverHandlesImg, accessoriesImg],
    features: [
      "Crescent Handles for curved elegance",
      "T Handles in multiple lengths",
      "D Handles in standard and BT versions",
      "Cranked D and T Handles",
      "QS251314 signature handle",
      "Handles on plate for timber doors"
    ],
    specifications: [
      { label: "Material", value: "Grade 304 Stainless Steel" },
      { label: "Lengths", value: "300mm to 1800mm" },
      { label: "Diameter", value: "19mm, 25mm, 32mm" },
      { label: "Warranty", value: "5 years" }
    ],
    relatedProducts: [
      { name: "Lever Handles", image: leverHandlesImg, link: "/collections/lever-handles" },
      { name: "Door Controls", image: accessoriesImg, link: "/products" },
      { name: "Aluminium Doors", image: aluminiumDoorsImg, link: "/collections/aluminium" }
    ]
  },
  "locks-cylinders": {
    title: "Locks & Cylinders",
    description: "High-security locking solutions",
    longDescription: "Our lock and cylinder range meets international security standards, offering mortice locks, euro profile cylinders, and complete lock sets for residential and commercial applications. From hostel locks to residence sets, we provide solutions for every security requirement.",
    images: [pvdRangeImg, accessoriesImg, leverHandlesImg],
    features: [
      "Euro profile cylinders with anti-snap protection",
      "Mortice lock cases in multiple sizes",
      "Residence lock complete sets",
      "Hostel and hotel lock solutions",
      "High-security anti-drill cylinders",
      "Master key system compatibility"
    ],
    specifications: [
      { label: "Cylinder Type", value: "Euro Profile, Oval" },
      { label: "Security Rating", value: "Anti-snap, Anti-drill, Anti-pick" },
      { label: "Backset", value: "45mm, 57mm, 60mm options" },
      { label: "Warranty", value: "5 years" }
    ],
    relatedProducts: [
      { name: "Lever Handles", image: leverHandlesImg, link: "/collections/lever-handles" },
      { name: "Hinges", image: accessoriesImg, link: "/products" },
      { name: "Smart Access", image: pvdRangeImg, link: "/products" }
    ]
  }
};

export default function CollectionDetailPage() {
  const { collectionId } = useParams();
  const collection = collectionsData[collectionId || ""] || collectionsData["hardware"];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-8 gradient-surface">
          <div className="container-wide">
            <Link to="/collections" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Collections
            </Link>
            
            <div className="max-w-3xl">
              <span className="text-secondary font-medium uppercase tracking-widest text-sm mb-4 block">
                Collection
              </span>
              <h1 className="font-display text-4xl md:text-5xl text-foreground mb-6">
                {collection.title}
              </h1>
              <p className="text-muted-foreground text-lg">
                {collection.description}
              </p>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-12">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-4">
              {collection.images.map((img, index) => (
                <div 
                  key={index} 
                  className={`relative overflow-hidden rounded-2xl ${index === 0 ? 'md:col-span-2 md:row-span-2' : ''}`}
                >
                  <img
                    src={img}
                    alt={`${collection.title} ${index + 1}`}
                    className={`w-full object-cover hover:scale-105 transition-transform duration-700 ${index === 0 ? 'h-96 md:h-full' : 'h-48 md:h-56'}`}
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content Section */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2 space-y-12">
                {/* Description */}
                <div>
                  <h2 className="font-display text-2xl text-foreground mb-4">About This Collection</h2>
                  <p className="text-muted-foreground leading-relaxed text-lg">
                    {collection.longDescription}
                  </p>
                </div>

                {/* Features */}
                <div>
                  <h2 className="font-display text-2xl text-foreground mb-6">Features & Benefits</h2>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {collection.features.map((feature, index) => (
                      <div key={index} className="flex items-start gap-3">
                        <div className="w-6 h-6 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                          <Check className="w-4 h-4 text-secondary" />
                        </div>
                        <span className="text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Specifications */}
                <div>
                  <h2 className="font-display text-2xl text-foreground mb-6">Specifications</h2>
                  <div className="card-premium divide-y divide-border">
                    {collection.specifications.map((spec, index) => (
                      <div key={index} className="flex justify-between py-4 px-6">
                        <span className="text-muted-foreground">{spec.label}</span>
                        <span className="text-foreground font-medium">{spec.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Sidebar */}
              <div className="space-y-6">
                {/* CTA Card */}
                <div className="card-premium p-6 gradient-primary text-primary-foreground sticky top-24">
                  <h3 className="font-display text-xl mb-3">Interested in this collection?</h3>
                  <p className="text-primary-foreground/90 mb-6 text-sm">
                    Contact us for pricing, samples, and expert advice on your project requirements.
                  </p>
                  <div className="space-y-3">
                    <Button asChild variant="heroOutline" className="w-full">
                      <Link to="/#contact">
                        Request Quote
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                    <Button variant="ghost" className="w-full text-primary-foreground hover:bg-primary-foreground/10">
                      <Phone className="w-4 h-4 mr-2" />
                      Call Us Now
                    </Button>
                  </div>
                </div>

                {/* Warranty Badge */}
                <div className="card-premium p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-12 h-12 rounded-xl bg-secondary/10 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-secondary" />
                    </div>
                    <div>
                      <h4 className="font-display text-foreground">5-Year Warranty</h4>
                      <p className="text-muted-foreground text-sm">Quality guaranteed</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                    ))}
                  </div>
                </div>

                {/* Related Products */}
                <div className="card-premium p-6">
                  <h4 className="font-display text-lg text-foreground mb-4">Related Collections</h4>
                  <div className="space-y-4">
                    {collection.relatedProducts.map((product, index) => (
                      <Link 
                        key={index}
                        to={product.link}
                        className="flex items-center gap-4 group"
                      >
                        <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                          <img 
                            src={product.image} 
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform"
                          />
                        </div>
                        <div className="flex-1">
                          <h5 className="text-foreground group-hover:text-primary transition-colors font-medium">
                            {product.name}
                          </h5>
                          <span className="text-muted-foreground text-sm">View collection</span>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
