
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
              <img src="/lovable-uploads/fda67013-3c2d-4afe-8c1b-83fbd4c967c8.png" alt="Disponível no Google Play" className="h-16 w-auto" />
            </a>
            <a
              href="#"
              className="w-full sm:w-auto"
              aria-label="Baixar para iOS"
            >
              <img src="/lovable-uploads/21e74c41-69d5-46f9-aa51-c257dc13c867.png" alt="Disponível na App Store" className="h-16 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
