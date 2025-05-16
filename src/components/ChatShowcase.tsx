
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";
import { MessageCircle } from "lucide-react";
import { Badge } from "@/components/ui/badge";

export function ChatShowcase() {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-20 md:py-28 bg-card/50">
      <div className="container px-4">
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
        
        <div className="flex flex-col lg:flex-row gap-10 items-center justify-center max-w-[80rem] mx-auto">
          {/* Desktop chat mockup - versão reduzida */}
          <div className="w-full lg:w-[85%] xl:w-[80%] shadow-xl rounded-xl overflow-hidden">
            <AspectRatio ratio={16 / 9}>
              <img 
                src="/lovable-uploads/chat-desktop.png" 
                alt="Chat de agendamentos no desktop" 
                className="w-full h-full object-cover" 
              />
            </AspectRatio>
          </div>

          {/* Mobile chat mockup - versão reduzida */}
          <div className="w-full lg:w-[30%] xl:w-[25%] max-w-[320px] shadow-xl rounded-3xl overflow-hidden">
            <AspectRatio ratio={9 / 16}>
              <img 
                src="/lovable-uploads/chat-mobile.png" 
                alt="Chat de agendamentos no celular" 
                className="w-full h-full object-cover" 
              />
            </AspectRatio>
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
