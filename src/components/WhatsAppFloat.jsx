import { FaWhatsapp } from 'react-icons/fa';

export default function WhatsAppFloat() {
    return (
        <a
            href="https://wa.me/96599998888"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-40 p-4 rounded-full bg-green-500 text-white shadow-2xl shadow-green-500/30 hover:bg-green-600 hover:scale-110 transition-all duration-300 animate-pulse-gold"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp className="w-7 h-7" />
        </a>
    );
}
