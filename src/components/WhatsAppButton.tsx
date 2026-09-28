import { MessageCircle } from "lucide-react";
import { whatsappLink } from "@/config/site";

export function WhatsAppButton() {
  return (
    <a
      href={whatsappLink()}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Escribir por WhatsApp"
      className="group fixed right-4 bottom-4 z-50 flex items-center gap-3 rounded-full bg-leaf px-4 py-3 text-brand-foreground shadow-[var(--shadow-card)] transition-transform hover:-translate-y-0.5 focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:outline-none sm:right-6 sm:bottom-6"
    >
      <MessageCircle className="size-6" aria-hidden="true" />
      <span className="hidden text-sm font-semibold sm:inline">¿Necesitas información?</span>
    </a>
  );
}
