import { useTranslation } from 'react-i18next';
import { FaWhatsapp } from 'react-icons/fa';

const modelImages = [
    'https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
    'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
    'https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
    'https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
    'https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
    'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500&h=350&fit=crop',
];

export default function Featured() {
    const { t } = useTranslation();
    const models = t('featured.models', { returnObjects: true });

    return (
        <section id="featured" className="py-20 md:py-28 bg-white dark:bg-navy">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 reveal">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy dark:text-white mb-4">
                        {t('featured.title')}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        {t('featured.subtitle')}
                    </p>
                </div>

                {/* Product Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {models.map((model, index) => (
                        <div
                            key={index}
                            className="reveal group rounded-2xl border border-gray-100 dark:border-navy-lighter bg-white dark:bg-navy-light overflow-hidden hover:shadow-2xl hover:shadow-gold/10 transition-all duration-500 hover:-translate-y-1"
                            style={{ animationDelay: `${index * 0.1}s` }}
                        >
                            {/* Image */}
                            <div className="relative h-52 overflow-hidden">
                                <img
                                    src={modelImages[index % modelImages.length]}
                                    alt={model.name}
                                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-lg font-bold text-navy dark:text-white mb-2 group-hover:text-gold transition-colors duration-300">
                                    {model.name}
                                </h3>
                                <p className="text-sm text-gray-500 dark:text-gray-400 mb-5 leading-relaxed">
                                    {model.desc}
                                </p>
                                <a
                                    href="https://wa.me/96599998888"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="ripple inline-flex items-center gap-2 px-5 py-2.5 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl text-sm shadow-lg shadow-green-500/20 hover:shadow-green-500/40 hover:scale-105 transition-all duration-300"
                                >
                                    <FaWhatsapp className="w-4 h-4" />
                                    {t('featured.enquire')}
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
