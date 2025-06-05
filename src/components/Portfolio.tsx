import { motion } from 'framer-motion';
import Masonry from 'react-masonry-css';

const portfolioItems = [
  {
    title: 'Firemní web pro homeopatickou poradu Emília',
    category: 'Web Development',
    image: 'https://1drv.ms/i/c/224b4bd2f5dfbc82/EcpdshwmqrlLuKLrchXd-uMBQtNNZ7qfnqk5qyKDIxC5QQ?e=wEdtbB',
    description: 'Modernější responzivní webové stránky s návštěvní knihou. '
  },
  {
    title: 'Organizace maturitního plesu',
    category: 'Event',
    image: 'https://eu.zonerama.com/vaclavpi/Photo/12796645/512281419',
    description: 'Spoluorganizace maturitního plesu Gymnázia Čelákovice'
  },
  {
    title: 'Fotografie z plesu',
    category: 'Fotografie',
    image: 'https://eu.zonerama.com/vaclavpi/1373421',
    description: 'Zachycení nezapomenutelných momentů'
  },
];

const breakpointColumns = {
  default: 3,
  1100: 2,
  700: 1
};

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.h2 
          className="section-title text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Naše práce
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Podívejte se na výběr z našich nejlepších projektů
        </motion.p>

        <Masonry
          breakpointCols={breakpointColumns}
          className="flex -ml-4 w-auto"
          columnClassName="pl-4 bg-clip-padding"
        >
          {portfolioItems.map((item, index) => (
            <motion.div
              key={index}
              className="mb-4 break-inside-avoid"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg">
                <div className="relative aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <span className="text-white text-sm font-medium bg-primary-500 px-3 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </Masonry>
      </div>
    </section>
  );
};

export default Portfolio;