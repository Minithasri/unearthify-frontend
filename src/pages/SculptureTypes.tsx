import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import Bodhi_Ajanta from "../assets/sculpture/Bodhi_Ajanta.jpg";
import Deogarh_1999_Durga from "../assets/sculpture/Deogarh_1999_Durga.jpg";
import Buddha_in_Sarnath_Museum from "../assets/sculpture/Buddha_in_Sarnath_Museum_(Dhammajak_Mutra).jpg";
import gupta_krishna from "../assets/sculpture/960px-Met,_india_(uttar_pradesh),_gupta_period,_krishna_battling_the_horse_demon_keshi,_5th_century.jpeg";

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
    title: "Bodhi",
    details: {
      shortDescription:
        "A beautifully carved Buddhist sculpture from the Ajanta Caves depicting the Bodhisattva or Buddha with serene expression and symbolic gestures. Ajanta sculptures are renowned for their spiritual depth and refined detailing.",
      styleOrigin: "Ajanta Caves – Maharashtra (Gupta & post-Gupta period)",
      materials: "Rock-cut basalt stone, hand-carved surfaces",
      famousArtists:
        "Unknown Buddhist monks and artisans of the Satavahana & Vakataka periods",
      region: "Western India",
      websiteLinks: "https://en.wikipedia.org/wiki/Ajanta_Caves",
      image: Bodhi_Ajanta,
    },
  },
  {
    id: 2,
    title: "Deogarh",
    details: {
      shortDescription:
        "A powerful 5th–6th century stone sculpture of Goddess Durga from Deogarh, showing her in a dynamic pose slaying the buffalo demon Mahishasura. It represents Gupta-era mastery in proportion, form, and divine iconography.",
      styleOrigin: "Deogarh Temple, Uttar Pradesh – Gupta Period",
      materials: "Carved sandstone",
      famousArtists: "Gupta-era temple sculptors (anonymous master craftsmen)",
      region: "North India",
      websiteLinks: "https://en.wikipedia.org/wiki/Deogarh,_Uttar_Pradesh",
      image: Deogarh_1999_Durga,
    },
  },
  {
    id: 3,
    title: "Buddha",
    details: {
      shortDescription:
        "A celebrated statue of Buddha in the Dharmachakra Mudra from the Sarnath Museum. This sculpture is considered one of the finest examples of Gupta artistry, symbolizing Buddha's first sermon at Sarnath.",
      styleOrigin: "Sarnath – Gupta Period (5th century CE)",
      materials: "Chunar sandstone",
      famousArtists: "Master sculptors of the Gupta school (anonymous)",
      region: "Uttar Pradesh, North India",
      websiteLinks: "https://en.wikipedia.org/wiki/Sarnath_Museum",
      image: Buddha_in_Sarnath_Museum,
    },
  },
  {
    id: 4,
    title: "Gupta",
    details: {
      shortDescription:
        "A Gupta-period sculpture depicting Lord Krishna battling the horse demon Keshi. Known for its dynamic movement and elegant anatomical detailing, it reflects the artistic excellence of the 5th-century Gupta dynasty.",
      styleOrigin: "Uttar Pradesh – Gupta Period (5th century CE)",
      materials: "Carved sandstone or schist",
      famousArtists: "Gupta master sculptors (unknown)",
      region: "North India",
      websiteLinks: "https://en.wikipedia.org/wiki/Gupta_Empire#Art_and_architecture",
      image: gupta_krishna,
    },
  },
];


const SculptureTypes: React.FC = () => {
 const { titles } = useParams<{ titles: string }>();

const paint = allPaints.find(
  (d) => d.title.toLowerCase().trim() === titles?.toLowerCase().trim()
);
  const [selectedArtForm, setSelectedArtForm] = useState<PaintArtForm | null>(null);
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
    setFormState({ name: "", phone: "", age: "", location: "", gender: "", address: "" });
  };

  const handleFormChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
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
              <button onClick={handleApplyClick} className="px-6 py-3 bg-[#83261d] text-white rounded-lg hover:opacity-95">
                Register
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Modal */}
      <Dialog open={!!selectedArtForm} onOpenChange={() => setSelectedArtForm(null)}>
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
                  <input name="name" value={formState.name} onChange={handleFormChange} type="text" placeholder="Enter name" className="w-full rounded-md border border-orange-300 px-3 py-2 text-sm focus:ring-0 focus:outline-none" />
                </div>

                <div>
                  <label className="font-medium text-sm">Number</label>
                  <input name="phone" value={formState.phone} onChange={handleFormChange} type="text" placeholder="Enter number" className="w-full rounded-md border border-orange-300 px-3 py-2 text-sm focus:ring-0 focus:outline-none" />
                </div>

                <div>
                  <label className="font-medium text-sm">Age</label>
                  <input name="age" value={formState.age} onChange={handleFormChange} type="text" placeholder="Age" className="w-full rounded-md border border-orange-300 px-3 py-2 text-sm focus:ring-0 focus:outline-none" />
                </div>

                <div>
                  <label className="font-medium text-sm">Location</label>
                  <input name="location" value={formState.location} onChange={handleFormChange} type="text" placeholder="City / place" className="w-full rounded-md border border-orange-300 px-3 py-2 text-sm focus:ring-0 focus:outline-none" />
                </div>

                <div className="col-span-2">
                  <label className="font-medium text-sm">Gender</label>
                  <select name="gender" value={formState.gender} onChange={handleFormChange} className="w-full rounded-md border border-orange-300 px-3 py-2 text-sm focus:ring-0 focus:outline-none">
                    <option>Select</option>
                    <option>Male</option>
                    <option>Female</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="font-medium text-sm">Address</label>
                <textarea name="address" value={formState.address} onChange={handleFormChange} placeholder="Full address" rows={3} className="w-full rounded-md border border-orange-300 px-3 py-2 text-sm focus:ring-0 focus:outline-none" />
              </div>

              <button type="submit" className="w-full bg-[#83261d] hover:bg-[#83261d] transition text-white font-semibold py-2 rounded-md">
                Submit
              </button>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default SculptureTypes;
