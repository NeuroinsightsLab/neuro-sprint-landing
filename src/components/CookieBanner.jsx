import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Cookie, ChevronDown, ChevronUp, X } from "lucide-react";
import { getConsent, saveConsent, CATEGORIES, DEFAULT_CONSENT } from "@/lib/cookieConsent";
import { useLang } from "@/lib/LanguageContext";

const labels = {
  title: {
    es: "Usamos cookies",
    en: "We use cookies",
    ca: "Usem galetes",
  },
  description: {
    es: "Utilizamos cookies propias y de terceros para mejorar tu experiencia y, con tu consentimiento, para análisis y marketing. Puedes gestionar tus preferencias en cualquier momento.",
    en: "We use first- and third-party cookies to improve your experience and, with your consent, for analytics and marketing. You can manage your preferences at any time.",
    ca: "Utilitzem galetes pròpies i de tercers per millorar la teva experiència i, amb el teu consentiment, per a anàlisi i màrqueting. Pots gestionar les teves preferències en qualsevol moment.",
  },
  acceptAll:   { es: "Aceptar todo",    en: "Accept all",    ca: "Acceptar tot" },
  rejectAll:   { es: "Rechazar todo",   en: "Reject all",    ca: "Rebutjar tot" },
  customize:   { es: "Personalizar",    en: "Customize",     ca: "Personalitzar" },
  savePrefs:   { es: "Guardar preferencias", en: "Save preferences", ca: "Desar preferències" },
  privacyLink: { es: "Política de Privacidad", en: "Privacy Policy", ca: "Política de Privacitat" },
  alwaysOn:    { es: "Siempre activo",  en: "Always on",     ca: "Sempre actiu" },
};

const Toggle = ({ checked, onChange, disabled, id }) => (
  <button
    id={id}
    role="switch"
    aria-checked={checked}
    disabled={disabled}
    onClick={() => !disabled && onChange(!checked)}
    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary shrink-0
      ${disabled ? "bg-primary/40 cursor-not-allowed" : checked ? "bg-primary cursor-pointer" : "bg-secondary border border-border cursor-pointer"}`}
  >
    <span
      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform
        ${checked || disabled ? "translate-x-6" : "translate-x-1"}`}
    />
  </button>
);

const CookieBanner = ({ onConsentChange }) => {
  const { lang } = useLang();
  const [visible, setVisible] = useState(false);
  const [expanded, setExpanded] = useState(false);
  const [prefs, setPrefs] = useState(DEFAULT_CONSENT);

  useEffect(() => {
    if (!getConsent()) setVisible(true);
  }, []);

  const accept = (preferences) => {
    const saved = saveConsent(preferences);
    onConsentChange?.(saved);
    setVisible(false);
  };

  const handleAcceptAll = () => accept({ analytics: true, marketing: true });
  const handleRejectAll = () => accept({ analytics: false, marketing: false });
  const handleSave      = () => accept(prefs);

  if (!visible) return null;

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-label={labels.title[lang]}
      className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6"
    >
      <div className="glass-card rounded-2xl border border-border max-w-3xl mx-auto p-6 shadow-2xl">

        <div className="flex items-start gap-3 mb-4">
          <Cookie className="w-5 h-5 text-primary shrink-0 mt-0.5" />
          <div>
            <h2 className="font-display font-bold text-base mb-1">{labels.title[lang]}</h2>
            <p className="text-xs text-muted-foreground leading-relaxed">
              {labels.description[lang]}{" "}
              <Link to="/privacy-policy" target="_blank" className="text-primary underline underline-offset-2 hover:text-primary/80">
                {labels.privacyLink[lang]}
              </Link>.
            </p>
          </div>
        </div>

        {/* Customise panel */}
        {expanded && (
          <div className="mb-4 space-y-3 border-t border-border pt-4">
            {Object.values(CATEGORIES).map((cat) => (
              <div key={cat.id} className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <label
                    htmlFor={`cookie-toggle-${cat.id}`}
                    className="text-sm font-medium text-foreground block mb-0.5"
                  >
                    {cat.label[lang]}
                  </label>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {cat.description[lang]}
                  </p>
                  <p className="text-xs text-muted-foreground/60 mt-0.5">
                    {cat.cookies.map((c) => c.name).join(", ")}
                  </p>
                </div>
                <div className="flex flex-col items-end gap-1 shrink-0">
                  <Toggle
                    id={`cookie-toggle-${cat.id}`}
                    checked={cat.required ? true : prefs[cat.id]}
                    disabled={cat.required}
                    onChange={(val) => setPrefs((p) => ({ ...p, [cat.id]: val }))}
                  />
                  {cat.required && (
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {labels.alwaysOn[lang]}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Actions */}
        <div className="flex flex-wrap items-center gap-2 mt-2">
          <button
            onClick={handleAcceptAll}
            className="rounded-full bg-primary text-primary-foreground font-semibold text-sm px-5 py-2.5 min-h-[44px] hover:brightness-110 transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {labels.acceptAll[lang]}
          </button>
          <button
            onClick={handleRejectAll}
            className="rounded-full border border-border text-foreground font-semibold text-sm px-5 py-2.5 min-h-[44px] hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
          >
            {labels.rejectAll[lang]}
          </button>
          {expanded ? (
            <button
              onClick={handleSave}
              className="rounded-full border border-primary text-primary font-semibold text-sm px-5 py-2.5 min-h-[44px] hover:bg-primary/10 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {labels.savePrefs[lang]}
            </button>
          ) : (
            <button
              onClick={() => setExpanded(true)}
              className="rounded-full border border-border text-muted-foreground font-semibold text-sm px-5 py-2.5 min-h-[44px] hover:text-foreground hover:bg-secondary transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary inline-flex items-center gap-1"
            >
              {labels.customize[lang]}
              <ChevronDown className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

      </div>
    </div>
  );
};

export default CookieBanner;
