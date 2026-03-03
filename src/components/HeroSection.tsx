import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-barbershop.jpg";

const WHATSAPP_URL = "https://wa.me/5531999410672";
const FULL_TEXT = "Barbearia Style Visual";

export default function HeroSection() {
  const [displayed, setDisplayed] = useState("");
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
    let i = 0;
    const interval = setInterval(() => {
      i++;
      setDisplayed(FULL_TEXT.slice(0, i));
      if (i >= FULL_TEXT.length) clearInterval(interval);
    }, 80);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="inicio" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <img
        src={heroBg}
        alt="Barbearia Style Visual interior"
        className="absolute inset-0 w-full h-full object-cover scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/75 to-background" />
      
      {/* Decorative gold line */}
      <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent -translate-y-20" />

      <div
        className={`relative z-10 text-center px-6 max-w-4xl mx-auto transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Slogan badge */}
        <div className={`inline-block mb-8 px-5 py-2 rounded-full border border-gold/30 bg-gold/5 backdrop-blur-sm transition-all duration-1000 delay-300 ${loaded ? "opacity-100" : "opacity-0"}`}>
          <span className="text-gold text-xs md:text-sm font-medium tracking-[0.25em] uppercase">
            Quem tem estilo passa aqui
          </span>
        </div>

        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-6 text-shadow-gold leading-tight">
          <span className="text-gold">{displayed}</span>
          <span className="inline-block w-[3px] h-[0.8em] bg-gold ml-1 animate-pulse align-middle" />
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 font-light tracking-wide max-w-xl mx-auto">
          Estilo, precisão e exclusividade desde 2012
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-10 py-4 rounded-full font-semibold text-lg hover:brightness-110 hover:scale-105 glow-gold transition-all duration-300"
          >
            Agendar pelo WhatsApp
          </a>
          <a
            href="#clube"
            className="border border-gold/60 text-gold px-10 py-4 rounded-full font-semibold text-lg hover:bg-gold/10 hover:border-gold hover:scale-105 transition-all duration-300"
          >
            Conheça o Clube
          </a>
        </div>

        {/* Scroll indicator */}
        <div className={`mt-16 transition-all duration-1000 delay-[1.5s] ${loaded ? "opacity-100" : "opacity-0"}`}>
          <div className="w-6 h-10 border-2 border-gold/30 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-gold/50 rounded-full mt-2 animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
