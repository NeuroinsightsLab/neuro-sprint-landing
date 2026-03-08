import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/i18n";

const Footer = () => {
  const { lang } = useLang();

  return (
    <footer className="border-t border-border py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between gap-4">
        <span className="font-display font-bold text-foreground">
          Decoder<span className="text-primary">.</span>
        </span>
        <span className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} Decoder Agency. {t.footer.rights[lang]}.
        </span>
      </div>
    </footer>
  );
};

export default Footer;
