import { motion } from 'framer-motion';
import SEO from '../components/SEO';
import { artistInfo } from '../data/portfolioData';

const About = () => {
  return (
    <>
      <SEO
        title="About | Süleyman Değirmenci | Istanbul Tattoo Artist"
        description="Learn about Süleyman Değirmenci, a professional tattoo artist based in Istanbul specializing in realism, blackwork, and fine line tattoos."
        keywords="about süleyman değirmenci, istanbul tattoo artist, professional tattoo artist, tattoo biography"
      />

      <div className="min-h-screen bg-black pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-20"
          >
            <h1 className="text-white font-light text-4xl md:text-6xl tracking-[0.3em] mb-6">
              ABOUT
            </h1>
            <p className="text-gray-400 font-light text-sm tracking-[0.2em]">
              ARTIST & CRAFTSMAN
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex items-center justify-center"
            >
              <div className="relative aspect-[3/4] w-full max-w-md">
                <img
                  src="/src/assets/about.jpeg"
                  alt="Süleyman Değirmenci"
                  className="w-full h-full object-cover grayscale"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="flex flex-col justify-center space-y-8"
            >
              <div>
                <h2 className="text-white font-light text-2xl tracking-[0.2em] mb-6">
                  {artistInfo.name}
                </h2>
                <p className="text-gray-400 font-light text-base leading-relaxed">
                  {artistInfo.bio}
                </p>
              </div>

              <div className="border-t border-gray-800 pt-8">
                <h3 className="text-white font-light text-lg tracking-[0.2em] mb-4">
                  LOCATION
                </h3>
                <p className="text-gray-400 font-light text-sm tracking-[0.1em]">
                  {artistInfo.location}
                </p>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <div className="border-t border-b border-gray-800 py-16">
              <p className="text-gray-300 font-light text-lg md:text-xl leading-relaxed italic">
                "{artistInfo.statement}"
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mt-20"
          >
            <a
              href="/contact"
              className="inline-block px-12 py-4 bg-white text-black font-light text-sm tracking-[0.2em] transition-all duration-300 hover:bg-gray-200"
            >
              GET IN TOUCH
            </a>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default About;
