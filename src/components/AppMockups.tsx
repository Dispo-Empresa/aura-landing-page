
import { Smartphone } from "lucide-react";

export function AppMockups() {
  return (
    <section className="py-24 overflow-hidden">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="text-3xl md:text-4xl font-outfit font-semibold">
              Agendamentos simplificados em qualquer dispositivo
            </h2>
            <p className="text-lg text-muted-foreground">
              Seus clientes podem agendar horários facilmente pelo celular ou computador, 
              enquanto você gerencia tudo em um só lugar.
            </p>
          </div>
          <div className="relative">
            <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#2A98D2]/10 rounded-full blur-3xl"></div>
            <div className="relative bg-white p-4 rounded-2xl shadow-lg">
              <div className="aspect-[16/9] bg-[#2A98D2]/5 rounded-lg flex items-center justify-center">
                <Smartphone className="w-16 h-16 text-[#2A98D2]" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
