
import { Moon } from "lucide-react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  return (
    <Button
      aria-label="Tema escuro fixo"
      variant="ghost"
      size="icon"
      className="ml-2 cursor-default"
      disabled
    >
      <Moon className="h-5 w-5" />
    </Button>
  );
}
