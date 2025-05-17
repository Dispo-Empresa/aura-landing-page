
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
            Agenda cheia, cabeça leve. Com o Aura, dá pra ter os dois.
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 animate-fade-in" style={{ animationDelay: "200ms" }}>
            Tenha controle total da agenda, organize horários e encante seus clientes. Com o Aura, sua rotina flui sem estresse e seu negócio cresce com você.
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
            
            <p className="text-sm text-muted-foreground mb-3">Escaneie o QR Code para acessar a página do Aura na sua loja de aplicativos.</p>
            
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
      
      <div className="container flex flex-col md:flex-row items-center justify-center gap-[10rem] mt-14 md:mt-20">
  <div className="flex flex-col max-w-xl items-start animate-fade-in" style={{ animationDelay: "400ms" }}>
    <h2 className="text-3xl md:text-4xl font-outfit font-semibold mb-4 text-foreground">
      Tudo que você precisa para o seu dia de barbeiro, em um só lugar
    </h2>
    <p className="text-lg text-muted-foreground mb-6">
      Veja de forma fácil e rápida tudo sobre seu dia: seus agendamentos, ganhos do dia, horários e notificações importantes. O Aura reúne tudo que você precisa para organizar sua rotina, sem complicação.
    </p>
  </div>
  <div className="flex justify-center items-center animate-fade-in" style={{ animationDelay: '500ms' }}>
  <div className="w-[30rem] sm:w-[32rem] md:w-[36rem]">
    <img
      src="/lovable-uploads/hero-screens.png"
      alt="Dashboard do app Aura exibindo resumo de agendamentos e faturamento"
      className="w-full rounded-3xl shadow-xl hover:scale-105 transition-transform duration-300"
    />
</div>
</div>

</div>


    </section>
  );
}
