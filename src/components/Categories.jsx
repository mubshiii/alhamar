import { useTranslation } from 'react-i18next';
import { FiArrowUpRight } from 'react-icons/fi';

const categoryData = [
    {
        key: 'planes',
        image: 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        gradient: 'from-blue-600/70 to-cyan-500/70',
        border: 'hover:border-blue-400/50',
    },
    {
        key: 'cars',
        image: 'https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        gradient: 'from-red-600/70 to-orange-500/70',
        border: 'hover:border-red-400/50',
    },
    {
        key: 'helicopters',
        image: 'https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        gradient: 'from-green-600/70 to-emerald-500/70',
        border: 'hover:border-green-400/50',
    },
    {
        key: 'parts',
        image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop',
        gradient: 'from-gold/70 to-yellow-500/70',
        border: 'hover:border-gold/50',
    },
];

export default function Categories() {
    const { t } = useTranslation();

    return (
        <section id="categories" className="py-20 md:py-28 bg-gray-50 dark:bg-navy-light/50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 reveal">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy dark:text-white mb-4">
                        {t('categories.title')}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        {t('categories.subtitle')}
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {categoryData.map((cat, index) => (
                        <div
                            key={cat.key}
                            className={`reveal group relative rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:shadow-2xl hover:shadow-gold/10 hover:-translate-y-2 ${cat.border} border border-gray-200 dark:border-navy-lighter`}
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Image */}
                            <div className="relative h-72 overflow-hidden">
                                <img
                                    src={cat.image}
                                    alt={t(`categories.${cat.key}`)}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                {/* Gradient overlay */}
                                <div className={`absolute inset-0 bg-gradient-to-t ${cat.gradient} opacity-60 group-hover:opacity-80 transition-opacity duration-500`} />

                                {/* Content overlay */}
                                <div className="absolute inset-0 flex flex-col justify-end p-6">
                                    <h3 className="text-xl font-bold text-white mb-2 drop-shadow-lg">
                                        {t(`categories.${cat.key}`)}
                                    </h3>
                                    <p className="text-sm text-white/80 leading-relaxed drop-shadow-md">
                                        {t(`categories.${cat.key}Desc`)}
                                    </p>

                                    {/* Arrow */}
                                    <div className="flex items-center gap-2 text-white font-semibold text-sm mt-3 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:translate-x-1">
                                        <span>{t('hero.explore')}</span>
                                        <FiArrowUpRight className="w-4 h-4" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
