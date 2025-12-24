import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";

import Veenai from "../assets/music/Veenai.jpg";
import flute from "../assets/music/flute.jpg";
import harmonium from "../assets/music/harmonium.jpg";
import nathaswaram from "../assets/music/nathaswaram.jpg";
import rajasthani from "../assets/music/rajasthani.jpg";
import tabla from "../assets/music/tabla.jpg";
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

// 🎵 UPDATED CONTENT FOR MUSICAL INSTRUMENTS
const allPaints: PaintArtForm[] = [
  {
    id: 1,
    title: "Veenai",
    details: {
      shortDescription:
        "The Veena (Veenai) is a classical South Indian string instrument used in Carnatic music, known for its deep and melodic sound.",
      styleOrigin: "Tamil Nadu",
      materials: "Jackwood, brass frets, steel strings",
      famousArtists: "E. Gayatri, Jayanthi Kumaresh",
      region: "South India",
      websiteLinks: "https://en.wikipedia.org/wiki/Veena",
      image: Veenai,
    },
  },
  {
    id: 2,
    title: "Flute",
    details: {
      shortDescription:
        "The flute (Bansuri) is an ancient wind instrument used widely in Indian classical music, especially associated with Lord Krishna.",
      styleOrigin: "North India",
      materials: "Bamboo, metal tuning rings",
      famousArtists: "Hariprasad Chaurasia, Pannalal Ghosh",
      region: "All regions of India",
      websiteLinks: "https://en.wikipedia.org/wiki/Bansuri",
      image: flute,
    },
  },
  {
    id: 3,
    title: "Harmonium",
    details: {
      shortDescription:
        "The harmonium is a hand-pumped keyboard instrument commonly used in Hindustani classical, bhajans, qawwali, and folk music.",
      styleOrigin: "North India (introduced during colonial era)",
      materials: "Wood, metal reeds, bellows",
      famousArtists: "Pandit Bhimsen Joshi, Ustad Nusrat Fateh Ali Khan",
      region: "North & West India",
      websiteLinks: "https://en.wikipedia.org/wiki/Harmonium",
      image: harmonium,
    },
  },
  {
    id: 4,
    title: "Nadaswaram",
    details: {
      shortDescription:
        "Nadaswaram is a traditional wind instrument from Tamil Nadu, commonly played in temples and auspicious ceremonies.",
      styleOrigin: "Tamil Nadu",
      materials: "Ebony wood, brass, reed",
      famousArtists: "Karaikurichi Arunachalam, Sheik Chinna Moulana",
      region: "South India",
      websiteLinks: "https://en.wikipedia.org/wiki/Nadaswaram",
      image: nathaswaram,
    },
  },
  {
    id: 5,
    title: "Rajasthani",
    details: {
      shortDescription:
        "Rajasthani folk instruments like Ravanhatta, Morchang, and Khartal are known for their vibrant folk tunes.",
      styleOrigin: "Rajasthan",
      materials: "Bamboo, string, coconut shell, iron",
      famousArtists: "Bhanwari Devi, Kutle Khan",
      region: "Western India",
      websiteLinks: "https://en.wikipedia.org/wiki/Music_of_Rajasthan",
      image: rajasthani,
    },
  },
  {
    id: 6,
    title: "Tabla",
    details: {
      shortDescription:
        "Tabla is a pair of drums used in Hindustani classical music, known for its complex rhythms and rich tones.",
      styleOrigin: "North India",
      materials: "Wood, goat skin, syahi paste",
      famousArtists: "Zakir Hussain, Alla Rakha",
      region: "North India",
      websiteLinks: "https://en.wikipedia.org/wiki/Tabla",
      image: tabla,
    },
  },
];

const MusicTypes: React.FC = () => {
  const { titles } = useParams<{ titles: string }>();

const paint = allPaints.find(
  (d) => d.title.toLowerCase().trim() === titles?.toLowerCase().trim()
);

  if (!paint)
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto p-8">Instrument not found</div>
        <Footer />
      </div>
    );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs
        
        />
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
              <div className="text-gray-800">- {paint.details.shortDescription}</div>

              <div className="font-semibold">Origin</div>
              <div className="text-gray-800">- {paint.details.styleOrigin}</div>

              <div className="font-semibold">Materials</div>
              <div className="text-gray-800">- {paint.details.materials}</div>

              <div className="font-semibold">Famous Artists</div>
              <div className="text-gray-800">- {paint.details.famousArtists}</div>

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

export default MusicTypes;
