import { useLang } from "@/lib/LanguageContext";
import t from "@/lib/i18n";
import katerinaImg from "@/assets/team-katerina.jpg";
import ivanImg from "@/assets/team-ivan.jpg";
import annaImg from "@/assets/team-anna.jpg";

const teamImages = [katerinaImg, ivanImg, annaImg];

const trustStats = [
  { value: "40+", label: { es: "Años de experiencia combinada", en: "Combined years of experience", ca: "Anys d'experiència combinada" } },
  { value: "40+", label: { es: "Publicaciones científicas Q1", en: "Q1 Scientific Publications", ca: "Publicacions científiques Q1" } },
  { value: "$10M+", label: { es: "Financiación conseguida por clientes de diseño", en: "Funding raised by design clients", ca: "Finançament aconseguit per clients de disseny" } },
  { value: "300+", label: { es: "Empresas usan las plataformas del equipo", en: "Companies using team platforms", ca: "Empreses que usen les plataformes de l'equip" } },
  { value: "50+", label: { es: "Mercados cubiertos en investigación", en: "Markets covered in research", ca: "Mercats coberts en recerca" } },
  { value: "30+", label: { es: "Proyectos de investigación completados", en: "Research projects completed", ca: "Projectes de recerca completats" } },
];

const pillars = [
  {
    name: "Katerina",
    role: { es: "VENDE & TRADUCE", en: "SELLS & TRANSLATES", ca: "VEN & TRADUEIX" },
    highlights: {
      es: ["Red FMCG de 15 años abre puertas", "30+ proyectos · 50+ mercados", "Traduce datos cerebrales → ROI empresarial", "7 años UX · 20+ clientes e-com · CSM"],
      en: ["15yr FMCG network opens doors", "30+ research projects · 50+ markets", "Translates brain data → business ROI", "7yr UX · 20+ e-com clients · CSM"],
      ca: ["Xarxa FMCG de 15 anys obre portes", "30+ projectes · 50+ mercats", "Tradueix dades cerebrals → ROI empresarial", "7 anys UX · 20+ clients e-com · CSM"],
    },
  },
  {
    name: "Ivan, PhD",
    role: { es: "MIDE & VALIDA", en: "MEASURES & VALIDATES", ca: "MESURA & VALIDA" },
    highlights: {
      es: ["18 años neurociencia · 40+ publicaciones", "EEG, eye-tracking, fMRI, GSR, ECG", "Diseña metodología NeuroScore™", "Revistas Q1 · ENIGMA · 6 becas"],
      en: ["18yr neuroscience · 40+ publications", "EEG, eye-tracking, fMRI, GSR, ECG", "Designs NeuroScore™ methodology", "Q1 journals · ENIGMA · 6 grants"],
      ca: ["18 anys neurociència · 40+ publicacions", "EEG, eye-tracking, fMRI, GSR, ECG", "Dissenya metodologia NeuroScore™", "Revistes Q1 · ENIGMA · 6 beques"],
    },
  },
  {
    name: "Anna",
    role: { es: "CONSTRUYE & PRESENTA", en: "BUILDS & PRESENTS", ca: "CONSTRUEIX & PRESENTA" },
    highlights: {
      es: ["$10M+ conseguidos por clientes que diseñó", "300+ empresas usan sus plataformas", "Sistemas de diseño → 30% velocidad de dev", "5 años UX · Fintech · SaaS · IA"],
      en: ["$10M+ raised by clients she designed for", "300+ companies use her platforms", "Design systems → 30% dev velocity", "5yr UX · Fintech · SaaS · AI"],
      ca: ["$10M+ aconseguits per clients que va dissenyar", "300+ empreses usen les seves plataformes", "Sistemes de disseny → 30% velocitat de dev", "5 anys UX · Fintech · SaaS · IA"],
    },
  },
];

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

        <div className="grid sm:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          {t.team.members.map((member, i) => (
            <div key={i} className="glass-card rounded-2xl overflow-hidden group hover:glow-border transition-all duration-300">
              <div className="relative h-56 overflow-hidden bg-secondary">
                <img src={teamImages[i]} alt={member.name} className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-card/80 to-transparent" />
              </div>
              <div className="p-6">
                <h3 className="font-display text-lg font-bold text-foreground mb-1">{member.name}</h3>
                <div className="text-xs font-semibold text-primary uppercase tracking-widest mb-3">{member.role[lang]}</div>
                <p className="text-sm text-muted-foreground leading-relaxed">{member.bio[lang]}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-20">
          <h3 className="font-display text-xl font-bold text-center text-gradient mb-10">
            {lang === "es" ? "Tres Pilares, Una Misión" : lang === "en" ? "Three Pillars, One Mission" : "Tres Pilars, Una Missió"}
          </h3>
          <div className="grid sm:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pillars.map((p, i) => (
              <div key={i} className="glass-card rounded-2xl p-6 border-t-2 border-primary">
                <div className="text-xs font-bold uppercase tracking-widest text-primary mb-1">{p.name}</div>
                <div className="font-display font-bold text-foreground mb-4">{p.role[lang]}</div>
                <ul className="space-y-2">
                  {p.highlights[lang].map((h, hi) => (
                    <li key={hi} className="text-xs text-muted-foreground flex items-start gap-2">
                      <span className="text-primary mt-0.5">›</span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        <div className="glass-card rounded-2xl p-10 max-w-5xl mx-auto">
          <p className="text-center text-xs uppercase tracking-widest text-muted-foreground mb-8">
            {lang === "es" ? "Ciencia · Negocio · Diseño — 40+ años combinados" : lang === "en" ? "Science · Business · Design — 40+ combined years" : "Ciència · Negoci · Disseny — 40+ anys combinats"}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {trustStats.map((s, i) => (
              <div key={i} className="text-center">
                <div className="font-display text-3xl font-bold text-gradient mb-1">{s.value}</div>
                <div className="text-xs text-muted-foreground">{s.label[lang]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
