import { ReactNode } from 'react';
import Header from './Header';
import Footer from './Footer';
import GoogleAnalytics from './GoogleAnalytics';
import CookieConsent from './CookieConsent';

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="min-h-screen bg-black flex flex-col">
      <GoogleAnalytics />
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <Footer />
      <CookieConsent />
    </div>
  );
};

export default Layout;
