import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/i18n";
import { Quote, TrendingUp } from "lucide-react";

const SocialProof = () => {
  const { lang } = useLang();

  const logos = ["Zara", "Glovo", "TechStartup Milano"];

  return (
    <section id="social" className="py-24">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-16">
          {t.social.title[lang]}
        </h2>

        {/* Logos */}
        <div className="flex justify-center gap-12 mb-16 flex-wrap">
          {logos.map((name) => (
            <div key={name} className="px-6 py-3 rounded-xl bg-secondary text-muted-foreground font-display font-semibold text-lg">
              {name}
            </div>
          ))}
        </div>

        {/* Testimonial */}
        <div className="max-w-2xl mx-auto glass-card rounded-2xl p-8 text-center relative">
          <Quote className="w-8 h-8 text-primary/30 mx-auto mb-4" />
          <p className="text-lg text-foreground italic mb-4">
            "{t.social.testimonial.quote[lang]}"
          </p>
          <p className="text-sm text-muted-foreground">— {t.social.testimonial.author[lang]}</p>
        </div>

        {/* Metric */}
        <div className="flex items-center justify-center gap-3 mt-12">
          <TrendingUp className="w-6 h-6 text-success" />
          <span className="text-xl font-display font-bold text-gradient">
            {t.social.metric[lang]}
          </span>
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
