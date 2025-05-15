
import { Check, X, BadgeDollarSign } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const plans = [
  {
    title: "Plano Gratuito",
    price: "R$ 0",
    subtitle: "Perfeito para começar seu controle",
    features: [
      { label: "1 barbeiro", included: true },
      { label: "Agenda 100% configurável", included: true },
      { label: "Alertas e lembretes automáticos", included: true },
      { label: "Agendamento manual", included: true },
      { label: "Suporte a múltiplos barbeiros", included: false },
      { label: "Gestão de equipe", included: false },
      { label: "Link para agendamento online", included: false },
      { label: "Integração com WhatsApp", included: false },
      { label: "Relatórios avançados", included: false },
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
    price: "R$ 29,90/mês",
    originalPrice: "R$ 39,90",
    subtitle: "Para barbearias que querem crescer",
    features: [
      { label: "1 ou mais barbeiros", included: true },
      { label: "Agenda 100% configurável", included: true },
      { label: "Alertas e lembretes automáticos", included: true },
      { label: "Agendamento manual", included: true },
      { label: "Suporte a múltiplos barbeiros", included: true },
      { label: "Gestão de equipe", included: true },
      { label: "Link para agendamento online", included: true },
      { label: "Integração com WhatsApp", included: true },
      { label: "Relatórios avançados", included: true },
      { label: "Suporte prioritário", included: true },
    ],
    button: {
      text: "Conheça o Pro",
      href: "#",
      style: "bg-[#34C759] hover:bg-[#34C759]/90 text-white"
    }
  }
];

export function PricingPlans() {
  const scrollToDownloads = () => {
    const heroSection = document.querySelector('section.py-20');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-muted">
      <div className="container">
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
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-[#34C759] text-white text-sm font-medium py-1 px-3 rounded-full flex items-center gap-1">
                  <BadgeDollarSign className="w-4 h-4" />
                  <span>Aproveite enquanto o preço não aumenta!</span>
                </div>
              )}
              
              <h3 className="text-2xl font-medium mb-1 font-outfit">{plan.title}</h3>
              <div className="flex items-end mb-1">
                {plan.originalPrice && (
                  <span className="text-lg text-muted-foreground line-through mr-2">{plan.originalPrice}</span>
                )}
                <div className="text-3xl font-bold">{plan.price}</div>
              </div>
              <div className="text-muted-foreground mb-4">{plan.subtitle}</div>
              
              <ul className="w-full mb-6">
                {plan.features.map((feat, fIdx) => (
                  <li
                    key={feat.label}
                    className={`flex items-center gap-2 py-1 text-base ${feat.included ? "text-foreground" : "text-muted-foreground/60 line-through"}`}
                    style={{ animationDelay: `${(idx + fIdx) * 50}ms` }}
                  >
                    {feat.included ? (
                      <Check className="w-5 h-5 text-[#34C759]" />
                    ) : (
                      <X className="w-5 h-5 text-red-400/70" />
                    )}
                    {feat.label}
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
                className={`w-full py-3 rounded-lg text-lg font-semibold transition-colors duration-200 hover:scale-105 ${plan.button.style}`}
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
