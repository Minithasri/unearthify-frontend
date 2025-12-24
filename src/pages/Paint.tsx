import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Madhubani from "../assets/paint/Madhubani art.jpg";
import kalamkari from "../assets/paint/kalamkari.jpg";
import mandalaArt from "../assets/paint/mandala art.jpg";
import varaliPainting from "../assets/paint/varali painting.jpg";

const artForms = [
  { id: 1, title: "Madhubani", image: Madhubani },
  { id: 2, title: "Warli", image: varaliPainting },
  { id: 3, title: "Mandala", image: mandalaArt },
  { id: 4, title: "Kalamkari", image: kalamkari },
];

const Paint = () => {
  const navigate = useNavigate();

 
const handleClick = (titles: string) => {
  navigate(`/art-forms/paint/${titles}`);
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
              key={art.id}
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

export default Paint;
