import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import { FiX } from 'react-icons/fi';

const galleryItems = [
    {
        image: 'https://images.pexels.com/photos/97353/pexels-photo-97353.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop',
        label: 'RC Car Racing',
        span: 'col-span-1 row-span-1 md:col-span-2 md:row-span-2',
    },
    {
        image: 'https://images.pexels.com/photos/46148/aircraft-jet-landing-cloud-46148.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
        label: 'RC Plane in Action',
        span: 'col-span-1 row-span-1',
    },
    {
        image: 'https://images.pexels.com/photos/1036857/pexels-photo-1036857.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
        label: 'The Workshop',
        span: 'col-span-1 row-span-1',
    },
    {
        image: 'https://images.pexels.com/photos/1087180/pexels-photo-1087180.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
        label: 'Helicopter Flight',
        span: 'col-span-1 row-span-1',
    },
    {
        image: 'https://images.pexels.com/photos/35967/mini-cooper-auto-model-vehicle.jpg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
        label: 'Model Collection',
        span: 'col-span-1 row-span-1 md:col-span-2',
    },
    {
        image: 'https://images.pexels.com/photos/163100/circuit-circuit-board-resistor-computer-163100.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
        label: 'Electronics & Parts',
        span: 'col-span-1 row-span-1',
    },
    {
        image: 'https://images.pexels.com/photos/912110/pexels-photo-912110.jpeg?auto=compress&cs=tinysrgb&w=500&h=400&fit=crop',
        label: 'Desert Adventure',
        span: 'col-span-1 row-span-1',
    },
    {
        image: 'https://images.pexels.com/photos/442587/pexels-photo-442587.jpeg?auto=compress&cs=tinysrgb&w=800&h=400&fit=crop',
        label: 'Sunset Flight',
        span: 'col-span-1 row-span-1 md:col-span-2',
    },
];

export default function Gallery() {
    const { t } = useTranslation();
    const [lightbox, setLightbox] = useState(null);

    return (
        <section id="gallery" className="py-20 md:py-28 bg-white dark:bg-navy">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Header */}
                <div className="text-center mb-16 reveal">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-navy dark:text-white mb-4">
                        {t('gallery.title')}
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-lg max-w-2xl mx-auto">
                        {t('gallery.subtitle')}
                    </p>
                </div>

                {/* Gallery Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[180px] gap-4">
                    {galleryItems.map((item, index) => (
                        <div
                            key={index}
                            className={`${item.span} reveal group relative rounded-2xl overflow-hidden cursor-pointer`}
                            onClick={() => setLightbox(index)}
                        >
                            <img
                                src={item.image}
                                alt={item.label}
                                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                                loading="lazy"
                            />
                            {/* Hover overlay */}
                            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                                <div className="p-4 w-full translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                                    <p className="text-white font-semibold text-sm drop-shadow-lg">{item.label}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Lightbox */}
            {lightbox !== null && (
                <div
                    className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 animate-fade-in"
                    onClick={() => setLightbox(null)}
                >
                    <button
                        className="absolute top-6 right-6 text-white hover:text-gold transition-colors z-10"
                        onClick={() => setLightbox(null)}
                    >
                        <FiX className="w-8 h-8" />
                    </button>
                    <div className="max-w-4xl w-full animate-scale-in" onClick={(e) => e.stopPropagation()}>
                        <img
                            src={galleryItems[lightbox].image}
                            alt={galleryItems[lightbox].label}
                            className="w-full h-auto max-h-[80vh] object-contain rounded-2xl"
                        />
                        <p className="text-white text-center text-lg font-bold mt-4">{galleryItems[lightbox].label}</p>
                    </div>
                </div>
            )}
        </section>
    );
}
