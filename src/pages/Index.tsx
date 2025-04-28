
import { Benefits } from "@/components/Benefits";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { AppMockups } from "@/components/AppMockups";
import { AppMobileDesktopMockups } from "@/components/AppMobileDesktopMockups";
import { ShowcaseMockups } from "@/components/ShowcaseMockups";
import { PricingPlans } from "@/components/PricingPlans";
import { Logo } from "@/components/Logo";

const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.auraapp";
const APP_STORE_URL = "https://apps.apple.com/app/id1234567890";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="py-6 border-b">
        <div className="container flex items-center justify-between">
          <Logo />
          {/* ThemeToggle removido */}
        </div>
      </header>

      <Hero />
      <ShowcaseMockups />
      <Benefits />
      <PricingPlans />
      <AppMockups />
      <AppMobileDesktopMockups />
      <FAQ />
      
      <section className="py-16 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[#0D3B66] opacity-20 blur-3xl -z-10 rounded-full transform translate-y-1/4 scale-125"></div>
        <div className="container text-center px-4">
          <h2 className="text-3xl md:text-4xl font-outfit font-semibold mb-8">
            Pronto para simplificar a gestão da sua barbearia?
          </h2>
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

      <footer className="py-6 md:py-8 bg-muted">
        <div className="container px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <Logo />
            <p className="text-sm text-muted-foreground text-center md:text-right">© 2025 Aura. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
