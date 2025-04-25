
import { Check, X } from "lucide-react";
import { useState } from "react";

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
  const [showDownloadOptions, setShowDownloadOptions] = useState(false);
  const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.auraapp";
  const APP_STORE_URL = "https://apps.apple.com/app/id1234567890";

  const handleButtonClick = (plan) => {
    setShowDownloadOptions(true);
  };

  return (
    <section className="py-24 bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-outfit font-semibold text-center mb-4">
          Simples para começar. Completo para crescer.
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto mb-12">
          Escolha o plano que melhor se adapta ao seu momento e migre conforme sua barbearia cresce.
        </p>
        <div className="flex flex-col md:flex-row gap-8 justify-center">
          {plans.map((plan, idx) => (
            <div
              key={plan.title}
              className={`flex-1 bg-card rounded-2xl shadow-lg p-8 flex flex-col items-center border border-border/50 dark:border-white/10 ${idx === 1 ? "md:scale-105" : ""}`}
            >
              <h3 className="text-2xl font-medium mb-1 font-outfit">{plan.title}</h3>
              <div className="text-3xl font-bold mb-2">{plan.price}</div>
              <div className="text-muted-foreground mb-6">{plan.subtitle}</div>
              <ul className="w-full mb-8">
                {plan.features.map((feat) => (
                  <li
                    key={feat.label}
                    className={`flex items-center gap-2 py-2 text-base ${feat.included ? "text-foreground" : "text-muted-foreground/60 line-through"}`}
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
                onClick={() => handleButtonClick(plan)}
                className={`w-full py-3 rounded-lg text-lg font-medium transition-colors duration-200 ${plan.button.style}`}
              >
                {plan.button.text}
              </button>
            </div>
          ))}
        </div>
        
        {showDownloadOptions && (
          <div className="mt-12 flex flex-col items-center">
            <h3 className="text-xl font-medium mb-6">Baixe o app e comece agora</h3>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <a
                href={GOOGLE_PLAY_URL}
                className="w-full sm:w-auto inline-flex justify-center"
                aria-label="Baixar para Android"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/lovable-uploads/google-play.png" alt="Disponível no Google Play" className="h-14 w-auto max-w-[200px]" />
              </a>
              <a
                href={APP_STORE_URL}
                className="w-full sm:w-auto inline-flex justify-center"
                aria-label="Baixar para iOS"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src="/lovable-uploads/ios.png" alt="Disponível na App Store" className="h-16 w-auto max-w-[200px]" />
              </a>
            </div>
          </div>
        )}
        
        <div className="text-center text-muted-foreground text-sm mt-8">
          Você pode migrar para o Pro a qualquer momento, sem perder seus dados.
        </div>
      </div>
    </section>
  );
}
