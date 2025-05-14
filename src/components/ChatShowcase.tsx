
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { useIsMobile } from "@/hooks/use-mobile";
import { MessageCircle } from "lucide-react";

export function ChatShowcase() {
  const isMobile = useIsMobile();
  
  return (
    <section className="py-20 md:py-28 bg-card/50">
      <div className="container px-4">
        <div className="flex items-center justify-center gap-2 mb-6">
          <MessageCircle className="w-5 h-5 text-[#2A98D2]" />
          <span className="text-sm uppercase tracking-wider text-[#2A98D2] font-medium">Experiência integrada</span>
        </div>
        
        <h2 className="text-3xl md:text-4xl font-outfit font-semibold text-center mb-6">
          Chat de agendamentos simplificado
        </h2>
        
        <p className="text-lg text-muted-foreground mb-16 max-w-2xl mx-auto text-center">
          Seus clientes podem agendar horários facilmente através de uma interface de chat intuitiva, 
          tanto no desktop quanto no celular.
        </p>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center max-w-5xl mx-auto">
          {/* Desktop chat mockup */}
          <div className="w-full max-w-3xl mx-auto shadow-xl rounded-xl overflow-hidden">
            <AspectRatio ratio={16/9}>
              <img 
                src="/lovable-uploads/9d061049-621d-4456-8a52-6bf35caa6d89.png" 
                alt="Chat de agendamentos no desktop" 
                className="w-full h-full object-cover object-center"
              />
            </AspectRatio>
          </div>
          
          {/* Mobile chat mockup */}
          <div className="max-w-[280px] mx-auto shadow-xl rounded-3xl overflow-hidden">
            <AspectRatio ratio={9/16}>
              <img 
                src="/lovable-uploads/63a6a9b3-4037-454c-aafb-e38fd5e14e31.png" 
                alt="Chat de agendamentos no celular" 
                className="w-full h-full object-cover object-center"
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
