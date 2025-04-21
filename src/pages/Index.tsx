
import { Benefits } from "@/components/Benefits";
import { FAQ } from "@/components/FAQ";
import { Hero } from "@/components/Hero";
import { Testimonial } from "@/components/Testimonial";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <Benefits />
      <Testimonial />
      <FAQ />
      
      <section className="py-24">
        <div className="container text-center">
          <h2 className="text-3xl md:text-4xl font-outfit font-semibold mb-8">
            Pronto para simplificar a gestão da sua barbearia?
          </h2>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Comece seu teste grátis agora
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      <footer className="py-8 bg-muted">
        <div className="container text-center text-muted-foreground">
          <p>© 2025 Aura. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
