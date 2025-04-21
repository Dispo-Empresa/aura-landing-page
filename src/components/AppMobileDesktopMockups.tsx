
import { Monitor, Smartphone } from "lucide-react";

export function AppMobileDesktopMockups() {
  return (
    <section className="py-24 overflow-hidden bg-muted">
      <div className="container">
        <h2 className="text-3xl md:text-4xl font-outfit font-semibold text-center mb-12">
          Seu negócio na palma da sua mão
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="relative bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <div className="aspect-[16/9] bg-[#2A98D2]/5 rounded-lg flex items-center justify-center mb-4 w-full">
              <Smartphone className="w-16 h-16 text-[#2A98D2]" />
            </div>
            <h3 className="text-xl font-outfit font-medium mb-2">App Mobile</h3>
            <p className="text-muted-foreground text-center">
              Gerencie sua barbearia de qualquer lugar, a qualquer momento
            </p>
          </div>
          <div className="relative bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
            <div className="aspect-[16/9] bg-[#2A98D2]/5 rounded-lg flex items-center justify-center mb-4 w-full">
              <Monitor className="w-16 h-16 text-[#2A98D2]" />
            </div>
            <h3 className="text-xl font-outfit font-medium mb-2">Versão Web</h3>
            <p className="text-muted-foreground text-center">
              Tenha o controle completo direto do seu navegador
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
