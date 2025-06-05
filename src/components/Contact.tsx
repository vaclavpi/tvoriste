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
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Napište nám</h3>
            
            {isSubmitted ? (
              <div className="bg-green-50 dark:bg-green-900/30 border border-green-200 dark:border-green-800 rounded-lg p-6 flex items-center">
                <Check className="text-green-500 mr-3" size={24} />
                <div>
                  <h4 className="text-green-800 dark:text-green-400 font-medium text-lg">Zpráva byla odeslána</h4>
                  <p className="text-green-700 dark:text-green-300">Děkujeme za váš zájem. Ozveme se vám co nejdříve.</p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Jméno
                  </label>
                  <input
                    id="name"
                    type="text"
                    className={`w-full px-4 py-2 border ${errors.name ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors`}
                    placeholder="Vaše jméno"
                    {...register('name', { required: 'Jméno je povinné' })}
                  />
                  {errors.name && <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Email
                  </label>
                  <input
                    id="email"
                    type="email"
                    className={`w-full px-4 py-2 border ${errors.email ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors`}
                    placeholder="vas@email.cz"
                    {...register('email', { 
                      required: 'Email je povinný',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Neplatný email'
                      }
                    })}
                  />
                  {errors.email && <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Předmět
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className={`w-full px-4 py-2 border ${errors.subject ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors`}
                    placeholder="Předmět zprávy"
                    {...register('subject', { required: 'Předmět je povinný' })}
                  />
                  {errors.subject && <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>}
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Zpráva
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-2 border ${errors.message ? 'border-red-500' : 'border-gray-300 dark:border-gray-600'} rounded-lg bg-white dark:bg-gray-700 text-gray-900 dark:text-white focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none transition-colors`}
                    placeholder="Vaše zpráva"
                    {...register('message', { required: 'Zpráva je povinná' })}
                  ></textarea>
                  {errors.message && <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>}
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className={`btn-primary w-full flex justify-center items-center ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? (
                    <span className="flex items-center">
                      <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white\" xmlns="http://www.w3.org/2000/svg\" fill="none\" viewBox="0 0 24 24">
                        <circle className="opacity-25\" cx="12\" cy="12\" r="10\" stroke="currentColor\" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Odesílání...
                    </span>
                  ) : (
                    <span className="flex items-center">
                      <Send className="mr-2" size={18} />
                      Odeslat zprávu
                    </span>
                  )}
                </button>
              </form>
            )}
          </motion.div>
          
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
                    <p className="text-gray-600 dark:text-gray-400">Nádražní 25, 150 00 Praha 5</p>
                    <p className="text-gray-600 dark:text-gray-400">Česká republika</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Phone className="text-primary-500 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">Telefon</h4>
                    <p className="text-gray-600 dark:text-gray-400">+420 123 456 789</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="text-primary-500 mr-4 mt-1 flex-shrink-0" size={24} />
                  <div>
                    <h4 className="font-semibold mb-1 text-gray-900 dark:text-white">Email</h4>
                    <p className="text-gray-600 dark:text-gray-400">info@tvoriste.cz</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="rounded-xl overflow-hidden shadow-md h-64 sm:h-80">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2560.9774002604716!2d14.408346516077964!3d50.0704133794221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b9455df9a43c7%3A0x9ecd76a8a203c33c!2zTsOhZHJhxb5uw60sIDE1MCAwMCBQcmFoYSA1!5e0!3m2!1scs!2scz!4v1628765422541!5m2!1scs!2scz"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                title="Mapa sídla TvořištĚ s.r.o."
              ></iframe>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;