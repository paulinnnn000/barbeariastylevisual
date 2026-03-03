import { Scissors, Sparkles, Crown, CreditCard } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const services = [
  {
    icon: Scissors,
    title: "Corte Masculino",
    desc: "Cortes modernos e clássicos com precisão e técnica profissional para realçar seu estilo.",
  },
  {
    icon: Sparkles,
    title: "Barba",
    desc: "Modelagem e acabamento impecável com navalha e toalha quente para um visual marcante.",
  },
  {
    icon: Crown,
    title: "Corte + Barba",
    desc: "O combo completo para quem quer sair da barbearia com visual renovado e confiante.",
  },
  {
    icon: CreditCard,
    title: "Plano de Assinatura",
    desc: "Cuide do visual sem preocupação. Assine e tenha benefícios exclusivos todos os meses.",
  },
];

export default function ServicesSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="servicos" className="py-20 md:py-28">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-4 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Nossos <span className="text-gold">Serviços</span>
        </h2>
        <p
          className={`text-muted-foreground text-center mb-14 max-w-lg mx-auto transition-all duration-700 delay-100 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Cada detalhe pensado para elevar o seu estilo
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((s, i) => (
            <div
              key={s.title}
              className={`glass-dark rounded-lg p-8 text-center group hover:glow-gold hover:-translate-y-2 hover:scale-[1.02] transition-all duration-500 cursor-default ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${200 + i * 100}ms` : "0ms" }}
            >
              <s.icon className="w-10 h-10 mx-auto mb-5 text-gold group-hover:scale-110 transition-transform duration-300" />
              <h3 className="text-lg font-bold mb-3 text-foreground">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
