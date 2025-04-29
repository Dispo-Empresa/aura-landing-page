
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
    question: "Preciso instalar algo no computador?",
    answer: "Não, o Aura funciona direto pelo navegador ou pelo app no seu celular. Sem necessidade de instalações complicadas."
  },
  {
    question: "E se eu já tiver agendamentos?",
    answer: "Você pode importar seus agendamentos existentes facilmente para o Aura, sem perder nenhuma informação."
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
        <Accordion type="single" collapsible className="bg-white dark:bg-card rounded-lg p-6 transition-colors">
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

