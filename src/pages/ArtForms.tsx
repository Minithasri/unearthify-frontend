// export default ArtForms;
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
import Breadcrumbs from "@/components/Breadcrumbs";

import dance from "../assets/form/dance.jpg";
import drama from "../assets/form/Drama.jpg";
import painting from "../assets/form/Painting.jpg";
import martial from "../assets/form/martial.jpg";
import sculpture from "../assets/form/Sculpture.jpg";
import music from "../assets/form/Music.jpg";
import { useNavigate } from "react-router-dom";

const ArtForms = () => {
  const [selectedArtForm, setSelectedArtForm] = useState<any>(null);
  const navigate = useNavigate();

  // const artForms = [
  //   {
  //     id: 1,
  //     title: "Dance",
  //     icon: "💃",
  //     image: dance,
  //     route: "/dance",
  //     description:
  //       "Classical and folk traditions like Bharatanatyam, Kathak, Odissi & Kuchipudi.",
  //   },
  //   {
  //     id: 2,
  //     title: "Painting",
  //     icon: "🎨",
  //     image: painting,
  //     route: "/paint",
  //     description:
  //       "Folk and classical styles such as Madhubani, Warli, Pattachitra & Tanjore.",
  //   },
  //   {
  //     id: 3,
  //     title: "Music",
  //     icon: "🎵",
  //     image: music,
  //     route: "/music",
  //     description:
  //       "Hindustani & Carnatic traditions with instruments like Veena, Tabla & Sitar.",
  //   },
  //   {
  //     id: 4,
  //     title: "Sculpture",
  //     icon: "🗿",
  //     image: sculpture,
  //     route: "/sculpture",
  //     description:
  //       "Stone carving, temple sculpture, wood art & metal craftsmanship.",
  //   },
  //   {
  //     id: 5,
  //     title: "Martial Art",
  //     icon: "🥋",
  //     image: martial,
  //     route: "/martial",
  //     description:
  //       "Kalaripayattu, Gatka & ancient Indian warrior art traditions.",
  //   },
  //   {
  //     id: 6,
  //     title: "Drama",
  //     icon: "🎭",
  //     image: drama,
  //     route: "/drama",
  //     description: "Traditional theatre forms like Kathakali & Yakshagana.",
  //   },
  // ];
  const artForms = [
    {
      id: 1,
      title: "Dance",
      icon: "💃",
      image: dance,
      route: "/art-forms/dance", // ✅ FIXED
      description:
        "Classical and folk traditions like Bharatanatyam, Kathak, Odissi & Kuchipudi.",
    },
    {
      id: 2,
      title: "Painting",
      icon: "🎨",
      image: painting,
      route: "/art-forms/paint", // ✅ FIXED
      description:
        "Folk and classical styles such as Madhubani, Warli, Pattachitra & Tanjore.",
    },
    {
      id: 3,
      title: "Music",
      icon: "🎵",
      image: music,
      route: "/art-forms/music", // ✅ FIXED
      description:
        "Hindustani & Carnatic traditions with instruments like Veena, Tabla & Sitar.",
    },
    {
      id: 4,
      title: "Sculpture",
      icon: "🗿",
      image: sculpture,
      route: "/art-forms/sculpture", // ✅ FIXED
      description:
        "Stone carving, temple sculpture, wood art & metal craftsmanship.",
    },
    {
      id: 5,
      title: "Martial Art",
      icon: "🥋",
      image: martial,
      route: "/art-forms/martial", // ✅ FIXED
      description:
        "Kalaripayattu, Gatka & ancient Indian warrior art traditions.",
    },
    {
      id: 6,
      title: "Drama",
      icon: "🎭",
      image: drama,
      route: "/art-forms/drama", // ✅ FIXED
      description: "A performing art that tells stories through expressive acting, dialogue, and emotion.",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#FAF4EE] to-[#FFF]">
      <Navbar />

      {/* HEADER */}
      <section className="bg-gradient-to-r from-accent/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4 animate-fade-in">
            Indian Art Forms
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Discover India’s diverse artistic heritage — a blend of culture,
            tradition, and creativity.
          </p>
        </div>
      </section>

      <div className="flex items-center justify-start ml-16 mt-6">
        <Breadcrumbs />
      </div>

      {/* ART FORM GRID */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {artForms.map((artForm, index) => (
            <div
              key={artForm.id}
              className="animate-fade-in transform transition-all "
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div
                onClick={() => navigate(artForm.route)}
                className="cursor-pointer rounded-3xl overflow-hidden bg-white shadow-md hover:shadow-2xl transition p-5 group"
              >
                <div className="relative h-52 overflow-hidden rounded-2xl">
                  <img
                    src={artForm.image}
                    alt={artForm.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                  />
                  {/* <div className="absolute bottom-3 right-3 text-4xl">
                    {artForm.icon}
                  </div> */}
                </div>

                <h2 className="text-2xl font-bold mt-4 text-[#6F1D1B]">
                  {artForm.title}
                </h2>
                <p className="text-gray-600 mt-2">{artForm.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />

      {/* MODAL */}
      <Dialog
        open={!!selectedArtForm}
        onOpenChange={() => setSelectedArtForm(null)}
      >
        <DialogContent className="max-w-xl rounded-2xl shadow-2xl p-8 border border-[#E8C5A6]">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-3 text-2xl font-bold text-[#6F1D1B]">
              <span className="text-4xl">{selectedArtForm?.icon}</span>
              {selectedArtForm?.title}
            </DialogTitle>
          </DialogHeader>

          {/* FORM */}
          <form className="space-y-4 mt-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                placeholder="Name"
                className="rounded-lg border px-3 py-2 border-[#D9A282] focus:ring-0"
              />
              <input
                placeholder="Number"
                className="rounded-lg border px-3 py-2 border-[#D9A282] focus:ring-0"
              />
              <input
                placeholder="Age"
                className="rounded-lg border px-3 py-2 border-[#D9A282] focus:ring-0"
              />
              <input
                placeholder="Location"
                className="rounded-lg border px-3 py-2 border-[#D9A282] focus:ring-0"
              />
              <select className="col-span-2 rounded-lg border px-3 py-2 border-[#D9A282]">
                <option>Select Gender</option>
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            </div>

            <textarea
              rows={3}
              placeholder="Address"
              className="w-full rounded-lg border px-3 py-2 border-[#D9A282] focus:ring-0"
            />

            <button className="w-full bg-[#6F1D1B] hover:bg-[#5A1716] text-white py-2 rounded-lg font-semibold transition">
              Submit
            </button>
          </form>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default ArtForms;
