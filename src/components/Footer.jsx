import { Link } from "react-router-dom";
import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/i18n";

const footerLabels = {
  privacy:  { es: "Política de Privacidad", en: "Privacy Policy",   ca: "Política de Privacitat" },
  cookies:  { es: "Ajustes de Cookies",     en: "Cookie Settings",  ca: "Configuració de Galetes" },
};

const Footer = ({ onCookieSettings }) => {
  const { lang } = useLang();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-foreground">
          Decoder<span className="text-primary">.</span>
        </span>
        <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground">
          <Link to="/privacy-policy" className="hover:text-foreground transition-colors underline underline-offset-2">
            {footerLabels.privacy[lang]}
          </Link>
          <button
            onClick={onCookieSettings}
            className="hover:text-foreground transition-colors underline underline-offset-2"
          >
            {footerLabels.cookies[lang]}
          </button>
          <span>© {new Date().getFullYear()} Decoder Agency. {t.footer.rights[lang]}.</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
