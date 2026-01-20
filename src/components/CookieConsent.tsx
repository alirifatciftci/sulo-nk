import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const CookieConsent = () => {
  const [showConsent, setShowConsent] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) {
      setShowConsent(true);
    }
  }, []);

  const acceptCookies = () => {
    localStorage.setItem('cookieConsent', 'accepted');
    setShowConsent(false);
  };

  const declineCookies = () => {
    localStorage.setItem('cookieConsent', 'declined');
    setShowConsent(false);
  };

  return (
    <AnimatePresence>
      {showConsent && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ duration: 0.5 }}
          className="fixed bottom-0 left-0 right-0 z-50 bg-black border-t border-gray-800 p-6"
        >
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex-1">
              <p className="text-white font-light text-sm tracking-[0.1em] mb-2">
                COOKIE NOTICE
              </p>
              <p className="text-gray-400 font-light text-xs leading-relaxed">
                We use cookies to enhance your browsing experience and analyze our traffic. 
                By clicking "Accept", you consent to our use of cookies.
              </p>
            </div>
            
            <div className="flex gap-4">
              <button
                onClick={declineCookies}
                className="px-6 py-2 border border-gray-600 text-gray-400 font-light text-xs tracking-[0.2em] transition-all duration-300 hover:border-white hover:text-white"
              >
                DECLINE
              </button>
              <button
                onClick={acceptCookies}
                className="px-6 py-2 bg-white text-black font-light text-xs tracking-[0.2em] transition-all duration-300 hover:bg-gray-200"
              >
                ACCEPT
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default CookieConsent;
