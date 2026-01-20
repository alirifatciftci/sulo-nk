import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';
import { artistInfo } from '../data/portfolioData';
import aboutBgImage from '../assets/kirpilmis.png';

const About = () => {
  return (
    <>
      <SEO
        title="About | Süleyman Değirmenci | İstanbul Dövme Sanatçısı"
        description="Süleyman Değirmenci hakkında bilgi edinin. İstanbul Nişantaşı'nda profesyonel dövme sanatçısı. Realism, blackwork ve fine line dövme konusunda uzman."
        keywords="süleyman değirmenci, istanbul dövmeci, nişantaşı dövme, istanbul tattoo artist, professional tattoo artist, tattoo biography, istanbul dövme stüdyosu"
      />

      {/* Hero Section with Background */}
      <div className="relative min-h-screen flex items-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-no-repeat grayscale"
          style={{
            backgroundImage: `url(${aboutBgImage})`,
            backgroundPosition: '35% center',
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>

        <div className="relative z-10 w-full px-6 md:px-12 py-32">
          <div className="max-w-7xl mx-auto flex justify-end">
            <div className="w-full md:w-auto md:mr-8 lg:mr-16">
              {/* Content Box - Sağ tarafta */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1, delay: 0.3 }}
                className="bg-black bg-opacity-60 backdrop-blur-sm p-6 md:p-10 border border-gray-700 max-w-sm w-full ml-auto"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                >
                  <h1 className="text-white font-light text-3xl md:text-4xl tracking-[0.3em] mb-4">
                    ABOUT
                  </h1>
                  <h2 className="text-white font-light text-xl md:text-2xl tracking-[0.2em] mb-6">
                    {artistInfo.name}
                  </h2>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 1, delay: 0.8 }}
                  className="space-y-4"
                >
                  <p className="text-gray-300 font-light text-sm leading-relaxed">
                    {artistInfo.bio}
                  </p>
                  
                  <div className="pt-3 border-t border-gray-700">
                    <p className="text-gray-400 font-light text-xs tracking-[0.3em]">
                      {artistInfo.location}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-gray-700">
                    <p className="text-gray-300 font-light text-sm leading-relaxed italic">
                      "{artistInfo.statement}"
                    </p>
                  </div>

                  <div className="pt-6">
                    <Link
                      to="/contact"
                      className="inline-block px-8 py-2.5 bg-white text-black font-light text-xs tracking-[0.2em] transition-all duration-300 hover:bg-gray-200"
                    >
                      GET IN TOUCH
                    </Link>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
