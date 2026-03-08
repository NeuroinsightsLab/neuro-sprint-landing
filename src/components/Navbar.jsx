import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/i18n";
import { Menu, X } from "lucide-react";

const langLabels = { es: "ES", en: "EN", ca: "CA" };

const Navbar = () => {
  const { lang, setLang } = useLang();
  const [mobileOpen, setMobileOpen] = useState(false);

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileOpen(false);
  };

  const navKeys = ["problem", "howItWorks", "proof", "usecases", "eaa", "team", "services", "pricing"];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-border bg-background/90 backdrop-blur-xl">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <span className="font-display text-xl font-bold text-foreground">
          Decoder<span className="text-primary">.</span>
        </span>

        <div className="hidden md:flex items-center gap-6">
          {navKeys.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key === "proof" ? "social" : key)}
              className={`text-sm transition-colors ${
                key === "eaa"
                  ? "text-primary hover:text-primary/80 font-semibold"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {t.nav[key][lang]}
            </button>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-0.5 rounded-full bg-secondary p-1">
            {Object.keys(langLabels).map((l) => (
              <button
                key={l}
                onClick={() => setLang(l)}
                className={`px-3 py-1 text-xs font-medium rounded-full transition-all ${
                  lang === l
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {langLabels[l]}
              </button>
            ))}
          </div>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden text-foreground"
          >
            {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background px-4 py-4 space-y-3">
          {navKeys.map((key) => (
            <button
              key={key}
              onClick={() => scrollTo(key === "proof" ? "social" : key)}
              className="block w-full text-left text-sm text-muted-foreground hover:text-foreground py-2 transition-colors"
            >
              {t.nav[key][lang]}
            </button>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
