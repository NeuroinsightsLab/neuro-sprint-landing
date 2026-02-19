export type Lang = "es" | "en" | "ca";

const translations = {
  nav: {
    problem: { es: "Problema", en: "Problem", ca: "Problema" },
    howItWorks: { es: "Cómo Funciona", en: "How It Works", ca: "Com Funciona" },
    proof: { es: "Resultados", en: "Results", ca: "Resultats" },
    pricing: { es: "Precios", en: "Pricing", ca: "Preus" },
  },
  hero: {
    headline: {
      es: "El 95% de las compras son inconscientes.",
      en: "95% of purchases are unconscious.",
      ca: "El 95% de les compres són inconscients.",
    },
    headlineBold: {
      es: "Valida tu UX con neurodata en 48h por €2.500",
      en: "Validate your UX with neurodata in 48h for €2,500",
      ca: "Valida la teva UX amb neurodata en 48h per €2.500",
    },
    sub: {
      es: "Eye-tracking + biosensores en 15 consumidores reales. NeuroScore™ + 3 acciones concretas. Sin focus groups lentos.",
      en: "Eye-tracking + biosensors on 15 real consumers. NeuroScore™ + 3 concrete actions. No slow focus groups.",
      ca: "Eye-tracking + biosensors en 15 consumidors reals. NeuroScore™ + 3 accions concretes. Sense focus groups lents.",
    },
    cta: {
      es: "Reserva tu Test Ahora",
      en: "Book Your Test Now",
      ca: "Reserva el teu Test Ara",
    },
  },
  problem: {
    title: {
      es: "¿Por qué necesitas NeuroInsight?",
      en: "Why do you need NeuroInsight?",
      ca: "Per què necessites NeuroInsight?",
    },
    traditional: { es: "Focus Groups Tradicionales", en: "Traditional Focus Groups", ca: "Focus Groups Tradicionals" },
    neuro: { es: "NeuroSprint™", en: "NeuroSprint™", ca: "NeuroSprint™" },
    rows: {
      time: { 
        problem: { es: "Meses de espera", en: "Months of waiting", ca: "Mesos d'espera" }, 
        solution: { es: "48 horas", en: "48 hours", ca: "48 hores" } 
      },
      data: { 
        problem: { es: "Datos subjetivos", en: "Subjective data", ca: "Dades subjectives" }, 
        solution: { es: "Datos objetivos", en: "Objective data", ca: "Dades objectives" } 
      },
      cost: { 
        problem: { es: "€50.000+", en: "€50,000+", ca: "€50.000+" }, 
        solution: { es: "Desde €2.500", en: "From €2,500", ca: "Des de €2.500" } 
      },
      insight: { 
        problem: { es: "Opiniones declaradas", en: "Stated opinions", ca: "Opinions declarades" }, 
        solution: { es: "Atracción real (95% subconsciente)", en: "Real attraction (95% subconscious)", ca: "Atracció real (95% subconscient)" } 
      },
    },
  },
  howItWorks: {
    title: { es: "Cómo Funciona", en: "How It Works", ca: "Com Funciona" },
    steps: [
      { 
        title: { es: "Envía tu Asset", en: "Send Your Asset", ca: "Envia el teu Asset" }, 
        desc: { es: "Packaging, homepage o creatividad", en: "Packaging, homepage or creative", ca: "Packaging, homepage o creativitat" } 
      },
      { 
        title: { es: "Test Remoto", en: "Remote Test", ca: "Test Remot" }, 
        desc: { es: "15 usuarios con eye-tracking y biosensores", en: "15 users with eye-tracking & biosensors", ca: "15 usuaris amb eye-tracking i biosensors" } 
      },
      { 
        title: { es: "Análisis IA", en: "AI Analysis", ca: "Anàlisi IA" }, 
        desc: { es: "NeuroScore™ generado automáticamente", en: "NeuroScore™ generated automatically", ca: "NeuroScore™ generat automàticament" } 
      },
      { 
        title: { es: "Informe 48h", en: "48h Report", ca: "Informe 48h" }, 
        desc: { es: "PDF con heatmaps, métricas y 3 acciones", en: "PDF with heatmaps, metrics & 3 actions", ca: "PDF amb heatmaps, mètriques i 3 accions" } 
      },
    ],
  },
  social: {
    title: { es: "Resultados Reales", en: "Real Results", ca: "Resultats Reals" },
    testimonial: {
      quote: {
        es: "+18% CTR después de aplicar NeuroScore. Mejor que cualquier encuesta.",
        en: "+18% CTR after applying NeuroScore. Better than any survey.",
        ca: "+18% CTR després d'aplicar NeuroScore. Millor que qualsevol enquesta.",
      },
      author: { es: "CMO, Empresa Retail", en: "CMO, Retail Company", ca: "CMO, Empresa Retail" },
    },
    metric: { es: "+15% uplift medio en clientes", en: "+15% average client uplift", ca: "+15% uplift mitjà en clients" },
  },
  pricing: {
    title: { es: "Elige tu Sprint", en: "Choose Your Sprint", ca: "Tria el teu Sprint" },
    remote: {
      name: { es: "Sprint Remoto", en: "Remote Sprint", ca: "Sprint Remot" },
      price: "€1.500",
      features: {
        es: ["10 usuarios remotos", "Eye-tracking webcam", "NeuroScore™ básico", "Informe PDF 72h"],
        en: ["10 remote users", "Webcam eye-tracking", "Basic NeuroScore™", "PDF report in 72h"],
        ca: ["10 usuaris remots", "Eye-tracking webcam", "NeuroScore™ bàsic", "Informe PDF 72h"],
      },
    },
    lab: {
      name: { es: "Sprint Lab", en: "Lab Sprint", ca: "Sprint Lab" },
      price: "€3.500",
      popular: { es: "Más Popular", en: "Most Popular", ca: "Més Popular" },
      features: {
        es: ["15 usuarios en laboratorio", "Eye-tracking + biosensores", "NeuroScore™ completo", "Informe PDF 48h", "3 acciones concretas"],
        en: ["15 lab users", "Eye-tracking + biosensors", "Full NeuroScore™", "PDF report in 48h", "3 concrete actions"],
        ca: ["15 usuaris en laboratori", "Eye-tracking + biosensors", "NeuroScore™ complet", "Informe PDF 48h", "3 accions concretes"],
      },
    },
    cta: { es: "Empezar Ahora", en: "Get Started", ca: "Començar Ara" },
    limited: { es: "Plazas limitadas este mes", en: "Limited slots this month", ca: "Places limitades aquest mes" },
  },
  footer: {
    rights: { es: "Todos los derechos reservados", en: "All rights reserved", ca: "Tots els drets reservats" },
  },
} as const;

export default translations;
