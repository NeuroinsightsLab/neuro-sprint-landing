import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/i18n";

const langLabels = { es: "ES", en: "EN", ca: "CA" };

const Navbar = () => {
  const { lang, setLang } = useLang();

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/80 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <span className="font-display text-xl font-bold text-gradient">Decoder</span>
        <div className="hidden md:flex items-center gap-6">
          {["problem", "howItWorks", "proof", "usecases", "eaa", "team", "services", "pricing"].map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key === "proof" ? "social" : key)}
              className={`text-sm transition-colors ${
                key === "eaa"
                  ? "text-[hsl(30_90%_60%)] hover:text-[hsl(30_90%_75%)] font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.nav[key][lang]}
            </button>
          ))}
        </div>
        <div className="flex items-center gap-1 rounded-lg bg-secondary p-1">
          {Object.keys(langLabels).map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              className={`px-3 py-1 text-xs font-medium rounded-md transition-all ${
                lang === l
                  ? "bg-primary text-primary-foreground"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {langLabels[l]}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
