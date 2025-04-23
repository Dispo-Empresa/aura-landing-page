
import { Button } from "@/components/ui/button";
import { Android, Apple } from "lucide-react";

export function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24">
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold leading-tight mb-6">
            O app que organiza sua barbearia do seu jeito
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10">
            Configure sua agenda do seu jeito, gerencie agendamentos e tenha total controle da sua barbearia. Comece grátis e cresça conforme sua necessidade.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#"
              className="w-full sm:w-auto"
              aria-label="Baixar para Android"
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
              href="#"
              className="w-full sm:w-auto"
              aria-label="Baixar para iOS"
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
      </div>
    </section>
  );
}

