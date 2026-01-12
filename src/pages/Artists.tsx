/* eslint-disable @typescript-eslint/no-explicit-any */
import { useEffect, useState } from "react";
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
import axios from "axios";
const Artists = () => {
  const [selectedArtist, setSelectedArtist] = useState<any>(null);
  // const [sortBy, setSortBy] = useState("name");
  // const [filterRegion, setFilterRegion] = useState("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredArtists, setFilteredArtists] = useState<any[]>([]);
  const [artistList, setArtistList] = useState<any[]>([]);

  const getImageUrl = (imagePath: string) => {
    if (!imagePath) return "";
    if (imagePath.startsWith("http")) return imagePath;
    // Remove leading slash if it exists and prefix with backend URL
    const cleanPath = imagePath.startsWith("/") ? imagePath.substring(1) : imagePath;
    return `${import.meta.env.VITE_API_URL}/${cleanPath}`;
  };


  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/artists`)
      .then((response) => {
        // Handle both direct array or nested data property
        const data = Array.isArray(response.data) ? response.data : response.data.data;
        setArtistList(data || []);
      })
      .catch((error) => {
        console.error("Error fetching artists data:", error);
      });
  }, []);
  console.log(artistList, "artistList");
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
              {/* Found {artists.length} artists */}
              Found {artistList.length} artists
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
          {searchQuery
            ? artistList
                .filter((artist) =>
                  artist.name.toLowerCase().includes(searchQuery.toLowerCase())
                )
                .map((artist) => (
                  <div key={artist._id || artist.id} className="animate-fade-in">
                    <ArtistCard
                      {...artist}
                      image={getImageUrl(artist.image || artist.artistImage)}
                      region={artist.state || artist.region}
                      onClick={() => setSelectedArtist(artist)}
                    />
                  </div>
                ))
            : artistList.map((artist) => (
                <div key={artist._id || artist.id} className="animate-fade-in">
                  <ArtistCard
                    {...artist}
                    image={getImageUrl(artist.image || artist.artistImage)}
                    region={artist.state || artist.region}
                    onClick={() => setSelectedArtist(artist)}
                  />
                </div>
              ))}
          {searchQuery &&
            artistList.filter((artist) =>
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
            <DialogTitle className="text-2xl">
              {selectedArtist?.name}
            </DialogTitle>
          </DialogHeader>
          {selectedArtist && (
            <div className="space-y-4">
              <div className="aspect-square  rounded-lg overflow-hidden bg-muted">
                <img
                  src={getImageUrl(selectedArtist.image || selectedArtist.artistImage)}
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
                  {selectedArtist.state || selectedArtist.region}
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
