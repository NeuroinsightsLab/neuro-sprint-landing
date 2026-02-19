import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/i18n";
import heatmapImg from "@/assets/heatmap-hero.jpg";
import { Eye, Activity, Zap } from "lucide-react";

const HeroSection = () => {
  const { lang } = useLang();

  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 hero-glow opacity-50" />
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-medium text-primary">
              <Eye className="w-3.5 h-3.5" />
              NeuroScore™ Technology
            </div>
            <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight opacity-0 animate-fade-up">
              <span className="text-foreground">{t.hero.headline[lang]}</span>
              <br />
              <span className="text-gradient">{t.hero.headlineBold[lang]}</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg opacity-0 animate-fade-up-delay-1">
              {t.hero.sub[lang]}
            </p>
            <div className="flex flex-col sm:flex-row gap-4 opacity-0 animate-fade-up-delay-2">
              <a
                href="#pricing"
                className="inline-flex items-center justify-center gap-2 rounded-lg bg-primary text-primary-foreground font-semibold px-8 py-4 text-lg hover:brightness-110 transition-all animate-pulse-glow"
              >
                <Zap className="w-5 h-5" />
                {t.hero.cta[lang]}
              </a>
            </div>
            {/* Mini stats */}
            <div className="flex gap-8 pt-4 opacity-0 animate-fade-up-delay-3">
              {[
                { value: "95%", label: { es: "Inconsciente", en: "Unconscious", ca: "Inconscient" } },
                { value: "48h", label: { es: "Entrega", en: "Delivery", ca: "Lliurament" } },
                { value: "15+", label: { es: "Usuarios", en: "Users", ca: "Usuaris" } },
              ].map((s, i) => (
                <div key={i}>
                  <div className="text-2xl font-bold text-gradient">{s.value}</div>
                  <div className="text-xs text-muted-foreground">{s.label[lang]}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Heatmap Image */}
          <div className="relative opacity-0 animate-fade-up-delay-2">
            <div className="glow-border rounded-2xl overflow-hidden">
              <img src={heatmapImg} alt="Eye-tracking heatmap" className="w-full rounded-2xl" />
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-4 -left-4 glass-card rounded-xl px-4 py-3 flex items-center gap-3">
              <Activity className="w-5 h-5 text-primary" />
              <div>
                <div className="text-sm font-semibold text-foreground">NeuroScore™</div>
                <div className="text-xs text-muted-foreground">87/100</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
