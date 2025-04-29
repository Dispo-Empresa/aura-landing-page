
import { useTheme } from "@/hooks/useTheme";

export function Logo() {
  const [theme] = useTheme();
  
  // Definir o logo baseado no tema atual
  const logoSrc = theme === "dark" 
    ? "/lovable-uploads/aura-logo-light.png" 
    : "/lovable-uploads/aura-logo-dark.png";
  
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
