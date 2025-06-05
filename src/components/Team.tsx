import { motion } from 'framer-motion';
import { Github, Instagram, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Václav Pisinger',
    position: 'Zakladatel & CEO',
    photo: 'https://eu.zonerama.com/ZA/Avatar/3218463?638758231297830000',
    bio: 'Vývojář, fotograf a organizátor velkých akcí. Václav založil Tvořiště s vizí vytvořit kreativní studio, které spojuje technologie a umění.',
    social: {
      instagram: 'https://www.instagram.com/vena.vapi',
      github: 'https://vaclavpi.github.io/',
      email: 'vpi@outlook.cz'
    }
  },
];

const Team = () => {
  return (
    <section id="tym" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="section-container">
        <motion.h2 
          className="section-title text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Náš tým
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Seznamte se s členy našeho týmu, kteří stojí za naším úspěchem.
        </motion.p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          {teamMembers.map((member, index) => (
            <motion.div 
              key={index}
              className="bg-white dark:bg-gray-700 rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="aspect-square overflow-hidden">
                <img 
                  src={member.photo} 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-1 text-gray-900 dark:text-white">{member.name}</h3>
                <p className="text-primary-500 font-medium mb-3">{member.position}</p>
                <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">{member.bio}</p>
                
                <div className="flex space-x-3">
                  {member.social.instagram && (
                    <a 
                      href={member.social.instagram} 
                      className="p-2 text-primary-500 hover:text-primary-600 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors"
                      aria-label={`Instagram ${member.name}`}
                    >
                      <Instagram size={18} />
                    </a>
                  )}
                  
                  {member.social.github && (
                    <a 
                      href={member.social.github} 
                      className="p-2 text-primary-500 hover:text-primary-600 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors"
                      aria-label={`GitHub ${member.name}`}
                    >
                      <Github size={18} />
                    </a>
                  )}
                  
                  {member.social.email && (
                    <a 
                      href={`mailto:${member.social.email}`} 
                      className="p-2 text-primary-500 hover:text-primary-600 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors"
                      aria-label={`Email ${member.name}`}
                    >
                      <Mail size={18} />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Team;