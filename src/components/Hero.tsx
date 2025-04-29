
import { Scissors } from 'lucide-react';

export function Hero() {
  return (
    <section className="pt-20 pb-16 md:pt-28 md:pb-24 relative overflow-hidden bg-background">
      <div className="absolute inset-0 bg-[#0D3B66] opacity-10 blur-3xl -z-10 rounded-full transform translate-y-1/4 scale-125"></div>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto">
          <div className="flex items-center justify-center gap-2 mb-6">
            <Scissors className="w-5 h-5 text-[#2A98D2]" />
            <span className="text-sm uppercase tracking-wider text-[#2A98D2] font-medium">Feito para barbeiros</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold leading-tight mb-6 text-foreground">
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
      <div className="container flex flex-col md:flex-row items-center justify-center gap-14 mt-16 md:mt-24">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-4xl font-outfit font-semibold mb-4 text-center md:text-left text-foreground">
            Veja como é fácil controlar o seu dia a dia
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-center md:text-left">
            Os principais recursos, tudo ao alcance do seu toque: agenda flexível, visão clara dos horários, próximos agendamentos e alertas automáticos.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-6 items-center relative">
          <div className="flex flex-row gap-2 justify-center items-end md:gap-4">
            {/* Celular grande (frontal) */}
            <img
              src="/lovable-uploads/8022794d-3d7c-4b2b-bace-207c1c4da599.png"
              alt="Mockup do app - principal"
              className="w-32 sm:w-40 md:w-56 rounded-2xl bg-transparent"
              style={{ zIndex: 3 }}
            />
            {/* Celular inclinado */}
            <img
              src="/lovable-uploads/f742cae6-1b18-490c-9507-fc0588758e37.png"
              alt="Mockup do app - inclinado"
              className="w-24 sm:w-32 md:w-40 rounded-2xl bg-transparent -ml-2 md:-ml-8"
              style={{ zIndex: 2 }}
            />
            {/* Celular horizontal (atrás) */}
            <img
              src="/lovable-uploads/7535625b-c93d-47df-879b-b9c878e466d6.png"
              alt="Mockup do app - horizontal"
              className="w-20 sm:w-28 md:w-44 rounded-2xl bg-transparent -ml-3 md:-ml-10 mb-0 md:mb-10"
              style={{ zIndex: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
