import { MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5531999410672";

export default function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full flex items-center justify-center animate-pulse-whatsapp transition-all duration-300"
      style={{ backgroundColor: "#25D366" }}
      aria-label="Fale pelo WhatsApp"
    >
      <MessageCircle className="w-7 h-7 text-white" />
    </a>
  );
}
