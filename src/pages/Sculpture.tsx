import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Bodhi_Ajanta from "../assets/sculpture/Bodhi_Ajanta.jpg";
import Deogarh_1999_Durga from "../assets/sculpture/Deogarh_1999_Durga.jpg";
import Buddha_in_Sarnath_Museum from "../assets/sculpture/Buddha_in_Sarnath_Museum_(Dhammajak_Mutra).jpg";
import gupta_krishna from "../assets/sculpture/960px-Met,_india_(uttar_pradesh),_gupta_period,_krishna_battling_the_horse_demon_keshi,_5th_century.jpeg";

const artForms = [
  { id: 1, title: "Bodhi", image: Bodhi_Ajanta },
  { id: 2, title: "Deogarh", image: Deogarh_1999_Durga },
  { id: 3, title: "Buddha", image: Buddha_in_Sarnath_Museum },
  { id: 4, title: "Gupta", image: gupta_krishna },
];

const Sculpture = () => {
  const navigate = useNavigate();


const handleClick = (title: string) => {
  navigate(`/art-forms/sculpture/${title}`);
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

export default Sculpture;
