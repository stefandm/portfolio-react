import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [notification, setNotification] = useState<string | null>(null);
  const notificationTimeout = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        const contactPosition = contactSection.getBoundingClientRect();
        if (contactPosition.top < window.innerHeight * 0.9) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const slideVariants = {
    hidden: { x: '100vw', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const slideRightVariants = {
    hidden: { x: '-100vw', opacity: 0 },
    visible: { x: 0, opacity: 1 },
  };

  const copyToClipboard = async (text: string) => {
    if (notificationTimeout.current) {
      clearTimeout(notificationTimeout.current);
    }

    try {
      await navigator.clipboard.writeText(text);
      setNotification(`"${text}" copied to clipboard!`);
    } catch {
      setNotification('Failed to copy!');
    }

    notificationTimeout.current = setTimeout(() => setNotification(null), 2000);
  };

  useEffect(() => {
    return () => {
      if (notificationTimeout.current) {
        clearTimeout(notificationTimeout.current);
      }
    };
  }, []);

  return (
    <div
      id="contact"
      className="flex flex-col items-center justify-center min-h-[90vh] bg-gradient-to-b from-gray-900 to-gray-200 overflow-x-hidden relative px-4"
    >
      <h1 className="text-6xl text-center md:text-7xl font-semibold mb-[20vh] text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
        Let's work together!
      </h1>
      <div className="flex flex-col items-center gap-16">
        <motion.div
          variants={slideVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
        <button
          type="button"
          className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-medium text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer focus:outline-none"
          onClick={() => copyToClipboard('demirel.stefan@yahoo.com')}
          aria-label="Copy email address to clipboard"
        >
          demirel.stefan@yahoo.com
        </button>
        </motion.div>

        <motion.div
          variants={slideRightVariants}
          initial="hidden"
          animate={isVisible ? 'visible' : 'hidden'}
          transition={{ duration: 1.5, ease: 'easeInOut' }}
        >
        <button
          type="button"
          className="text-2xl sm:text-4xl md:text-5xl xl:text-6xl font-medium text-white drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)] cursor-pointer focus:outline-none"
          onClick={() => copyToClipboard('+49 176 35569006')}
          aria-label="Copy phone number to clipboard"
        >
          +49 176 35569006
        </button>
        </motion.div>
      </div>

      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            key="notification"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5 }}
            role="status"
            aria-live="polite"
            className="fixed bottom-10 left-4 right-4 sm:left-auto sm:right-auto mx-auto bg-black text-white px-4 py-2 rounded shadow-lg z-50 max-w-xs sm:max-w-sm text-center break-words"
          >
            {notification}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Contact;
