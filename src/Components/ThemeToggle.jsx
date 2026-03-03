import { Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { cn } from "../lib/utils";

export const ThemeToggle = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        const storedTheme = localStorage.getItem("theme");
        if (storedTheme) {
            return storedTheme === 'dark';
        }
        return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    });

    useEffect(() => {
        if (isDarkMode) {
            document.documentElement.classList.add("dark");
            localStorage.setItem("theme", "dark");
        } else {
            document.documentElement.classList.remove("dark");
            localStorage.setItem("theme", "light");
        }
    }, [isDarkMode]);

    const toggleTheme = () => {
        setIsDarkMode(prevMode => !prevMode);
    };

    return (
        <button 
            onClick={toggleTheme} 
            className={cn(
                "fixed max-sm:hidden top-5 right-5 z-50 p-2 rounded-full transition-colors duration-300",
                "focus:outline-none"
            )}
        > 
            {isDarkMode ? (
                <Moon className="h-6 w-6 text-blue-900" />
                
            ) : (
                <Sun className="h-6 w-6 text-yellow-300" />
            )}
        </button>
    );
};