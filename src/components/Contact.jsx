import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { FiMapPin, FiPhone, FiMail, FiSend, FiCheck } from 'react-icons/fi';
import { FaWhatsapp } from 'react-icons/fa';

export default function Contact() {
    const { t } = useTranslation();
    const [formState, setFormState] = useState({ name: '', email: '', message: '' });
    const [submitted, setSubmitted] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmitted(true);
        setTimeout(() => setSubmitted(false), 3000);
        setFormState({ name: '', email: '', message: '' });
    };

    const contactInfo = [
        {
            icon: <FiMapPin className="w-5 h-5" />,
            label: t('contact.address'),
            value: t('contact.addressValue'),
            href: 'https://maps.google.com/?q=Al+Rai+Kuwait',
        },
        {
            icon: <FiPhone className="w-5 h-5" />,
            label: t('contact.phone'),
            value: t('contact.phoneValue'),
            href: 'tel:+96522223333',
        },
        {
            icon: <FaWhatsapp className="w-5 h-5" />,
            label: t('contact.whatsapp'),
            value: t('contact.whatsappValue'),
            href: 'https://wa.me/96599998888',
        },
        {
            icon: <FiMail className="w-5 h-5" />,
            label: t('contact.email'),
            value: t('contact.emailValue'),
            href: 'mailto:info@alhamerhobby.com',
        },
    ];

    return (
        <section id="contact" className="py-20 md:py-28 bg-gray-50 dark:bg-navy-light/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 reveal">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy dark:text-white mb-4">
                        {t('contact.title')}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        {t('contact.subtitle')}
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Info + Map */}
                    <div className="reveal space-y-6">
                        {/* Info Cards */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-start gap-4 p-5 rounded-xl bg-white dark:bg-navy-light border border-gray-100 dark:border-navy-lighter hover:border-gold/30 hover:shadow-lg hover:shadow-gold/5 transition-all duration-300"
                                >
                                    <div className="p-3 rounded-xl bg-gold/10 text-gold group-hover:bg-gold group-hover:text-white transition-all duration-300">
                                        {info.icon}
                                    </div>
                                    <div>
                                        <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                                            {info.label}
                                        </p>
                                        <p className="text-sm font-medium text-navy dark:text-white">
                                            {info.value}
                                        </p>
                                    </div>
                                </a>
                            ))}
                        </div>

                        {/* Map */}
                        <div className="rounded-2xl overflow-hidden border border-gray-100 dark:border-navy-lighter shadow-lg h-64">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27847.98584952381!2d47.95!3d29.34!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fcf9c59c1fffff1%3A0x4204f224bfa5e9b4!2sAl%20Rai%2C%20Kuwait!5e0!3m2!1sen!2skw!4v1700000000000"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Al-Hamer Hobby Location"
                            />
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="reveal">
                        <form
                            onSubmit={handleSubmit}
                            className="p-8 rounded-2xl bg-white dark:bg-navy-light border border-gray-100 dark:border-navy-lighter shadow-xl"
                        >
                            <div className="space-y-5">
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        {t('contact.formName')}
                                    </label>
                                    <input
                                        type="text"
                                        value={formState.name}
                                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-navy-lighter bg-gray-50 dark:bg-navy/50 text-navy dark:text-white focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all duration-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        {t('contact.formEmail')}
                                    </label>
                                    <input
                                        type="email"
                                        value={formState.email}
                                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-navy-lighter bg-gray-50 dark:bg-navy/50 text-navy dark:text-white focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all duration-300"
                                        required
                                    />
                                </div>
                                <div>
                                    <label className="block text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                                        {t('contact.formMessage')}
                                    </label>
                                    <textarea
                                        rows="5"
                                        value={formState.message}
                                        onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                                        className="w-full px-4 py-3 rounded-xl border border-gray-200 dark:border-navy-lighter bg-gray-50 dark:bg-navy/50 text-navy dark:text-white focus:ring-2 focus:ring-gold/50 focus:border-gold outline-none transition-all duration-300 resize-none"
                                        required
                                    />
                                </div>
                                <button
                                    type="submit"
                                    className="ripple w-full flex items-center justify-center gap-2 px-6 py-4 bg-gradient-to-r from-gold to-gold-light text-navy font-bold rounded-xl shadow-lg shadow-gold/25 hover:shadow-gold/40 hover:scale-[1.02] transition-all duration-300"
                                >
                                    {submitted ? (
                                        <>
                                            <FiCheck className="w-5 h-5" />
                                            {t('contact.formSuccess')}
                                        </>
                                    ) : (
                                        <>
                                            <FiSend className="w-5 h-5" />
                                            {t('contact.formSend')}
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}
