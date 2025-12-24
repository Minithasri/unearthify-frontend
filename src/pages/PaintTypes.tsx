import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Madhubani from "../assets/paint/Madhubani art.jpg";
import kalamkari from "../assets/paint/kalamkari.jpg";
import mandalaArt from "../assets/paint/mandala art.jpg";
import varaliPainting from "../assets/paint/varali painting.jpg";
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
    title: "Madhubani",
    details: {
      shortDescription: "Madhubani painting is a traditional Indian art from Bihar, known for vibrant colours and folk themes.",
      styleOrigin: "Bihar",
      materials: "Natural dyes, handmade paper",
      famousArtists: "Sita Devi, Baua Devi",
      region: "North India",
      websiteLinks: "https://en.wikipedia.org/wiki/Madhubani_painting",
      image: Madhubani,
    },
  },
  {
    id: 2,
    title: "Kalamkari",
    details: {
      shortDescription: "Warli painting is a tribal art from Maharashtra, using geometric patterns to depict daily life.",
      styleOrigin: "Maharashtra",
      materials: "Rice paste, bamboo sticks, mud walls",
      famousArtists: "Jivya Soma Mashe",
      region: "Western India",
      websiteLinks: "https://en.wikipedia.org/wiki/Warli_painting",
      image: kalamkari,
    },
  },
  {
    id: 3,
    title: "Mandala",
    details: {
      shortDescription: "Pattachitra is a traditional scroll painting from Odisha, rich in mythological themes.",
      styleOrigin: "Odisha",
      materials: "Cloth canvas, natural colours",
      famousArtists: "Raghunath Patnaik",
      region: "East India",
      websiteLinks: "https://en.wikipedia.org/wiki/Pattachitra",
      image: mandalaArt
    },
  },
  {
    id: 4,
    title: "Warli",
    details: {
      shortDescription: "Tanjore painting is a classical South Indian art from Tamil Nadu, famous for gold leaf decoration.",
      styleOrigin: "Tamil Nadu",
      materials: "Gold foil, wood, natural colours",
      famousArtists: "Rajam, Krishnaswamy",
      region: "South India",
      websiteLinks: "https://en.wikipedia.org/wiki/Tanjore_painting",
      image: varaliPainting,
    },
  },
 
];

const PaintTypes: React.FC = () => {
  
  const { titles } = useParams<{ titles: string }>();
  const paint = allPaints.find((p) => p.title === titles);

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
        <h1 className="text-4xl font-bold mb-6 text-center capitalize">{paint.title}</h1>

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
                  <a href={paint.details.websiteLinks} target="_blank" rel="noreferrer" className="text-blue-600 underline">
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

export default PaintTypes;
