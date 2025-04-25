
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "O Aura é feito somente para barbearias?",
    answer: "Sim! O Aura foi desenvolvido exclusivamente para atender às necessidades específicas de barbeiros e barbearias, com foco na gestão da agenda e organização do dia a dia."
  },
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
    answer: "Você pode importar seus agendamentos existentes facilmente para o Aura, sem perder nenhuma informação. Além disso, qualquer mudança na sua agenda não afetará os agendamentos já existentes."
  },
  {
    question: "Como meus clientes podem agendar horários?",
    answer: "O Aura gera um link personalizado que você pode compartilhar nas redes sociais ou por mensagem. Seus clientes podem agendar diretamente por ele, sem precisar baixar nenhum app."
  }
];

export function FAQ() {
  return (
    <section className="py-24 bg-muted">
      <div className="container max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-outfit font-semibold text-center mb-6">
          Dúvidas Frequentes
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-xl mx-auto">
          Encontre respostas para as perguntas mais comuns sobre o Aura e como ele pode ajudar na gestão da sua barbearia.
        </p>
        <Accordion type="single" collapsible className="bg-card rounded-xl p-6 transition-colors">
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
