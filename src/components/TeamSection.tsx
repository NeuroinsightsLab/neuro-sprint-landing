import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/i18n";
import { Brain } from "lucide-react";

const TeamSection = () => {
  const { lang } = useLang();

  return (
    <section id="team" className="py-24 relative">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">
            {t.team.title[lang]}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            {t.team.subtitle[lang]}
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {t.team.members.map((member, i) => (
            <div
              key={i}
              className="glass-card rounded-2xl p-8 text-center group hover:glow-border transition-all duration-300"
            >
              {/* Avatar */}
              <div className="w-20 h-20 mx-auto mb-5 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                <span className="font-display text-xl font-bold text-primary">
                  {member.initials}
                </span>
              </div>

              <h3 className="font-display text-lg font-bold text-foreground mb-1">
                {member.name}
              </h3>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-primary/10 border border-primary/20 px-3 py-1 text-xs font-medium text-primary mb-4">
                <Brain className="w-3 h-3" />
                {member.role[lang]}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {member.bio[lang]}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
