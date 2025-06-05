import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Send, Check } from 'lucide-react';
import { useForm } from 'react-hook-form';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact = () => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<FormData>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const onSubmit = (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', data);
      setIsSubmitting(false);
      setIsSubmitted(true);
      reset();
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setIsSubmitted(false);
      }, 5000);
    }, 1500);
  };

  return (
    <section id="kontakt" className="py-20 bg-white dark:bg-gray-900">
      <div className="section-container">
        <motion.h2 
          className="section-title text-gray-900 dark:text-white"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          Kontaktujte nás
        </motion.h2>
        
        <motion.p 
          className="section-subtitle"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Máte zájem o naše služby nebo se chcete jen zeptat na další informace? Neváhejte nás kontaktovat.
        </motion.p>
        
        <div className="grid md:grid-cols-2 gap-12 mt-12">
        
      
          
          <a href="mailto:vpi@outlook.cz?subject=Popt%C3%A1vka%3A%20&body=Dobr%C3%BD%20den%2C%0A%0Am%C4%9Bl*a%20bych%20z%C3%A1jem%20o%20va%C5%A1e%20slu%C5%BEby%20v%20oblasti%3A%0A%5BSPECIFIKUJTE%E2%80%93%20nap%C5%99.%20webov%C3%A9%20str%C3%A1nky%2C%20mobiln%C3%AD%20aplikace%2C%20grafick%C3%BD%20n%C3%A1vrh%E2%80%A6%5D%0A%0AP%C5%99edstava%20o%20rozsahu%20nebo%20funkcionalit%C4%9B%3A%0A%5BSTRU%C4%8CN%C4%9A%20POPI%C5%A0TE%2C%20co%20by%20m%C4%9Blo%20b%C3%BDt%20sou%C4%8D%C3%A1st%C3%AD%20%E2%80%93%20nap%C5%99.%20po%C4%8Det%20str%C3%A1nek%2C%20po%C5%BEadovan%C3%A9%20funkce%2C%20napojen%C3%AD%20na%20syst%C3%A9my%20apod.%5D%0A%0ARozpo%C4%8Det%3A%20%5Borienta%C4%8Dn%C4%9B%20XY%20K%C4%8D%5D%0ATerm%C3%ADn%3A%20%5BDO%20KDY%20je%20t%C5%99eba%20realizovat%5D%0A%0A%0AS%20pozdravem%2C%0A%5BJm%C3%A9no%20a%20p%C5%99%C3%ADjmen%C3%AD%5D%0A%5BTelefon%5D" className="btn-primary">
           Kontaktujte nás
          </a>
          
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Kontaktní informace</h3>
            
            <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="text-primary-500 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">Adresa</h4>
                    <p className="text-gray-600 dark:text-gray-400">-</p>
                    <p className="text-gray-600 dark:text-gray-400">Česká republika</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-primary-500 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">Telefon</h4>
                    <p className="text-gray-600 dark:text-gray-400">+420 603 981 192</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-primary-500 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">vpi@outlook.cz</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-md h-64 sm:h-80">
              <iframe
                src="https://www.google.com/maps/"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Mapa sídla Tvořiště s.r.o."
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;