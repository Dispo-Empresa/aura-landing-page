
import { useCallback, useEffect, useState } from "react";

// 'light' | 'dark'
export type Theme = "dark";

const THEME_LOCALSTORAGE_KEY = "aura-theme";

export function useTheme(): [Theme, (theme: Theme) => void] {
  const [theme] = useState<Theme>("dark");

  useEffect(() => {
    // Forçar modo escuro aplicando a classe 'dark' ao elemento HTML
    const htmlEl = document.documentElement;
    
    // Remover qualquer classe 'light' se presente
    htmlEl.classList.remove("light");
    
    // Garantir que a classe 'dark' esteja sempre aplicada
    if (!htmlEl.classList.contains("dark")) {
      htmlEl.classList.add("dark");
    }
    
    // Salvar preferência no localStorage
    localStorage.setItem(THEME_LOCALSTORAGE_KEY, "dark");
  }, []);

  // Esta função é mantida para compatibilidade, mas não faz nada
  // já que o tema está sempre fixo como "dark"
  const setTheme = useCallback((_newTheme: Theme) => {
    // O tema é fixo como "dark", então esta é uma operação vazia
  }, []);

  return [theme, setTheme];
}
