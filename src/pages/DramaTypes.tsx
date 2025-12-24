import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import FRASWATHAMA from "../assets/drama/02FRASWATHAMA.jpeg";
import ram from "../assets/drama/ram.jpg";
import stagedrama from "../assets/drama/stagedrama.jpg";
import ArtFormModel from "./ArtFormModel";

type PaintDetails = {
  shortDescription: string;
  styleOrigin: string;
  materials: string;
  famousArtists: string;
  region: string;
  typicalLength?: string;
  websiteLinks?: string;
  image: string;
};

type PaintArtForm = {
  id: number;
  title: string;
  details: PaintDetails;
};

const allPaints: PaintArtForm[] = [
  {
    id: 1,
    title: "Fraswathama",
    details: {
      shortDescription:
        "A powerful mythological stage drama centred around Ashwatthama from the Mahabharata, portraying his curse, immortality, inner turmoil, and the emotional weight of his actions during the Kurukshetra war.",
      styleOrigin: "Mahabharata – Indian Epic Dramatic Tradition",
      materials:
        "Traditional warrior costumes, angavastra, bows, swords, heavy ornaments, dramatic lighting, battlefield props",
      famousArtists:
        "Performed across India by Yakshagana troupes, Jatra groups, Nataka Mandalis, and classical mythological theatre artists",
      region:
        "Pan-India (popular in Karnataka, Andhra Pradesh, Odisha, and Hindi theatre circuits)",
      websiteLinks: "https://en.wikipedia.org/wiki/Ashwatthama",
      image: FRASWATHAMA,
    },
  },
  {
    id: 2,
    title: "Ramayana",
    details: {
      shortDescription:
        "A devotional and dramatic portrayal of Lord Rama’s life from the Ramayana, highlighting his exile, battle with Ravana, moral values, and the triumph of dharma. This drama is commonly performed as Ramlila during festivals like Dussehra.",
      styleOrigin: "Ayodhya – Ramayana Epic Storytelling",
      materials:
        "Ramayana costumes, bow & arrow props, mythological crowns, traditional instruments, village-style open-air stage setup",
      famousArtists:
        "Ramlila artists from Uttar Pradesh (especially Ramnagar), Nautanki performers, and regional folk theatre groups",
      region:
        "North India (Uttar Pradesh, Delhi, Bihar), but widely performed across the country",
      websiteLinks: "https://en.wikipedia.org/wiki/Ramlila",
      image: ram,
    },
  },
  {
    id: 3,
    title: "Stagedrama",
    details: {
      shortDescription:
        "A classical Indian theatre performance combining expressive acting, music, dialogue delivery, costumes, and stage lighting. These dramas depict social stories, historical events, or cultural themes and are performed in auditoriums and cultural festivals.",
      styleOrigin: "Indian Folk & Classical Theatre Traditions",
      materials:
        "Stage props, background curtains, microphones, lighting systems, traditional or modern costumes depending on the story",
      famousArtists:
        "Regional theatre groups, drama academies, professional actors in modern Indian theatre",
      region: "Pan-India – performed in multiple languages and cultural styles",
      websiteLinks: "https://en.wikipedia.org/wiki/Indian_theatre",
      image: stagedrama,
    },
  },
];

const DramaTypes: React.FC = () => {
  const { titles } = useParams<{ titles: string }>();

  const paint = allPaints.find(
    (d) => d.title.toLowerCase().trim() === titles?.toLowerCase().trim()
  );

  if (!paint)
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto p-8">Paint not found</div>
        <Footer />
      </div>
    );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs />
      </div>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-center">{paint.title}</h1>

        <div className="flex flex-col md:flex-row md:items-start gap-8">
          <div className="md:w-1/3 flex justify-center">
            <img
              src={paint.details.image}
              alt={paint.title}
              className="w-full max-w-sm rounded-lg object-cover shadow"
            />
          </div>

          <div className="md:w-2/3">
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 text-[17px] leading-relaxed">
              <div className="font-semibold">Short Description</div>
              <div className="text-gray-800">
                - {paint.details.shortDescription}
              </div>

              <div className="font-semibold">Origin</div>
              <div className="text-gray-800">- {paint.details.styleOrigin}</div>

              <div className="font-semibold">Materials</div>
              <div className="text-gray-800">- {paint.details.materials}</div>

              <div className="font-semibold">Famous Artists</div>
              <div className="text-gray-800">
                - {paint.details.famousArtists}
              </div>

              <div className="font-semibold">Region</div>
              <div className="text-gray-800">- {paint.details.region}</div>

              <div className="font-semibold">Website</div>
              <div>
                {paint.details.websiteLinks ? (
                  <a
                    href={paint.details.websiteLinks}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    - {paint.details.websiteLinks}
                  </a>
                ) : (
                  <span className="text-gray-500">N/A</span>
                )}
              </div>
            </div>

            <div className="mt-8">
              <ArtFormModel title={paint.title} />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default DramaTypes;
