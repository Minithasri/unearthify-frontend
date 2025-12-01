/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import gatka from "../assets/martial/6-barun-k_datta_05-during-gatka-demonstration-this-snake-like-weapon-can-hurt-anyone-who-dares-to-stand-too-close.jpg";
import kalaripayattu from "../assets/martial/kalaripayattu3.jpg";
import silambattam from "../assets/martial/silambattam-course-shara.jpg";
import thoda from "../assets/martial/thoda.jpg";


const artForms = [
  { id: 1, title: "Gatka", image: gatka },
  { id: 2, title: "kalaripayattu", image: kalaripayattu },
  { id: 3, title: "Silambam", image: silambattam },
  { id: 4, title: "Thoda", image: thoda },
];

const Martial = () => {
  const navigate = useNavigate();

  const handleClick = (titles:any) => {
    navigate(`/art-forms/martial/${titles}`);
  };


  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs />
      </div>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {artForms.map((art) => (
            <div
              key={art.title}
              className="group cursor-pointer bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              onClick={() => handleClick(art.title)}
            >
              <div className="relative w-full h-64 bg-gray-100 overflow-hidden">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <div className="p-6">
                <h2 className="text-xl font-medium text-center text-gray-800 group-hover:text-orange-600 transition-colors">
                  {art.title}
                </h2>
              </div>
            </div>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Martial;
