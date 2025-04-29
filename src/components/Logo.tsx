
export function Logo() {
  // Sempre usa o logo claro para o tema escuro
  const logoSrc = "/lovable-uploads/aura-logo-light.png";
  
  return (
    <div className="text-[#2A98D2] font-outfit font-bold text-2xl flex items-center">
      <img 
        src={logoSrc}
        alt="Aura Logo" 
        className="h-10 mr-2" 
      />
    </div>
  );
}
