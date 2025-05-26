
import { Check, X, BadgeDollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useIsMobile } from "@/hooks/use-mobile";

const plans = [
  {
    title: "Plano Gratuito",
    price: "R$ 0",
    subtitle: "Perfeito para começar seu controle",
    features: [
      { label: "Limitado a 1 barbeiro", included: true },
      { label: "Agenda com horários configuráveis", included: true },
      { label: "Apenas agendamento manual", included: true },
      { label: "Dashboards com informações do dia de trabalho", included: true },
      { label: "Múltiplos barbeiros", included: false },
      { label: "Alertas e notificações", included: false },
      { label: "Gestão de equipe", included: false },
      { label: "Link compartilhável de chatbot para agendamento online", included: false },
      { label: "Integração com WhatsApp para confirmações de agendamento e afins", included: false },
      { label: "Suporte prioritário", included: false },
    ],
    button: {
      text: "Começar grátis",
      href: "#",
      style: "bg-[#2A98D2] hover:bg-[#2A98D2]/90 text-white"
    }
  },
  {
    title: "Plano Premium",
    price: "R$ 34,90/mês",
    originalPrice: "R$ 45,90",
    subtitle: "Por menos do que você cobra por um corte",
    features: [
      { label: "Múltiplos barbeiros", included: true },
      { label: "Agenda com horários configuráveis", included: true },
      { label: "Dashboards com informações do dia de trabalho", included: true },
      { label: "Alertas e notificações", included: true },
      { label: "Gestão de equipe", included: true },
      { label: "Agendamento manual", included: true },
      { label: "Link compartilhável de ChatBot para agendamentos online", included: true },
      { label: "Integração com WhatsApp para confirmações de agendamento e afins", included: true },
      { label: "Suporte prioritário", included: true },
    ],
    button: {
      text: "Conheça o Premium",
      href: "#",
      style: "bg-[#34C759] hover:bg-[#34C759]/90 text-white"
    }
  }
];

export function PricingPlans() {
  const isMobile = useIsMobile();
  
  const scrollToDownloads = () => {
    const heroSection = document.querySelector('section.py-20');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#2A98D2]/10 rounded-full blur-3xl opacity-70"></div>
      <div className="container relative z-10">
        <h2 className="text-3xl md:text-4xl font-outfit font-semibold text-center mb-8 animate-fade-in">
          Simples para começar. Completo para crescer.
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {plans.map((plan, idx) => (
            <div
              key={plan.title}
              className={`flex-1 bg-card dark:glass rounded-2xl shadow-lg p-8 flex flex-col items-center border border-border/50 dark:border-white/10 hover-scale transition-all duration-300 animate-fade-in ${idx === 1 ? 'relative' : ''}`}
              style={{ animationDelay: `${idx * 150}ms` }}
            >
              {idx === 1 && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-[#34C759] text-white text-xs sm:text-sm font-medium py-1 px-3 rounded-full flex items-center gap-1 max-w-[90%] mx-auto">
                  <BadgeDollarSign className="w-3 h-3 sm:w-4 sm:h-4" />
                  <span className="truncate">Aproveite enquanto o preço não é alterado!</span>
                </div>
              )}
              
              <h3 className="text-2xl font-medium mb-1 font-outfit">{plan.title}</h3>
              <div className="flex flex-wrap items-end justify-center mb-1">
                {plan.originalPrice && (
                  <span className="text-sm sm:text-lg text-muted-foreground line-through mr-2">{plan.originalPrice}</span>
                )}
                <div className="text-2xl sm:text-3xl font-bold">{plan.price}</div>
              </div>
              <div className="text-muted-foreground mb-4 font-bold text-sm sm:text-base text-center">{plan.subtitle}</div>
              
              <ul className="w-full mb-6 flex-grow">
                {plan.features.map((feat, fIdx) => (
                  <li
                    key={feat.label}
                    className={`flex items-center gap-2 py-1 text-sm sm:text-base ${feat.included ? "text-foreground" : "text-muted-foreground/60 line-through"}`}
                    style={{ animationDelay: `${(idx + fIdx) * 50}ms` }}
                  >
                    {feat.included ? (
                      <Check className="w-5 h-5 text-[#34C759] flex-shrink-0" />
                    ) : (
                      <X className="w-5 h-5 text-red-400/70 flex-shrink-0" />
                    )}
                    <span>{feat.label}</span>
                  </li>
                ))}
              </ul>
              
              {idx === 1 && (
                <div className="w-full mb-4 text-sm text-center text-muted-foreground">
                  <Badge variant="outline" className="bg-[#34C759]/10 border-[#34C759]/20 text-[#34C759] mb-1">Em breve</Badge>
                  <p>Mais funcionalidades exclusivas chegando!</p>
                </div>
              )}
              
              <button 
                onClick={scrollToDownloads}
                className={`w-full py-3 rounded-lg text-lg font-semibold transition-colors duration-200 hover:scale-105 mt-auto ${plan.button.style}`}
              >
                {plan.button.text}
              </button>
            </div>
          ))}
        </div>
        <div className="text-center text-muted-foreground text-sm mt-6">
          Você pode migrar para o Premium a qualquer momento, sem perder seus dados.
        </div>
      </div>
    </section>
  );
}
