import { Calendar, MapPin } from "lucide-react";

interface EventCardProps {
  title: string;
  date: string;
  location: string;
  image: string;
  description: string;
}

const EventCard = ({ title, date, location, image, description }: EventCardProps) => {
  return (
    <div className="group bg-card rounded-xl overflow-hidden border border-border hover-lift transition-all">
      <div className="aspect-video overflow-hidden bg-muted">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-lg text-foreground mb-3">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{description}</p>
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Calendar size={16} className="text-[#83261d]" />
            <span>{date}</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin size={16} className="text-[#83261d]" />
            <span>{location}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EventCard;
