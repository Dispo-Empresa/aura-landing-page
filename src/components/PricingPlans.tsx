
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

// URLs fictícios das lojas (troque pelos reais se precisar)
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=com.auraapp";
const APP_STORE_URL = "https://apps.apple.com/app/id1234567890";

export function PricingPlans() {
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
              className={`flex-1 bg-white rounded-2xl shadow-lg p-8 flex flex-col items-center border border-muted ${idx === 1 ? "scale-105 border-blue-200" : ""}`}
            >
              <h3 className="text-2xl font-medium mb-1 font-outfit">{plan.title}</h3>
              <div className="text-3xl font-bold mb-1">{plan.price}</div>
              <div className="text-muted-foreground mb-4">{plan.subtitle}</div>
              <ul className="w-full mb-6">
                {plan.features.map((feat) => (
                  <li
                    key={feat.label}
                    className={`flex items-center gap-2 py-1 text-base ${feat.included ? "text-foreground" : "text-muted-foreground line-through"}`}
                  >
                    {feat.included ? (
                      <Check className="w-5 h-5 text-[#34C759]" />
                    ) : (
                      <X className="w-5 h-5 text-red-400" />
                    )}
                    {feat.label}
                  </li>
                ))}
              </ul>
              <a href={plan.button.href} className={`w-full`}>
                <button
                  type="button"
                  className={`w-full py-3 rounded-lg text-lg font-semibold transition-colors duration-200 ${plan.button.style}`}
                >
                  {plan.button.text}
                </button>
              </a>
              <div className="flex flex-row gap-2 mt-5 w-full justify-center">
                <a
                  href={GOOGLE_PLAY_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Disponível na Google Play"
                  className="w-[132px] h-[40px] flex items-center justify-center bg-[#222] rounded-lg hover:scale-105 transition-transform"
                >
                  <img
                    src="https://upload.wikimedia.org/wikipedia/commons/7/78/Google_Play_Store_badge_PT_BR.svg"
                    alt="Disponível no Google Play"
                    className="h-8"
                    style={{ filter: "drop-shadow(0 1px 2px #0004)" }}
                  />
                </a>
                <a
                  href={APP_STORE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Disponível na App Store"
                  className="w-[120px] h-[40px] flex items-center justify-center bg-[#222] rounded-lg hover:scale-105 transition-transform"
                >
                  <img
                    src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                    alt="Disponível na App Store"
                    className="h-8"
                    style={{ filter: "drop-shadow(0 1px 2px #0004)" }}
                  />
                </a>
              </div>
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
