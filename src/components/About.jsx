import { useTranslation } from 'react-i18next';
import { useState, useEffect, useRef } from 'react';

function AnimatedCounter({ target, suffix = '' }) {
    const [count, setCount] = useState(0);
    const ref = useRef(null);
    const hasAnimated = useRef(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting && !hasAnimated.current) {
                    hasAnimated.current = true;
                    const num = parseInt(target.replace(/\D/g, ''));
                    const duration = 2000;
                    const steps = 60;
                    const increment = num / steps;
                    let current = 0;
                    const timer = setInterval(() => {
                        current += increment;
                        if (current >= num) {
                            setCount(num);
                            clearInterval(timer);
                        } else {
                            setCount(Math.floor(current));
                        }
                    }, duration / steps);
                }
            },
            { threshold: 0.5 }
        );

        if (ref.current) observer.observe(ref.current);
        return () => observer.disconnect();
    }, [target]);

    const postfix = target.includes('+') ? '+' : '';
    const hasK = target.includes('K');

    return (
        <span ref={ref}>
            {hasK ? `${Math.floor(count / 1000)}K` : count}
            {postfix}
            {suffix}
        </span>
    );
}

export default function About() {
    const { t, i18n } = useTranslation();
    const isRTL = i18n.language === 'ar';

    const stats = [
        { value: '48+', label: t('about.yearsExperience'), icon: '🏆' },
        { value: '50+', label: t('about.premiumBrands'), icon: '🌟' },
        { value: '10000+', label: t('about.happyCustomers'), icon: '😊' },
        { value: '5000+', label: t('about.spareParts'), icon: '🔧' },
    ];

    return (
        <section id="about" className="py-20 md:py-28 bg-gray-50 dark:bg-navy-light/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 reveal">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy dark:text-white mb-4">
                        {t('about.title')}
                    </h2>
                </div>

                {/* Content - Split layout */}
                <div className={`flex flex-col ${isRTL ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center mb-20`}>
                    {/* Image side */}
                    <div className="w-full lg:w-1/2 reveal">
                        <div className="relative">
                            <div className="rounded-2xl overflow-hidden shadow-2xl shadow-gold/10">
                                <img
                                    src="https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop"
                                    alt="RC Hobby Workshop"
                                    className="w-full h-auto object-cover aspect-[4/3]"
                                    loading="lazy"
                                />
                            </div>
                            {/* Decorative elements */}
                            <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gold/20 rounded-2xl -z-10" />
                            <div className="absolute -top-4 -left-4 w-16 h-16 bg-gold/10 rounded-xl -z-10" />
                        </div>
                    </div>

                    {/* Text side */}
                    <div className="w-full lg:w-1/2 reveal">
                        <div className="space-y-5">
                            <p className="text-gray-600 dark:text-gray-300 text-lg leading-relaxed">
                                {t('about.p1')}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {t('about.p2')}
                            </p>
                            <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
                                {t('about.p3')}
                            </p>
                        </div>
                    </div>
                </div>

                {/* Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="reveal text-center p-6 rounded-2xl bg-white dark:bg-navy-light border border-gray-100 dark:border-navy-lighter shadow-lg shadow-black/5 hover:shadow-gold/10 hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="text-3xl mb-3">{stat.icon}</div>
                            <div className="text-3xl sm:text-4xl font-black gradient-text mb-2">
                                <AnimatedCounter target={stat.value} />
                            </div>
                            <div className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                                {stat.label}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
