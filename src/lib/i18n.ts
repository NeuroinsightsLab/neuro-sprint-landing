export type Lang = "es" | "en" | "ca";

const translations = {
  nav: {
    problem: { es: "Problema", en: "Problem", ca: "Problema" },
    howItWorks: { es: "Cómo Funciona", en: "How It Works", ca: "Com Funciona" },
    proof: { es: "Resultados", en: "Results", ca: "Resultats" },
    pricing: { es: "Precios", en: "Pricing", ca: "Preus" },
    team: { es: "Equipo", en: "Team", ca: "Equip" },
    usecases: { es: "Casos", en: "Cases", ca: "Casos" },
    eaa: { es: "EAA 2025", en: "EAA 2025", ca: "EAA 2025" },
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
  team: {
    title: { es: "Nuestro Equipo", en: "Our Team", ca: "El nostre Equip" },
    subtitle: {
      es: "Neurocientíficos, ingenieros y estrategas unidos por una misión: hacer la ciencia del cerebro accesible para los negocios.",
      en: "Neuroscientists, engineers and strategists united by one mission: making brain science accessible for business.",
      ca: "Neurocientífics, enginyers i estrategs units per una missió: fer la ciència del cervell accessible per als negocis.",
    },
    members: [
      {
        name: "Katerina Akhmad",
        role: { es: "CEO & Neurociencia", en: "CEO & Neuroscience", ca: "CEO & Neurociència" },
        bio: {
          es: "PhD en neurociencia cognitiva. 10 años diseñando estudios de comportamiento del consumidor.",
          en: "PhD in cognitive neuroscience. 10 years designing consumer behavior studies.",
          ca: "Doctorat en neurociència cognitiva. 10 anys dissenyant estudis de comportament del consumidor.",
        },
        initials: "KA",
      },
      {
        name: "Ivan Brak",
        role: { es: "CTO & Biosensores", en: "CTO & Biosensors", ca: "CTO & Biosensors" },
        bio: {
          es: "Ingeniero de biosensores ex-MIT. Arquitecto del sistema NeuroScore™.",
          en: "Biosensor engineer ex-MIT. Architect of the NeuroScore™ system.",
          ca: "Enginyer de biosensors ex-MIT. Arquitecte del sistema NeuroScore™.",
        },
        initials: "IB",
      },
      {
        name: "Anna Tsimerman",
        role: { es: "Directora de Insights", en: "Head of Insights", ca: "Directora d'Insights" },
        bio: {
          es: "Estratega de UX con background en psicología del consumidor y neuromarketing aplicado.",
          en: "UX strategist with a background in consumer psychology and applied neuromarketing.",
          ca: "Estratega de UX amb background en psicologia del consumidor i neuromarketing aplicat.",
        },
        initials: "AT",
      },
    ],
  },
  useCases: {
    title: { es: "Casos de Uso", en: "Use Cases", ca: "Casos d'Ús" },
    subtitle: {
      es: "NeuroScore™ aplicado a tres industrias clave con resultados medibles.",
      en: "NeuroScore™ applied to three key industries with measurable results.",
      ca: "NeuroScore™ aplicat a tres indústries clau amb resultats mesurables.",
    },
    cases: [
      {
        group: { es: "Startups", en: "Startups", ca: "Startups" },
        tag: { es: "Product-Market Fit", en: "Product-Market Fit", ca: "Product-Market Fit" },
        title: { es: "Valida tu PMF antes de escalar", en: "Validate PMF before scaling", ca: "Valida el teu PMF abans d'escalar" },
        desc: {
          es: "Descubre si tu onboarding, landing o app realmente convierte a nivel subconsciente. Evita gastar €50K en lo que no funciona.",
          en: "Discover if your onboarding, landing or app truly converts at the subconscious level. Avoid spending €50K on what doesn't work.",
          ca: "Descobreix si el teu onboarding, landing o app realment converteix a nivell subconscient. Evita gastar €50K en el que no funciona.",
        },
        metrics: [
          { label: { es: "Reducción de churn", en: "Churn reduction", ca: "Reducció de churn" }, value: "–22%" },
          { label: { es: "Aumento CVR", en: "CVR increase", ca: "Augment CVR" }, value: "+31%" },
        ],
        icon: "🚀",
      },
      {
        group: { es: "Game Studios", en: "Game Studios", ca: "Game Studios" },
        tag: { es: "UX de Juego & Retención", en: "Game UX & Retention", ca: "UX de Joc & Retenció" },
        title: { es: "Optimiza la experiencia de juego con datos reales", en: "Optimise game experience with real data", ca: "Optimitza l'experiència de joc amb dades reals" },
        desc: {
          es: "Eye-tracking en UI de juego, tutoriales y monetización. Identifica puntos de fricción que matan la retención del jugador.",
          en: "Eye-tracking on game UI, tutorials and monetisation flows. Identify friction points killing player retention.",
          ca: "Eye-tracking en UI de joc, tutorials i monetització. Identifica punts de fricció que maten la retenció del jugador.",
        },
        metrics: [
          { label: { es: "Retención D7", en: "D7 Retention", ca: "Retenció D7" }, value: "+18%" },
          { label: { es: "ARPU medio", en: "Average ARPU", ca: "ARPU mitjà" }, value: "+25%" },
        ],
        icon: "🎮",
      },
      {
        group: { es: "Inmobiliarias", en: "Real Estate", ca: "Immobiliàries" },
        tag: { es: "Marketing & Conversión", en: "Marketing & Conversion", ca: "Màrqueting & Conversió" },
        title: { es: "Maximiza el impacto de tus activos de marketing", en: "Maximise impact of your marketing assets", ca: "Maximitza l'impacte dels teus actius de màrqueting" },
        desc: {
          es: "Testea renders 3D, páginas de proyecto y campañas de venta. Comprende qué elementos visuales disparan el deseo de compra.",
          en: "Test 3D renders, project pages and sales campaigns. Understand which visual elements trigger purchase desire.",
          ca: "Testa renders 3D, pàgines de projecte i campanyes de venda. Entén quins elements visuals disparen el desig de compra.",
        },
        metrics: [
          { label: { es: "Leads cualificados", en: "Qualified leads", ca: "Leads qualificats" }, value: "+40%" },
          { label: { es: "Tiempo de venta", en: "Sale time", ca: "Temps de venda" }, value: "–30%" },
        ],
        icon: "🏢",
      },
    ],
  },
  eaa: {
    badge: { es: "⚠️ Urgente: EAA 2025", en: "⚠️ Urgent: EAA 2025", ca: "⚠️ Urgent: EAA 2025" },
    title: { es: "La Accesibilidad ya no es opcional", en: "Accessibility is no longer optional", ca: "L'Accessibilitat ja no és opcional" },
    subtitle: {
      es: "La European Accessibility Act entró en vigor. NeuroScore™ incluye validación EAA para convertir el cumplimiento normativo en ventaja competitiva.",
      en: "The European Accessibility Act is now in force. NeuroScore™ includes EAA validation to turn regulatory compliance into competitive advantage.",
      ca: "La European Accessibility Act ha entrat en vigor. NeuroScore™ inclou validació EAA per convertir el compliment normatiu en avantatge competitiu.",
    },
    fines: {
      label: { es: "Multas en España", en: "Fines in Spain", ca: "Multes a Espanya" },
      value: "€600K",
    },
    points: [
      {
        es: "NeuroScore™ detecta barreras de accesibilidad cognitiva con eye-tracking",
        en: "NeuroScore™ detects cognitive accessibility barriers with eye-tracking",
        ca: "NeuroScore™ detecta barreres d'accessibilitat cognitiva amb eye-tracking",
      },
      {
        es: "Informe de cumplimiento EAA incluido en Sprint Lab",
        en: "EAA compliance report included in Lab Sprint",
        ca: "Informe de compliment EAA inclòs en Sprint Lab",
      },
      {
        es: "De 'nice-to-have' a necesidad de cumplimiento normativo",
        en: "From 'nice-to-have' to compliance necessity",
        ca: "De 'nice-to-have' a necessitat de compliment normatiu",
      },
      {
        es: "Protege tu marca y evita sanciones de hasta €600K en España",
        en: "Protect your brand and avoid fines of up to €600K in Spain",
        ca: "Protegeix la teva marca i evita sancions de fins a €600K a Espanya",
      },
    ],
    cta: { es: "Incluir Validación EAA", en: "Include EAA Validation", ca: "Incloure Validació EAA" },
  },
  footer: {
    rights: { es: "Todos los derechos reservados", en: "All rights reserved", ca: "Tots els drets reservats" },
  },
} as const;

export default translations;
