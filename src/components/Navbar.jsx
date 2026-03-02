import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { FiMenu, FiX, FiChevronDown } from 'react-icons/fi';

export default function Navbar() {
    const { t, i18n } = useTranslation();
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const isRTL = i18n.language === 'ar';

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleLang = () => {
        i18n.changeLanguage(isRTL ? 'en' : 'ar');
    };

    const navLinks = [
        { label: t('nav.home'), href: '#home' },
        { label: t('nav.about'), href: '#about' },
        { label: t('nav.gallery'), href: '#gallery' },
        { label: t('nav.contact'), href: '#contact' },
    ];

    const categoryLinks = [
        { label: t('nav.rcPlanes'), href: '#categories' },
        { label: t('nav.rcCars'), href: '#categories' },
        { label: t('nav.rcHelicopters'), href: '#categories' },
        { label: t('nav.partsAccessories'), href: '#categories' },
    ];

    // Text colors: white when transparent over hero, normal when scrolled with glass bg
    const logoTextClass = scrolled
        ? 'text-navy dark:text-white'
        : 'text-white';
    const linkTextClass = scrolled
        ? 'text-gray-700 dark:text-gray-200 hover:text-gold dark:hover:text-gold'
        : 'text-white/90 hover:text-gold';
    const langBtnClass = scrolled
        ? 'text-navy dark:text-white border-gold/30 hover:border-gold'
        : 'text-white border-white/30 hover:border-gold';
    const menuBtnClass = scrolled
        ? 'text-navy dark:text-white hover:bg-gray-100 dark:hover:bg-navy-light'
        : 'text-white hover:bg-white/10';

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
                ? 'glass shadow-lg shadow-black/5 dark:shadow-black/20'
                : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 md:h-20">
                    {/* Logo */}
                    <a href="#home" className="flex items-center gap-2 group">
                        <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                            <img src="/logo.png" alt="Al-Hamer Logo" className="w-full h-full object-cover" />
                        </div>
                        <div>
                            <span className={`text-lg font-bold transition-colors duration-300 ${logoTextClass}`}>Al-Hamer</span>
                            <span className="text-lg font-light text-gold ms-1">Hobby</span>
                        </div>
                    </a>

                    {/* Desktop Nav */}
                    <div className="hidden lg:flex items-center gap-1">
                        {navLinks.map((link) => (
                            <a
                                key={link.href}
                                href={link.href}
                                className={`px-4 py-2 text-sm font-medium hover-underline transition-colors duration-300 ${linkTextClass}`}
                            >
                                {link.label}
                            </a>
                        ))}

                        {/* Categories Dropdown */}
                        <div className="relative" onMouseEnter={() => setDropdownOpen(true)} onMouseLeave={() => setDropdownOpen(false)}>
                            <button className={`flex items-center gap-1 px-4 py-2 text-sm font-medium transition-colors duration-300 ${linkTextClass}`}>
                                {t('nav.categories')}
                                <FiChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180' : ''}`} />
                            </button>
                            <div
                                className={`absolute top-full ${isRTL ? 'right-0' : 'left-0'} mt-1 w-56 rounded-xl bg-white dark:bg-navy-light shadow-xl shadow-black/10 dark:shadow-black/30 border border-gray-100 dark:border-navy-lighter overflow-hidden transition-all duration-300 origin-top ${dropdownOpen ? 'opacity-100 scale-y-100' : 'opacity-0 scale-y-0 pointer-events-none'
                                    }`}
                            >
                                {categoryLinks.map((cat, i) => (
                                    <a
                                        key={i}
                                        href={cat.href}
                                        className="block px-5 py-3 text-sm text-gray-700 dark:text-gray-200 hover:bg-gold/10 hover:text-gold transition-colors duration-200"
                                    >
                                        {cat.label}
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right Actions */}
                    <div className="flex items-center gap-2 md:gap-3">
                        {/* Language Switch */}
                        <button
                            onClick={toggleLang}
                            className={`px-3 py-1.5 text-xs font-semibold rounded-full border-2 hover:bg-gold/10 transition-all duration-300 ${langBtnClass}`}
                        >
                            {isRTL ? 'EN' : 'العربية'}
                        </button>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className={`lg:hidden p-2 rounded-lg transition-colors ${menuBtnClass}`}
                        >
                            {isOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            <div
                className={`lg:hidden transition-all duration-500 overflow-hidden ${isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="px-4 pb-6 pt-2 bg-white/95 dark:bg-navy/95 backdrop-blur-lg border-t border-gray-100 dark:border-navy-light">
                    {navLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            onClick={() => setIsOpen(false)}
                            className="block py-3 px-4 text-gray-700 dark:text-gray-200 hover:text-gold dark:hover:text-gold font-medium transition-colors"
                        >
                            {link.label}
                        </a>
                    ))}
                    <div className="border-t border-gray-100 dark:border-navy-light mt-2 pt-2">
                        <p className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            {t('nav.categories')}
                        </p>
                        {categoryLinks.map((cat, i) => (
                            <a
                                key={i}
                                href={cat.href}
                                onClick={() => setIsOpen(false)}
                                className="block py-2 px-6 text-sm text-gray-600 dark:text-gray-300 hover:text-gold transition-colors"
                            >
                                {cat.label}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
}
