import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/i18n";
import { Check, Zap, Clock } from "lucide-react";

const PricingSection = () => {
  const { lang } = useLang();

  return (
    <section id="pricing" className="py-24 relative">
      <div className="absolute inset-0 hero-glow opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
          {t.pricing.title[lang]}
        </h2>
        <p className="text-center text-muted-foreground flex items-center justify-center gap-2 mb-16">
          <Clock className="w-4 h-4 text-destructive" />
          {t.pricing.limited[lang]}
        </p>

        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
          <div className="glass-card rounded-2xl p-8 flex flex-col">
            <h3 className="font-display text-xl font-bold mb-2">{t.pricing.remote.name[lang]}</h3>
            <div className="text-4xl font-bold text-gradient mb-6">{t.pricing.remote.price}</div>
            <ul className="space-y-3 flex-1 mb-8">
              {t.pricing.remote.features[lang].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-muted-foreground">
                  <Check className="w-4 h-4 text-primary shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#" className="block text-center rounded-lg border border-primary text-primary font-semibold px-6 py-3 hover:bg-primary/10 transition-colors">
              {t.pricing.cta[lang]}
            </a>
          </div>

          <div className="glass-card rounded-2xl p-8 flex flex-col glow-border relative">
            <div className="absolute -top-3 right-6 bg-primary text-primary-foreground text-xs font-bold px-3 py-1 rounded-full">
              {t.pricing.lab.popular[lang]}
            </div>
            <h3 className="font-display text-xl font-bold mb-2">{t.pricing.lab.name[lang]}</h3>
            <div className="text-4xl font-bold text-gradient mb-6">{t.pricing.lab.price}</div>
            <ul className="space-y-3 flex-1 mb-8">
              {t.pricing.lab.features[lang].map((f, i) => (
                <li key={i} className="flex items-center gap-2 text-sm text-foreground">
                  <Check className="w-4 h-4 text-success shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
            <a href="#" className="block text-center rounded-lg bg-primary text-primary-foreground font-semibold px-6 py-3 hover:brightness-110 transition-all animate-pulse-glow">
              <Zap className="w-4 h-4 inline mr-2" />
              {t.pricing.cta[lang]}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
