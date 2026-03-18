const KEY = "decoder_cookie_consent";
const VERSION = 1;
const EXPIRY_DAYS = 365;

export const CATEGORIES = {
  necessary: {
    id: "necessary",
    required: true,
    label: { es: "Necesarias", en: "Necessary", ca: "Necessàries" },
    description: {
      es: "Imprescindibles para que el sitio funcione. No pueden desactivarse.",
      en: "Essential for the site to function. Cannot be disabled.",
      ca: "Imprescindibles perquè el lloc funcioni. No es poden desactivar.",
    },
    cookies: [
      { name: "decoder_cookie_consent", purpose: "Stores your cookie preferences", duration: "12 months" },
    ],
  },
  analytics: {
    id: "analytics",
    required: false,
    label: { es: "Analítica", en: "Analytics", ca: "Analítica" },
    description: {
      es: "Nos ayudan a entender cómo usas el sitio para mejorarlo (p. ej. Google Analytics).",
      en: "Help us understand how you use the site so we can improve it (e.g. Google Analytics).",
      ca: "Ens ajuden a entendre com uses el lloc per millorar-lo (p. ex. Google Analytics).",
    },
    cookies: [
      { name: "_ga, _gid", purpose: "Google Analytics — page view tracking", duration: "2 years / 24h" },
    ],
  },
  marketing: {
    id: "marketing",
    required: false,
    label: { es: "Marketing", en: "Marketing", ca: "Màrqueting" },
    description: {
      es: "Permiten mostrarte anuncios relevantes en otras plataformas.",
      en: "Allow us to show you relevant ads on other platforms.",
      ca: "Permeten mostrar-te anuncis rellevants en altres plataformes.",
    },
    cookies: [
      { name: "_fbp", purpose: "Meta Pixel — ad conversion tracking", duration: "3 months" },
    ],
  },
};

export const DEFAULT_CONSENT = {
  necessary: true,
  analytics: false,
  marketing: false,
};

export function getConsent() {
  try {
    const raw = localStorage.getItem(KEY);
    if (!raw) return null;
    const data = JSON.parse(raw);
    // Check version and expiry
    if (data.version !== VERSION) return null;
    const age = Date.now() - new Date(data.timestamp).getTime();
    if (age > EXPIRY_DAYS * 24 * 60 * 60 * 1000) return null;
    return data;
  } catch {
    return null;
  }
}

export function saveConsent(preferences) {
  const data = {
    version: VERSION,
    timestamp: new Date().toISOString(),
    necessary: true, // always true
    analytics: !!preferences.analytics,
    marketing: !!preferences.marketing,
  };
  localStorage.setItem(KEY, JSON.stringify(data));
  return data;
}

export function clearConsent() {
  localStorage.removeItem(KEY);
}

export function hasConsent(category) {
  const consent = getConsent();
  if (!consent) return false;
  return !!consent[category];
}
