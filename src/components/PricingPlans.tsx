
import { Check, X } from "lucide-react";

const plans = [
  {
    title: "Plano Grátis",
    price: "R$ 0",
    subtitle: "Perfeito para começar seu controle",
    features: [
      { label: "1 barbeiro", included: true },
      { label: "Agenda 100% configurável", included: true },
      { label: "Alertas e lembretes automáticos", included: true },
      { label: "Link para agendamento online", included: true },
      { label: "Suporte a múltiplos barbeiros", included: false },
      { label: "Gestão de equipe", included: false },
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
    title: "Plano Pro",
    price: "A partir de R$ 29/mês",
    subtitle: "Para barbearias que querem crescer",
    features: [
      { label: "1 ou mais barbeiros", included: true },
      { label: "Agenda 100% configurável", included: true },
      { label: "Alertas e lembretes automáticos", included: true },
      { label: "Link para agendamento online", included: true },
      { label: "Suporte a múltiplos barbeiros", included: true },
      { label: "Gestão de equipe", included: true },
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
    const heroSection = document.querySelector('section.pt-20');
    if (heroSection) {
      heroSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-outfit font-semibold text-center mb-8">
          Simples para começar. Completo para crescer.
        </h2>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {plans.map((plan, idx) => (
            <div
              key={plan.title}
              className={`flex-1 bg-card dark:glass rounded-2xl shadow-lg p-8 flex flex-col items-center border border-border/50 dark:border-white/10 ${idx === 1 ? "md:scale-105" : ""}`}
            >
              <h3 className="text-2xl font-medium mb-1 font-outfit">{plan.title}</h3>
              <div className="text-3xl font-bold mb-1">{plan.price}</div>
              <div className="text-muted-foreground mb-4">{plan.subtitle}</div>
              <ul className="w-full mb-6">
                {plan.features.map((feat) => (
                  <li
                    key={feat.label}
                    className={`flex items-center gap-2 py-1 text-base ${feat.included ? "text-foreground" : "text-muted-foreground/60 line-through"}`}
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
              <button 
                onClick={scrollToDownloads}
                className={`w-full py-3 rounded-lg text-lg font-semibold transition-colors duration-200 ${plan.button.style}`}
              >
                {plan.button.text}
              </button>
            </div>
          ))}
        </div>
        <div className="text-center text-muted-foreground text-sm mt-6">
          Você pode migrar para o Pro a qualquer momento, sem perder seus dados.
        </div>
      </div>
    </section>
  );
}
