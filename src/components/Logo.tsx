
import { useTheme } from "@/hooks/useTheme";
import { useEffect, useState } from "react";

export function Logo() {
  const [theme, setTheme] = useTheme();
  const [currentLogo, setCurrentLogo] = useState(theme === "dark" ? "/lovable-uploads/aura-logo-light.png" : "/lovable-uploads/aura-logo-dark.png");
  
  // Atualiza o logo quando o tema mudar
  useEffect(() => {
    setCurrentLogo(theme === "dark" ? "/lovable-uploads/aura-logo-light.png" : "/lovable-uploads/aura-logo-dark.png");
  }, [theme]);
  
  return (
    <div className="text-[#2A98D2] font-outfit font-bold text-2xl flex items-center">
      <img 
        src={currentLogo}
        alt="Aura Logo" 
        className="h-10 mr-2" 
      />
    </div>
  );
}
