import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import gatka from "../assets/martial/6-barun-k_datta_05-during-gatka-demonstration-this-snake-like-weapon-can-hurt-anyone-who-dares-to-stand-too-close.jpg";
import kalaripayattu from "../assets/martial/kalaripayattu3.jpg";
import silambattam from "../assets/martial/silambattam-course-shara.jpg";
import thoda from "../assets/martial/thoda.jpg";
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

  const [selectedArtForm, setSelectedArtForm] = useState<PaintArtForm | null>(
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

  if (!paint)
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto p-8">Paint not found</div>
        <Footer />
      </div>
    );

  const handleApplyClick = () => {
    setSelectedArtForm(paint);
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
    console.log("Application submitted for", selectedArtForm?.title, formState);
    alert("Application submitted successfully!");
    setSelectedArtForm(null);
  };

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
              <button
                onClick={handleApplyClick}
                className="px-6 py-3 bg-[#83261d] text-white rounded-lg hover:opacity-95"
              >
                Register
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal */}
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
            <form className="space-y-4 mt-2" onSubmit={handleFormSubmit}>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-medium text-sm">Name</label>
                  <input
                    name="name"
                    value={formState.name}
                    onChange={handleFormChange}
                    type="text"
                    placeholder="Enter name"
                    className="w-full rounded-md border border-orange-300 px-3 py-2 text-sm focus:ring-0 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-medium text-sm">Number</label>
                  <input
                    name="phone"
                    value={formState.phone}
                    onChange={handleFormChange}
                    type="text"
                    placeholder="Enter number"
                    className="w-full rounded-md border border-orange-300 px-3 py-2 text-sm focus:ring-0 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-medium text-sm">Age</label>
                  <input
                    name="age"
                    value={formState.age}
                    onChange={handleFormChange}
                    type="text"
                    placeholder="Age"
                    className="w-full rounded-md border border-orange-300 px-3 py-2 text-sm focus:ring-0 focus:outline-none"
                  />
                </div>

                <div>
                  <label className="font-medium text-sm">Location</label>
                  <input
                    name="location"
                    value={formState.location}
                    onChange={handleFormChange}
                    type="text"
                    placeholder="City / place"
                    className="w-full rounded-md border border-orange-300 px-3 py-2 text-sm focus:ring-0 focus:outline-none"
                  />
                </div>

                <div className="col-span-2">
                  <label className="font-medium text-sm">Gender</label>
                  <select
                    name="gender"
                    value={formState.gender}
                    onChange={handleFormChange}
                    className="w-full rounded-md border border-orange-300 px-3 py-2 text-sm focus:ring-0 focus:outline-none"
                  >
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-medium text-sm">Address</label>
                <textarea
                  name="address"
                  value={formState.address}
                  onChange={handleFormChange}
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

export default MartialTypes;
