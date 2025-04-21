
import { Benefits } from "@/components/Benefits";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Testimonial } from "@/components/Testimonial";
import { AppMockups } from "@/components/AppMockups";
import { Logo } from "@/components/Logo";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <header className="py-6 border-b">
        <div className="container flex items-center justify-between">
          <Logo />
          <Button variant="outline" className="text-[#2A98D2] border-[#2A98D2] hover:bg-[#2A98D2] hover:text-white">
            Entrar
          </Button>
        </div>
      </header>

      <Hero />
      <Benefits />
      <AppMockups />
      <Testimonial />
      <FAQ />
      
      <section className="py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-outfit font-semibold mb-8">
            Pronto para simplificar a gestão da sua barbearia?
          </h2>
          <Button size="lg" className="bg-[#2A98D2] hover:bg-[#2A98D2]/90">
            Comece seu teste grátis agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
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
