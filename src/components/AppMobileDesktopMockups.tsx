
import { Smartphone, Calendar, Users } from "lucide-react";

export function AppMobileDesktopMockups() {
  return (
    <section className="py-24 overflow-hidden bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-outfit font-semibold text-center mb-12">
          Seu negócio na palma da sua mão
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <div className="aspect-[16/9] bg-[#2A98D2]/5 rounded-lg flex items-center justify-center mb-4 w-full">
              <Calendar className="w-16 h-16 text-[#2A98D2]" />
            </div>
            <h3 className="text-xl font-outfit font-medium mb-2">Agenda Flexível</h3>
            <p className="text-muted-foreground text-center">
              Configure horários, intervalos e folgas do seu jeito, sem afetar agendamentos existentes
            </p>
          </div>
          <div className="relative bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <div className="aspect-[16/9] bg-[#2A98D2]/5 rounded-lg flex items-center justify-center mb-4 w-full">
              <Users className="w-16 h-16 text-[#2A98D2]" />
            </div>
            <h3 className="text-xl font-outfit font-medium mb-2">Planos Flexíveis</h3>
            <p className="text-muted-foreground text-center">
              Comece grátis e expanda conforme sua barbearia cresce, com opções para múltiplos barbeiros
            </p>
          </div>
        </div>
      </div>
    </section>
  