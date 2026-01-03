import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

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
import bathroomAccessoriesImg from "@/assets/bathroom-accessories.jpg";
import pvdRangeImg from "@/assets/pvd-range.jpg";
import hingesImg from "@/assets/hinges.jpg";
import smartAccessImg from "@/assets/smart-access.jpg";
import doorControlsImg from "@/assets/door-controls.jpg";
import locksCylindersImg from "@/assets/locks-cylinders.jpg";
import officePartitionsImg from "@/assets/office-partitions.jpg";

const collections = [
  {
    id: "shopfitting",
    title: "Shopfitting Projects",
    description: "Complete retail and commercial shopfitting solutions featuring aluminium shopfronts and custom displays.",
    image: shopfrontImg,
  },
  {
    id: "kitchens",
    title: "Kitchen Solutions",
    description: "Bespoke kitchen designs crafted from premium materials for homes and businesses.",
    image: kitchenImg,
  },
  {
    id: "wardrobes",
    title: "Wardrobe Systems",
    description: "Luxury designed wardrobes suited to your specific needs and style.",
    image: wardrobeImg,
  },
  {
    id: "aluminium",
    title: "Aluminium Doors & Windows",
    description: "Premium aluminium doors, windows and shopfronts in various colours and styles.",
    image: aluminiumDoorsImg,
  },
  {
    id: "wall-panelling",
    title: "Wall Panelling",
    description: "Decorative and acoustic wall treatments for commercial and residential spaces.",
    image: wallPanellingImg,
  },
  {
    id: "hardware",
    title: "Architectural Hardware",
    description: "Premium QS stainless steel ironmongery collection with comprehensive range.",
    image: leverHandlesImg,
  },
  {
    id: "lever-handles",
    title: "Lever Handles",
    description: "Signature range of stainless steel lever handles featuring over 20 designs.",
    image: leverHandlesImg,
  },
  {
    id: "pull-handles",
    title: "Pull Handles",
    description: "Architectural pull handles for entrance and glass doors.",
    image: pullHandlesImg,
  },
  {
    id: "locks-cylinders",
    title: "Locks & Cylinders",
    description: "High-security mortice locks and euro profile cylinders.",
    image: locksCylindersImg,
  },
  {
    id: "hinges",
    title: "Hinges Collection",
    description: "Heavy-duty ball bearing and fire-rated hinges.",
    image: hingesImg,
  },
  {
    id: "door-controls",
    title: "Door Controls",
    description: "Hydraulic overhead door closers and floor springs.",
    image: doorControlsImg,
  },
  {
    id: "bathroom",
    title: "Bathroom Accessories",
    description: "Stainless steel bathroom accessories for hospitality and residential projects.",
    image: bathroomAccessoriesImg,
  },
  {
    id: "pvd-collection",
    title: "PVD Finish Collection",
    description: "Exclusive range of PVD-coated hardware in gold, rose gold, and black.",
    image: pvdRangeImg,
  },
  {
    id: "smart-access",
    title: "Smart Access Systems",
    description: "Modern electronic access control solutions.",
    image: smartAccessImg,
  },
  {
    id: "office-partitions",
    title: "Office Partitions",
    description: "Demountable glass and aluminium partition systems for modern workspaces.",
    image: officePartitionsImg,
  },
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-24 pb-12 border-b border-border">
          <div className="container-wide">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors text-sm mb-6">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <div className="max-w-2xl">
              <h1 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                Collections
              </h1>
              <p className="text-muted-foreground">
                Browse through our extensive portfolio of completed projects and product collections.
              </p>
            </div>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="py-12">
          <div className="container-wide">
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {collections.map((collection) => (
                <Link 
                  key={collection.id}
                  to={`/collections/${collection.id}`}
                  className="group"
                >
                  {/* Image */}
                  <div className="aspect-[4/3] overflow-hidden bg-muted mb-4">
                    <img
                      src={collection.image}
                      alt={collection.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <h3 className="font-semibold text-foreground mb-2 group-hover:underline">
                    {collection.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {collection.description}
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 border-t border-border">
          <div className="container-wide text-center">
            <h2 className="font-display text-2xl text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Contact our team to discuss your requirements.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild>
                <Link to="/contact">
                  Get a Quote
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Link>
              </Button>
              <Button asChild variant="outline">
                <Link to="/products">
                  View Products
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
