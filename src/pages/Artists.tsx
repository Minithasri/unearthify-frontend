import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArtistCard from "@/components/ArtistCard";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const Artists = () => {
  const [selectedArtist, setSelectedArtist] = useState<any>(null);
  const [sortBy, setSortBy] = useState("name");
  const [filterRegion, setFilterRegion] = useState("all");

  const artists = [
    {
      id: 1,
      name: "Ramesh Kumar",
      artForm: "Bharatanatyam Dance",
      region: "Tamil Nadu",
      image: "https://images.unsplash.com/photo-1583623025817-d180a2221d0a?w=400",
      bio: "A classical dancer with 20+ years of experience, preserving the ancient tradition of Bharatanatyam. Known for powerful expressions and precise movements.",
    },
    {
      id: 2,
      name: "Priya Sharma",
      artForm: "Madhubani Painting",
      region: "Bihar",
      image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=400",
      bio: "Award-winning Madhubani artist bringing traditional folk art to modern audiences. Her work has been featured in national galleries.",
    },
    {
      id: 3,
      name: "Arjun Patel",
      artForm: "Tabla Percussion",
      region: "Gujarat",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400",
      bio: "Master tabla player trained in the Hindustani classical tradition. Has performed at prestigious venues worldwide.",
    },
    {
      id: 4,
      name: "Lakshmi Iyer",
      artForm: "Carnatic Vocals",
      region: "Karnataka",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400",
      bio: "Renowned Carnatic vocalist with a melodious voice and deep understanding of ragas. Trained under legendary gurus.",
    },
    {
      id: 5,
      name: "Vikram Singh",
      artForm: "Kathak Dance",
      region: "Uttar Pradesh",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400",
      bio: "Kathak maestro known for intricate footwork and expressive storytelling through dance. Has received multiple national awards.",
    },
    {
      id: 6,
      name: "Meera Reddy",
      artForm: "Warli Art",
      region: "Maharashtra",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400",
      bio: "Contemporary Warli artist preserving tribal art traditions while adding modern interpretations. Her work celebrates rural life.",
    },
    {
      id: 7,
      name: "Anil Joshi",
      artForm: "Sitar Music",
      region: "Rajasthan",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400",
      bio: "Virtuoso sitar player combining traditional techniques with innovative compositions. Performs at international music festivals.",
    },
    {
      id: 8,
      name: "Kavita Nair",
      artForm: "Kuchipudi Dance",
      region: "Andhra Pradesh",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400",
      bio: "Graceful Kuchipudi dancer known for fluid movements and dramatic expressions. Runs a dance academy training the next generation.",
    },
    {
      id: 9,
      name: "Rajesh Gupta",
      artForm: "Pattachitra Painting",
      region: "Odisha",
      image: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=400",
      bio: "Master Pattachitra artist creating intricate scroll paintings depicting mythological stories. His work preserves centuries-old traditions.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-primary/10 to-secondary/10 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Discover Artists
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Meet the talented artists who are keeping India's rich cultural heritage alive through their dedication and artistry.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-card p-4 rounded-lg border border-border">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">Found {artists.length} artists</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
            <Select value={filterRegion} onValueChange={setFilterRegion}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Filter by region" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Regions</SelectItem>
                <SelectItem value="north">North India</SelectItem>
                <SelectItem value="south">South India</SelectItem>
                <SelectItem value="east">East India</SelectItem>
                <SelectItem value="west">West India</SelectItem>
              </SelectContent>
            </Select>
            <Select value={sortBy} onValueChange={setSortBy}>
              <SelectTrigger className="w-full sm:w-[180px]">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="name">Name (A-Z)</SelectItem>
                <SelectItem value="artform">Art Form</SelectItem>
                <SelectItem value="region">Region</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </section>

      {/* Artists Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {artists.map((artist) => (
            <div key={artist.id} className="animate-fade-in">
              <ArtistCard {...artist} onClick={() => setSelectedArtist(artist)} />
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {/* Artist Detail Modal */}
      <Dialog open={!!selectedArtist} onOpenChange={() => setSelectedArtist(null)}>
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">Artist Profile</DialogTitle>
          </DialogHeader>
          {selectedArtist && (
            <div className="space-y-4">
              <div className="aspect-square rounded-lg overflow-hidden bg-muted">
                <img
                  src={selectedArtist.image}
                  alt={selectedArtist.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">{selectedArtist.name}</h3>
                <p className="text-primary font-semibold text-lg mb-1">{selectedArtist.artForm}</p>
                <p className="text-muted-foreground mb-4 flex items-center gap-1">
                  <span className="text-secondary">📍</span> {selectedArtist.region}
                </p>
                <p className="text-foreground leading-relaxed">{selectedArtist.bio}</p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Artists;
