import { createContext, useContext, useState, useEffect } from 'react';

const DarkModeContext = createContext();

export const useDarkMode = () => {
    const context = useContext(DarkModeContext);
    if (!context) {
        throw new Error('useDarkMode must be used within a DarkModeProvider');
    }
    return context;
};

function getInitialDarkMode() {
    // 1) Persisted preference
    try {
        const saved = localStorage.getItem('darkMode');
        if (saved !== null) return JSON.parse(saved);
    } catch {}
    // 2) OS preference fallback
    if (typeof window !== 'undefined' && window.matchMedia) {
        try {
            return window.matchMedia('(prefers-color-scheme: dark)').matches;
        } catch {}
    }
    return false;
}

export const DarkModeProvider = ({ children }) => {
    // Initialize from storage/OS to avoid a flip after mount
    const [isDarkMode, setIsDarkMode] = useState(getInitialDarkMode);

    // Apply dark mode class and save to localStorage
    useEffect(() => {
        const root = document.documentElement;
        if (isDarkMode) {
            root.classList.add('dark');
        } else {
            root.classList.remove('dark');
        }
        try {
            localStorage.setItem('darkMode', JSON.stringify(isDarkMode));
        } catch {}
    }, [isDarkMode]);

    const toggleDarkMode = () => setIsDarkMode((prev) => !prev);

    return (
        <DarkModeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </DarkModeContext.Provider>
    );
};
