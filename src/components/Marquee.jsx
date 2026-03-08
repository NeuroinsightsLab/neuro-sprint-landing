import { useLang } from "@/lib/LanguageContext";

const items = [
  "Eye-tracking", "Biosensores", "NeuroScore™", "UX Research",
  "E-commerce", "Landing page", "App Testing", "Heatmaps",
  "Packaging", "Branding", "Accesibilidad", "EAA 2025",
];

const Marquee = ({ variant = "default" }) => {
  const { lang } = useLang();

  return (
    <div className={`overflow-hidden border-y ${
      variant === "accent" 
        ? "border-primary bg-primary text-primary-foreground" 
        : "border-border bg-background"
    }`}>
      <div className="flex animate-marquee whitespace-nowrap py-3">
        {[...items, ...items].map((item, i) => (
          <span key={i} className="mx-6 text-sm font-medium flex items-center gap-3">
            <span className={`w-1.5 h-1.5 rounded-full ${
              variant === "accent" ? "bg-primary-foreground" : "bg-primary"
            }`} />
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Marquee;
