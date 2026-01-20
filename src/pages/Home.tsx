import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import SEO from '../components/SEO';
import { portfolioData, artistInfo } from '../data/portfolioData';
import bgImage from '../assets/sulo99.png';

const Home = () => {
  return (
    <>
      <SEO />
      <div className="relative min-h-screen flex items-end pb-32 justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat grayscale"
          style={{
            backgroundImage: `url(${bgImage})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-30" />
        </div>

        <div className="relative z-10 text-center px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.3, ease: 'easeOut' }}
          >
            <h2 className="text-white font-light text-5xl md:text-7xl lg:text-8xl tracking-[0.3em] mb-6">
              {artistInfo.name.split(' ')[0]}
            </h2>
            <h2 className="text-white font-light text-5xl md:text-7xl lg:text-8xl tracking-[0.3em] mb-12">
              {artistInfo.name.split(' ')[1]}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            className="flex flex-col items-center space-y-8"
          >
            <p className="text-gray-300 font-light text-sm md:text-base tracking-[0.3em]">
              TATTOO ARTIST
            </p>
            <p className="text-gray-400 font-light text-xs md:text-sm tracking-[0.4em]">
              {artistInfo.location.toUpperCase()}
            </p>

            <Link
              to="/work"
              className="mt-8 px-8 py-3 border border-white text-white font-light text-sm tracking-[0.2em] transition-all duration-300 hover:bg-white hover:text-black"
            >
              VIEW WORK
            </Link>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: 'easeInOut' }}
          >
            <ChevronDown className="text-white opacity-60" size={32} />
          </motion.div>
        </motion.div>
      </div>

      <section className="bg-black py-24 md:py-32">
        <div className="max-w-7xl mx-auto">
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white font-light text-3xl md:text-4xl tracking-[0.2em] mb-12 text-center px-6"
          >
            RECENT WORK
          </motion.h3>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="px-6 md:px-12"
          >
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 max-w-6xl mx-auto">
              {portfolioData.slice(0, 4).map((item) => (
                <Link
                  key={item.id}
                  to="/work"
                  className="group cursor-pointer"
                >
                  <div className="relative aspect-[3/4] overflow-hidden rounded-sm">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 grayscale"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300" />
                  </div>
                </Link>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 text-center"
          >
            <Link
              to="/contact"
              className="inline-block px-12 py-4 bg-white text-black font-light text-sm tracking-[0.2em] transition-all duration-300 hover:bg-gray-200"
            >
              BOOK APPOINTMENT
            </Link>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Home;
