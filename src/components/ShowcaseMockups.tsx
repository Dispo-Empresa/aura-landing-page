
export function ShowcaseMockups() {
  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="container flex flex-col md:flex-row items-center justify-center gap-12">
        <div className="flex-1 flex flex-col items-center md:items-start">
          <h2 className="text-3xl md:text-4xl font-outfit font-semibold mb-4 text-center md:text-left">
            Veja como é fácil controlar o seu dia a dia
          </h2>
          <p className="text-lg text-muted-foreground mb-6 text-center md:text-left">
            Os principais recursos, tudo ao alcance do seu toque: agenda flexível, visão clara dos horários, próximos agendamentos e alertas automáticos.
          </p>
        </div>
        <div className="flex-1 flex flex-col gap-6 items-center relative">
          <div className="flex flex-row gap-4 justify-center items-end">
            {/* Celular grande (frontal) */}
            <img
              src="/lovable-uploads/8022794d-3d7c-4b2b-bace-207c1c4da599.png"
              alt="Mockup do app - principal"
              className="w-44 md:w-56 shadow-lg rounded-2xl border"
              style={{ zIndex: 3 }}
            />
            {/* Celular inclinado */}
            <img
              src="/lovable-uploads/f742cae6-1b18-490c-9507-fc0588758e37.png"
              alt="Mockup do app - inclinado"
              className="w-32 md:w-40 shadow-lg rounded-2xl border md:-ml-8 -ml-2"
              style={{ zIndex: 2 }}
            />
            {/* Celular horizontal (atrás) */}
            <img
              src="/lovable-uploads/7535625b-c93d-47df-879b-b9c878e466d6.png"
              alt="Mockup do app - horizontal"
              className="w-36 md:w-44 shadow-md rounded-2xl border md:-ml-10 -ml-4 md:mb-10 -mb-6"
              style={{ zIndex: 1 }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
