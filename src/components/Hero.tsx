import { motion } from 'framer-motion';
import { Camera, Code, Calendar, ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-to-br from-primary-50 to-secondary-100 dark:from-gray-900 dark:to-primary-900">
      <div className="container mx-auto px-4 py-12 pt-32 md:pt-0">
        <div className="flex flex-col items-center text-center">
          <motion.h1 
            className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-primary-500">TvořištĚ</span> pro vaše nápady
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-700 dark:text-gray-300 max-w-3xl mb-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Kreativní studio, které přemění vaše vize v realitu. 
            Nabízíme profesionální fotografování, vývoj webů a aplikací, 
            organizaci eventů a mnoho dalšího.
          </motion.p>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 mb-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <a href="#kontakt" className="btn-primary">
              Kontaktujte nás
            </a>
            <a href="#sluzby" className="btn-secondary">
              Naše služby
            </a>
          </motion.div>
          
          <motion.div 
            className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-4xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center transform transition hover:scale-105">
              <Camera className="mx-auto text-primary-500 mb-3" size={36} />
              <h3 className="text-lg font-semibold mb-2">Fotografování</h3>
              <p className="text-gray-600 dark:text-gray-400">Profesionální focení pro všechny příležitosti</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center transform transition hover:scale-105">
              <Code className="mx-auto text-primary-500 mb-3" size={36} />
              <h3 className="text-lg font-semibold mb-2">Vývoj</h3>
              <p className="text-gray-600 dark:text-gray-400">Moderní weby a aplikace na míru</p>
            </div>
            
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 text-center transform transition hover:scale-105">
              <Calendar className="mx-auto text-primary-500 mb-3" size={36} />
              <h3 className="text-lg font-semibold mb-2">Eventy</h3>
              <p className="text-gray-600 dark:text-gray-400">Organizace akcí od A do Z</p>
            </div>
          </motion.div>
          
          <motion.a 
            href="#sluzby" 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-primary-500 animate-bounce"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <ArrowDown size={32} />
          </motion.a>
        </div>
      </div>
    </section>
  );
};

export default Hero;