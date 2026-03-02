import { useTranslation } from 'react-i18next';
import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
    const { t } = useTranslation();
    const year = new Date().getFullYear();

    const quickLinks = [
        { label: t('nav.home'), href: '#home' },
        { label: t('nav.categories'), href: '#categories' },
        { label: t('nav.about'), href: '#about' },
        { label: t('nav.gallery'), href: '#gallery' },
        { label: t('nav.contact'), href: '#contact' },
    ];

    const socials = [
        { icon: <FaInstagram className="w-5 h-5" />, href: '#', label: 'Instagram' },
        { icon: <FaFacebookF className="w-5 h-5" />, href: '#', label: 'Facebook' },
        { icon: <FaTwitter className="w-5 h-5" />, href: '#', label: 'Twitter' },
        { icon: <FaYoutube className="w-5 h-5" />, href: '#', label: 'YouTube' },
        { icon: <FaWhatsapp className="w-5 h-5" />, href: 'https://wa.me/96599998888', label: 'WhatsApp' },
    ];

    return (
        <footer className="bg-navy dark:bg-navy text-white">
            {/* Top wave/gradient border */}
            <div className="h-1 bg-gradient-to-r from-gold via-gold-light to-gold" />

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                    {/* Brand */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <div className="w-14 h-14 rounded-full overflow-hidden flex-shrink-0">
                                <img src="/logo.png" alt="Al-Hamer Logo" className="w-full h-full object-cover" />
                            </div>
                            <div>
                                <span className="text-lg font-bold text-white">Al-Hamar</span>
                                <span className="text-lg font-light text-gold ms-1">Hobby</span>
                            </div>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
                            {t('footer.description')}
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="text-gold font-bold text-sm uppercase tracking-wider mb-5">
                            {t('footer.quickLinks')}
                        </h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.href}>
                                    <a
                                        href={link.href}
                                        className="text-gray-400 hover:text-gold transition-colors duration-300 text-sm hover-underline"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Social */}
                    <div>
                        <h4 className="text-gold font-bold text-sm uppercase tracking-wider mb-5">
                            {t('footer.followUs')}
                        </h4>
                        <div className="flex gap-3 flex-wrap">
                            {socials.map((social) => (
                                <a
                                    key={social.label}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label={social.label}
                                    className="p-3 rounded-xl bg-navy-light hover:bg-gold text-gray-400 hover:text-white transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-gold/20"
                                >
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Bottom */}
                <div className="mt-12 pt-8 border-t border-navy-lighter flex flex-col sm:flex-row items-center justify-between gap-4">
                    <p className="text-sm text-gray-500">
                        © {year} Al-Hamer Hobby. {t('footer.rights')}
                    </p>
                    <p className="text-sm text-gray-500">
                        {t('footer.madeWith')}
                    </p>
                </div>
            </div>
        </footer>
    );
}
