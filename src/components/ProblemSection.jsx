import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/i18n";
import { X, Check } from "lucide-react";

const ProblemSection = () => {
  const { lang } = useLang();
  const rows = t.problem.rows;

  return (
    <section id="problem" className="py-24 relative">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
          {t.problem.title[lang]}
        </h2>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <div className="glass-card rounded-2xl p-8 border-destructive/30">
            <h3 className="text-lg font-semibold text-destructive mb-6 flex items-center gap-2">
              <X className="w-5 h-5" />
              {t.problem.traditional[lang]}
            </h3>
            <div className="space-y-4">
              {Object.values(rows).map((row, i) => (
                <div key={i} className="flex items-center gap-3 text-muted-foreground">
                  <X className="w-4 h-4 text-destructive shrink-0" />
                  <span>{row.problem[lang]}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="glass-card rounded-2xl p-8 glow-border">
            <h3 className="text-lg font-semibold text-success mb-6 flex items-center gap-2">
              <Check className="w-5 h-5" />
              {t.problem.neuro[lang]}
            </h3>
            <div className="space-y-4">
              {Object.values(rows).map((row, i) => (
                <div key={i} className="flex items-center gap-3 text-foreground">
                  <Check className="w-4 h-4 text-success shrink-0" />
                  <span>{row.solution[lang]}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
