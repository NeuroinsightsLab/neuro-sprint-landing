import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/i18n";
import { TrendingUp } from "lucide-react";

const UseCasesSection = () => {
  const { lang } = useLang();

  return (
    <section id="usecases" className="py-24 relative">
      <div className="absolute inset-0 hero-glow opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t.useCases.title[lang]}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.useCases.subtitle[lang]}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {t.useCases.cases.map((c, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 flex flex-col group hover:glow-border transition-all duration-300"
            >
              {/* Emoji icon */}
              <div className="text-4xl mb-4">{c.icon}</div>

              {/* Group badge */}
              <div className="flex items-center gap-2 mb-3">
                <span className="text-xs font-bold uppercase tracking-widest text-primary">
                  {c.group[lang]}
                </span>
                <span className="h-px flex-1 bg-border" />
              </div>

              {/* Tag */}
              <span className="inline-block rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-medium text-primary mb-4 self-start">
                {c.tag[lang]}
              </span>

              <h3 className="font-display text-lg font-bold text-foreground mb-3">
                {c.title[lang]}
              </h3>

              <p className="text-sm text-muted-foreground leading-relaxed flex-1 mb-6">
                {c.desc[lang]}
              </p>

              {/* Metrics */}
              <div className="grid grid-cols-2 gap-3 border-t border-border pt-5">
                {c.metrics.map((m, mi) => (
                  <div key={mi} className="text-center">
                    <div className="flex items-center justify-center gap-1 text-xl font-bold text-gradient mb-1">
                      <TrendingUp className="w-4 h-4 text-success shrink-0" />
                      {m.value}
                    </div>
                    <div className="text-xs text-muted-foreground">{m.label[lang]}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UseCasesSection;
