import { useTranslation } from 'react-i18next';
import { FiArrowRight } from 'react-icons/fi';

export default function Hero() {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    return (
        <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* HD Background Image */}
            <div className="absolute inset-0">
                <img
                    src="/hero.png"
                    alt="Al-Hamar Hobby Shop"
                    className="w-full h-full object-cover"
                />
                {/* Dark overlay for text readability */}
                <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/80 to-navy/90" />
                {/* Accent glow effects */}
                <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-gold/8 rounded-full blur-3xl animate-float" />
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-gold/5 rounded-full blur-3xl animate-float" style={{ animationDelay: '1.5s' }} />
            </div>

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 text-center pt-20">
                {/* Badge */}
                <div className="animate-fade-in-up inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/15 border border-gold/30 mb-10">
                    <div className="w-2 h-2 rounded-full bg-gold animate-pulse" />
                    <span className="text-gold text-sm font-semibold tracking-wide">
                        {isRTL ? 'تأسست عام ١٩٧٦' : 'Established Since 1976'}
                    </span>
                </div>

                {/* Headline */}
                <h1
                    className="animate-fade-in-up text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white leading-[1.1] mb-8 tracking-tight"
                    style={{ animationDelay: '0.2s' }}
                >
                    {isRTL ? (
                        <>
                            <span className="gradient-text">الوجهة الأولى</span>{' '}
                            لهواة التحكم عن بعد
                            <br />
                            في الكويت
                        </>
                    ) : (
                        <>
                            Kuwait&apos;s{' '}
                            <span className="gradient-text">Premier</span>
                            <br />
                            RC Hobby Destination
                        </>
                    )}
                </h1>

                {/* Subtitle */}
                <p
                    className="animate-fade-in-up text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl mx-auto mb-12 leading-relaxed"
                    style={{ animationDelay: '0.4s' }}
                >
                    {t('hero.subtitle')}
                </p>

                {/* CTA Buttons */}
                <div
                    className="animate-fade-in-up flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                    style={{ animationDelay: '0.6s' }}
                >
                    <a
                        href="#categories"
                        className="ripple group relative px-8 py-4 bg-gradient-to-r from-gold to-gold-light text-navy font-bold rounded-xl shadow-lg shadow-gold/25 hover:shadow-gold/40 hover:scale-105 transition-all duration-300 flex items-center gap-2 text-base"
                    >
                        {t('hero.explore')}
                        <FiArrowRight className={`w-5 h-5 transition-transform duration-300 group-hover:translate-x-1 ${isRTL ? 'rotate-180 group-hover:-translate-x-1' : ''}`} />
                    </a>
                    <a
                        href="#contact"
                        className="ripple px-8 py-4 border-2 border-white/25 text-white font-bold rounded-xl hover:bg-white/10 hover:border-white/40 hover:scale-105 transition-all duration-300 text-base"
                    >
                        {t('hero.contactUs')}
                    </a>
                </div>
            </div>

            {/* Wave divider */}
            <div className="absolute bottom-0 left-0 right-0">
                <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
                    <path d="M0 60L48 52C96 44 192 28 288 24C384 20 480 28 576 40C672 52 768 68 864 72C960 76 1056 68 1152 56C1248 44 1344 28 1392 20L1440 12V120H1392C1344 120 1248 120 1152 120C1056 120 960 120 864 120C768 120 672 120 576 120C480 120 384 120 288 120C192 120 96 120 48 120H0V60Z" fill="#f9fafb" />
                </svg>
            </div>
        </section>
    );
}
