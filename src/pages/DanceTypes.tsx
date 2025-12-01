// // export default DanceTypes;
// import { useParams } from "react-router-dom";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Breadcrumbs from "@/components/Breadcrumbs";
// import Mohiniyattam from "../assets/dance/Mohiniyattam.jpg";
// import Odissi from "../assets/dance/odissi.jpg";
// import Kathak from "../assets/dance/kathak-dance.png";
// import Kuchipudi from "../assets/dance/kuchipudi.jpg";
// import Kathakali from "../assets/dance/kathakali.jpg";
// import Bharatanatyam from "../assets/dance/barathanaatiyam.jpg";

// interface DanceArtForm {
//   id: number;
//   title: string;
//   image: string;
//   shortDescription: string;
// }

// const allDances: DanceArtForm[] = [
//   {
//     id: 1,
//     title: "Kathakali",
//     image: Kathakali,
//     shortDescription:
//       "Kathakali is a major classical Indian dance form of Kerala distinguished by elaborate makeup and costumes.",
//   },
//   {
//     id: 2,
//     title: "Bharatanatyam",
//     image: Bharatanatyam,
//     shortDescription: "A classical South Indian dance form from Tamil Nadu.",
//   },
//   {
//     id: 3,
//     title: "Kathak",
//     image: Kathak,
//     shortDescription: "A classical dance form from North India.",
//   },
//   {
//     id: 4,
//     title: "Kuchipudi",
//     image: Kuchipudi,
//     shortDescription: "A classical dance form from Andhra Pradesh.",
//   },
//   {
//     id: 5,
//     title: "Odissi",
//     image: Odissi,
//     shortDescription: "A classical dance from Odisha.",
//   },
//   {
//     id: 6,
//     title: "Mohiniyattam",
//     image: Mohiniyattam,
//     shortDescription: "A graceful dance from Kerala.",
//   },
// ];

// const DanceTypes = () => {
//   const { id } = useParams<{ id: string }>();
//   const danceId = Number(id);
//   const dance = allDances.find((d) => d.id === danceId);

//   if (!dance) return <div>Dance not found</div>;

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />

//       <div className="container mx-auto px-4 py-4">
//         <Breadcrumbs
//           items={[
//             { label: "Art Forms", to: "/art-forms" },
//             { label: "Dance", to: "/dance" },
//             { label: dance.title },
//           ]}
//         />
//       </div>

//       <section className="container mx-auto px-4 py-16">
//         <h1 className="text-4xl font-bold mb-6">{dance.title}</h1>
//         <img
//           src={dance.image}
//           alt={dance.title}
//           className="w-full max-w-3xl mx-auto rounded-lg"
//         />
//         <p className="mt-4 text-lg">{dance.shortDescription}</p>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default DanceTypes;
/* DanceTypes.tsx */

/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Mohiniyattam from "../assets/dance/Mohiniyattam.jpg";
import Odissi from "../assets/dance/odissi.jpg";
import Kathak from "../assets/dance/kathak-dance.png";
import Kuchipudi from "../assets/dance/kuchipudi.jpg";
import Kathakali from "../assets/dance/kathakali.jpg";
import Bharatanatyam from "../assets/dance/barathanaatiyam.jpg";
import Breadcrumbs from "@/components/Breadcrumbs";
import { useLocation } from "react-router-dom";
;
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
type DanceDetails = {
  shortDescription: string;
  category: string;
  languages: string;
  state: string;
  famousArtists: string;
  contemporaryPerformers: string;
  typicalLength: string;
  origin: string;
  pictures?: string;
  websiteLinks?: string;
};

type DanceArtForm = {
  id: number;
  title: string;
  image: string;
  details: DanceDetails;
};

const allDances: DanceArtForm[] = [
  {
    id: 1,
    title: "Kathakali",
    image: Kathakali,
    details: {
      shortDescription:
        "Kathakali is a major classical Indian dance form of Kerala distinguished by elaborate makeup and costumes. It retells epic stories with strong facial expressions and hand gestures.",
      category: "Classical Arts",
      languages: "Malayalam / Sanskrit (story origin)",
      state: "Kerala",
      famousArtists:
        "Kalamandalam Gopi, Madavoor Vasudevan Nair, Mathoor Govindan Kutty",
      contemporaryPerformers:
        "Kalamandalam Kesavan Namboodiri, Kottakkal Sasidharan Nair",
      typicalLength: "3 to 4 hours (traditional full performance)",
      origin: "Originated in Kerala between the 16th and 17th centuries",
      pictures: "Traditional Kathakali make-up and costumes",
      websiteLinks:
        "https://www.keralatourism.org/artforms/kathakali-kerala-theatre/15",
    },
  },
  {
    id: 2,
    title: "Bharatanatyam",
    image: Bharatanatyam,
    details: {
      shortDescription:
        "Bharatanatyam is one of the oldest classical dance forms from Tamil Nadu, known for its fixed upper torso, bent legs, and intricate footwork and hand gestures.",
      category: "Classical Arts",
      languages: "Tamil / Sanskrit",
      state: "Tamil Nadu",
      famousArtists:
        "Rukmini Devi Arundale, Balasaraswati, Yamini Krishnamurthy",
      contemporaryPerformers: "Alarmel Valli, Malavika Sarukkai",
      typicalLength: "1 to 2 hours (concert format)",
      origin:
        "Originated in temples of Tamil Nadu; ancient roots in Natya Shastra",
      pictures: "Temple dance, expressive abhinaya",
      websiteLinks: "https://www.sangeetnatak.gov.in",
    },
  },
  {
    id: 3,
    title: "Kathak",
    image: Kathak,
    details: {
      shortDescription:
        "Kathak is a North Indian classical dance noted for its intricate footwork, spins (chakkars), and storytelling through expressive gestures and facial expressions.",
      category: "Classical Arts",
      languages: "Hindi / Urdu / Sanskrit",
      state: "North India (Uttar Pradesh, Rajasthan)",
      famousArtists: "Birju Maharaj, Shambhu Maharaj, Lachhu Maharaj",
      contemporaryPerformers:
        "Sonal Mansingh (also known for other classical forms), Saswati Sen",
      typicalLength: "1 to 2 hours",
      origin:
        "Evolved from ancient storytellers (kathakars) and later royal courts",
      pictures: "Fast footwork, spins and ghungroo patterns",
      websiteLinks: "https://www.sangeetnatak.gov.in",
    },
  },
  {
    id: 4,
    title: "Kuchipudi",
    image: Kuchipudi,
    details: {
      shortDescription:
        "Kuchipudi is a classical dance-drama style from Andhra Pradesh that blends fast rhythms with graceful movements and often includes spoken dialogue.",
      category: "Classical Arts",
      languages: "Telugu / Sanskrit",
      state: "Andhra Pradesh",
      famousArtists: "Vempati Chinna Satyam, Radha Rani",
      contemporaryPerformers: "Shobha Naidu, Raja and Radha Reddy",
      typicalLength: "1 to 2 hours (dance drama may be longer)",
      origin:
        "Originated in the village of Kuchipudi, Andhra Pradesh; evolved as dance-drama tradition",
      pictures: "Dance-dramas with expressive acting",
      websiteLinks: "https://www.sangeetnatak.gov.in",
    },
  },
  {
    id: 5,
    title: "Odissi",
    image: Odissi,
    details: {
      shortDescription:
        "Odissi is an ancient classical dance from Odisha characterized by the tribhangi posture, lyrical movements and sculptural poses inspired by temple art.",
      category: "Classical Arts",
      languages: "Odia / Sanskrit",
      state: "Odisha",
      famousArtists: "Kelucharan Mohapatra, Sanjukta Panigrahi",
      contemporaryPerformers: "Sanjukta Panigrahi lineage, Ileana Citaristi",
      typicalLength: "1 to 2 hours",
      origin:
        "Temple dances of Odisha; strong links to Odishan sculpture and traditions",
      pictures: "Tribhangi posture, sculptural poses",
      websiteLinks: "https://www.sangeetnatak.gov.in",
    },
  },
  {
    id: 6,
    title: "Mohiniyattam",
    image: Mohiniyattam,
    details: {
      shortDescription:
        "Mohiniyattam is a graceful classical dance form of Kerala performed by women, known for gentle, flowing movements and lasya (feminine grace).",
      category: "Classical Arts",
      languages: "Malayalam / Sanskrit",
      state: "Kerala",
      famousArtists: "Kalamandalam Kalyanikutty Amma, Gopika Varma",
      contemporaryPerformers: "Bharati Shivaji, Gopika Varma",
      typicalLength: "1 to 1.5 hours",
      origin:
        "Developed in Kerala with roots in temple arts and Kerala’s classical traditions",
      pictures: "Graceful lasya-based movements",
      websiteLinks: "https://www.keralatourism.org/artforms/mohiniyattam/10",
    },
  },
];

const Modal: React.FC<{
  open: boolean;
  onClose: () => void;
  title?: string;
  children?: React.ReactNode;
}> = ({ open, onClose, title, children }) => {
  if (!open) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 md:p-8 overflow-auto">
      <div className="absolute inset-0 bg-black opacity-40" onClick={onClose} />
      <div className="relative bg-white rounded-lg shadow-xl max-w-3xl w-full p-6 z-10">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold">{title}</h3>
          <button
            onClick={onClose}
            className="text-gray-600 hover:text-gray-900 px-2 py-1 rounded"
            aria-label="Close"
          >
            ✕
          </button>
        </div>
        <div>{children}</div>
      </div>
    </div>
  );
};

const DanceTypes: React.FC = () => {
const { titles } = useParams<{ titles: string }>();

const dance = allDances.find(
  (d) => d.title.toLowerCase().trim() === titles?.toLowerCase().trim()
);

  const location = useLocation();
  const [selectedArtForm, setSelectedArtForm] = useState<DanceArtForm | null>(
    null
  );
  const [formState, setFormState] = useState({
    name: "",
    phone: "",
    age: "",
    location: "",
    gender: "",
    address: "",
  });

  if (!dance)
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto p-8">Dance not found</div>
        <Footer />
      </div>
    );

  const handleApplyClick = () => {
    setSelectedArtForm(dance);
    // reset form when opening
    setFormState({
      name: "",
      phone: "",
      age: "",
      location: "",
      gender: "",
      address: "",
    });
  };

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormState((s) => ({ ...s, [name]: value }));
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: attach submit API call here if needed
    console.log("Application submitted for", selectedArtForm?.title, formState);
    // user feedback
    alert("Application submitted successfully!");
    setSelectedArtForm(null);
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-4">
         <Breadcrumbs />
      {/* <h1>Dance Type: {id}</h1> */}
      </div>

      <section className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-6 text-center">{dance.title}</h1>

        <div className="flex flex-col md:flex-row md:items-start gap-8">
          <div className="md:w-1/3 flex justify-center">
            <img
              src={dance.image}
              alt={dance.title}
              className="w-full max-w-sm rounded-lg object-cover shadow"
            />
          </div>

          <div className="md:w-2/3">
            {/* DETAILS GRID */}
            <div className="mt-2 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-5 text-[17px] leading-relaxed">
              <div className="font-semibold">Short Description</div>
              <div className="text-gray-800">
                - {dance.details.shortDescription}
              </div>

              <div className="font-semibold">Category</div>
              <div className="text-gray-800">- {dance.details.category}</div>

              <div className="font-semibold">Languages</div>
              <div className="text-gray-800">- {dance.details.languages}</div>

              <div className="font-semibold">State</div>
              <div className="text-gray-800">- {dance.details.state}</div>

              <div className="font-semibold">Famous Artists</div>
              <div className="text-gray-800">
                - {dance.details.famousArtists}
              </div>

              <div className="font-semibold">Contemporary Performers</div>
              <div className="text-gray-800">
                - {dance.details.contemporaryPerformers}
              </div>

              <div className="font-semibold">Typical Length</div>
              <div className="text-gray-800">
                - {dance.details.typicalLength}
              </div>

              <div className="font-semibold">Origin</div>
              <div className="text-gray-800">- {dance.details.origin}</div>

              <div className="font-semibold">Website Links</div>
              <div>
                {dance.details.websiteLinks ? (
                  <a
                    href={dance.details.websiteLinks}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-600 underline"
                  >
                    - {dance.details.websiteLinks}
                  </a>
                ) : (
                  <span className="text-gray-500">N/A</span>
                )}
              </div>
            </div>

            {/* Apply button */}
            <div className="mt-8">
              <button
                onClick={handleApplyClick}
                className="px-6 py-3 bg-[#83261d] text-white rounded-lg hover:opacity-95"
              >
                Apply
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal form */}
      <Dialog
        open={!!selectedArtForm}
        onOpenChange={() => setSelectedArtForm(null)}
      >
        <DialogContent className="max-w-xl rounded-xl p-6">
          <DialogHeader>
            <DialogTitle className="text-xl flex items-center gap-3 font-semibold">
              {selectedArtForm?.title}
            </DialogTitle>
          </DialogHeader>

          {selectedArtForm && (
            <form className="space-y-4 mt-2">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-medium text-sm">Name</label>
                  <input
                    type="text"
                    placeholder="Enter name"
                    className="w-full rounded-md border border-orange-300 px-3 py-2 text-sm focus:ring-0 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-medium text-sm">Number</label>
                  <input
                    type="text"
                    placeholder="Enter number"
                    className="w-full rounded-md border border-orange-300 px-3 py-2 text-sm focus:ring-0 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-medium text-sm">Age</label>
                  <input
                    type="text"
                    placeholder="Age"
                    className="w-full rounded-md border border-orange-300 px-3 py-2 text-sm focus:ring-0 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-medium text-sm">Location</label>
                  <input
                    type="text"
                    placeholder="City / place"
                    className="w-full rounded-md border border-orange-300 px-3 py-2 text-sm focus:ring-0 focus:outline-none"
                  />
                </div>

                <div className="col-span-2">
                  <label className="font-medium text-sm">Gender</label>
                  <select className="w-full rounded-md border border-orange-300 px-3 py-2 text-sm focus:ring-0 focus:outline-none">
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              {/* ⬇ FULL WIDTH FIELD */}
              <div>
                <label className="font-medium text-sm">Address</label>
                <textarea
                  placeholder="Full address"
                  rows={3}
                  className="w-full rounded-md border border-orange-300 px-3 py-2 text-sm focus:ring-0 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-[#83261d] hover:bg-[#83261d] transition text-white font-semibold py-2 rounded-md"
              >
                Submit
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DanceTypes;
