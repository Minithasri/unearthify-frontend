interface ArtFormCardProps {
  title: string;
  description: string;
  icon: string;
  onClick: () => void;
}

const ArtFormCard = ({ title, description, icon, onClick }: ArtFormCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-card rounded-xl p-6 border border-border hover-lift hover:border-primary transition-all"
    >
      <div className="text-5xl mb-4 transform group-hover:scale-110 transition-transform">
        {icon}
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm line-clamp-2">{description}</p>
    </div>
  );
};

export default ArtFormCard;
