
import { Calendar, Users, Smartphone, Clock } from "lucide-react";

const benefits = [
  {
    icon: Calendar,
    title: "Agenda personalizada",
    description: "Configure horários, folgas e férias do seu jeito"
  },
  {
    icon: Clock,
    title: "Intervalos flexíveis",
    description: "Defina seus horários de almoço e pausas"
  },
  {
    icon: Smartphone,
    title: "Link de agendamento",
    description: "Compartilhe nas redes sociais para agendamentos automáticos"
  },
  {
    icon: Users,
    title: "Múltiplos barbeiros",
    description: "Adicione toda sua equipe no plano premium"
  }
];

export function Benefits() {
  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0D3B66] opacity-10 blur-3xl -z-10 rounded-full transform translate-y-1/4 scale-125"></div>
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-outfit font-semibold text-center mb-12">
          Tudo que você precisa para uma gestão tranquila
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className="flex flex-col items-center text-center p-6 bg-white dark:bg-card rounded-lg shadow-sm transition-colors"
            >
              <benefit.icon className="w-12 h-12 text-[#2A98D2] mb-4" />
              <h3 className="text-xl font-outfit font-medium mb-2">{benefit.title}</h3>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
