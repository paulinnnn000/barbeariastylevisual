import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { CheckCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5531999410672?text=Olá!%20Quero%20saber%20mais%20sobre%20o%20Clube%20Style%20Visual";

const benefits = [
  "Cortes ilimitados durante o mês",
  "Prioridade no agendamento",
  "Descontos em produtos exclusivos",
  "Atendimento VIP personalizado",
];

export default function ClubSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="clube" className="py-20 md:py-28 relative overflow-hidden">
      {/* Diagonal gold accents */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: "repeating-linear-gradient(45deg, transparent, transparent 60px, hsl(41 46% 57%) 60px, hsl(41 46% 57%) 61px)"
        }} />
      </div>

      <div className="container mx-auto px-4 relative z-10" ref={ref}>
        <div
          className={`max-w-3xl mx-auto glass-dark rounded-2xl p-10 md:p-16 text-center transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <span className="text-gold text-sm font-semibold tracking-[0.3em] uppercase mb-4 block">
            Exclusivo
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Style Visual <span className="text-gold">Clube</span>
          </h2>
          <p className="text-muted-foreground mb-8 text-lg leading-relaxed max-w-xl mx-auto">
            Faça parte do clube mais exclusivo de Belo Horizonte. Assine e tenha acesso a 
            benefícios que vão transformar sua rotina de cuidados pessoais.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10 text-left max-w-md mx-auto">
            {benefits.map((b) => (
              <div key={b} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-gold shrink-0" />
                <span className="text-sm text-foreground">{b}</span>
              </div>
            ))}
          </div>

          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-primary text-primary-foreground px-10 py-4 rounded font-semibold text-lg hover:brightness-110 glow-gold transition-all duration-300"
          >
            Quero fazer parte
          </a>
        </div>
      </div>
    </section>
  );
}
