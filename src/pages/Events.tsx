/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import EventCard from "@/components/EventCard";
import { Button } from "@/components/ui/button";
import { Filter } from "lucide-react";
import axios from "axios";

const Events = () => {
  const [selectedLocation, setSelectedLocation] = useState("all");

  const [eventList, setEventList] = useState<any[]>([]);

  const getImageUrl = (imagePath: string) => {
    if (!imagePath) return "";
    if (imagePath.startsWith("http")) return imagePath;
    const cleanPath = imagePath.startsWith("/") ? imagePath.substring(1) : imagePath;
    return `${import.meta.env.VITE_API_URL}/${cleanPath}`;
  };

  useEffect(() => {
    axios
      .get(`${import.meta.env.VITE_API_URL}/api/events`)
      .then((response) => {
        const data = Array.isArray(response.data) ? response.data : response.data.data;
        setEventList(data || []);
      })
      .catch((error) => {
        console.error("Error fetching events:", error);
      });
  }, []);

  const locations = [
    "All Locations",
    ...new Set(eventList.map((event) => event.location)),
  ];

  const filteredEvents =
    selectedLocation === "all"
      ? eventList
      : eventList.filter(
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
            <span className="font-medium text-foreground">
              Filter by Location
            </span>
          </div>
          <div className="flex flex-wrap gap-2">
            {locations.map((location) => (
              <Button
                key={location}
                variant={
                  selectedLocation ===
                  (location === "All Locations"
                    ? "all"
                    : location.toLowerCase())
                    ? "default"
                    : "outline"
                }
                onClick={() =>
                  setSelectedLocation(
                    location === "All Locations"
                      ? "all"
                      : location.toLowerCase()
                  )
                }
                className="rounded-full bg-[#83261d] text-white hover:bg-[#83261d] hover:text-white border border-[#83261d] hover:border-[#83261d]"
              >
                {location}
              </Button>
            ))}
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
                <EventCard 
                  {...event} 
                  image={getImageUrl(event.image || event.eventImage)} 
                />
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
