// /* eslint-disable @typescript-eslint/no-explicit-any */
// import { useNavigate } from "react-router-dom";

// interface ArtFormCardProps {
//   title: string;
//   category: string; // dance, martial, music
//   description: string;
//   image: string;
// }

// const ArtFormCard = ({
//   title,
//   category,
//   description,
//   image,
// }: ArtFormCardProps) => {
//   const navigate = useNavigate();

//   const handleClick = () => {
//     navigate(`/art-forms/${category}/${title}`);
//   };

//   return (
//     <div
//       onClick={handleClick}
//       className="group cursor-pointer bg-card rounded-2xl p-2 border border-border
//                  hover:border-primary hover:shadow-xl transition-all duration-300"
//     >
//       {/* IMAGE */}
//       <div className="overflow-hidden rounded-xl mb-4">
//         <img
//           src={image}
//           alt={title}
//           className="w-full h-44 object-cover group-hover:scale-110 
//                      transition-transform duration-500"
//         />
//       </div>

//       {/* TITLE */}
//       <h3 className="text-xl font-semibold text-center text-foreground mb-2">
//         {title}
//       </h3>

//       {/* DESCRIPTION */}
//       <p className="text-sm text-center text-muted-foreground mb-3">
//         {description}
//       </p>
//     </div>
//   );
// };

// export default ArtFormCard;
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useNavigate } from "react-router-dom";

interface ArtFormCardProps {
  title: string;
  category: string;
  description: string;
  image: string;
}

const ArtFormCard = ({ title, category, description, image }: ArtFormCardProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/art-forms/${category}/${title}`);
  };

  return (
    <div
      onClick={handleClick}
      className="group cursor-pointer bg-card rounded-2xl p-4 border border-border
                 hover:border-primary hover:shadow-2xl transition-all duration-300
                 w-full max-w-sm mx-auto"
    >
      {/* IMAGE */}
      <div className="overflow-hidden rounded-xl mb-5">
        <img
          src={image}
          alt={title}
          className="w-full h-60 object-cover group-hover:scale-110 
                     transition-transform duration-500"
        />
      </div>

      {/* TITLE */}
      <h3 className="text-2xl font-semibold text-center text-foreground mb-3">
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className="text-[15px] text-center text-muted-foreground mb-3">
        {description}
      </p>
    </div>
  );
};

export default ArtFormCard;
