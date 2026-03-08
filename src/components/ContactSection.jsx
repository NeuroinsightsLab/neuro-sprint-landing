import { useLang } from "@/lib/LanguageContext";
import { MapPin, Mail, Phone, Linkedin, CalendarDays, Send } from "lucide-react";

const ContactSection = () => {
  const { lang } = useLang();

  const labels = {
    title: { es: "Contáctanos", en: "Contact Us", ca: "Contacta'ns" },
    subtitle: {
      es: "¿Listo para validar tu UX con neurodata? Reserva una llamada o escríbenos directamente.",
      en: "Ready to validate your UX with neurodata? Book a call or write to us directly.",
      ca: "Llest per validar la teva UX amb neurodata? Reserva una trucada o escriu-nos directament.",
    },
    location: { es: "Ubicación", en: "Location", ca: "Ubicació" },
    email: { es: "Email", en: "Email", ca: "Email" },
    phone: { es: "Teléfono", en: "Phone", ca: "Telèfon" },
    schedule: { es: "Agendar Llamada", en: "Schedule a Call", ca: "Agendar Trucada" },
    request: { es: "Solicitar Propuesta", en: "Request Proposal", ca: "Sol·licitar Proposta" },
    linkedin: { es: "LinkedIn", en: "LinkedIn", ca: "LinkedIn" },
    address: "Barcelona, España",
    emailValue: "hello@decoder.agency",
    phoneValue: "+34 600 000 000",
  };

  return (
    <section id="contact" className="py-24 relative border-t border-border">
      <div className="absolute inset-0 hero-glow opacity-15" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-14">
          <h2 className="font-display text-3xl md:text-4xl font-bold mb-4">{labels.title[lang]}</h2>
          <p className="text-muted-foreground max-w-xl mx-auto text-lg">{labels.subtitle[lang]}</p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="glass-card rounded-2xl p-8 flex flex-col gap-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <MapPin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{labels.location[lang]}</div>
                <div className="font-medium text-foreground">{labels.address}</div>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Mail className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{labels.email[lang]}</div>
                <a href={`mailto:${labels.emailValue}`} className="font-medium text-foreground hover:text-primary transition-colors">{labels.emailValue}</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{labels.phone[lang]}</div>
                <a href={`tel:${labels.phoneValue.replace(/\s/g, "")}`} className="font-medium text-foreground hover:text-primary transition-colors">{labels.phoneValue}</a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center shrink-0">
                <Linkedin className="w-4 h-4 text-primary" />
              </div>
              <div>
                <div className="text-xs uppercase tracking-widest text-muted-foreground mb-1">{labels.linkedin[lang]}</div>
                <a href="https://linkedin.com/company/decoder-agency" target="_blank" rel="noopener noreferrer" className="font-medium text-foreground hover:text-primary transition-colors">/decoder-agency</a>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-5 justify-center">
            <a href="https://calendly.com" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-3 rounded-xl bg-primary text-primary-foreground font-bold px-8 py-5 text-lg hover:brightness-110 transition-all animate-pulse-glow">
              <CalendarDays className="w-5 h-5" />
              {labels.schedule[lang]}
            </a>
            <button onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })} className="flex items-center justify-center gap-3 rounded-xl border border-primary text-primary font-bold px-8 py-5 text-lg hover:bg-primary/10 transition-colors">
              <Send className="w-5 h-5" />
              {labels.request[lang]}
            </button>
            <p className="text-center text-xs text-muted-foreground">
              {lang === "es" ? "Respuesta garantizada en menos de 24 horas" : lang === "en" ? "Response guaranteed within 24 hours" : "Resposta garantida en menys de 24 hores"}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
