import { Benefits } from "@/components/Benefits";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { AppMockups } from "@/components/AppMockups";
import { AppMobileDesktopMockups } from "@/components/AppMobileDesktopMockups";
import { ShowcaseMockups } from "@/components/ShowcaseMockups";
import { PricingPlans } from "@/components/PricingPlans";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Smartphone, Monitor } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";

const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.auraapp";
const APP_STORE_URL = "https://apps.apple.com/app/id1234567890";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="py-6 border-b">
        <div className="container flex items-center justify-between">
          <Logo />
          <ThemeToggle />
        </div>
      </header>

      <Hero />
      <ShowcaseMockups />
      <Benefits />
      <PricingPlans />
      <AppMockups />
      <AppMobileDesktopMockups />
      <FAQ />
      
      <section className="py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-outfit font-semibold mb-8">
            Pronto para simplificar a gestão da sua barbearia?
          </h2>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a
              href={GOOGLE_PLAY_URL}
              className="w-full sm:w-auto"
              aria-label="Baixar para Android"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/lovable-uploads/fda67013-3c2d-4afe-8c1b-83fbd4c967c8.png" alt="Disponível no Google Play" className="h-16 w-auto" />
            </a>
            <a
              href={APP_STORE_URL}
              className="w-full sm:w-auto"
              aria-label="Baixar para iOS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src="/lovable-uploads/21e74c41-69d5-46f9-aa51-c257dc13c867.png" alt="Disponível na App Store" className="h-16 w-auto" />
            </a>
          </div>
        </div>
      </section>

      <footer className="py-8 bg-muted">
        <div className="container">
          <div className="flex items-center justify-between">
            <Logo />
            <p className="text-muted-foreground">© 2025 Aura. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
