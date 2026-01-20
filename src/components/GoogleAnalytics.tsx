import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag?: (command: string, targetId: string, config?: Record<string, unknown>) => void;
    dataLayer?: unknown[];
  }
}

// TODO: Google Analytics'i aktif etmek için:
// 1. https://analytics.google.com adresine git
// 2. Hesap oluştur ve "Measurement ID" al (G-XXXXXXXXXX formatında)
// 3. Aşağıdaki satırı kendi ID'nle değiştir
const GA_MEASUREMENT_ID = ''; // Boş bırakıldı - şimdilik devre dışı

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Google Analytics devre dışı - ID olmadan çalışmaz
    if (!GA_MEASUREMENT_ID) {
      return;
    }

    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}');
    `;
    document.head.appendChild(script2);

    return () => {
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  useEffect(() => {
    if (!GA_MEASUREMENT_ID) return;
    
    // Track page views on route change
    if (typeof window !== 'undefined' && window.gtag) {
      window.gtag('config', GA_MEASUREMENT_ID, {
        page_path: location.pathname + location.search,
      });
    }
  }, [location]);

  return null;
};

export default GoogleAnalytics;
