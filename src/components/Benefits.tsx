
import { Calendar, Users, Smartphone, Clock, Shield } from "lucide-react";

const benefits = [
  {
    icon: Calendar,
    title: "Agenda personalizada",
    description: "Configure horários, folgas e férias do seu jeito"
  },
  {
    icon: Clock,
    title: "Intervalos flexíveis",
    description: "Defina seus horários de almoço e pausas sem complicação"
  },
  {
    icon: Smartphone,
    title: "Link de agendamento",
    description: "Compartilhe com clientes para agendamentos automáticos"
  },
  {
    icon: Shield,
    title: "Agendamentos seguros",
    description: "Mudanças na agenda não afetam reservas existentes"
  }
];

export function Benefits() {
  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-outfit font-semibold text-center mb-6">
          Feito para quem vive da barbearia
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          O Aura foi desenvolvido pensando na rotina do barbeiro, para trazer mais tranquilidade e organização ao seu dia a dia.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col items-center text-center p-8 bg-card rounded-xl shadow-sm transition-colors"
            >
              <div className="bg-[#2A98D2]/20 p-4 rounded-full mb-4">
                <benefit.icon className="w-6 h-6 text-[#2A98D2]" />
              </div>
              <h3 className="text-xl font-outfit font-medium mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
