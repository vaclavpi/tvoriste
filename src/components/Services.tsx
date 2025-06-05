import { motion } from 'framer-motion';
import { 
  Camera, Code, Calendar, PenTool, Video, Speaker, 
  Lightbulb, Smartphone, Globe, Laptop, Image, Users 
} from 'lucide-react';

const serviceItems = [
  {
    icon: <Camera className="text-primary-500 mb-4" size={36} />,
    title: 'Fotografování',
    description: 'Profesionální fotografie pro události, portréty či produkty.',
  },
  {
    icon: <Globe className="text-primary-500 mb-4\" size={36} />,
    title: 'Webové stránky',
    description: 'Tvorba moderních, responzivních a uživatelsky přívětivých webových stránek.',
  },
  {
    icon: <Smartphone className="text-primary-500 mb-4" size={36} />,
    title: 'Mobilní aplikace',
    description: 'Vývoj mobilních aplikací pro Android a iOS.',
  },
  {
    icon: <Calendar className="text-primary-500 mb-4\" size={36} />,
    title: 'Organizace eventů',
    description: 'Kompletní zajištění firemních i soukromých akcí.',
  },
  {
    icon: <Video className="text-primary-500 mb-4" size={36} />,
    title: 'Video produkce',
    description: 'Videotvorba, střih a postprodukce. ',
  },
  {
    icon: <Lightbulb className="text-primary-500 mb-4\" size={36} />,
    title: 'Konzultace',
    description: 'Poradenství v oblasti IT, marketingu a podnikání. Pomůžeme vám najít nejvhodnější řešení.',
  },
];

const Services = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <section id="sluzby" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.h2 
          className="section-title text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Naše služby
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          V Tvořišti nabízíme širokou škálu kreativních a technických služeb,
          vše pod jednou střechou pro vaše komplexní projekty.
        </motion.p>
        
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {serviceItems.map((service, index) => (
            <motion.div 
              key={index} 
              className="bg-white dark:bg-gray-700 p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow"
              variants={itemVariants}
            >
              <div className="flex flex-col items-center text-center">
                {service.icon}
                <h3 className="text-xl font-semibold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
        >
          <a href="#kontakt" className="btn-primary">
            Konzultace zdarma
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;