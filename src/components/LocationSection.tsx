import { MapPin, Clock, Phone } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";

const MAPS_URL = "https://www.google.com/maps?q=Rua+Lavrinhas,+148+Marilândia+Belo+Horizonte";

export default function LocationSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="localizacao" className="py-20 md:py-28">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Nossa <span className="text-gold">Localização</span>
        </h2>

        <div
          className={`grid md:grid-cols-2 gap-8 items-stretch transition-all duration-700 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="rounded-xl overflow-hidden h-[300px] md:h-auto">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3750.5!2d-43.96!3d-19.92!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTnCsDU1JzEyLjAiUyA0M8KwNTcnMzYuMCJX!5e0!3m2!1spt-BR!2sbr!4v1"
              width="100%"
              height="100%"
              style={{ border: 0, minHeight: 300 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Barbearia Style Visual"
            />
          </div>

          <div className="glass-dark rounded-xl p-8 md:p-10 flex flex-col justify-center gap-6">
            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-gold shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Endereço</h3>
                <p className="text-muted-foreground">
                  Rua Lavrinhas, 148 – Marilândia<br />
                  Belo Horizonte – MG
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="w-6 h-6 text-gold shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Horário</h3>
                <p className="text-muted-foreground">
                  Seg a Sex: 09h – 20h<br />
                  Sáb: 08h – 18h
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="w-6 h-6 text-gold shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-1">Contato</h3>
                <p className="text-muted-foreground">(31) 99941-0672</p>
              </div>
            </div>

            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 border border-gold text-gold px-6 py-3 rounded-full font-semibold text-center hover:bg-gold/10 hover:scale-105 transition-all duration-300"
            >
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
