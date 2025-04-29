
import { useCallback, useEffect, useState } from "react";

// 'light' | 'dark'
export type Theme = "dark";

const THEME_LOCALSTORAGE_KEY = "aura-theme";

export function useTheme(): [Theme, (theme: Theme) => void] {
  const [theme] = useState<Theme>("dark");

  useEffect(() => {
    // Force dark mode by always applying 'dark' class to the HTML element
    const htmlEl = document.documentElement;
    
    // Remove any existing 'light' class if present
    htmlEl.classList.remove("light");
    
    // Always ensure 'dark' class is applied
    if (!htmlEl.classList.contains("dark")) {
      htmlEl.classList.add("dark");
    }
    
    // Save preference in localStorage
    localStorage.setItem(THEME_LOCALSTORAGE_KEY, "dark");
  }, []);

  // This function is maintained for compatibility but does nothing
  // since the theme is always fixed to "dark"
  const setTheme = useCallback((_newTheme: Theme) => {
    // Theme is fixed as "dark", so this is a no-op
  }, []);

  return [theme, setTheme];
}
