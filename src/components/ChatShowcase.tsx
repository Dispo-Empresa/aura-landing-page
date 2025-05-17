
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";
import { MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ChatShowcase() {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-20 md:py-28 bg-card/50 relative overflow-hidden">
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2A98D2]/10 rounded-full blur-3xl opacity-70"></div>
      <div className="container px-4 relative z-10">
        <div className="flex items-center justify-center gap-2 mb-6">
          <Badge className="bg-[#34C759]/20 border border-[#34C759] text-[#34C759]">
            Exclusivo do plano premium
          </Badge>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-outfit font-semibold text-center mb-2">
          Chat de agendamentos simplificado
        </h2>
        
        <div className="max-w-2xl mx-auto text-center mb-16">
          <p className="text-lg text-muted-foreground">
            Seus clientes podem agendar horários facilmente através de uma interface de chat intuitiva, 
            tanto no desktop quanto no celular.
          </p>
          <div className="flex items-center justify-center gap-2 mt-4 text-[#34C759] font-medium">
            <MessageCircle className="w-5 h-5" />
            <span>Confirmações automáticas via WhatsApp</span>
          </div>
          <p className="mt-2 text-muted-foreground">Seus clientes não precisam instalar nada - funciona direto no navegador!</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center max-w-[70rem] mx-auto">
          {/* Desktop chat mockup com efeito hover scale */}
          <div className="w-full lg:w-[70%] xl:w-[70%] shadow-xl rounded-xl overflow-hidden transition-transform duration-300 hover:scale-105">
            <AspectRatio ratio={16 / 9}>
              <img 
                src="/lovable-uploads/chat-desktop.png" 
                alt="Chat de agendamentos no desktop" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" 
              />
            </AspectRatio>
          </div>

          {/* Mobile chat mockup - mantendo ajustes anteriores */}
          <div className="w-full lg:w-[25%] xl:w-[22%] max-w-[280px] shadow-xl rounded-3xl overflow-hidden animate-fade-in">
            <div className="pt-3 pb-3">
              <img 
                src="/lovable-uploads/chat-mobile.png" 
                alt="Chat de agendamentos no celular" 
                className="w-full h-auto object-contain hover:scale-105 transition-transform duration-300" 
              />
            </div>
          </div>
        </div>
        
        <div className="text-center mt-12">
          <p className="text-lg font-medium">Seus clientes vão adorar a praticidade!</p>
          <p className="text-muted-foreground mt-2">Interface intuitiva e amigável para qualquer dispositivo</p>
        </div>
      </div>
    </section>
  );
}
