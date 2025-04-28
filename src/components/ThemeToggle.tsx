
import { Moon, Sun } from "lucide-react";
import { Button } from "@/components/ui/button";

// Este componente está mantido apenas para referência, 
// mas não é mais usado pois o tema dark agora é fixo.
export function ThemeToggle() {
  return (
    <Button
      aria-label="Tema escuro fixo"
      variant="ghost"
      size="icon"
      className="ml-2"
      disabled
    >
      <Moon className="h-5 w-5" />
    </Button>
  );
}
