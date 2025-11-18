interface ArtistCardProps {
  name: string;
  artForm: string;
  region: string;
  image: string;
  onClick: () => void;
}

const ArtistCard = ({ name, artForm, region, image, onClick }: ArtistCardProps) => {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-card rounded-xl overflow-hidden border border-border hover-lift hover:border-primary transition-all"
    >
      <div className="aspect-square overflow-hidden bg-muted">
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg text-foreground mb-1">{name}</h3>
        <p className="text-sm text-[#83261d] font-medium mb-1">{artForm}</p>
        <p className="text-sm text-muted-foreground">{region}</p>
      </div>
      <div className="h-1 bg-gradient-to-r from-primary to-secondary transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
    </div>
  );
};

export default ArtistCard;
