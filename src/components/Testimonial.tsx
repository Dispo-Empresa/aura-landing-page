
import { Card, CardContent } from "@/components/ui/card";

export function Testimonial() {
  return (
    <section className="py-24">
      <div className="container">
        <Card className="max-w-4xl mx-auto">
          <CardContent className="p-8 md:p-12 text-center">
            <p className="text-2xl md:text-3xl font-outfit mb-6">
              "Desde que comecei a usar o Aura, nunca mais tive problemas com agendamentos duplos. A organização da agenda ficou muito mais fácil!"
            </p>
            <div>
              <p className="font-medium text-lg">Carlos Silva</p>
              <p className="text-muted-foreground">Proprietário da Barbearia Vintage</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
