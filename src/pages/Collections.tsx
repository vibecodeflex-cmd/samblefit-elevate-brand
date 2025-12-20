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
import accessoriesImg from "@/assets/accessories.jpg";
import bathroomAccessoriesImg from "@/assets/bathroom-accessories.jpg";
import pvdRangeImg from "@/assets/pvd-range.jpg";
import testimonialProjectsImg from "@/assets/testimonial-projects.jpg";
import hingesImg from "@/assets/hinges.jpg";
import smartAccessImg from "@/assets/smart-access.jpg";
import doorControlsImg from "@/assets/door-controls.jpg";
import locksCylindersImg from "@/assets/locks-cylinders.jpg";
import doorAccessoriesImg from "@/assets/door-accessories.jpg";
import officePartitionsImg from "@/assets/office-partitions.jpg";
import suspendedCeilingsImg from "@/assets/suspended-ceilings.jpg";

const collections = [
  {
    id: "shopfitting",
    title: "Shopfitting Projects",
    description: "Complete retail and commercial shopfitting solutions featuring aluminium shopfronts, custom displays, and premium finishes that create stunning first impressions.",
    images: [shopfrontImg, shopfront2Img, dutyfreeImg],
    projects: ["Duty Free Shops", "Retail Stores", "Commercial Buildings"],
    stats: { completed: "50+", rating: "5-Star" }
  },
  {
    id: "kitchens",
    title: "Kitchen Solutions",
    description: "Bespoke kitchen designs crafted from premium wood species offering practical and visually appealing solutions that provide high performance and stand the test of time.",
    images: [kitchenImg, homeDecoImg, wardrobeImg],
    projects: ["Residential Kitchens", "Commercial Kitchens", "Vanities"],
    stats: { completed: "100+", rating: "Premium" }
  },
  {
    id: "wardrobes",
    title: "Wardrobe Systems",
    description: "Luxury designed wardrobes suited to your specific needs and taste. Available in a variety of finishes including matt, semi and high gloss colours.",
    images: [wardrobeImg, homeDecoImg, kitchenImg],
    projects: ["Walk-in Wardrobes", "Built-in Closets", "Dressing Rooms"],
    stats: { completed: "80+", rating: "Luxury" }
  },
  {
    id: "aluminium",
    title: "Aluminium Doors & Windows",
    description: "Supply and fitting of premium aluminium doors, windows and shopfronts. Available in a wide variety of colours and styles to complement any architectural design.",
    images: [aluminiumDoorsImg, aluminiumShopfrontImg, shopfront2Img],
    projects: ["Shopfronts", "Residential Windows", "Commercial Entrances"],
    stats: { completed: "200+", rating: "Fire Rated" }
  },
  {
    id: "wall-panelling",
    title: "Wall Panelling & Partitions",
    description: "Artistic and contemporary wall treatments including dado rails, demountable partitions, and drywall solutions for commercial and residential environments.",
    images: [wallPanellingImg, testimonialProjectsImg, homeDecoImg],
    projects: ["Office Partitions", "Dado Rails", "Decorative Panels"],
    stats: { completed: "60+", rating: "Commercial" }
  },
  {
    id: "hardware",
    title: "Architectural Hardware",
    description: "Premium QS stainless steel ironmongery collection including lever handles, pull handles, locks, cylinders, hinges and door controls with 5-year warranty.",
    images: [leverHandlesImg, pullHandlesImg, hingesImg],
    projects: ["Lever Handles", "Pull Handles", "Door Controls"],
    stats: { completed: "500+", rating: "5-Year Warranty" }
  },
  {
    id: "lever-handles",
    title: "Lever Handles",
    description: "Signature range of stainless steel lever handles featuring over 20 designs including ALBOURG, ALTA, BERGEN, HELSINKI, and more.",
    images: [leverHandlesImg, pvdRangeImg, accessoriesImg],
    projects: ["Residential", "Commercial", "Fire Doors"],
    stats: { completed: "1000+", rating: "Premium" }
  },
  {
    id: "pull-handles",
    title: "Pull Handles",
    description: "Architectural pull handles for entrance and glass doors including T-handles, D-handles, and crescent designs in various lengths.",
    images: [pullHandlesImg, leverHandlesImg, accessoriesImg],
    projects: ["Entrance Doors", "Glass Doors", "Shopfronts"],
    stats: { completed: "800+", rating: "Heavy Duty" }
  },
  {
    id: "locks-cylinders",
    title: "Locks & Cylinders",
    description: "High-security mortice locks and euro profile cylinders with anti-snap, anti-drill protection. Complete residential and commercial lock sets.",
    images: [locksCylindersImg, pvdRangeImg, accessoriesImg],
    projects: ["Mortice Locks", "Euro Cylinders", "Lock Sets"],
    stats: { completed: "600+", rating: "High Security" }
  },
  {
    id: "hinges",
    title: "Hinges Collection",
    description: "Heavy-duty ball bearing hinges, self-closing spring hinges, and fire-rated hinges for residential and commercial applications.",
    images: [hingesImg, accessoriesImg, doorControlsImg],
    projects: ["Fire Doors", "Commercial", "Residential"],
    stats: { completed: "400+", rating: "Fire Rated" }
  },
  {
    id: "door-controls",
    title: "Door Controls",
    description: "Hydraulic overhead door closers and concealed floor springs for controlled, safe door operation in commercial and residential settings.",
    images: [doorControlsImg, hingesImg, accessoriesImg],
    projects: ["Fire Doors", "Glass Doors", "Commercial"],
    stats: { completed: "350+", rating: "CE Marked" }
  },
  {
    id: "bathroom",
    title: "Bathroom Accessories",
    description: "Complete range of stainless steel bathroom accessories including grab rails, towel holders, soap dishes, and luxury fittings for hospitality and residential projects.",
    images: [bathroomAccessoriesImg, accessoriesImg, pvdRangeImg],
    projects: ["Hotels", "Hospitals", "Residential"],
    stats: { completed: "300+", rating: "Stainless Steel" }
  },
  {
    id: "pvd-collection",
    title: "PVD Finish Collection",
    description: "Exclusive range of PVD-coated hardware in stunning gold, rose gold, and black finishes. Scratch-resistant coating for lasting luxury aesthetics.",
    images: [pvdRangeImg, leverHandlesImg, pullHandlesImg],
    projects: ["Luxury Residences", "Boutique Hotels", "Premium Offices"],
    stats: { completed: "150+", rating: "Scratch Resistant" }
  },
  {
    id: "smart-access",
    title: "Smart Access Systems",
    description: "Modern electronic access control solutions including RFID card readers, digital keypads, and smart locks with mobile app control.",
    images: [smartAccessImg, locksCylindersImg, pvdRangeImg],
    projects: ["Office Buildings", "Hotels", "Residences"],
    stats: { completed: "100+", rating: "Modern Tech" }
  },
  {
    id: "door-accessories",
    title: "Door Accessories",
    description: "Essential door hardware including door viewers, door stops, flush pulls, cabin hooks, and letter plates in quality stainless steel.",
    images: [doorAccessoriesImg, accessoriesImg, hingesImg],
    projects: ["Residential", "Commercial", "Hotels"],
    stats: { completed: "450+", rating: "Complete Range" }
  },
  {
    id: "office-partitions",
    title: "Office Partitions",
    description: "Demountable glass and aluminium partition systems for modern workspaces. Create flexible office layouts with professional finishes.",
    images: [officePartitionsImg, wallPanellingImg, homeDecoImg],
    projects: ["Corporate Offices", "Banks", "Shopping Centres"],
    stats: { completed: "75+", rating: "Demountable" }
  },
  {
    id: "suspended-ceilings",
    title: "Suspended Ceilings",
    description: "Acoustic and decorative suspended ceiling solutions for commercial and institutional buildings. Integrated lighting options available.",
    images: [suspendedCeilingsImg, officePartitionsImg, wallPanellingImg],
    projects: ["Offices", "Hospitals", "Schools"],
    stats: { completed: "90+", rating: "Acoustic" }
  }
];

export default function CollectionsPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        {/* Hero Section */}
        <section className="pt-32 pb-16 gradient-surface relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-1/4 right-0 w-96 h-96 rounded-full bg-primary blur-3xl" />
            <div className="absolute bottom-0 left-1/4 w-96 h-96 rounded-full bg-secondary blur-3xl" />
          </div>
          
          <div className="container-wide relative z-10">
            <Link to="/" className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8">
              <ArrowLeft className="w-4 h-4" />
              Back to Home
            </Link>
            
            <div className="max-w-3xl">
              <span className="text-secondary font-medium uppercase tracking-widest text-sm mb-4 block">
                Our Portfolio
              </span>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
                Explore Our
                <span className="text-gradient-premium block mt-2">Collections</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                Browse through our extensive portfolio of completed projects and product collections. 
                From shopfitting to architectural hardware, discover the quality and craftsmanship 
                that defines Samblefit Design Gallery.
              </p>
            </div>
          </div>
        </section>

        {/* Collections Grid */}
        <section className="section-padding">
          <div className="container-wide">
            <div className="grid md:grid-cols-2 gap-8">
              {collections.map((collection, index) => (
                <Link 
                  key={collection.id}
                  to={`/collections/${collection.id}`}
                  className="card-premium group overflow-hidden hover:shadow-elegant transition-all duration-500"
                >
                  {/* Image Gallery Preview */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <div className="absolute inset-0 grid grid-cols-3 gap-1">
                      {collection.images.map((img, i) => (
                        <div key={i} className="relative overflow-hidden">
                          <img
                            src={img}
                            alt={`${collection.title} ${i + 1}`}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                        </div>
                      ))}
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                    
                    {/* Overlay Stats */}
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex gap-4">
                        <div className="text-background">
                          <span className="block text-2xl font-display font-bold">{collection.stats.completed}</span>
                          <span className="text-background/70 text-xs">Projects</span>
                        </div>
                      </div>
                      <span className="px-3 py-1 rounded-full bg-background/20 backdrop-blur-sm text-background text-xs font-medium">
                        {collection.stats.rating}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                      {collection.title}
                    </h3>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {collection.description}
                    </p>

                    {/* Project Tags */}
                    <div className="flex flex-wrap gap-2 mb-6">
                      {collection.projects.map((project, i) => (
                        <span 
                          key={i}
                          className="px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs"
                        >
                          {project}
                        </span>
                      ))}
                    </div>

                    {/* CTA */}
                    <div className="flex items-center justify-between pt-6 border-t border-border">
                      <span className="text-foreground font-medium">View Collection</span>
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all">
                        <ArrowRight className="w-5 h-5" />
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding gradient-surface">
          <div className="container-wide text-center">
            <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact our team to discuss your requirements and discover how Samblefit 
              can transform your vision into reality.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button asChild variant="premium" size="lg">
                <Link to="/#contact">
                  Get a Quote
                  <ArrowRight className="w-5 h-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg">
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
