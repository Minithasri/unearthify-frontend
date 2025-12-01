interface ArtFormCardProps {
  title: string;
  description: string;
  image: string;
  onClick: () => void;
}
import dance from "../assets/form/dance.jpg";
import drama from "../assets/form/Drama.jpg";
import painting from "../assets/form/Painting.jpg";
import martial from "../assets/form/martial.jpg";
import sculpture from "../assets/form/Sculpture.jpg";
import music from "../assets/form/Music.jpg";

export const artForms = [
  {
    title: "Dance",
    description: "Classical, folk and contemporary dance forms.",
    image: dance,
  },
  {
    title: "Drama",
    description: "Theatre, acting and stage performance arts.",
    image: drama,
  },
  {
    title: "Painting",
    description: "Traditional and modern painting forms.",
    image: painting,
  },
  {
    title: "Music",
    description: "Vocal and instrumental music traditions.",
    image: music,
  },
  {
    title: "Sculpture",
    description: "Stone, clay and metal sculpture arts.",
    image: sculpture,
  },
  {
    title: "Martial Arts",
    description: "Ancient Indian martial art forms.",
    image: martial,
  },
];

const ArtFormCard = ({
  title,
  description,
  image,
  onClick,
}: ArtFormCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-card rounded-xl p-5 border border-border hover:border-primary hover:shadow-lg transition-all"
    >
      {/* IMAGE */}
      <img
        src={image}
        alt={title}
        className="w-full h-40 object-cover rounded-lg mb-4 group-hover:scale-105 transition-transform"
      />

      {/* TITLE */}
      <h3 className="text-xl font-semibold text-center text-foreground mb-2">{title}</h3>

     

      {/* APPLY BUTTON
      <button className="w-full bg-primary text-white  text-xs py-2 rounded-md font-semibold hover:bg-primary/90 transition">
        Apply →
      </button> */}
    </div>
  );
};

export default ArtFormCard;
