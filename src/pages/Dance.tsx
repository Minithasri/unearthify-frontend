// // export default Dance;
// import { useNavigate } from "react-router-dom";
// import Navbar from "@/components/Navbar";
// import Footer from "@/components/Footer";
// import Breadcrumbs from "@/components/Breadcrumbs";
// import Mohiniyattam from "../assets/dance/Mohiniyattam.jpg";
// import Odissi from "../assets/dance/odissi.jpg";
// import Kathak from "../assets/dance/kathak-dance.png";
// import Kuchipudi from "../assets/dance/kuchipudi.jpg";
// import Kathakali from "../assets/dance/kathakali.jpg";
// import Bharatanatyam from "../assets/dance/barathanaatiyam.jpg";

// const Dance = () => {
//   const navigate = useNavigate();

//   const artForms = [
//     { id: 1, title: "Kathakali", image: Kathakali },
//     { id: 2, title: "Bharatanatyam", image: Bharatanatyam },
//     { id: 3, title: "Kathak", image: Kathak },
//     { id: 4, title: "Kuchipudi", image: Kuchipudi },
//     { id: 5, title: "Odissi", image: Odissi },
//     { id: 6, title: "Mohiniyattam", image: Mohiniyattam },
//   ];

//   const handleClick = (id: number) => {
//     navigate(`/dance-types/${id}`);
//   };

//   return (
//     <div className="min-h-screen bg-background">
//       <Navbar />

//       <div className="container mx-auto px-4 py-4">
//         <Breadcrumbs
//           items={[
//             { label: "Art Forms", to: "/art-forms" },
//             { label: "Dance" },
//           ]}
//         />
//       </div>

//       <section className="container mx-auto px-4 py-16">
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {artForms.map((art) => (
//             <div
//               key={art.id}
//               className="cursor-pointer bg-white shadow-md rounded-lg overflow-hidden hover:scale-105 transition-transform"
//               onClick={() => handleClick(art.id)}
//             >
//               <div className="w-full h-80 bg-gray-100 overflow-hidden">
//                 <img
//                   src={art.image}
//                   alt={art.title}
//                   className="w-full h-full object-cover"
//                 />
//               </div>
//               <div className="p-4 text-center">
//                 <h2 className="text-lg font-semibold">{art.title}</h2>
//               </div>
//             </div>
//           ))}
//         </div>
//       </section>

//       <Footer />
//     </div>
//   );
// };

// export default Dance;
import { useNavigate } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Breadcrumbs from "@/components/Breadcrumbs";
import Mohiniyattam from "../assets/dance/Mohiniyattam.jpg";
import Odissi from "../assets/dance/odissi.jpg";
import Kathak from "../assets/dance/kathak-dance.png";
import Kuchipudi from "../assets/dance/kuchipudi.jpg";
import Kathakali from "../assets/dance/kathakali.jpg";
import Bharatanatyam from "../assets/dance/barathanaatiyam.jpg";

const Dance = () => {
  const navigate = useNavigate();

  const artForms = [
    { id: 1, title: "Kathakali", image: Kathakali },
    { id: 2, title: "Bharatanatyam", image: Bharatanatyam },
    { id: 3, title: "Kathak", image: Kathak },
    { id: 4, title: "Kuchipudi", image: Kuchipudi },
    { id: 5, title: "Odissi", image: Odissi },
    { id: 6, title: "Mohiniyattam", image: Mohiniyattam },
  ];
const handleClick = (title: string) => {
  navigate(`/art-forms/dance/${title}`);
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
              <div className="relative w-full h-80 overflow-hidden">
                <img
                  src={art.image}
                  alt={art.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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

export default Dance;
