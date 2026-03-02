import { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Categories from './components/Categories';
import Featured from './components/Featured';
import About from './components/About';
import Gallery from './components/Gallery';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import WhatsAppFloat from './components/WhatsAppFloat';

function App() {
  useEffect(() => {
    // Intersection Observer for reveal animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      { threshold: 0.05, rootMargin: '0px 0px -30px 0px' }
    );

    const observeAll = () => {
      document.querySelectorAll('.reveal').forEach((el) => {
        if (!el.classList.contains('visible')) {
          observer.observe(el);
        }
      });
    };

    // Initial observation after a tick to ensure DOM is ready
    const timer = setTimeout(observeAll, 100);

    // Watch for new elements being added
    const mutation = new MutationObserver(observeAll);
    mutation.observe(document.body, { childList: true, subtree: true });

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutation.disconnect();
    };
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-navy text-gray-900 dark:text-white transition-colors duration-300">
      <Navbar />
      <Hero />
      <Categories />
      <Featured />
      <About />
      <Gallery />
      <Contact />
      <Footer />
      <ScrollToTop />
      <WhatsAppFloat />
    </div>
  );
}

export default App;
