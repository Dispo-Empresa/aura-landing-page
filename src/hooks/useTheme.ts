
import { useCallback, useEffect, useState } from "react";

// 'light' | 'dark'
export type Theme = "dark";

const THEME_LOCALSTORAGE_KEY = "aura-theme";

export function useTheme(): [Theme, (theme: Theme) => void] {
  const [theme] = useState<Theme>("dark");

  useEffect(() => {
    // Sempre aplicar classe 'dark' no <html>
    const htmlEl = document.documentElement;
    htmlEl.classList.add("dark");
    
    // Salva opção
    localStorage.setItem(THEME_LOCALSTORAGE_KEY, "dark");
  }, []);

  // Para manter a compatibilidade com a interface anterior,
  // mas agora não faz nada quando chamada
  const setTheme = useCallback((_newTheme: Theme) => {
    // Tema é sempre "dark", então não fazemos nada aqui
  }, []);

  return [theme, setTheme];
}
