import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/i18n";
import { ShieldCheck, AlertTriangle, Check, Zap } from "lucide-react";

const EAASection = () => {
  const { lang } = useLang();

  return (
    <section id="eaa" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,hsl(30_90%_55%/0.08),transparent_70%)]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[hsl(30_90%_55%/0.4)] to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-center mb-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[hsl(30_90%_55%/0.12)] border border-[hsl(30_90%_55%/0.3)] px-5 py-2 text-sm font-semibold text-[hsl(30_90%_65%)]">
              <AlertTriangle className="w-4 h-4" />
              {t.eaa.badge[lang]}
            </div>
          </div>

          <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-4">
            {t.eaa.title[lang]}
          </h2>
          <p className="text-muted-foreground text-center max-w-2xl mx-auto text-lg mb-12">
            {t.eaa.subtitle[lang]}
          </p>

          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="glass-card rounded-2xl p-8 border border-[hsl(30_90%_55%/0.25)] text-center">
              <AlertTriangle className="w-10 h-10 text-[hsl(30_90%_60%)] mx-auto mb-4" />
              <div className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
                {t.eaa.fines.label[lang]}
              </div>
              <div className="text-6xl font-display font-bold text-[hsl(30_90%_65%)] mb-2">
                {t.eaa.fines.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {lang === "es"
                  ? "multa máxima por incumplimiento"
                  : lang === "en"
                  ? "maximum fine for non-compliance"
                  : "multa màxima per incompliment"}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <div className="glass-card rounded-2xl p-8 flex-1">
                <div className="flex items-center gap-2 mb-5">
                  <ShieldCheck className="w-5 h-5 text-primary" />
                  <span className="font-display font-semibold text-foreground">NeuroScore™ EAA</span>
                </div>
                <ul className="space-y-3">
                  {t.eaa.points.map((point, i) => (
                    <li key={i} className="flex items-start gap-3 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-success shrink-0 mt-0.5" />
                      <span>{point[lang]}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-[hsl(30_90%_55%)] text-[hsl(220_20%_6%)] font-bold px-6 py-4 text-base hover:brightness-110 transition-all"
              >
                <Zap className="w-5 h-5" />
                {t.eaa.cta[lang]}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EAASection;
