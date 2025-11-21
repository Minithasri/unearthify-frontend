/* eslint-disable @typescript-eslint/no-explicit-any */
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ArtFormCard from "@/components/ArtFormCard";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import dance from "../assets/form/dance.jpg";
import drama from "../assets/form/Drama.jpg";
import painting from "../assets/form/Painting.jpg";
import martial from "../assets/form/martial.jpg";
import sculpture from "../assets/form/Sculpture.jpg";
import music from "../assets/form/Music.jpg";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const ArtForms = () => {
  const [selectedArtForm, setSelectedArtForm] = useState<any>(null);

  const artForms = [
    {
      id: 1,
      title: "Dance",
      icon: "💃",
      image: dance,
      description:
        "Ancient dance forms like Bharatanatyam, Kathak, Odissi, and Kuchipudi that tell stories through movement.",
      fullDescription:
        "Indian classical dance is a sophisticated art form with roots dating back thousands of years. Each style has its unique vocabulary of movements, expressions, and storytelling techniques. These dances are deeply connected to Hindu mythology and spiritual traditions, combining rhythm, music, and narrative in a mesmerizing performance.",
    },
    {
      id: 2,
      title: "Painting",
      icon: "🎨",
      image: painting,
      description:
        "Folk and classical painting styles including Madhubani, Warli, Pattachitra, and Tanjore art.",
      fullDescription:
        "Indian traditional painting encompasses diverse regional styles, each with distinctive techniques and themes. From the intricate line work of Madhubani to the geometric patterns of Warli, these art forms use natural colors and traditional materials. They often depict mythological stories, nature, and daily life, preserving cultural narratives across generations.",
    },
    {
      id: 3,
      title: "Music",
      icon: "🎵",
      image: music,
      description:
        "Hindustani and Carnatic music traditions with instruments like sitar, tabla, veena, and mridangam.",
      fullDescription:
        "Indian classical music is one of the world's oldest living musical traditions. Divided into Hindustani (North) and Carnatic (South) styles, it features complex ragas (melodic frameworks) and talas (rhythmic cycles). The music is both mathematical and deeply emotional, capable of evoking specific moods and times of day.",
    },
    {
      id: 4,
      title: "Sculpture",
      icon: "🗿",
      image: sculpture,
      description:
        "Temple sculptures, stone carving, wood carving, and metal craft traditions.",
      fullDescription:
        "Indian sculpture and craft traditions showcase extraordinary skill in working with various materials. From intricate temple carvings to delicate metal work, these crafts reflect centuries of refined techniques. Artisans create everything from monumental religious sculptures to everyday decorative items, each piece embodying cultural and spiritual significance.",
    },
    {
      id: 5,
      title: "Martial Art",
      icon: "🧵",
      image: martial,
      description:
        "Weaving, embroidery, block printing, and dyeing techniques from different regions.",
      fullDescription:
        "India's textile heritage is among the richest in the world. Each region has developed unique weaving, printing, and embroidery techniques over centuries. From the intricate brocades of Varanasi to the vibrant tie-dye of Rajasthan, Indian textiles combine aesthetic beauty with functional design, often incorporating symbolic patterns and motifs.",
    },
    {
      id: 6,
      title: "Drama",
      icon: "🎭",
      image: drama,
      description:
        "Traditional theatre forms like Kathakali, Yakshagana, and folk performances.",
      fullDescription:
        "Indian traditional theatre combines dance, music, and dramatic storytelling in spectacular performances. Forms like Kathakali use elaborate costumes and makeup to portray epic stories, while folk theatre traditions vary widely across regions. These performances are often ritualistic and community-based, serving both entertainment and educational purposes.",
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
            Explore the diverse and rich artistic traditions that have
            flourished across India for millennia.
          </p>
        </div>
      </section>

      {/* Art Forms Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {artForms.map((artForm, index) => (
            <div
              key={artForm.id}
              className="animate-fade-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <ArtFormCard
                {...artForm}
                onClick={() => setSelectedArtForm(artForm)}
              />
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {/* Art Form Detail Modal */}
      <Dialog
        open={!!selectedArtForm}
        onOpenChange={() => setSelectedArtForm(null)}
      >
        <DialogContent className="max-w-xl rounded-xl p-6 h-[90vh] overflow-y-scroll">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-3 font-semibold">
              <span className="text-3xl">{selectedArtForm?.icon}</span>
              {selectedArtForm?.title}
            </DialogTitle>
          </DialogHeader>

          {/* Form */}
          <form className="space-y-4 mt-2">
            <div className="grid md:grid-cols-2 grid-cols-1 gap-4">
              <div className="space-y-2">
                <Label htmlFor="name" className="text-foreground font-medium">
                  Your Name <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="name"
                  type="text"
                  placeholder="Enter your full name"
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="Number" className="text-foreground font-medium">
                  Phone Number <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="Number"
                  type="tel"
                  placeholder="Enter your full name"
                  required
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="age" className="text-foreground font-medium">
                  Age <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="age"
                  type="tel"
                  placeholder="Enter your full name"
                  required
                  className="h-11"
                />
              </div>
              <div className="space-y-2">
                <Label
                  htmlFor="Location"
                  className="text-foreground font-medium"
                >
                  Location <span className="text-destructive">*</span>
                </Label>
                <Input
                  id="Location"
                  type="tel"
                  placeholder="Enter your full name"
                  required
                  className="h-11"
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="type" className="text-foreground font-medium">
                Gender <span className="text-destructive">*</span>
              </Label>
              <Select required>
                <SelectTrigger className="h-11">
                  <SelectValue placeholder="Select a gender" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="artform">Male</SelectItem>
                  <SelectItem value="event">Female</SelectItem>
                  <SelectItem value="other">Other</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* ⬇ FULL WIDTH FIELD */}

            <div className="space-y-2">
              <Label
                htmlFor="description"
                className="text-foreground font-medium"
              >
                Address <span className="text-destructive">*</span>
              </Label>
              <Textarea
                id="description"
                placeholder="Enter your address"
                required
                className="min-h-[80px] resize-none"
              />
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              size="lg"
              className="w-full bg-[#83261d] hover:bg-[#83261d]/90"
            >
              <CheckCircle2 className="mr-2" size={20} />
              Submit
            </Button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ArtForms;
