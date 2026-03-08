import { useState } from "react";
import { useLang } from "@/lib/LanguageContext";
import {
  FlaskConical, Users, BarChart3, Microscope, Database, Globe, BookOpen, UserSearch, TestTube, LayoutGrid,
  Code2, Bot, Blocks, TrendingUp, Cpu, Wrench, Package, Globe2,
  Map, ShieldCheck, Accessibility, Lightbulb, Package2, Palette,
  ChevronRight, Send, CalendarDays, X
} from "lucide-react";

const categories = [
  {
    id: "ux",
    emoji: "🧠",
    title: { es: "Research & Análisis", en: "Research & Analysis", ca: "Recerca & Anàlisi" },
    desc: {
      es: "Investigación UX profunda basada en neurociencia, eye-tracking y biosensores para decisiones basadas en datos reales.",
      en: "Deep UX research grounded in neuroscience, eye-tracking and biosensors for decisions backed by real data.",
      ca: "Recerca UX profunda basada en neurociència, eye-tracking i biosensors per a decisions basades en dades reals.",
    },
    services: [
      { icon: <Users className="w-4 h-4" />, label: { es: "Segmentación de Audiencia & Maximización de Beneficios", en: "Audience Segmentation & Profit Maximization", ca: "Segmentació d'Audiència & Maximització de Beneficis" } },
      { icon: <Microscope className="w-4 h-4" />, label: { es: "Estudios de Percepción de Marca", en: "Brand Perception Studies", ca: "Estudis de Percepció de Marca" } },
      { icon: <BarChart3 className="w-4 h-4" />, label: { es: "Análisis de Competidores & Benchmarking", en: "Competitor Analysis & Benchmarking", ca: "Anàlisi de Competidors & Benchmarking" } },
      { icon: <Database className="w-4 h-4" />, label: { es: "Análisis de Datos & Métricas", en: "Data & Metrics Analysis", ca: "Anàlisi de Dades & Mètriques" } },
      { icon: <Cpu className="w-4 h-4" />, label: { es: "Configuración de Sistema de Recopilación de Datos", en: "Data Collection System Setup", ca: "Configuració de Sistema de Recollida de Dades" } },
      { icon: <Globe className="w-4 h-4" />, label: { es: "Investigación de Mercado", en: "Market Research", ca: "Recerca de Mercat" } },
      { icon: <BookOpen className="w-4 h-4" />, label: { es: "Investigación & Publicaciones sin Sesgo", en: "Unbiased Research & Publications", ca: "Recerca & Publicacions Imparcials" } },
      { icon: <UserSearch className="w-4 h-4" />, label: { es: "Investigación de Usuario", en: "User Research", ca: "Recerca d'Usuari" } },
      { icon: <FlaskConical className="w-4 h-4" />, label: { es: "Laboratorio UX", en: "UX Laboratory", ca: "Laboratori UX" } },
      { icon: <TestTube className="w-4 h-4" />, label: { es: "UX Testing", en: "UX Testing", ca: "UX Testing" } },
    ],
  },
  {
    id: "dev",
    emoji: "⚙️",
    title: { es: "Desarrollo de Software", en: "Software Development", ca: "Desenvolupament de Programari" },
    desc: {
      es: "Soluciones tecnológicas de alto rendimiento: desde MVPs ágiles hasta arquitecturas de IA y blockchain.",
      en: "High-performance tech solutions: from agile MVPs to AI and blockchain architectures.",
      ca: "Solucions tecnològiques d'alt rendiment: des de MVPs àgils fins a arquitectures d'IA i blockchain.",
    },
    services: [
      { icon: <Bot className="w-4 h-4" />, label: { es: "Desarrollo de IA", en: "AI Development", ca: "Desenvolupament d'IA" } },
      { icon: <LayoutGrid className="w-4 h-4" />, label: { es: "Desarrollo de Apps", en: "App Software Development", ca: "Desenvolupament d'Apps" } },
      { icon: <Blocks className="w-4 h-4" />, label: { es: "Blockchain", en: "Blockchain", ca: "Blockchain" } },
      { icon: <TrendingUp className="w-4 h-4" />, label: { es: "Ciencia de Datos", en: "Data Science", ca: "Ciència de Dades" } },
      { icon: <Cpu className="w-4 h-4" />, label: { es: "Internet de las Cosas", en: "Internet of Things", ca: "Internet de les Coses" } },
      { icon: <Wrench className="w-4 h-4" />, label: { es: "MVP Low-Code & Concepto", en: "Low-Code MVP & Concept Development", ca: "MVP Low-Code & Desenvolupament de Concepte" } },
      { icon: <Package className="w-4 h-4" />, label: { es: "Desarrollo de Software de Producto", en: "Product Software Development", ca: "Desenvolupament de Programari de Producte" } },
      { icon: <Globe2 className="w-4 h-4" />, label: { es: "Desarrollo Web", en: "Website Software Development", ca: "Desenvolupament Web" } },
    ],
  },
  {
    id: "design",
    emoji: "✏️",
    title: { es: "UX & Diseño de Producto", en: "UX & Product Design", ca: "UX & Disseny de Producte" },
    desc: {
      es: "Diseño centrado en el usuario que convierte insights neurocientíficos en experiencias digitales y físicas accesibles.",
      en: "User-centred design translating neuroscientific insights into accessible digital and physical experiences.",
      ca: "Disseny centrat en l'usuari que tradueix insights neurocientífics en experiències digitals i físiques accessibles.",
    },
    services: [
      { icon: <Map className="w-4 h-4" />, label: { es: "Customer Journey Mapping (CJM) & Estrategia Omnicanal", en: "Customer Journey Mapping (CJM) & Omnichannel Strategy", ca: "Customer Journey Mapping (CJM) & Estratègia Omnicanal" } },
      { icon: <UserSearch className="w-4 h-4" />, label: { es: "Estrategia de Desarrollo de Producto Centrada en el Cliente", en: "Customer-Centric Product Development Strategy", ca: "Estratègia de Desenvolupament de Producte Centrada en el Client" } },
      { icon: <Accessibility className="w-4 h-4" />, label: { es: "Accesibilidad de Productos Digitales & Físicos", en: "Digital & Physical Product Accessibility", ca: "Accessibilitat de Productes Digitals & Físics" } },
      { icon: <ShieldCheck className="w-4 h-4" />, label: { es: "Enfoque de Diseño Inclusivo", en: "Inclusive Design Approach", ca: "Enfocament de Disseny Inclusiu" } },
      { icon: <Wrench className="w-4 h-4" />, label: { es: "MVP Low-Code & Concepto", en: "Low-Code MVP & Concept Development", ca: "MVP Low-Code & Desenvolupament de Concepte" } },
      { icon: <Package2 className="w-4 h-4" />, label: { es: "Diseño de Productos Físicos", en: "Physical Products Design", ca: "Disseny de Productes Físics" } },
      { icon: <Palette className="w-4 h-4" />, label: { es: "UX & Diseño de Producto", en: "UX & Product Design", ca: "UX & Disseny de Producte" } },
      { icon: <Lightbulb className="w-4 h-4" />, label: { es: "Investigación de Usuario", en: "User Research", ca: "Recerca d'Usuari" } },
    ],
  },
];

const ServicesSection = () => {
  const { lang } = useLang();
  const [activeTab, setActiveTab] = useState("ux");
  const [showForm, setShowForm] = useState(false);
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const labels = {
    title: { es: "Nuestros Servicios", en: "Our Services", ca: "Els Nostres Serveis" },
    subtitle: {
      es: "Desde investigación neuro-validada hasta producto final — cubrimos todo el ciclo de innovación centrado en el usuario.",
      en: "From neuro-validated research to final product — we cover the full user-centred innovation cycle.",
      ca: "Des de recerca neuro-validada fins al producte final — cobrim tot el cicle d'innovació centrat en l'usuari.",
    },
    requestProposal: { es: "Solicitar Propuesta", en: "Request Proposal", ca: "Sol·licitar Proposta" },
    scheduleCall: { es: "Agendar Llamada", en: "Schedule a Call", ca: "Agendar Trucada" },
    formTitle: { es: "Solicitar Propuesta", en: "Request a Proposal", ca: "Sol·licitar Proposta" },
    name: { es: "Nombre", en: "Name", ca: "Nom" },
    email: { es: "Email", en: "Email", ca: "Email" },
    company: { es: "Empresa", en: "Company", ca: "Empresa" },
    interest: { es: "¿En qué podemos ayudarte?", en: "How can we help you?", ca: "En què podem ajudar-te?" },
    send: { es: "Enviar", en: "Send", ca: "Enviar" },
    thanks: { es: "¡Gracias! Te contactaremos pronto.", en: "Thanks! We'll be in touch soon.", ca: "Gràcies! Et contactarem aviat." },
  };

  const active = categories.find((c) => c.id === activeTab);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => { setShowForm(false); setSubmitted(false); setForm({ name: "", email: "", company: "", message: "" }); }, 3000);
  };

  return (
    <section id="services" className="py-24 relative">
      <div className="absolute inset-0 hero-glow opacity-20" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{labels.title[lang]}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">{labels.subtitle[lang]}</p>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveTab(cat.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === cat.id
                  ? "bg-primary text-primary-foreground shadow-[0_0_20px_-5px_hsl(var(--primary)/0.5)]"
                  : "bg-secondary text-muted-foreground hover:text-foreground"
              }`}
            >
              <span>{cat.emoji}</span>
              {cat.title[lang]}
            </button>
          ))}
        </div>

        <div className="max-w-5xl mx-auto glass-card rounded-2xl p-8 md:p-10">
          <div className="mb-8">
            <h3 className="font-display text-2xl font-bold text-foreground mb-2">
              {active.emoji} {active.title[lang]}
            </h3>
            <p className="text-muted-foreground">{active.desc[lang]}</p>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 mb-10">
            {active.services.map((s, i) => (
              <div key={i} className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 hover:bg-primary/5 transition-all duration-200 group">
                <span className="text-primary group-hover:scale-110 transition-transform shrink-0">{s.icon}</span>
                <span className="text-sm text-foreground">{s.label[lang]}</span>
                <ChevronRight className="w-3.5 h-3.5 text-muted-foreground ml-auto opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <button onClick={() => setShowForm(true)} className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-primary text-primary-foreground font-bold px-6 py-4 hover:brightness-110 transition-all animate-pulse-glow">
              <Send className="w-4 h-4" />
              {labels.requestProposal[lang]}
            </button>
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="flex-1 inline-flex items-center justify-center gap-2 rounded-full border border-primary text-primary font-bold px-6 py-4 hover:bg-primary/10 transition-colors">
              <CalendarDays className="w-4 h-4" />
              {labels.scheduleCall[lang]}
            </a>
          </div>
        </div>
      </div>

      {showForm && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm">
          <div className="glass-card rounded-2xl p-8 w-full max-w-md relative">
            <button onClick={() => setShowForm(false)} className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors">
              <X className="w-5 h-5" />
            </button>
            <h3 className="font-display text-xl font-bold mb-6">{labels.formTitle[lang]}</h3>
            {submitted ? (
              <div className="text-center py-8 text-success font-semibold text-lg">✅ {labels.thanks[lang]}</div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">{labels.name[lang]}</label>
                  <input required maxLength={100} value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full rounded-lg bg-secondary border border-border text-foreground px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">{labels.email[lang]}</label>
                  <input required type="email" maxLength={255} value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full rounded-lg bg-secondary border border-border text-foreground px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">{labels.company[lang]}</label>
                  <input maxLength={100} value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full rounded-lg bg-secondary border border-border text-foreground px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div>
                  <label className="text-xs text-muted-foreground mb-1 block">{labels.interest[lang]}</label>
                  <textarea rows={4} maxLength={1000} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full rounded-lg bg-secondary border border-border text-foreground px-4 py-2.5 text-sm focus:outline-none focus:border-primary transition-colors resize-none" />
                </div>
                <button type="submit" className="w-full rounded-xl bg-primary text-primary-foreground font-bold py-3 hover:brightness-110 transition-all">
                  {labels.send[lang]}
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

export default ServicesSection;
