import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";

import a from "../assets/events/classical.jpg";
import b from "../assets/events/folk art.jpg";
import c from "../assets/events/karnatic.jpg";
import d from "../assets/events/hand.png";
import e from "../assets/events/kathak.jpg";
import f from "../assets/events/artisan-weaving.jpg";
import g from "../assets/events/Hindu-Temple.jpg";
import h from "../assets/events/tabla.jpg";

const Events = () => {
  const [selectedLocation, setSelectedLocation] = useState("all");

  const locations = [
    "All Locations",
    "Delhi",
    "Mumbai",
    "Bangalore",
    "Chennai",
    "Kolkata",
  ];

  const events = [
    {
      title: "Classical Dance Festival",
      date: "March 15, 2025",
      location: "Delhi",
      image: a,
      description:
        "A celebration of India's rich classical dance heritage featuring performances from across the country.",
    },
    {
      title: "Folk Art Exhibition",
      date: "March 22, 2025",
      location: "Mumbai",
      image: b,
      description:
        "Discover the vibrant world of Indian folk art with works from renowned artists.",
    },
    {
      title: "Carnatic Music Concert",
      date: "April 5, 2025",
      location: "Chennai",
      image: c,
      description:
        "An evening of soulful Carnatic music performed by legendary musicians.",
    },
    {
      title: "Handicraft Fair",
      date: "April 12, 2025",
      location: "Bangalore",
      image: d,
      description:
        "Explore traditional handicrafts and meet the artisans behind these beautiful creations.",
    },
    {
      title: "Kathak Performance",
      date: "April 20, 2025",
      location: "Delhi",
      image: e,
      description:
        "Experience the grace and rhythm of Kathak dance by renowned performers.",
    },
    {
      title: "Textile & Weaving Workshop",
      date: "May 3, 2025",
      location: "Mumbai",
      image: f,
      description:
        "Learn traditional weaving techniques from master weavers in this hands-on workshop.",
    },
    {
      title: "Temple Architecture Tour",
      date: "May 15, 2025",
      location: "Chennai",
      image: g,
      description:
        "Guided tour exploring the architectural marvels of ancient South Indian temples.",
    },
    {
      title: "Tabla & Percussion Festival",
      date: "May 22, 2025",
      location: "Kolkata",
      image: h,
      description:
        "Celebrate the rhythmic beauty of Indian percussion instruments with master performers.",
    },
  ];

  const filteredEvents =
    selectedLocation === "all"
      ? events
      : events.filter(
          (event) =>
            event.location.toLowerCase() === selectedLocation.toLowerCase()
        );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Header */}
      <section className="bg-gradient-to-r from-accent/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Cultural Events
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Join us for upcoming cultural events celebrating Indian art, music,
            dance, and traditional crafts.
          </p>
        </div>
      </section>

      {/* Location Filter */}
      <section className="container mx-auto px-4 py-8">
  <div className="bg-card p-4 rounded-lg border border-border">
    <div className="flex items-center gap-2 mb-4">
      <Filter size={20} className="text-primary" />
      <span className="font-medium text-foreground">Filter by Location</span>
    </div>

    <div className="flex flex-wrap gap-2">
      {locations.map((location) => {
        const value =
          location === "All Locations" ? "all" : location.toLowerCase();

        const isActive = selectedLocation === value;

        return (
          <Button
            key={location}
            onClick={() => setSelectedLocation(value)}
            className={`rounded-full border 
              ${
                isActive
                  ? "bg-[#83261d] text-white border-[#83261d]"           // Active (highlight)
                  : "bg-white text-[#83261d] border-[#83261d] hover:bg-[#83261d] hover:text-white"
              }
            `}
            variant="outline"
          >
            {location}
          </Button>
        );
      })}
    </div>
  </div>
</section>


      {/* Events Grid */}
      <section className="container mx-auto px-4 pb-16">
        {filteredEvents.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredEvents.map((event, index) => (
              <div
                key={index}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <EventCard {...event} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <p className="text-lg text-muted-foreground">
              No events found in this location.
            </p>
            <Button
              variant="link"
              onClick={() => setSelectedLocation("all")}
              className="mt-4"
            >
              View all events
            </Button>
          </div>
        )}
      </section>

      <Footer />
    </div>
  );
};

export default Events;
