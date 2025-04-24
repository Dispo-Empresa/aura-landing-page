import { Check, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

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
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <button 
                    type="button" 
                    className={`w-full py-3 rounded-lg text-lg font-semibold transition-colors duration-200 flex items-center justify-center ${plan.button.style}`}
                  >
                    {plan.button.text}
                    <ChevronDown className="w-5 h-5 ml-2" />
                  </button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-56">
                  <DropdownMenuItem asChild>
                    <a href={GOOGLE_PLAY_URL} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <img src="/lovable-uploads/fda67013-3c2d-4afe-8c1b-83fbd4c967c8.png" alt="Disponível no Google Play" className="h-8" />
                    </a>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild>
                    <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer" className="flex items-center">
                      <img src="/lovable-uploads/21e74c41-69d5-46f9-aa51-c257dc13c867.png" alt="Disponível na App Store" className="h-8" />
                    </a>
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
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
