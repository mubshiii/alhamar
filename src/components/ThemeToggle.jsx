import { useState, useEffect } from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';

export default function ThemeToggle() {
    const [dark, setDark] = useState(() => document.documentElement.classList.contains('dark'));

    useEffect(() => {
        if (dark) {
            document.documentElement.classList.add('dark');
            localStorage.setItem('theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('theme', 'light');
        }
    }, [dark]);

    return (
        <button
            onClick={() => setDark(!dark)}
            className="relative p-2 rounded-full bg-gray-100 dark:bg-navy-light hover:bg-gold/20 dark:hover:bg-gold/20 transition-all duration-300 group"
            aria-label="Toggle theme"
        >
            <div className="relative w-5 h-5">
                <FiSun
                    className={`absolute inset-0 w-5 h-5 text-gold transition-all duration-300 ${dark ? 'opacity-0 rotate-90 scale-0' : 'opacity-100 rotate-0 scale-100'
                        }`}
                />
                <FiMoon
                    className={`absolute inset-0 w-5 h-5 text-gold transition-all duration-300 ${dark ? 'opacity-100 rotate-0 scale-100' : 'opacity-0 -rotate-90 scale-0'
                        }`}
                />
            </div>
        </button>
    );
}
