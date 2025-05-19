import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';
import { contactData } from '../../constants';
import Button from '../ui/Button';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-dark-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-[#1daab1] uppercase mb-2">
            {contactData.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {contactData.subtitle}
          </h3>
          <p className="max-w-2xl mx-auto text-gray-400">
            {contactData.description}
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1daab1]/20">
                <Mail className="w-6 h-6 text-[#1daab1]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Email</h4>
                <a href={`mailto:${contactData.email}`} className="text-gray-400 hover:text-[#1daab1]">
                  {contactData.email}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1daab1]/20">
                <Phone className="w-6 h-6 text-[#1daab1]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Telefon</h4>
                <a href={`tel:${contactData.phone}`} className="text-gray-400 hover:text-[#1daab1]">
                  {contactData.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#1daab1]/20">
                <MapPin className="w-6 h-6 text-[#1daab1]" />
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-1">Adresa</h4>
                <p className="text-gray-400">{contactData.address}</p>
              </div>
            </div>
          </div>

          <form className="space-y-6">
            <div>
              <input
                type="text"
                placeholder="Vaše jméno"
                className="w-full px-4 py-3 bg-dark-300 border border-dark-100 rounded-lg focus:outline-none focus:border-[#1daab1] text-white"
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Váš email"
                className="w-full px-4 py-3 bg-dark-300 border border-dark-100 rounded-lg focus:outline-none focus:border-[#1daab1] text-white"
              />
            </div>
            <div>
              <textarea
                rows={4}
                placeholder="Vaše zpráva"
                className="w-full px-4 py-3 bg-dark-300 border border-dark-100 rounded-lg focus:outline-none focus:border-[#1daab1] text-white resize-none"
              ></textarea>
            </div>
            <Button variant="primary" size="lg" className="w-full">
              Odeslat zprávu
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;