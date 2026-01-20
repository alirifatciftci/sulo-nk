import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import SEO from '../components/SEO';
import LazyImage from '../components/LazyImage';
import { portfolioData, PortfolioItem } from '../data/portfolioData';

const Work = () => {
  const [selectedImage, setSelectedImage] = useState<PortfolioItem | null>(null);

  const handleNext = () => {
    if (!selectedImage) return;
    const currentIndex = portfolioData.findIndex(item => item.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % portfolioData.length;
    setSelectedImage(portfolioData[nextIndex]);
  };

  const handlePrev = () => {
    if (!selectedImage) return;
    const currentIndex = portfolioData.findIndex(item => item.id === selectedImage.id);
    const prevIndex = (currentIndex - 1 + portfolioData.length) % portfolioData.length;
    setSelectedImage(portfolioData[prevIndex]);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedImage) return;
      if (e.key === 'ArrowRight') handleNext();
      if (e.key === 'ArrowLeft') handlePrev();
      if (e.key === 'Escape') setSelectedImage(null);
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  return (
    <>
      <SEO
        title="Work | Süleyman Değirmenci | Tattoo Portfolio Istanbul"
        description="Explore the portfolio of Süleyman Değirmenci, featuring realism, blackwork, and fine line tattoos from Istanbul."
        keywords="tattoo portfolio, realism tattoo istanbul, blackwork tattoo, fine line tattoo, tattoo gallery"
      />

      <div className="min-h-screen bg-black pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-screen-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h1 className="text-white font-light text-4xl md:text-6xl tracking-[0.3em] mb-6">
              WORK
            </h1>
            <p className="text-gray-400 font-light text-sm tracking-[0.2em]">
              SELECTED PIECES
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6">
            {portfolioData.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                className="group"
              >
                <div
                  className="relative aspect-[3/4] overflow-hidden cursor-pointer"
                  onClick={() => setSelectedImage(item)}
                >
                  <LazyImage
                    src={item.imageUrl}
                    alt={item.title}
                    className="transition-transform duration-700 group-hover:scale-105 grayscale"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-30 transition-all duration-500 flex items-center justify-center">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      whileHover={{ opacity: 1, y: 0 }}
                      className="opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    >
                      <p className="text-white font-light text-xl tracking-[0.2em]">
                        {item.title}
                      </p>
                      <p className="text-gray-400 font-light text-sm tracking-[0.2em] mt-2 text-center">
                        {item.category}
                      </p>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {selectedImage && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black bg-opacity-95 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              handlePrev();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-white p-2 transition-opacity duration-300 hover:opacity-60 z-10"
            aria-label="Previous"
          >
            <ChevronLeft size={40} />
          </button>

          <button
            onClick={(e) => {
              e.stopPropagation();
              handleNext();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 text-white p-2 transition-opacity duration-300 hover:opacity-60 z-10"
            aria-label="Next"
          >
            <ChevronRight size={40} />
          </button>

          <motion.div
            key={selectedImage.id}
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="relative max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-12 right-0 text-white font-light text-sm tracking-[0.2em] transition-opacity duration-300 hover:opacity-60"
            >
              CLOSE
            </button>
            <img
              src={selectedImage.imageUrl}
              alt={selectedImage.title}
              className="w-full max-h-[80vh] object-contain grayscale mx-auto"
            />
            <div className="text-center mt-6">
              <p className="text-white font-light text-2xl tracking-[0.2em]">
                {selectedImage.title}
              </p>
              <p className="text-gray-400 font-light text-sm tracking-[0.2em] mt-2">
                {selectedImage.category}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
};

export default Work;
