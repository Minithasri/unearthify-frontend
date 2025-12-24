/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArtistCard from "@/components/ArtistCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import rukmini from "../assets/artistImage/rukmini-devi-arundale.jpg";
import devi from "../assets/artistImage/Baua Devi.jpg";
import utrapra from "../assets/artistImage/pandit-uttra.jpg";
import maha from "../assets/artistImage/Jivya_Soma_Mashe-maha.jpg";
import karnata from "../assets/artistImage/Krishna_Prasad_karnataka.jpg";
import pandit from "../assets/artistImage/pandit.jpg";
import rajas from "../assets/artistImage/sultan.jpg";
import kuchi from "../assets/artistImage/vempati-kuchi.jpeg";

const Artists = () => {
  const [selectedArtist, setSelectedArtist] = useState<any>(null);
  // const [sortBy, setSortBy] = useState("name");
  // const [filterRegion, setFilterRegion] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArtists, setFilteredArtists] = useState<any[]>([]);

  const artists = [
    {
      id: 1,
      name: "Rukmini Devi Arundale",
      artForm: "Bharatanatyam Dance",
      region: "Tamil Nadu",
      
      image: rukmini,
      bio: "Rukmini Devi Arundale was an Indian classical dancer and the key figure who revived and redefined Bharatanatyam in the 20th century. She founded Kalakshetra in Chennai, setting new artistic standards in dance, music, and traditional arts.",
    },
    {
      id: 2,
      name: "Baua Devi",
      artForm: "Madhubani Painting",
      region: "Bihar",
      image: devi,
      bio: "Baua Devi is a legendary Madhubani (Mithila) artist from Bihar, known for preserving traditional motifs through her vibrant, intricate paintings. She is one of the first women to gain national recognition for Mithila art and has been honoured with the Padma Shri.",
    },
    {
      id: 3,
      name: "Pandit Divyang Vakil",
      artForm: "Tabla Percussion",
      region: "Gujarat",
      image: pandit,
      bio: "Pandit Divyang Vakil is a renowned Indian tabla guru, composer, and founder of the Taalim School of Indian Music. He is widely respected for his innovative teaching methods and contributions to preserving and globalizing tabla education.",
    },

    {
      id: 4,
      name: "K. V. Krishna Prasad",
      artForm: "Carnatic Vocals",
      region: "Karnataka",
      image: karnata,
      bio: "K. V. Krishna Prasad is a Carnatic vocalist from Bengaluru, Karnataka, known for his soulful, traditional singing style and strong command over complex ragas. He is also a composer and performer who regularly appears in major classical music festivals across India.",
    },
    {
      id: 5,
      name: "Pandit Birju Maharaj",
      artForm: "Kathak Dance",
      region: "Uttar Pradesh",
      image: utrapra,

      bio: "Pandit Birju Maharaj was a legendary Kathak master known for his exceptional grace, storytelling, and rhythmic brilliance. As the torchbearer of the Lucknow gharana, he revolutionized Kathak through his choreography, teaching, and global performances.",
    },
    {
      id: 6,
      name: "Jivya Soma Mashe",
      artForm: "Warli Art",
      region: "Maharashtra",
      image: maha,
      bio: "Jivya Soma Mashe was a pioneering Warli artist from Maharashtra who transformed the traditional ritual art into a globally recognized visual art form. His innovative storytelling style brought Warli painting into mainstream contemporary art, earning him major awards including the Padma Shri.",
    },
    {
      id: 7,
      name: "Ustad Sultan Khan",
      artForm: "Sitar Music",
      region: "Rajasthan",
      image: rajas,
      bio: "Ustad Sultan Khan was a legendary sarangi maestro known for his soulful tone and unmatched command over the instrument. A prominent Hindustani classical vocalist as well, he brought the sarangi to global audiences through his collaborations and performances.",
    },
    {
      id: 8,
      name: "Dr. Vempati Chinna Satyam",
      artForm: "Kuchipudi Dance",
      region: "Andhra Pradesh",
      image: kuchi,
      bio: "Dr. Vempati Chinna Satyam was a legendary Kuchipudi guru from Kuchipudi village, Andhra Pradesh, trained by Vedantam Lakshminarayana Sastry and Vempati Pedda Satyam. He choreographed over 180 solo pieces and 15 dance dramas, shaping modern Kuchipudi.",
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
            Meet the talented artists who are keeping India's rich cultural
            heritage alive through their dedication and artistry.
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between bg-card p-4 rounded-lg border border-border">
          <div className="flex items-center gap-2">
            <span className="text-sm font-medium text-foreground">
              Found {artists.length} artists
            </span>
          </div>
          <div>
            {/* search bar */}
            <input
              type="text"
              placeholder="Search artists..."
              className="w-full sm:w-64 px-4 py-2 border border-border rounded-md focus:outline-none focus:ring-2 focus:ring-primary"
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {/* <div className="flex flex-col sm:flex-row gap-3 w-full sm:w-auto">
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
          </div> */}
        </div>
      </section>

      {/* Artists Grid */}
      <section className="container mx-auto px-4 pb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {/* Filtered Artists */}
          {
            searchQuery
              ? artists
                  .filter((artist) =>
                    artist.name.toLowerCase().includes(searchQuery.toLowerCase())
                  )
                  .map((artist) => (
                    <div key={artist.id} className="animate-fade-in">
                      <ArtistCard
                        {...artist}
                        onClick={() => setSelectedArtist(artist)}
                      />
                    </div>
                  ))
              : artists.map((artist) => (
                  <div key={artist.id} className="animate-fade-in">
                    <ArtistCard
                      {...artist}
                      onClick={() => setSelectedArtist(artist)}
                    />
                  </div>
                ))
          }
          {/* No results found. */}
          {searchQuery &&
            artists.filter((artist) =>
              artist.name.toLowerCase().includes(searchQuery.toLowerCase())
            ).length === 0 && (
              <p className="text-muted-foreground col-span-full text-center">
                No artists found matching "{searchQuery}"
              </p>
            )}

        </div>
      </section>

      <Footer />

      {/* Artist Detail Modal */}
      <Dialog
        open={!!selectedArtist}
        onOpenChange={() => setSelectedArtist(null)}
      >
        <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
          <DialogHeader>
            <DialogTitle className="text-2xl">{selectedArtist?.name}</DialogTitle>
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
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  {selectedArtist.name}
                </h3>
                <p className="text-primary font-semibold text-lg mb-1">
                  {selectedArtist.artForm}
                </p>
                <p className="text-muted-foreground mb-4 flex items-center gap-1">
                  <span className="text-secondary">📍</span>{" "}
                  {selectedArtist.region}
                </p>
                <p className="text-foreground leading-relaxed">
                  {selectedArtist.bio}
                </p>
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Artists;
