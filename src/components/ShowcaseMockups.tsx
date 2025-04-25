
import { Calendar, Clock } from "lucide-react";

export function ShowcaseMockups() {
  return (
    <section className="py-20 bg-white/0 relative overflow-x-hidden">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-4xl font-outfit font-semibold mb-4 text-center md:text-left">
            Deixe os agendamentos com o Aura e foque no que você faz de melhor
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-center md:text-left">
            Configure sua rotina, folgas e horários do seu jeito. Com o Aura, você tem controle total com simplicidade e segurança.
          </p>
          
          <div className="flex flex-col gap-4 w-full md:w-auto">
            <div className="flex items-center gap-3 bg-card p-3 rounded-lg">
              <div className="bg-[#2A98D2]/20 p-2 rounded-md">
                <Calendar className="w-5 h-5 text-[#2A98D2]" />
              </div>
              <div>
                <span className="block font-medium">Agenda customizável</span>
                <span className="text-sm text-muted-foreground">Configure horários, folgas e férias</span>
              </div>
            </div>
            
            <div className="flex items-center gap-3 bg-card p-3 rounded-lg">
              <div className="bg-[#2A98D2]/20 p-2 rounded-md">
                <Clock className="w-5 h-5 text-[#2A98D2]" />
              </div>
              <div>
                <span className="block font-medium">Intervalos flexíveis</span>
                <span className="text-sm text-muted-foreground">Defina pausas sem afetar agendamentos</span>
              </div>
            </div>
          </div>
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
