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
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/70 to-background" />

      <div
        className={`relative z-10 text-center px-4 max-w-3xl mx-auto transition-all duration-1000 ${
          loaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 text-shadow-gold">
          <span className="text-gold">{displayed}</span>
          <span className="inline-block w-[3px] h-[1em] bg-gold ml-1 animate-pulse align-middle" />
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 font-light tracking-wide">
          Estilo, precisão e exclusividade desde 2012
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground px-8 py-4 rounded font-semibold text-lg hover:brightness-110 glow-gold transition-all duration-300"
          >
            Agendar pelo WhatsApp
          </a>
          <a
            href="#clube"
            className="border border-gold text-gold px-8 py-4 rounded font-semibold text-lg hover:bg-gold/10 transition-all duration-300"
          >
            Conheça o Clube
          </a>
        </div>
      </div>
    </section>
  );
}
