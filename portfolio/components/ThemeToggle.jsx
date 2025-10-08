import { useEffect } from 'react';

export default function ThemeToggle() {
  useEffect(() => {
    // Function to set theme based on system preference
    const setTheme = () => {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
    };
    setTheme();
    // Listen for changes in system preference
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', setTheme);
    return () => mediaQuery.removeEventListener('change', setTheme);
  }, []);
  return null;
}
