import { useEffect, useRef, useState } from "react";
import { X, AlertCircle } from "lucide-react";
import { useLang } from "@/lib/LanguageContext";

const FORMSPREE_ENDPOINT = "https://formspree.io/f/mjgajogz";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/;

const labels = {
  title:    { es: "Solicitar Propuesta", en: "Request a Proposal", ca: "Sol·licitar Proposta" },
  name:     { es: "Nombre *",            en: "Name *",             ca: "Nom *" },
  email:    { es: "Email *",             en: "Email *",            ca: "Email *" },
  company:  { es: "Empresa",             en: "Company",            ca: "Empresa" },
  interest: { es: "¿Cómo podemos ayudarte?", en: "How can we help you?", ca: "Com podem ajudar-te?" },
  send:     { es: "Enviar",    en: "Send",      ca: "Enviar" },
  sending:  { es: "Enviando…", en: "Sending…",  ca: "Enviant…" },
  thanks: {
    es: "¡Mensaje recibido! Te respondemos en menos de 24h.",
    en: "Message received! We'll get back to you within 24h.",
    ca: "Missatge rebut! Et respondrem en menys de 24h.",
  },
  error: {
    es: "Error al enviar. Inténtalo de nuevo o escríbenos a ",
    en: "Failed to send. Please try again or email us at ",
    ca: "Error en enviar. Torna-ho a intentar o escriu-nos a ",
  },
  close:    { es: "Cerrar formulario", en: "Close form", ca: "Tancar formulari" },
  required: { es: "* Campos obligatorios", en: "* Required fields", ca: "* Camps obligatoris" },
  fieldRequired: {
    es: "Este campo es obligatorio",
    en: "This field is required",
    ca: "Aquest camp és obligatori",
  },
  emailInvalid: {
    es: "Introduce un email válido (ej. nombre@empresa.com)",
    en: "Enter a valid email (e.g. name@company.com)",
    ca: "Introdueix un email vàlid (ex. nom@empresa.com)",
  },
  nameMin: {
    es: "El nombre debe tener al menos 2 caracteres",
    en: "Name must be at least 2 characters",
    ca: "El nom ha de tenir almenys 2 caràcters",
  },
};

const INITIAL_FORM = { name: "", email: "", company: "", message: "", gdpr: false };
const INITIAL_ERRORS = { name: "", email: "" };

const ProposalForm = ({ open, onClose }) => {
  const { lang } = useLang();
  const [form, setForm] = useState(INITIAL_FORM);
  const [errors, setErrors] = useState(INITIAL_ERRORS);
  const [touched, setTouched] = useState({ name: false, email: false });
  const [status, setStatus] = useState("idle"); // idle | sending | success | error
  const dialogRef = useRef(null);
  const firstInputRef = useRef(null);

  const validateEmail = (val) => {
    if (!val) return labels.fieldRequired[lang];
    if (!EMAIL_REGEX.test(val)) return labels.emailInvalid[lang];
    return "";
  };

  const validateName = (val) => {
    if (!val.trim()) return labels.fieldRequired[lang];
    if (val.trim().length < 2) return labels.nameMin[lang];
    return "";
  };

  const validate = (field, val) => {
    if (field === "email") return validateEmail(val);
    if (field === "name") return validateName(val);
    return "";
  };

  const handleChange = (field, val) => {
    setForm((f) => ({ ...f, [field]: val }));
    if (touched[field] !== undefined) {
      setErrors((e) => ({ ...e, [field]: validate(field, val) }));
    }
  };

  const handleBlur = (field) => {
    setTouched((t) => ({ ...t, [field]: true }));
    setErrors((e) => ({ ...e, [field]: validate(field, form[field]) }));
  };

  // Focus first input and reset on open
  useEffect(() => {
    if (open) {
      setTimeout(() => firstInputRef.current?.focus(), 50);
      setForm(INITIAL_FORM);
      setErrors(INITIAL_ERRORS);
      setTouched({ name: false, email: false });
      setStatus("idle");
    }
  }, [open]);

  // Focus trap + Escape to close
  useEffect(() => {
    if (!open) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") { onClose(); return; }
      if (e.key !== "Tab") return;
      const focusable = dialogRef.current?.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (!focusable?.length) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === first) { e.preventDefault(); last.focus(); }
      } else {
        if (document.activeElement === last) { e.preventDefault(); first.focus(); }
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Run full validation before submit
    const nameErr = validateName(form.name);
    const emailErr = validateEmail(form.email);
    setErrors({ name: nameErr, email: emailErr });
    setTouched({ name: true, email: true });
    if (nameErr || emailErr || !form.gdpr) return;

    setStatus("sending");
    try {
      const res = await fetch(FORMSPREE_ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: form.name,
          email: form.email,
          company: form.company,
          message: form.message,
          _subject: `New proposal request from ${form.name}`,
        }),
      });
      if (res.ok) {
        setStatus("success");
        setTimeout(() => onClose(), 3500);
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  };

  if (!open) return null;

  const inputBase =
    "w-full rounded-lg bg-secondary border text-foreground px-4 py-2.5 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-colors";
  const inputClass = (field) =>
    `${inputBase} ${errors[field] ? "border-destructive" : "border-border"}`;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-background/80 backdrop-blur-sm"
      onClick={(e) => { if (e.target === e.currentTarget) onClose(); }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="proposal-form-title"
        className="glass-card rounded-2xl p-8 w-full max-w-md relative max-h-[90vh] overflow-y-auto"
      >
        <button
          onClick={onClose}
          aria-label={labels.close[lang]}
          className="absolute top-4 right-4 min-w-[44px] min-h-[44px] flex items-center justify-center text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-lg"
        >
          <X className="w-5 h-5" />
        </button>

        <h3 id="proposal-form-title" className="font-display text-xl font-bold mb-6">
          {labels.title[lang]}
        </h3>

        {status === "success" ? (
          <div role="status" className="text-center py-8 text-success font-semibold text-lg">
            ✅ {labels.thanks[lang]}
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4" noValidate>

            {/* Name */}
            <div>
              <label htmlFor="proposal-name" className="text-xs text-muted-foreground mb-1 block">
                {labels.name[lang]}
              </label>
              <input
                ref={firstInputRef}
                id="proposal-name"
                type="text"
                required
                maxLength={100}
                value={form.name}
                onChange={(e) => handleChange("name", e.target.value)}
                onBlur={() => handleBlur("name")}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? "error-name" : undefined}
                className={inputClass("name")}
                autoComplete="name"
              />
              {errors.name && (
                <p id="error-name" role="alert" className="flex items-center gap-1 mt-1 text-xs text-destructive">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  {errors.name}
                </p>
              )}
            </div>

            {/* Email */}
            <div>
              <label htmlFor="proposal-email" className="text-xs text-muted-foreground mb-1 block">
                {labels.email[lang]}
              </label>
              <input
                id="proposal-email"
                type="email"
                required
                maxLength={255}
                value={form.email}
                onChange={(e) => handleChange("email", e.target.value)}
                onBlur={() => handleBlur("email")}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? "error-email" : undefined}
                className={inputClass("email")}
                autoComplete="email"
              />
              {errors.email && (
                <p id="error-email" role="alert" className="flex items-center gap-1 mt-1 text-xs text-destructive">
                  <AlertCircle className="w-3 h-3 shrink-0" />
                  {errors.email}
                </p>
              )}
            </div>

            {/* Company */}
            <div>
              <label htmlFor="proposal-company" className="text-xs text-muted-foreground mb-1 block">
                {labels.company[lang]}
              </label>
              <input
                id="proposal-company"
                type="text"
                maxLength={100}
                value={form.company}
                onChange={(e) => handleChange("company", e.target.value)}
                className={`${inputBase} border-border`}
                autoComplete="organization"
              />
            </div>

            {/* Message */}
            <div>
              <label htmlFor="proposal-message" className="text-xs text-muted-foreground mb-1 block">
                {labels.interest[lang]}
              </label>
              <textarea
                id="proposal-message"
                rows={4}
                maxLength={1000}
                value={form.message}
                onChange={(e) => handleChange("message", e.target.value)}
                className={`${inputBase} border-border resize-none`}
              />
            </div>

            {/* GDPR */}
            <div className="flex items-start gap-3">
              <input
                id="proposal-gdpr"
                type="checkbox"
                required
                checked={form.gdpr}
                onChange={(e) => setForm({ ...form, gdpr: e.target.checked })}
                className="mt-0.5 w-4 h-4 rounded border-border accent-primary shrink-0 cursor-pointer"
              />
              <label htmlFor="proposal-gdpr" className="text-xs text-muted-foreground leading-relaxed cursor-pointer">
                {lang === "es" ? (
                  <>Acepto el tratamiento de mis datos personales conforme a la{" "}
                  <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80">Política de Privacidad</a>. *</>
                ) : lang === "ca" ? (
                  <>Accepto el tractament de les meves dades personals d'acord amb la{" "}
                  <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80">Política de Privacitat</a>. *</>
                ) : (
                  <>I agree to the processing of my personal data in accordance with the{" "}
                  <a href="/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80">Privacy Policy</a>. *</>
                )}
              </label>
            </div>

            {/* Send error */}
            {status === "error" && (
              <p role="alert" className="flex items-start gap-2 text-sm text-destructive">
                <AlertCircle className="w-4 h-4 mt-0.5 shrink-0" />
                <span>
                  {labels.error[lang]}
                  <a href="mailto:hello@decoder.digital" className="underline underline-offset-2 hover:text-destructive/80">
                    hello@decoder.digital
                  </a>
                </span>
              </p>
            )}

            <p className="text-xs text-muted-foreground">{labels.required[lang]}</p>

            <button
              type="submit"
              disabled={status === "sending" || !form.gdpr}
              className="w-full rounded-xl bg-primary text-primary-foreground font-bold py-3 hover:brightness-110 transition-all disabled:opacity-50 disabled:cursor-not-allowed focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            >
              {status === "sending" ? labels.sending[lang] : labels.send[lang]}
            </button>

          </form>
        )}
      </div>
    </div>
  );
};

export default ProposalForm;
