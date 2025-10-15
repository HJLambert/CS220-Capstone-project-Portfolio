
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const [theme, setTheme] = useState('system');

  useEffect(() => {
    // Check localStorage for user preference
    const userTheme = localStorage.getItem('theme');
    if (userTheme === 'dark' || userTheme === 'light') {
      setTheme(userTheme);
      document.documentElement.classList.toggle('dark', userTheme === 'dark');
    } else {
      // Fallback to system preference
      const systemDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', systemDark);
      setTheme('system');
    }

    // Listen for system changes
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const systemListener = (e) => {
      if (localStorage.getItem('theme') !== 'dark' && localStorage.getItem('theme') !== 'light') {
        document.documentElement.classList.toggle('dark', e.matches);
        setTheme('system');
      }
    };
    mediaQuery.addEventListener('change', systemListener);
    return () => mediaQuery.removeEventListener('change', systemListener);
  }, []);

  // Manual toggle button
  const handleToggle = () => {
    let newTheme;
    if (theme === 'dark') {
      newTheme = 'light';
    } else {
      newTheme = 'dark';
    }
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark', newTheme === 'dark');
  };

  return (
    <button
      onClick={handleToggle}
      className="px-4 py-2 rounded bg-blue-600 dark:bg-yellow-700 text-white dark:text-black font-semibold"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? 'Light' : 'Dark'}
    </button>
  );
}
