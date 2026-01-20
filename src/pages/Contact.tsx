import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Mail, Instagram, MessageCircle } from 'lucide-react';
import SEO from '../components/SEO';
import { artistInfo } from '../data/portfolioData';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    tattooIdea: '',
    placement: '',
    size: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    const whatsappMessage = `Hi! I'd like to book an appointment.\n\nName: ${formData.name}\nEmail: ${formData.email}\nTattoo Idea: ${formData.tattooIdea}\nPlacement: ${formData.placement}\nSize: ${formData.size}\nAdditional Info: ${formData.message}`;

    const whatsappUrl = `https://wa.me/${artistInfo.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(whatsappMessage)}`;

    window.open(whatsappUrl, '_blank');
    setIsSubmitted(true);

    setTimeout(() => {
      setFormData({
        name: '',
        email: '',
        tattooIdea: '',
        placement: '',
        size: '',
        message: ''
      });
      setIsSubmitted(false);
    }, 3000);
  };

  const handleWhatsAppDirect = () => {
    const message = 'Hi! I would like to book a tattoo appointment.';
    const whatsappUrl = `https://wa.me/${artistInfo.whatsapp.replace(/\+/g, '')}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <>
      <SEO
        title="Contact & Booking | Süleyman Değirmenci | Istanbul Tattoo"
        description="Book your tattoo appointment with Süleyman Değirmenci in Istanbul. Contact via WhatsApp or email for consultations."
        keywords="book tattoo istanbul, tattoo appointment istanbul, contact tattoo artist, süleyman değirmenci booking"
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
              CONTACT
            </h1>
            <p className="text-gray-400 font-light text-sm tracking-[0.2em]">
              LET'S CREATE TOGETHER
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h2 className="text-white font-light text-2xl tracking-[0.2em] mb-8">
                GET IN TOUCH
              </h2>

              <div className="space-y-6 mb-12">
                <div className="flex items-start space-x-4">
                  <MapPin className="text-gray-400 mt-1" size={20} />
                  <div>
                    <p className="text-white font-light text-sm tracking-[0.1em] mb-1">
                      LOCATION
                    </p>
                    <p className="text-gray-400 font-light text-sm">
                      {artistInfo.location}
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Mail className="text-gray-400 mt-1" size={20} />
                  <div>
                    <p className="text-white font-light text-sm tracking-[0.1em] mb-1">
                      EMAIL
                    </p>
                    <a
                      href={`mailto:${artistInfo.email}`}
                      className="text-gray-400 font-light text-sm transition-opacity duration-300 hover:opacity-60"
                    >
                      {artistInfo.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <Instagram className="text-gray-400 mt-1" size={20} />
                  <div>
                    <p className="text-white font-light text-sm tracking-[0.1em] mb-1">
                      INSTAGRAM
                    </p>
                    <a
                      href={`https://instagram.com/${artistInfo.instagram.replace('@', '')}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 font-light text-sm transition-opacity duration-300 hover:opacity-60"
                    >
                      {artistInfo.instagram}
                    </a>
                  </div>
                </div>
              </div>

              <button
                onClick={handleWhatsAppDirect}
                className="w-full flex items-center justify-center space-x-3 px-8 py-4 bg-green-600 text-white font-light text-sm tracking-[0.2em] transition-all duration-300 hover:bg-green-700"
              >
                <MessageCircle size={20} />
                <span>BOOK VIA WHATSAPP</span>
              </button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h2 className="text-white font-light text-2xl tracking-[0.2em] mb-8">
                BOOKING FORM
              </h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-gray-400 font-light text-xs tracking-[0.2em] mb-2">
                    NAME *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-700 text-white font-light text-sm py-2 focus:outline-none focus:border-white transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 font-light text-xs tracking-[0.2em] mb-2">
                    EMAIL *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-700 text-white font-light text-sm py-2 focus:outline-none focus:border-white transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 font-light text-xs tracking-[0.2em] mb-2">
                    TATTOO IDEA *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.tattooIdea}
                    onChange={(e) => setFormData({ ...formData, tattooIdea: e.target.value })}
                    className="w-full bg-transparent border-b border-gray-700 text-white font-light text-sm py-2 focus:outline-none focus:border-white transition-colors duration-300"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 font-light text-xs tracking-[0.2em] mb-2">
                    PLACEMENT *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.placement}
                    onChange={(e) => setFormData({ ...formData, placement: e.target.value })}
                    placeholder="e.g., Upper Arm, Forearm, Back"
                    className="w-full bg-transparent border-b border-gray-700 text-white font-light text-sm py-2 focus:outline-none focus:border-white transition-colors duration-300 placeholder:text-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 font-light text-xs tracking-[0.2em] mb-2">
                    SIZE *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.size}
                    onChange={(e) => setFormData({ ...formData, size: e.target.value })}
                    placeholder="e.g., Small, Medium, Large"
                    className="w-full bg-transparent border-b border-gray-700 text-white font-light text-sm py-2 focus:outline-none focus:border-white transition-colors duration-300 placeholder:text-gray-700"
                  />
                </div>

                <div>
                  <label className="block text-gray-400 font-light text-xs tracking-[0.2em] mb-2">
                    ADDITIONAL INFO
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full bg-transparent border border-gray-700 text-white font-light text-sm p-4 focus:outline-none focus:border-white transition-colors duration-300 resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full px-8 py-4 bg-white text-black font-light text-sm tracking-[0.2em] transition-all duration-300 hover:bg-gray-200"
                >
                  {isSubmitted ? 'SENT!' : 'SEND TO WHATSAPP'}
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
