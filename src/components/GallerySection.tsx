import { Eye } from "lucide-react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";

const images = [
  { src: gallery1, alt: "Corte masculino profissional" },
  { src: gallery2, alt: "Barba com navalha" },
  { src: gallery3, alt: "Resultado de corte moderno" },
  { src: gallery4, alt: "Ferramentas de barbearia" },
  { src: gallery5, alt: "Interior da barbearia" },
  { src: gallery6, alt: "Estilização de cabelo" },
];

export default function GallerySection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section id="galeria" className="py-20 md:py-28">
      <div className="container mx-auto px-4" ref={ref}>
        <h2
          className={`text-3xl md:text-4xl font-bold text-center mb-14 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          Nossa <span className="text-gold">Galeria</span>
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className={`relative overflow-hidden rounded-lg aspect-square group cursor-pointer transition-all duration-700 ${
                isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: isVisible ? `${i * 100}ms` : "0ms" }}
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-background/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                <Eye className="w-8 h-8 text-gold" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
