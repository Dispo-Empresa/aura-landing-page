
import { Calendar, Users, Smartphone, Clock, MessageCircle, Bell } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const benefits = [
  {
    icon: Calendar,
    title: "Agenda personalizada",
    description: "Configure horários, folgas e férias do seu jeito",
    premium: false
  },
  {
    icon: Clock,
    title: "Visão clara do dia",
    description: "Acompanhe todos os seus compromissos e resumo diário",
    premium: false
  },
  {
    icon: Bell,
    title: "Alertas e notificações",
    description: "Receba avisos de novos agendamentos, reagendamentos e cancelamentos",
    premium: true
  },
  {
    icon: Smartphone,
    title: "Link de agendamento",
    description: "Compartilhe nas redes sociais para agendamentos automáticos",
    premium: true
  },
  {
    icon: Users,
    title: "Múltiplos barbeiros",
    description: "Adicione toda sua equipe no plano premium",
    premium: true
  },
  {
    icon: MessageCircle,
    title: "Integração com WhatsApp",
    description: "Clientes recebem mensagens de confirmação automáticas",
    premium: true
  }
];

export function Benefits() {
  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#2A98D2]/10 rounded-full blur-3xl opacity-70"></div>
      <div className="container relative z-10">
        <h2 className="text-3xl md:text-4xl font-outfit font-semibold text-center mb-12">
          Tudo que você precisa para uma gestão tranquila
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit) => (
            <div
              key={benefit.title}
              className={`flex flex-col items-center text-center p-6 bg-white dark:bg-card rounded-lg shadow-md hover:shadow-lg transition-all relative ${
                benefit.premium 
                  ? "border-[1px] border-[#34C759]" 
                  : "border border-border/50 dark:border-white/10"
              }`}
            >
              {benefit.premium && (
                <Badge className="absolute top-0 -translate-y-1/2 bg-[#34C759]/20 border border-[#34C759] text-[#34C759] mx-auto mt-2">
                  Exclusivo do plano premium
                </Badge>
              )}
              <div className="relative mt-6">
                <benefit.icon className="w-12 h-12 text-[#2A98D2] mb-4" />
              </div>
              <div className="mb-2">
                <h3 className="text-xl font-outfit font-medium">{benefit.title}</h3>
              </div>
              <p className="text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
        
        {/* Mensagem de destaque após os cards */}
        <div className="mt-12 text-center">
          <p className="text-lg font-medium text-[#2A98D2] mb-2">
            Você ainda não viu tudo que o Aura pode fazer por você!
          </p>
          <p className="text-md font-outfit max-w-2xl mx-auto">
            Além das funções incríveis já disponíveis, vem aí novidades que vão melhorar mais ainda sua rotina como barbeiro.
            🚀 Não perca tempo — teste grátis agora e saia na frente!
          </p>
        </div>
      </div>
    </section>
  );
}
