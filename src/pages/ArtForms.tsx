import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArtFormCard from "@/components/ArtFormCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

const ArtForms = () => {
  const [selectedArtForm, setSelectedArtForm] = useState<any>(null);

  const artForms = [
    {
      id: 1,
      title: "Classical Dance",
      icon: "💃",
      description: "Ancient dance forms like Bharatanatyam, Kathak, Odissi, and Kuchipudi that tell stories through movement.",
      fullDescription:
        "Indian classical dance is a sophisticated art form with roots dating back thousands of years. Each style has its unique vocabulary of movements, expressions, and storytelling techniques. These dances are deeply connected to Hindu mythology and spiritual traditions, combining rhythm, music, and narrative in a mesmerizing performance.",
    },
    {
      id: 2,
      title: "Traditional Painting",
      icon: "🎨",
      description: "Folk and classical painting styles including Madhubani, Warli, Pattachitra, and Tanjore art.",
      fullDescription:
        "Indian traditional painting encompasses diverse regional styles, each with distinctive techniques and themes. From the intricate line work of Madhubani to the geometric patterns of Warli, these art forms use natural colors and traditional materials. They often depict mythological stories, nature, and daily life, preserving cultural narratives across generations.",
    },
    {
      id: 3,
      title: "Classical Music",
      icon: "🎵",
      description: "Hindustani and Carnatic music traditions with instruments like sitar, tabla, veena, and mridangam.",
      fullDescription:
        "Indian classical music is one of the world's oldest living musical traditions. Divided into Hindustani (North) and Carnatic (South) styles, it features complex ragas (melodic frameworks) and talas (rhythmic cycles). The music is both mathematical and deeply emotional, capable of evoking specific moods and times of day.",
    },
    {
      id: 4,
      title: "Sculpture & Crafts",
      icon: "🗿",
      description: "Temple sculptures, stone carving, wood carving, and metal craft traditions.",
      fullDescription:
        "Indian sculpture and craft traditions showcase extraordinary skill in working with various materials. From intricate temple carvings to delicate metal work, these crafts reflect centuries of refined techniques. Artisans create everything from monumental religious sculptures to everyday decorative items, each piece embodying cultural and spiritual significance.",
    },
    {
      id: 5,
      title: "Textile Arts",
      icon: "🧵",
      description: "Weaving, embroidery, block printing, and dyeing techniques from different regions.",
      fullDescription:
        "India's textile heritage is among the richest in the world. Each region has developed unique weaving, printing, and embroidery techniques over centuries. From the intricate brocades of Varanasi to the vibrant tie-dye of Rajasthan, Indian textiles combine aesthetic beauty with functional design, often incorporating symbolic patterns and motifs.",
    },
    {
      id: 6,
      title: "Theatre & Drama",
      icon: "🎭",
      description: "Traditional theatre forms like Kathakali, Yakshagana, and folk performances.",
      fullDescription:
        "Indian traditional theatre combines dance, music, and dramatic storytelling in spectacular performances. Forms like Kathakali use elaborate costumes and makeup to portray epic stories, while folk theatre traditions vary widely across regions. These performances are often ritualistic and community-based, serving both entertainment and educational purposes.",
    },
    {
      id: 7,
      title: "Pottery & Ceramics",
      icon: "🏺",
      description: "Traditional pottery techniques and terracotta art from various regions.",
      fullDescription:
        "Indian pottery traditions span from utilitarian vessels to decorative terracotta sculptures. Different regions have developed distinctive styles, from the blue pottery of Jaipur to the black pottery of Manipur. Potters use traditional wheels and kilns, often incorporating symbolic designs and patterns that have been passed down through generations.",
    },
    {
      id: 8,
      title: "Martial Arts",
      icon: "🥋",
      description: "Ancient martial arts like Kalaripayattu, Silambam, and Gatka.",
      fullDescription:
        "Indian martial arts are among the oldest fighting systems in the world. Kalaripayattu from Kerala, Silambam from Tamil Nadu, and other regional styles combine physical training with spiritual discipline. These arts emphasize flexibility, weaponry skills, and healing practices, representing a holistic approach to combat and wellness.",
    },
    {
      id: 9,
      title: "Architecture",
      icon: "🏛️",
      description: "Temple architecture, traditional building methods, and regional architectural styles.",
      fullDescription:
        "Indian architecture showcases incredible diversity, from ancient rock-cut temples to intricate Mughal monuments. Traditional building techniques use local materials and climate-responsive designs. Temple architecture follows sacred geometry principles, while regional styles like Kerala's wooden architecture or Rajasthan's havelis reflect local culture and environment.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-secondary/10 to-accent/10 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Indian Art Forms
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Explore the diverse and rich artistic traditions that have flourished across India for millennia.
          </p>
        </div>
      </section>

      {/* Art Forms Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artForms.map((artForm, index) => (
            <div key={artForm.id} className="animate-fade-in" style={{ animationDelay: `${index * 0.1}s` }}>
              <ArtFormCard {...artForm} onClick={() => setSelectedArtForm(artForm)} />
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {/* Art Form Detail Modal */}
      <Dialog open={!!selectedArtForm} onOpenChange={() => setSelectedArtForm(null)}>
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl flex items-center gap-3">
              <span className="text-4xl">{selectedArtForm?.icon}</span>
              {selectedArtForm?.title}
            </DialogTitle>
          </DialogHeader>
          {selectedArtForm && (
            <div className="space-y-4">
              <p className="text-lg text-muted-foreground">{selectedArtForm.description}</p>
              <div className="h-px bg-border" />
              <p className="text-foreground leading-relaxed">{selectedArtForm.fullDescription}</p>
              <div className="bg-muted/50 p-4 rounded-lg border border-border">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Did you know?</strong> Each of India's art forms has been
                  preserved and passed down through generations of dedicated artists and gurus, maintaining their
                  authenticity while adapting to modern times.
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ArtForms;
