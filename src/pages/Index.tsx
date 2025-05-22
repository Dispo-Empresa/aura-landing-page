
import { Benefits } from "@/components/Benefits";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { AppMobileDesktopMockups } from "@/components/AppMobileDesktopMockups";
import { PricingPlans } from "@/components/PricingPlans";
import { ChatShowcase } from "@/components/ChatShowcase";
import { Logo } from "@/components/Logo";
import { ExternalLink, Scissors } from "lucide-react";

const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.auraapp";
const APP_STORE_URL = "https://apps.apple.com/app/id1234567890";
const DISPO_WEBSITE_URL = "https://www.dispo.net.br/";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="py-6 border-b">
        <div className="container flex items-center justify-between">
          <Logo />
        </div>
      </header>

      <Hero />
      <Benefits />
      <ChatShowcase />
      <PricingPlans />
      <FAQ />
      
      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2A98D2]/10 rounded-full blur-3xl opacity-70"></div>
        <div className="container text-center px-4 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Scissors className="w-5 h-5 text-[#2A98D2]" />
            <span className="text-sm uppercase tracking-wider text-[#2A98D2] font-medium">Feito para barbeiros</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-outfit font-semibold mb-6">
            Deixe a organização com o Aura
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Monte seus dias do seu jeito — com a liberdade de quem sabe o que faz. Enquanto o Aura organiza sua agenda, você foca no que importa: atender bem, cortar com excelência e fidelizar no papo.
            É como ter um braço direito digital — por menos do que você cobra por um corte.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <a
              href="#"
              className="w-full sm:w-auto inline-flex justify-center hover:scale-105 transition-transform duration-300"
              aria-label="Baixar para Android"
            >
              <img 
                src="/lovable-uploads/google-play.png" 
                alt="Disponível no Google Play" 
                className="h-14 w-auto max-w-[200px]" 
              />
            </a>
            <a
              href="#"
              className="w-full sm:w-auto inline-flex justify-center hover:scale-105 transition-transform duration-300"
              aria-label="Baixar para iOS"
            >
              <img 
                src="/lovable-uploads/ios.png" 
                alt="Disponível na App Store" 
                className="h-16 w-auto max-w-[200px]" 
              />
            </a>
          </div>
          
          {/* QR Code para desktop com divisor "Ou" - visível apenas em desktop */}
          <div className="hidden md:flex flex-col items-center mt-6 animate-fade-in">
            <div className="flex items-center w-full my-4 max-w-md mx-auto">
              <div className="flex-grow h-px bg-border"></div>
              <span className="px-4 text-sm text-muted-foreground font-medium">Ou</span>
              <div className="flex-grow h-px bg-border"></div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-3">Escaneie o QR Code para acessar a página do Aura na sua loja de aplicativos.</p>
            
            <div className="bg-white p-2 rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/0c8747b0-4182-437f-b22f-5446c9a6f9bb.png" 
                alt="QR Code para download do app" 
                className="w-32 h-32" 
              />
            </div>
          </div>
        </div>
      </section>

      <footer className="py-8 md:py-12 bg-card">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex flex-col items-center md:items-start">
              <Logo />
              <p className="text-sm text-muted-foreground mt-2">
                Tudo em ordem. Tudo no seu tempo. Tudo com o Aura.
              </p>
              <div className="flex flex-col md:flex-row items-center md:items-start gap-2 mt-2">
                <div className="text-sm text-center md:text-left flex flex-wrap justify-center md:justify-start items-center">
                  <span>Um produto da</span>
                  <span className="font-medium text-foreground mx-1">Dispo</span>
                  <span className="hidden md:inline mx-1">•</span>
                  <span className="block w-full md:inline md:w-auto md:ml-1 text-muted-foreground">Inovação feita para quem faz acontecer</span>
                </div>
                <a 
                  href="https://www.dispo.net.br/"
                  target="_blank"
                  rel="noopener noreferrer" 
                  className="text-sm inline-flex items-center text-muted-foreground hover:text-primary transition-colors"
                >
                  <span>Conheça a Dispo</span>
                  <ExternalLink className="ml-1 w-3 h-3" />
                </a>
              </div>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="https://dispo-empresa.github.io/aura-documentos/termos-de-uso.html" className="text-sm text-muted-foreground hover:text-foreground transition-colors" target="_blank">
                Termos de uso
              </a>
              <a href="https://dispo-empresa.github.io/aura-documentos/politica-de-privacidade.html" className="text-sm text-muted-foreground hover:text-foreground transition-colors" target="_blank">
                Política de privacidade
              </a>
              <a href="https://wa.me/5511999999999" className="text-sm text-muted-foreground hover:text-foreground transition-colors" target="_blank">
                Suporte
              </a>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-6 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 Aura, um produto da Dispo. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/tech.dispo/" className="text-muted-foreground hover:text-foreground transition-colors" target="_blank">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
