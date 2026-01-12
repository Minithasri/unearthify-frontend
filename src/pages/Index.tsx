/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Search, Sparkles, Users, Calendar } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArtistCard from "@/components/ArtistCard";
import EventCard from "@/components/EventCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import heroBanner from "@/assets/hero-banner.jpg";
import ArtFormCard from "@/components/ArtFormCard";

import Kathakali from "../assets/dance/kathakali.jpg";
import silambattam from "../assets/martial/silambattam-course-shara.jpg";
import nathaswaram from "../assets/music/nathaswaram.jpg";

import { useNavigate } from "react-router-dom";
import axios from "axios";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedArtist, setSelectedArtist] = useState<any>(null);
  const [heroText, setHeroText] = useState("");
  const fullText = "Unearth the Spirit of Indian Art & Artists";

  // Typewriter effect
  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setHeroText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 50);
    return () => clearInterval(timer);
  }, []);

  const [artistList, setArtistList] = useState<any[]>([]);
  const [artFormList, setArtFormList] = useState<any[]>([]);
  const [eventList, setEventList] = useState<any[]>([]);

  const getImageUrl = (imagePath: string) => {
    if (!imagePath) return "";
    if (imagePath.startsWith("http")) return imagePath;
    const cleanPath = imagePath.startsWith("/") ? imagePath.substring(1) : imagePath;
    return `http://localhost:5000/${cleanPath}`;
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/artists")
      .then((response) => {
        const data = Array.isArray(response.data) ? response.data : response.data.data;
        setArtistList(data || []);
      })
      .catch((error) => console.error("Error fetching artists:", error));

    axios
      .get("http://localhost:5000/api/artforms")
      .then((response) => {
        const data = Array.isArray(response.data) ? response.data : response.data.data;
        setArtFormList(data || []);
      })
      .catch((error) => console.error("Error fetching art forms:", error));

    axios
      .get("http://localhost:5000/api/events")
      .then((response) => {
        const data = Array.isArray(response.data) ? response.data : response.data.data;
        setEventList(data || []);
      })
      .catch((error) => console.error("Error fetching events:", error));
  }, []);



  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero Section */}
      <section className="relative h-[600px] overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroBanner}
            alt="Indian cultural art"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <div className="max-w-2xl animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 min-h-[140px]">
              {heroText}
              <span className="animate-pulse">|</span>
            </h1>
            <p className="text-xl text-primary-foreground/90 mb-8">
              Celebrating India's rich cultural heritage, one artist at a time
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/artists">
                <Button
                  variant="default"
                  size="lg"
                  className="bg-[#83261d] hover:bg-[#83261d]/90"
                >
                  <Users className="mr-2" size={20} />
                  Explore Artists
                </Button>
              </Link>
              <Link to="/contribute">
                <Button
                  variant="outline"
                  size="lg"
                  className="bg-primary-foreground/10 backdrop-blur-sm border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-foreground"
                >
                  <Sparkles className="mr-2" size={20} />
                  Contribute
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Section */}
      <section className="container mx-auto px-4 mt-8">
        <div className="bg-card rounded-2xl shadow-cultural p-6 border border-border">
          <div className="flex gap-2">
            <div className="relative flex-1">
              <Search
                className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground"
                size={20}
              />
              <Input
                type="text"
                placeholder="Search for artists, art forms, or events..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 h-12 text-base"
              />
            </div>
            <Button size="lg" className="bg-[#83261d] hover:bg-[#83261d]/90">
              Search
            </Button>
          </div>
        </div>
      </section>

      {/* Featured Artists */}
      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Featured Artists
            </h2>
            <p className="text-muted-foreground">
              Discover talented artists preserving Indian culture
            </p>
          </div>
          <Link to="/artists">
            <Button
              variant="outline"
              className="border-[#83261d] hover:bg-[#83261d] text-[##83261d]"
            >
              View All
            </Button>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {artistList.slice(0, 3).map((artist) => (
            <ArtistCard
              key={artist._id || artist.id}
              {...artist}
              image={getImageUrl(artist.image || artist.artistImage)}
              region={artist.state || artist.region}
              onClick={() => setSelectedArtist(artist)}
            />
          ))}
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h2 className="text-3xl font-bold text-foreground mb-2">
              Featured Art Form
            </h2>
            <p className="text-muted-foreground">
              Discover talented artists preserving Indian culture
            </p>
          </div>
          <Link to="/art-forms">
            <Button
              variant="outline"
              className="border-[#83261d] hover:bg-[#83261d] text-[##83261d]"
            >
              View All
            </Button>
          </Link>
        </div>
        <div>
          <div className="grid md:grid-cols-3 gap-6 grid-cols-1">
            {artFormList.slice(0, 3).map((item) => (
              <ArtFormCard
                key={item._id || item.id}
                title={item.title}
                category={item.category}
                description={item.description}
                image={getImageUrl(item.image || item.artFormImage)}
              />
            ))}
          </div>
        </div>
      </section>
      {/* Upcoming Events */}
      <section className="bg-muted/30 py-16">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-3xl font-bold text-foreground mb-2">
                Upcoming Events
              </h2>
              <p className="text-muted-foreground">
                Join us in celebrating Indian art and culture
              </p>
            </div>
            <Link to="/events">
              <Button
                variant="outline"
                className="border-[#83261d] hover:bg-[#83261d] text-[##83261d]"
              >
                <Calendar className="mr-2" size={18} />
                All Events
              </Button>
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventList.slice(0, 2).map((event, index) => (
              <EventCard 
                key={index} 
                {...event} 
                image={getImageUrl(event.image || event.eventImage)} 
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="bg-[#83261d] rounded-2xl p-12 text-center text-primary-foreground relative overflow-hidden">
          <div className="pattern-overlay absolute inset-0 opacity-20" />
          <div className="relative z-10">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join the Unearthify Community
            </h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto">
              Help us preserve and celebrate India's artistic heritage.
              Contribute information about artists, art forms, and events.
            </p>
            <Link to="/contribute">
              <Button
                variant="outline"
                size="lg"
                className="bg-black text-white hover:text-black hover:bg-primary-foreground/90 border-0 font-semibold"
              >
                <Sparkles className="mr-2" size={20} />
                Start Contributing
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />

      {/* Artist Detail Modal */}
      <Dialog
        open={!!selectedArtist}
        onOpenChange={() => setSelectedArtist(null)}
      >
        <DialogContent className="max-w-2xl">
          <DialogHeader>
            <DialogTitle className="text-2xl"></DialogTitle>
          </DialogHeader>
          {selectedArtist && (
            <div className="space-y-4">
              <div className="aspect-video rounded-lg overflow-hidden bg-muted">
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
                <p className="text-primary font-semibold mb-1">
                  {selectedArtist.artForm}
                </p>
                <p className="text-muted-foreground mb-4">
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

export default Index;
