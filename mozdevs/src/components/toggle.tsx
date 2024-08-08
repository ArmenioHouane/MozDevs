"use client";
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
}, []); 
if (!mounted) return null;
   

  return (
    <button
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      className="p-2 bg-gray-200 dark:bg-gray-800 text-black dark:text-white"
    >
      {theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}




    
    </button>
  );
};

export default ThemeToggle;