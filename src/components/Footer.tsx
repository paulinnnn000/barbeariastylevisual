import { Instagram, MessageCircle } from "lucide-react";

const WHATSAPP_URL = "https://wa.me/5531999410672";
const INSTAGRAM_URL = "https://instagram.com/barbeariastylevisual";

export default function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-10">
          <div>
            <h3 className="text-xl font-bold mb-3">
              <span className="text-gold">Style</span> Visual
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Quem tem estilo passa aqui!<br />
              Barbearia premium desde 2012.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-foreground">Links Rápidos</h4>
            <div className="flex flex-col gap-2">
              {["Início", "Serviços", "Clube", "Galeria", "Localização"].map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
                  className="text-sm text-muted-foreground hover:text-gold transition-colors"
                >
                  {l}
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-semibold mb-3 text-foreground">Redes Sociais</h4>
            <div className="flex gap-4">
              <a
                href={INSTAGRAM_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-border flex items-center justify-center text-muted-foreground hover:text-gold hover:border-gold transition-all duration-300"
                aria-label="WhatsApp"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-6 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Barbearia Style Visual. Todos os direitos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
