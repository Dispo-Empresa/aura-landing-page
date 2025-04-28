
export function ShowcaseMockups() {
  return (
    <section className="py-20 bg-transparent relative overflow-hidden mt-0">
      <div className="absolute inset-0 bg-[#0D3B66] opacity-15 blur-3xl -z-10 rounded-full transform translate-x-1/3 scale-125"></div>
      <div className="container flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-4xl font-outfit font-semibold mb-4 text-center md:text-left">
            Configure sua agenda do seu jeito
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-center md:text-left">
            Defina seus horários de trabalho, intervalos, folgas e férias com precisão. 
            Tudo isso sem afetar os agendamentos que já existem.
          </p>
        </div>
        <div className="flex-1 relative">
          <div className="absolute -right-40 top-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-[#2A98D2]/10 dark:bg-[#2A98D2]/20 rounded-full blur-3xl"></div>
          <div className="relative overflow-hidden rounded-xl shadow-xl">
            <img 
              src="/lovable-uploads/f742cae6-1b18-490c-9507-fc0588758e37.png" 
              alt="Tela do aplicativo Aura" 
              className="w-full h-auto object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
}
