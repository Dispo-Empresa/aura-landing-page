
import { Benefits } from "@/components/Benefits";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { ShowcaseMockups } from "@/components/ShowcaseMockups";
import { PricingPlans } from "@/components/PricingPlans";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Smartphone, Scissors, ChevronRight } from "lucide-react";

const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.auraapp";
const APP_STORE_URL = "https://apps.apple.com/app/id1234567890";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="py-6 border-b border-border/50">
        <div className="container flex items-center justify-between">
          <Logo />
          <div className="flex items-center gap-4">
            <Button variant="ghost" className="text-muted-foreground">
              Sobre
            </Button>
            <Button variant="ghost" className="text-muted-foreground">
              Funcionalidades
            </Button>
            <ThemeToggle />
          </div>
        </div>
      </header>

      <Hero />
      <ShowcaseMockups />
      <Benefits />
      <PricingPlans />

      <section className="py-20 md:py-28 relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2A98D2]/10 rounded-full blur-3xl opacity-70"></div>
        <div className="container text-center px-4 relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Scissors className="w-5 h-5 text-[#2A98D2]" />
            <span className="text-sm uppercase tracking-wider text-[#2A98D2] font-medium">Feito para barbeiros</span>
          </div>
          
          <h2 className="text-3xl md:text-4xl font-outfit font-semibold mb-6">
            Deixe os agendamentos com o Aura e <br className="hidden md:block" />foque no que você faz de melhor
          </h2>
          
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Configure sua rotina, folgas e horários do seu jeito. Comece grátis e cresça conforme sua necessidade.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={GOOGLE_PLAY_URL}
              className="w-full sm:w-auto inline-flex justify-center"
              aria-label="Baixar para Android"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/lovable-uploads/google-play.png" alt="Disponível no Google Play" className="h-14 w-auto max-w-[200px]" />
            </a>
            <a
              href={APP_STORE_URL}
              className="w-full sm:w-auto inline-flex justify-center"
              aria-label="Baixar para iOS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/lovable-uploads/ios.png" alt="Disponível na App Store" className="h-16 w-auto max-w-[200px]" />
            </a>
          </div>
        </div>
      </section>
      
      <FAQ />
      
      <footer className="py-8 md:py-12 bg-card">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-8">
            <div className="flex flex-col items-center md:items-start">
              <Logo />
              <p className="text-sm text-muted-foreground mt-2">
                Organize sua barbearia. Simplifique sua vida.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-6">
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Termos de uso
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Política de privacidade
              </a>
              <a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                Suporte
              </a>
            </div>
          </div>
          
          <div className="border-t border-border/50 pt-6 flex flex-col-reverse md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 Aura. Todos os direitos reservados.
            </p>
            
            <div className="flex items-center gap-4">
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd"></path>
                </svg>
              </a>
              <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
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
