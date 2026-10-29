import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronsUp } from 'lucide-react';

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const isBookingPage = pathname === '/booking';
  const fabBottom = isBookingPage ? '5.25rem' : '1.5rem';

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);

  // Handle scroll visibility & progress calculation
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;

      if (scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      if (totalHeight > 0) {
        const progress = Math.min(100, Math.max(0, (scrollY / totalHeight) * 100));
        setScrollProgress(progress);
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // initial check

    return () => window.removeEventListener('scroll', handleScroll);
  }, [pathname]);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const isDarkChevron = scrollProgress < 50;

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5, y: 15 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.5, y: 15 }}
          transition={{ duration: 0.25, ease: 'easeOut' }}
          onClick={scrollToTop}
          aria-label="Scroll to top"
          className="fixed z-[9990] rounded-full shadow-[0_8px_24px_rgba(0,0,0,0.18)] hover:shadow-[0_12px_28px_rgba(0,0,0,0.28)] border border-stone-300/80 cursor-pointer transition-transform duration-300 hover:scale-110 flex items-center justify-center overflow-hidden"
          style={{
            bottom: fabBottom,
            right: '1.5rem',
            width: '52px',
            height: '52px',
            background: `linear-gradient(to top, #18181b ${scrollProgress}%, #ffffff ${scrollProgress}%)`,
          }}
        >
          <ChevronsUp
            className={`w-5 h-5 stroke-[2.5] transition-colors duration-200 ${
              isDarkChevron ? 'text-stone-900' : 'text-white'
            }`}
          />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
