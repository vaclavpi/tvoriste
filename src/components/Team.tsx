import { motion } from 'framer-motion';
import { Github, Linkedin, Mail } from 'lucide-react';

const teamMembers = [
  {
    name: 'Jan Novák',
    position: 'Zakladatel & CEO',
    photo: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Zkušený vývojář a fotograf s 10letou praxí v oboru. Jan založil TvořištĚ s vizí vytvořit kreativní studio, které spojuje technologie a umění.',
    social: {
      linkedin: '#',
      github: '#',
      email: 'jan@tvoriste.cz'
    }
  },
  {
    name: 'Lucie Dvořáková',
    position: 'Vedoucí fotografického oddělení',
    photo: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Lucie je profesionální fotografka specializující se na portréty a produktovou fotografii. Její práce byla oceněna na několika mezinárodních soutěžích.',
    social: {
      linkedin: '#',
      email: 'lucie@tvoriste.cz'
    }
  },
  {
    name: 'Martin Svoboda',
    position: 'Lead Developer',
    photo: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Martin má bohaté zkušenosti s vývojem webů a aplikací. Specializuje se na React, Node.js a mobilní technologie.',
    social: {
      linkedin: '#',
      github: '#',
      email: 'martin@tvoriste.cz'
    }
  },
  {
    name: 'Karolína Veselá',
    position: 'Event manažerka',
    photo: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=600',
    bio: 'Karolína má vášeň pro organizaci a plánování. S její pomocí proběhne každá akce hladce a bez stresu.',
    social: {
      linkedin: '#',
      email: 'karolina@tvoriste.cz'
    }
  }
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
          Seznamte se s talentovanými profesionály, kteří stojí za naším úspěchem
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
                  {member.social.linkedin && (
                    <a 
                      href={member.social.linkedin} 
                      className="p-2 text-primary-500 hover:text-primary-600 rounded-full hover:bg-primary-50 dark:hover:bg-primary-900 transition-colors"
                      aria-label={`LinkedIn ${member.name}`}
                    >
                      <Linkedin size={18} />
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