import { useParams, Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";

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
import hingesImg from "@/assets/hinges.jpg";
import smartAccessImg from "@/assets/smart-access.jpg";
import doorControlsImg from "@/assets/door-controls.jpg";
import locksCylindersImg from "@/assets/locks-cylinders.jpg";
import homeInteriorImg from "@/assets/home-interior.jpg";
import officePartitionsImg from "@/assets/office-partitions.jpg";

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
    longDescription: "Samblefit Shop Fitting Services specializes in creating stunning retail environments that capture attention and drive sales. From aluminium shopfronts to complete interior fit-outs, we deliver turnkey solutions that transform commercial spaces.",
    images: [shopfrontImg, shopfront2Img, dutyfreeImg],
    features: [
      "Custom aluminium shopfronts",
      "Complete interior fit-out solutions",
      "Display systems and fixtures",
      "Signage and branding integration",
      "Lighting design and installation",
      "Security features and access control"
    ],
    specifications: [
      { label: "Materials", value: "Premium Aluminium, Stainless Steel, Glass" },
      { label: "Finishes", value: "Powder Coated, Anodized, PVD" },
      { label: "Lead Time", value: "4-8 weeks" },
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
    longDescription: "Our kitchen range is made from a variety of wood species that offer practical and visually appealing looks providing high performance that can stand the test of time.",
    images: [kitchenImg, homeDecoImg, wardrobeImg],
    features: [
      "Custom cabinet design and manufacturing",
      "Premium countertop solutions",
      "Integrated appliance planning",
      "Soft-close hinges and drawer systems",
      "Multiple finish options",
      "Ergonomic design"
    ],
    specifications: [
      { label: "Materials", value: "Solid Wood, MDF, Laminate, Granite" },
      { label: "Finishes", value: "Matt, Semi-Gloss, High-Gloss" },
      { label: "Lead Time", value: "6-10 weeks" },
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
    longDescription: "Our wardrobe systems offer flexibility of luxury design and style suited to your specific needs and taste. From walk-in wardrobes to built-in closets, we create storage solutions that maximize space.",
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
      { label: "Finishes", value: "Matt, Semi-Gloss, High-Gloss" },
      { label: "Lead Time", value: "4-8 weeks" },
    ],
    relatedProducts: [
      { name: "Kitchens", image: kitchenImg, link: "/collections/kitchens" },
      { name: "Home Décor", image: homeDecoImg, link: "/collections/wall-panelling" },
      { name: "Hardware", image: accessoriesImg, link: "/collections/hardware" }
    ]
  },
  "aluminium": {
    title: "Aluminium Doors & Windows",
    description: "Premium aluminium solutions for any project",
    longDescription: "We supply and fit premium aluminium doors and windows, carefully designed and constructed to be the face of your business or home. Available in a wide variety of colours and styles.",
    images: [aluminiumDoorsImg, aluminiumShopfrontImg, shopfront2Img],
    features: [
      "Custom aluminium door and window fabrication",
      "Shopfront design and installation",
      "Thermal break systems",
      "Multiple colour options",
      "Security glazing options",
      "Fire-rated solutions available"
    ],
    specifications: [
      { label: "Frame Profiles", value: "Standard, Slim-line, Heavy-duty" },
      { label: "Glass Options", value: "Single, Double, Laminated, Tinted" },
      { label: "Lead Time", value: "3-6 weeks" },
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
    longDescription: "Our wall panelling and partition systems include dado rails, demountable partitions, and drywall solutions designed for commercial and residential environments.",
    images: [wallPanellingImg, testimonialProjectsImg, homeDecoImg],
    features: [
      "Demountable partition systems",
      "Decorative dado rails",
      "Drywall partitioning solutions",
      "Acoustic treatment options",
      "Fire-resistant materials",
      "Quick installation"
    ],
    specifications: [
      { label: "Panel Types", value: "MDF, Gypsum, Acoustic, Fire-rated" },
      { label: "Dado Height", value: "900mm - 1500mm standard" },
      { label: "Lead Time", value: "2-4 weeks" },
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
    longDescription: "QS products is an uncomplicated, focused range of stainless-steel ironmongery and door controls. Its combination of superb quality and very competitive pricing makes it the best value option available.",
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
    longDescription: "Our complete range of stainless steel bathroom accessories includes grab rails, towel holders, soap dishes, and luxury fittings designed for hospitality, healthcare, and residential projects.",
    images: [bathroomAccessoriesImg, accessoriesImg, pvdRangeImg],
    features: [
      "Safety grab rails",
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
    ],
    relatedProducts: [
      { name: "Hardware Collection", image: leverHandlesImg, link: "/collections/hardware" },
      { name: "PVD Finishes", image: pvdRangeImg, link: "/collections/pvd-collection" },
      { name: "Accessories", image: accessoriesImg, link: "/products" }
    ]
  },
  "pvd-collection": {
    title: "PVD Finish Collection",
    description: "Luxury finishes for premium projects",
    longDescription: "Our exclusive PVD (Physical Vapor Deposition) coated hardware range offers stunning gold, rose gold, and black finishes that add unmatched luxury to any project.",
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
    longDescription: "Our signature range of stainless-steel lever handles features over 20 designs to suit any architectural style. Each handle is precision-manufactured from Grade 304 stainless steel.",
    images: [leverHandlesImg, accessoriesImg, pvdRangeImg],
    features: [
      "20+ design options",
      "Satin or polished finish",
      "Fire door certified options",
      "PVD finishes available",
      "Euro profile compatibility",
      "Easy installation"
    ],
    specifications: [
      { label: "Material", value: "Grade 304 Stainless Steel" },
      { label: "Finish", value: "Satin, Polished, PVD" },
      { label: "Rose Diameter", value: "52mm standard" },
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
    longDescription: "Our pull handle range includes crescent handles, T handles, D handles, and cranked designs. Perfect for entrance doors, glass doors, and feature doors.",
    images: [pullHandlesImg, leverHandlesImg, accessoriesImg],
    features: [
      "Crescent Handles",
      "T Handles in multiple lengths",
      "D Handles",
      "Cranked designs",
      "Handles on plate for timber doors",
      "Back-to-back options"
    ],
    specifications: [
      { label: "Material", value: "Grade 304 Stainless Steel" },
      { label: "Lengths", value: "300mm to 1800mm" },
      { label: "Diameter", value: "19mm, 25mm, 32mm" },
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
    longDescription: "Our lock and cylinder range meets international security standards, offering mortice locks, euro profile cylinders, and complete lock sets for residential and commercial applications.",
    images: [locksCylindersImg, pvdRangeImg, accessoriesImg],
    features: [
      "Euro profile cylinders with anti-snap protection",
      "Mortice lock cases",
      "Residence lock complete sets",
      "Hostel and hotel lock solutions",
      "High-security anti-drill cylinders",
      "Master key system compatibility"
    ],
    specifications: [
      { label: "Cylinder Type", value: "Euro Profile, Oval" },
      { label: "Security Rating", value: "Anti-snap, Anti-drill, Anti-pick" },
      { label: "Backset", value: "45mm, 57mm, 60mm options" },
    ],
    relatedProducts: [
      { name: "Lever Handles", image: leverHandlesImg, link: "/collections/lever-handles" },
      { name: "Hinges", image: hingesImg, link: "/collections/hinges" },
      { name: "Smart Access", image: smartAccessImg, link: "/collections/smart-access" }
    ]
  },
  "hinges": {
    title: "Hinges Collection",
    description: "Heavy-duty hinges for all applications",
    longDescription: "Our comprehensive range of hinges includes ball bearing hinges, spring hinges, fire-rated hinges, and concealed hinges. All manufactured from Grade 304 stainless steel.",
    images: [hingesImg, accessoriesImg, doorControlsImg],
    features: [
      "Ball bearing hinges",
      "Self-closing spring hinges",
      "Fire-rated hinges with certification",
      "Concealed hinges",
      "Heavy-duty commercial grade",
      "Multiple sizes and finishes"
    ],
    specifications: [
      { label: "Material", value: "Grade 304 Stainless Steel" },
      { label: "Finish", value: "Satin, Polished" },
      { label: "Fire Rating", value: "Up to 4 hours" },
    ],
    relatedProducts: [
      { name: "Door Controls", image: doorControlsImg, link: "/collections/door-controls" },
      { name: "Lever Handles", image: leverHandlesImg, link: "/collections/lever-handles" },
      { name: "Locks", image: locksCylindersImg, link: "/collections/locks-cylinders" }
    ]
  },
  "door-controls": {
    title: "Door Controls",
    description: "Hydraulic door closers and floor springs",
    longDescription: "Our door control range includes overhead door closers, floor springs, and automatic door systems. Designed for fire doors, glass doors, and high-traffic areas.",
    images: [doorControlsImg, accessoriesImg, hingesImg],
    features: [
      "Overhead hydraulic door closers",
      "Concealed floor springs for glass doors",
      "Adjustable closing speed",
      "Backcheck and delayed action options",
      "Fire-certified products",
      "Suitable for doors up to 120kg"
    ],
    specifications: [
      { label: "Type", value: "Overhead, Floor Spring, Concealed" },
      { label: "Door Weight", value: "Up to 120kg" },
      { label: "Fire Rating", value: "CE Marked, Fire Certified" },
    ],
    relatedProducts: [
      { name: "Hinges", image: hingesImg, link: "/collections/hinges" },
      { name: "Pull Handles", image: pullHandlesImg, link: "/collections/pull-handles" },
      { name: "Lever Handles", image: leverHandlesImg, link: "/collections/lever-handles" }
    ]
  },
  "smart-access": {
    title: "Smart Access Systems",
    description: "Electronic access control solutions",
    longDescription: "QS Access smart systems provide modern, secure entry solutions for residential and commercial properties. Our range includes RFID card readers, digital keypads, and smart locks with mobile app control.",
    images: [smartAccessImg, locksCylindersImg, pvdRangeImg],
    features: [
      "RFID card and fob access",
      "Digital keypad entry systems",
      "Smartphone app control",
      "Audit trail and access logs",
      "Battery backup operation",
      "Easy retrofit installation"
    ],
    specifications: [
      { label: "Technology", value: "RFID, Bluetooth, Keypad" },
      { label: "Power", value: "Battery with mains backup" },
      { label: "Users", value: "Up to 1000 user codes" },
    ],
    relatedProducts: [
      { name: "Locks & Cylinders", image: locksCylindersImg, link: "/collections/locks-cylinders" },
      { name: "Lever Handles", image: leverHandlesImg, link: "/collections/lever-handles" },
      { name: "Door Controls", image: doorControlsImg, link: "/collections/door-controls" }
    ]
  },
  "office-partitions": {
    title: "Office Partitions",
    description: "Demountable partition systems for modern workspaces",
    longDescription: "Our demountable partition systems provide flexible workspace solutions for offices, banks, and commercial buildings. Glass and aluminium partitions create modern, open environments while maintaining privacy.",
    images: [officePartitionsImg, wallPanellingImg, homeDecoImg],
    features: [
      "Full-height glass partitions",
      "Aluminium framing systems",
      "Acoustic glazing options",
      "Integrated blinds available",
      "Door and access solutions",
      "Easy relocation and reconfiguration"
    ],
    specifications: [
      { label: "Frame", value: "Aluminium profiles" },
      { label: "Glass", value: "Single, Double, Acoustic" },
      { label: "Height", value: "Floor to ceiling" },
      { label: "Lead Time", value: "3-5 weeks" }
    ],
    relatedProducts: [
      { name: "Wall Panelling", image: wallPanellingImg, link: "/collections/wall-panelling" },
      { name: "Door Controls", image: doorControlsImg, link: "/collections/door-controls" },
      { name: "Shopfitting", image: shopfrontImg, link: "/collections/shopfitting" }
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
        <section className="pt-24 pb-8 border-b border-border">
          <div className="container-wide">
            <Link to="/collections" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Collections
            </Link>
            
            <div className="max-w-2xl">
              <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                {collection.title}
              </h1>
              <p className="text-muted-foreground">
                {collection.description}
              </p>
            </div>
          </div>
        </section>

        {/* Image Gallery */}
        <section className="py-8">
          <div className="container-wide">
            <div className="grid md:grid-cols-3 gap-4">
              {collection.images.map((img, i) => (
                <div key={i} className="aspect-[4/3] overflow-hidden bg-muted">
                  <img
                    src={img}
                    alt={`${collection.title} ${i + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Content */}
        <section className="py-12">
          <div className="container-wide">
            <div className="grid lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <h2 className="font-semibold text-xl text-foreground mb-4">Overview</h2>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  {collection.longDescription}
                </p>

                <h3 className="font-semibold text-lg text-foreground mb-4">Features</h3>
                <ul className="grid sm:grid-cols-2 gap-3 mb-8">
                  {collection.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-foreground mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                <h3 className="font-semibold text-lg text-foreground mb-4">Specifications</h3>
                <div className="border border-border">
                  {collection.specifications.map((spec, i) => (
                    <div key={i} className={`flex ${i !== 0 ? 'border-t border-border' : ''}`}>
                      <div className="w-1/3 px-4 py-3 bg-muted text-sm font-medium text-foreground">
                        {spec.label}
                      </div>
                      <div className="w-2/3 px-4 py-3 text-sm text-muted-foreground">
                        {spec.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Sidebar */}
              <div>
                <div className="border border-border p-6 mb-6">
                  <h3 className="font-semibold text-foreground mb-4">Get a Quote</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Interested in this collection? Contact us for pricing and availability.
                  </p>
                  <Button asChild className="w-full">
                    <Link to="/contact">
                      Request Quote
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>

                <div className="border border-border p-6">
                  <h3 className="font-semibold text-foreground mb-4">Related Products</h3>
                  <div className="space-y-4">
                    {collection.relatedProducts.map((product, i) => (
                      <Link key={i} to={product.link} className="flex items-center gap-4 group">
                        <div className="w-16 h-16 bg-muted overflow-hidden flex-shrink-0">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                          />
                        </div>
                        <span className="text-sm text-foreground group-hover:underline">{product.name}</span>
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
