
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
          <div className="w-full max-w-3xl mx-auto">
            <div className="bg-black p-3 rounded-xl shadow-xl">
              <div className="relative rounded-lg overflow-hidden bg-gray-100">
                <div className="bg-gray-800 text-white text-center py-2 px-4 text-sm">
                  Aura Chat
                </div>
                <div className="p-4">
                  <div className="flex items-start gap-3 mb-4">
                    <div className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs">
                      D
                    </div>
                    <div className="bg-white shadow-sm p-3 rounded-lg max-w-[80%]">
                      <p className="text-sm">
                        Olá! Seja bem-vindo(a) Dispo Barbearia. Para continuarmos com o seu agendamento, por gentileza, informe seu número de telefone.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-3 border-t border-gray-200 flex items-center gap-2 bg-gray-100">
                  <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-4 h-4 text-gray-600" />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full p-2 px-4 text-sm text-gray-500">
                    ex: (99) 9 9999-9999
                  </div>
                  <button className="w-8 h-8 bg-gray-800 rounded-full flex items-center justify-center text-white">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mobile chat mockup */}
          <div className="max-w-[280px] mx-auto">
            <div className="bg-black p-2 rounded-3xl shadow-xl">
              <div className="relative rounded-2xl overflow-hidden bg-gray-100 h-[500px]">
                <div className="bg-gray-800 text-white text-center py-2 px-4 text-sm">
                  Aura Chat
                </div>
                <div className="p-3">
                  <div className="flex items-start gap-2 mb-4">
                    <div className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white text-xs">
                      D
                    </div>
                    <div className="bg-white shadow-sm p-2 rounded-lg max-w-[80%]">
                      <p className="text-xs">
                        Olá! Seja bem-vindo(a) Dispo Barbearia. Para continuarmos com o seu agendamento, por gentileza, informe seu número de telefone.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-2 border-t border-gray-200 flex items-center gap-2 bg-gray-100">
                  <div className="w-6 h-6 bg-gray-300 rounded-full flex items-center justify-center">
                    <MessageCircle className="w-3 h-3 text-gray-600" />
                  </div>
                  <div className="flex-1 bg-gray-200 rounded-full p-1 px-3 text-xs text-gray-500">
                    ex: (99) 9 9999-9999
                  </div>
                  <button className="w-6 h-6 bg-gray-800 rounded-full flex items-center justify-center text-white">
                    <svg width="10" height="10" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
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
