
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "Como funciona o período de teste grátis?",
    answer: "Você tem acesso completo ao Aura por 7 dias, sem compromisso. Não é necessário cartão de crédito para começar."
  },
  {
    question: "Como os meus clientes vão agendar?",
    answer: "No plano gratuito, o barbeiro agenda manualmente. No plano premium, o cliente pode agendar por links próprios e recebe confirmações automáticas por WhatsApp."
  },
  {
    question: "E se eu tiver imprevistos no dia e precisar mudar os horários?",
    answer: "Você pode cancelar, remarcar e ajustar seus horários a qualquer momento. O Aura gerencia conflitos e atualiza sua agenda com segurança."
  },
  {
    question: "Preciso instalar algo no computador?",
    answer: "Não, o Aura funciona direto pelo navegador ou pelo app no seu celular. Sem necessidade de instalações complicadas."
  },
  {
    question: "E se eu já tiver agendamentos?",
    answer: "Você pode importar seus agendamentos existentes facilmente para o Aura, sem perder nenhuma informação."
  },
  {
    question: "Como posso sugerir melhorias para o Aura?",
    answer: "Envie suas ideias diretamente para o nosso suporte via WhatsApp: (11) 99999-9999."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-muted relative overflow-hidden">
      <div className="absolute inset-0 bg-[#0D3B66] opacity-10 blur-3xl -z-10 rounded-full transform translate-x-1/3 scale-125"></div>
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-outfit font-semibold text-center mb-12">
          Dúvidas Frequentes
        </h2>
        <Accordion type="single" collapsible className="bg-white dark:bg-card rounded-lg p-6 transition-colors shadow-md">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-medium">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
