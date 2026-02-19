import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/i18n";
import { Upload, Users, Brain, FileText } from "lucide-react";

const icons = [Upload, Users, Brain, FileText];

const HowItWorks = () => {
  const { lang } = useLang();

  return (
    <section id="howItWorks" className="py-24 relative">
      <div className="absolute inset-0 hero-glow opacity-30" />
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
          {t.howItWorks.title[lang]}
        </h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {t.howItWorks.steps.map((step, i) => {
            const Icon = icons[i];
            return (
              <div key={i} className="relative glass-card rounded-2xl p-6 text-center group hover:glow-border transition-all duration-300">
                {/* Step number */}
                <div className="absolute -top-3 -left-3 w-8 h-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                  {i + 1}
                </div>
                {/* Connector line */}
                {i < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-px bg-border" />
                )}
                <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <Icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="font-display font-semibold mb-2">{step.title[lang]}</h3>
                <p className="text-sm text-muted-foreground">{step.desc[lang]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
