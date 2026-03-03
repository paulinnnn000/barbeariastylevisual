import { Star } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { useEffect, useState } from "react";

const testimonials = [
  { name: "Lucas M.", text: "Melhor barbearia de BH! Atendimento impecável e resultado sempre perfeito. Sou assinante há 2 anos." },
  { name: "Rafael S.", text: "Ambiente top, profissionais de primeira. O clube de assinatura vale cada centavo. Recomendo demais!" },
  { name: "Pedro H.", text: "Desde que conheci a Style Visual, não troco por nada. Qualidade e atenção aos detalhes incomparáveis." },
  { name: "Gabriel R.", text: "O corte e a barba ficam sempre perfeitos. A experiência VIP do clube é outro nível. Nota 10!" },
];

export default function TestimonialsSection() {
  const { ref, isVisible } = useScrollAnimation();
  const [active, setActive] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-28">
      <div className="container mx-auto px-4" ref={ref}>
        <div
          className={`text-center mb-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            O que dizem nossos <span className="text-gold">clientes</span>
          </h2>
          <div className="flex items-center justify-center gap-1 mb-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-gold text-gold" />
            ))}
          </div>
          <p className="text-gold font-semibold text-lg">4.9 no Google</p>
        </div>

        <div
          className={`max-w-2xl mx-auto transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="glass-dark rounded-xl p-8 md:p-10 text-center min-h-[180px] flex flex-col justify-center">
            <p className="text-foreground text-lg italic leading-relaxed mb-6 transition-opacity duration-500">
              "{testimonials[active].text}"
            </p>
            <p className="text-gold font-semibold">{testimonials[active].name}</p>
          </div>

          <div className="flex justify-center gap-2 mt-6">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === active ? "bg-gold w-6" : "bg-muted"
                }`}
                aria-label={`Depoimento ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
