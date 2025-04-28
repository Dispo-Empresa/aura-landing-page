
import React from 'react';

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
              className="w-full sm:w-auto inline-flex justify-center"
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
              className="w-full sm:w-auto inline-flex justify-center"
              aria-label="Baixar para iOS"
            >
              <img 
                src="/lovable-uploads/ios.png" 
                alt="Disponível na App Store" 
                className="h-16 w-auto max-w-[200px]" 
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
