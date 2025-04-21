
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold leading-tight mb-6">
            Controle total da sua agenda, sem complicação
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-8">
            O Aura é o app que facilita a gestão da sua barbearia, permitindo que você foque no que realmente importa: seus clientes.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90">
            Testar grátis por 7 dias
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
