import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Veenai from "../assets/music/Veenai.jpg";
import flute from "../assets/music/flute.jpg";
import harmonium from "../assets/music/harmonium.jpg";
import nathaswaram from "../assets/music/nathaswaram.jpg";
import rajasthani from "../assets/music/rajasthani.jpg";
import tabla from "../assets/music/tabla.jpg";

const artForms = [
  { id: 1, title: "Veenai", image: Veenai },
  { id: 2, title: "Flute", image: flute },
  { id: 3, title: "Harmonium", image: harmonium },
  { id: 4, title: "Nadaswaram", image: nathaswaram },
  { id: 5, title: "Rajasthani", image: rajasthani },
  { id: 6, title: "Tabla", image: tabla },
];

const Musics = () => {
  const navigate = useNavigate();

 
  const handleClick = (title: string) => {
  navigate(`/art-forms/music/${title}`);
};

  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      <div className="container mx-auto px-4 py-4">
        <Breadcrumbs />
      </div>

      <section className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
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
                <h2 className="text-xl text-center font-medium text-gray-800 group-hover:text-orange-600 transition-colors">
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

export default Musics;
