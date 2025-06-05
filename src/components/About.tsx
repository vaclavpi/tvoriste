import { motion } from 'framer-motion';
import { CheckCircle, Award, Users, Clock, Lightbulb } from 'lucide-react';

const About = () => {
  return (
    <section id="o-nas" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.h2 
          className="section-title text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          O nás
        </motion.h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-6 text-primary-500">
              TvořištĚ s.r.o. - kreativní studio pro všechny vaše potřeby
            </h3>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Jsme mladá a dynamická firma složená z nadšenců a profesionálů s bohatými zkušenostmi
              v oblasti kreativní tvorby, technologií a organizace. Naším cílem je pomáhat firmám i
              jednotlivcům realizovat jejich projekty, ať už se jedná o nový web, reklamní fotografii
              nebo firemní akci.
            </p>
            
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              V TvořištĚ věříme, že každý projekt si zaslouží individuální přístup a kreativní řešení.
              Díky našemu širokému záběru služeb dokážeme pokrýt komplexní potřeby našich klientů a
              zajistit konzistentní výsledky napříč různými oblastmi.
            </p>
            
            <ul className="space-y-3">
              <li className="flex items-center">
                <CheckCircle className="text-primary-500 mr-2" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Individuální přístup ke každému projektu</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-primary-500 mr-2" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Komplexní řešení pod jednou střechou</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-primary-500 mr-2" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Zkušený tým profesionálů</span>
              </li>
              <li className="flex items-center">
                <CheckCircle className="text-primary-500 mr-2" size={20} />
                <span className="text-gray-700 dark:text-gray-300">Důraz na kvalitu a moderní trendy</span>
              </li>
            </ul>
          </motion.div>
          
          <motion.div
            className="grid grid-cols-2 gap-6"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div className="bg-primary-50 dark:bg-primary-900 p-6 rounded-xl">
              <Award className="text-primary-500 mb-4" size={36} />
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Kvalita</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Klademe důraz na precizní provedení každého detailu našich projektů.
              </p>
            </div>
            
            <div className="bg-primary-50 dark:bg-primary-900 p-6 rounded-xl">
              <Users className="text-primary-500 mb-4" size={36} />
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Spolupráce</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Úzce spolupracujeme s klienty, aby výsledek předčil jejich očekávání.
              </p>
            </div>
            
            <div className="bg-primary-50 dark:bg-primary-900 p-6 rounded-xl">
              <Lightbulb className="text-primary-500 mb-4" size={36} />
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Inovace</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Sledujeme nejnovější trendy a přinášíme inovativní řešení.
              </p>
            </div>
            
            <div className="bg-primary-50 dark:bg-primary-900 p-6 rounded-xl">
              <Clock className="text-primary-500 mb-4" size={36} />
              <h4 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Spolehlivost</h4>
              <p className="text-gray-700 dark:text-gray-300">
                Dodržujeme termíny a plníme naše sliby vůči klientům.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;