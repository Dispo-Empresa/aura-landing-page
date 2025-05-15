
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
    question: "Como posso sugerir melhorias para o Aura?",
    answer: "Envie suas ideias diretamente para o nosso suporte via WhatsApp: "
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
                {index === 3 ? (
                  <div className="flex items-center gap-1">
                    {faq.answer}
                    <a 
                      href="https://wa.me/5511999999999" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="text-[#34C759] font-medium hover:underline"
                    >
                      Clique aqui
                    </a>
                  </div>
                ) : (
                  faq.answer
                )}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
