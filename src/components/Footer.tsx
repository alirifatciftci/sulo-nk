import { Instagram, Mail } from 'lucide-react';
import { artistInfo } from '../data/portfolioData';

const Footer = () => {
  return (
    <footer className="bg-black border-t border-gray-900 py-12 px-6 md:px-12">
      <div className="max-w-screen-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-white font-light text-sm tracking-[0.2em] mb-4">LOCATION</h3>
            <p className="text-gray-400 font-light text-sm">{artistInfo.location}</p>
          </div>

          <div>
            <h3 className="text-white font-light text-sm tracking-[0.2em] mb-4">CONTACT</h3>
            <a
              href={`mailto:${artistInfo.email}`}
              className="text-gray-400 font-light text-sm transition-opacity duration-300 hover:opacity-60 block mb-2"
            >
              {artistInfo.email}
            </a>
          </div>

          <div>
            <h3 className="text-white font-light text-sm tracking-[0.2em] mb-4">FOLLOW</h3>
            <div className="flex space-x-4">
              <a
                href={`https://instagram.com/${artistInfo.instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition-opacity duration-300 hover:opacity-60"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href={`mailto:${artistInfo.email}`}
                className="text-gray-400 transition-opacity duration-300 hover:opacity-60"
                aria-label="Email"
              >
                <Mail size={20} />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-900 pt-8">
          <p className="text-gray-600 font-light text-xs text-center tracking-[0.2em]">
            © {new Date().getFullYear()} {artistInfo.name}. ALL RIGHTS RESERVED.
          </p>
          <p className="text-gray-400 font-light text-xs text-center mt-2">
            designed by{' '}
            <a
              href="https://www.linkedin.com/in/alirifatciftci"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 transition-opacity duration-300 hover:opacity-60"
            >
              alirifatçiftçi
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
