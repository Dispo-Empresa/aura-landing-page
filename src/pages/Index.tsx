
import { Benefits } from "@/components/Benefits";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { AppMockups } from "@/components/AppMockups";
import { AppMobileDesktopMockups } from "@/components/AppMobileDesktopMockups";
import { ShowcaseMockups } from "@/components/ShowcaseMockups";
import { PricingPlans } from "@/components/PricingPlans";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { Android, Apple } from "lucide-react";

const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.auraapp";
const APP_STORE_URL = "https://apps.apple.com/app/id1234567890";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="py-6 border-b">
        <div className="container flex items-center justify-between">
          <Logo />
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
              <Button
                size="lg"
                className="bg-[#34C759] hover:bg-[#34C759]/90 w-full sm:w-auto font-semibold"
              >
                <Android className="mr-2 h-5 w-5" />
                Baixar para Android
              </Button>
            </a>
            <a
              href={APP_STORE_URL}
              className="w-full sm:w-auto"
              aria-label="Baixar para iOS"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button
                size="lg"
                className="bg-[#0A84FF] hover:bg-[#0A84FF]/90 w-full sm:w-auto font-semibold"
              >
                <Apple className="mr-2 h-5 w-5" />
                Baixar para iOS
              </Button>
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

