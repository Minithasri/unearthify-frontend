import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import gatka from "../assets/martial/6-barun-k_datta_05-during-gatka-demonstration-this-snake-like-weapon-can-hurt-anyone-who-dares-to-stand-too-close.jpg";
import kalaripayattu from "../assets/martial/kalaripayattu3.jpg";
import silambattam from "../assets/martial/silambattam-course-shara.jpg";
import thoda from "../assets/martial/thoda.jpg";
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
    title: "Gatka",
    details: {
      shortDescription:
        "Gatka is a traditional Sikh martial art that uses sword-based techniques, focusing on speed, coordination, and spiritual discipline.",
      styleOrigin: "Punjab (Sikh Community)",
      materials: "Wooden sticks (Soti), shields, swords, spear, chakra",
      famousArtists: "Nihang Sikhs, Baba Deep Singh Akhara practitioners",
      region: "North India",
      websiteLinks: "https://en.wikipedia.org/wiki/Gatka",
      image: gatka,
    },
  },
  {
    id: 2,
    title: "Kalaripayattu",
    details: {
      shortDescription:
        "Kalaripayattu is one of the world’s oldest martial arts, known for fluid movements, weapon training, and Ayurvedic healing techniques.",
      styleOrigin: "Kerala",
      materials: "Long staff, swords, shields, daggers, flexible sword (Urumi)",
      famousArtists: "CVN Kalari masters, Meenakshi Amma",
      region: "South India",
      websiteLinks: "https://en.wikipedia.org/wiki/Kalaripayattu",
      image: kalaripayattu,
    },
  },
  {
    id: 3,
    title: "Silambam",
    details: {
      shortDescription:
        "Silambam is an ancient Tamil martial art focused on staff fighting techniques, agility, and rhythmic footwork.",
      styleOrigin: "Tamil Nadu",
      materials: "Bamboo staff (Silambam stick), swords, spears",
      famousArtists: "Velu Nachiyar’s army, Muthuramalinga Thevar’s warriors",
      region: "South India",
      websiteLinks: "https://en.wikipedia.org/wiki/Silambam",
      image: silambattam,
    },
  },
  {
    id: 4,
    title: "Thoda",
    details: {
      shortDescription:
        "Thoda is a martial art of Himachal Pradesh that uses archery-based techniques, traditionally performed during cultural festivals.",
      styleOrigin: "Himachal Pradesh",
      materials: "Bows, arrows with wooden blunt tips",
      famousArtists: "Local tribal warrior groups in Shimla & Sirmour",
      region: "North India",
      websiteLinks: "https://en.wikipedia.org/wiki/Thoda",
      image: thoda,
    },
  },
];

const MartialTypes: React.FC = () => {
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

export default MartialTypes;
