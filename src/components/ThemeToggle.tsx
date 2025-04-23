
import { Moon, Sun } from "lucide-react";
import { useTheme, Theme } from "@/hooks/useTheme";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
  const [theme, setTheme] = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <Button
      aria-label={theme === "dark" ? "Mudar para modo claro" : "Mudar para modo escuro"}
      variant="ghost"
      size="icon"
      className="ml-2"
      onClick={toggleTheme}
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </Button>
  );
}
