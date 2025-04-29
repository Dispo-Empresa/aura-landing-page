
import { useCallback, useEffect, useState } from "react";

// 'light' | 'dark'
export type Theme = "light" | "dark";

const THEME_LOCALSTORAGE_KEY = "aura-theme";

export function useTheme(): [Theme, (theme: Theme) => void] {
  const [theme, setThemeState] = useState<Theme>(() => {
    // Busca tema preferido salvo
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(THEME_LOCALSTORAGE_KEY) as Theme | null;
      if (stored === "dark" || stored === "light") return stored;
    }
    return "dark"; // AGORA dark é o padrão!
  });

  useEffect(() => {
    // Aplica/remover classe 'dark' no <html>
    const htmlEl = document.documentElement;
    if (theme === "dark") {
      htmlEl.classList.add("dark");
    } else {
      htmlEl.classList.remove("dark");
    }
    // Salva opção
    localStorage.setItem(THEME_LOCALSTORAGE_KEY, theme);
  }, [theme]);

  // Para alterar o tema a partir do componente
  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  return [theme, setTheme];
}

