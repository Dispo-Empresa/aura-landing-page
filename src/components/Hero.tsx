
import { Scissors } from 'lucide-react';

export function Hero() {
  return (
    <section className="py-20 md:py-28 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2A98D2]/10 rounded-full blur-3xl opacity-70"></div>
      <div className="container">
        <div className="text-center max-w-3xl mx-auto relative z-10">
          <div className="flex items-center justify-center gap-2 mb-6 animate-fade-in">
            <Scissors className="w-5 h-5 text-[#2A98D2]" />
            <span className="text-sm uppercase tracking-wider text-[#2A98D2] font-medium">Feito para barbeiros</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-outfit font-bold leading-tight mb-6 text-foreground animate-fade-in" style={{ animationDelay: "100ms" }}>
            Controle total da sua agenda, sem complicação
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Sua barbearia mais organizada e seus clientes mais satisfeitos. Agende, gerencie e cresça com o Aura.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in" style={{ animationDelay: "300ms" }}>
            <a
              href="#"
              className="w-full sm:w-auto inline-flex justify-center hover:scale-105 transition-transform duration-300"
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
              className="w-full sm:w-auto inline-flex justify-center hover:scale-105 transition-transform duration-300"
              aria-label="Baixar para iOS"
            >
              <img 
                src="/lovable-uploads/ios.png" 
                alt="Disponível na App Store" 
                className="h-16 w-auto max-w-[200px]" 
              />
            </a>
          </div>
          
          {/* QR Code para desktop com divisor "Ou" - visível apenas em desktop */}
          <div className="hidden md:flex flex-col items-center mt-6 animate-fade-in" style={{ animationDelay: "400ms" }}>
            <div className="flex items-center w-full my-4">
              <div className="flex-grow h-px bg-border"></div>
              <span className="px-4 text-sm text-muted-foreground font-medium">Ou</span>
              <div className="flex-grow h-px bg-border"></div>
            </div>
            
            <p className="text-sm text-muted-foreground mb-3">Escaneie o QR code para baixar o app</p>
            
            <div className="bg-white p-2 rounded-lg shadow-md">
              <img 
                src="/lovable-uploads/0c8747b0-4182-437f-b22f-5446c9a6f9bb.png" 
                alt="QR Code para download do app" 
                className="w-32 h-32" 
              />
            </div>
          </div>
        </div>
      </div>
      
      <div className="container flex flex-col md:flex-row items-center justify-center gap-14 mt-16 md:mt-24">
        <div className="flex-1 flex flex-col items-center md:items-start animate-fade-in" style={{ animationDelay: "400ms" }}>
          <h2 className="text-3xl md:text-4xl font-outfit font-semibold mb-4 text-center md:text-left text-foreground">
            Sua rotina completa em um só lugar
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-center md:text-left">
            Tenha um resumo completo do seu dia como barbeiro: notificações, atalhos rápidos, dashboard com dados do dia, faturamento e próximos agendamentos, tudo ao alcance do seu toque.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-6 items-center relative animate-fade-in" style={{ animationDelay: "500ms" }}>
          <div className="flex flex-row gap-2 justify-center items-end md:gap-4">
            {/* Celular grande (frontal) */}
            <img
              src="/lovable-uploads/8022794d-3d7c-4b2b-bace-207c1c4da599.png"
              alt="Dashboard do app Aura - visão completa do dia"
              className="w-32 sm:w-40 md:w-56 rounded-2xl bg-transparent hover:scale-105 transition-transform duration-300"
              style={{ zIndex: 3 }}
            />
            {/* Celular inclinado */}
            <img
              src="/lovable-uploads/f742cae6-1b18-490c-9507-fc0588758e37.png"
              alt="Mockup do app - inclinado"
              className="w-24 sm:w-32 md:w-40 rounded-2xl bg-transparent -ml-2 md:-ml-8 hover:scale-105 transition-transform duration-300"
              style={{ zIndex: 2 }}
            />
            {/* Celular horizontal (atrás) */}
            <img
              src="/lovable-uploads/7535625b-c93d-47df-879b-b9c878e466d6.png"
              alt="Mockup do app - horizontal"
              className="w-20 sm:w-28 md:w-44 rounded-2xl bg-transparent -ml-3 md:-ml-10 mb-0 md:mb-10 hover:scale-105 transition-transform duration-300"
              style={{ zIndex: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
