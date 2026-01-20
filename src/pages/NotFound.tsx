import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import SEO from '../components/SEO';

const NotFound = () => {
  return (
    <>
      <SEO
        title="404 - Page Not Found | Süleyman Değirmenci"
        description="The page you're looking for doesn't exist."
      />
      
      <div className="min-h-screen bg-black flex items-center justify-center px-6">
        <div className="text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-white font-light text-9xl tracking-[0.2em] mb-8">
              404
            </h1>
            <h2 className="text-white font-light text-3xl tracking-[0.2em] mb-4">
              PAGE NOT FOUND
            </h2>
            <p className="text-gray-400 font-light text-sm tracking-[0.2em] mb-12">
              THE PAGE YOU'RE LOOKING FOR DOESN'T EXIST
            </p>
            
            <Link
              to="/"
              className="inline-block px-12 py-4 bg-white text-black font-light text-sm tracking-[0.2em] transition-all duration-300 hover:bg-gray-200"
            >
              GO HOME
            </Link>
          </motion.div>
        </div>
      </div>
    </>
  );
};

export default NotFound;
