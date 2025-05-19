import React from 'react';
import { Code, Camera, Calendar, Lightbulb } from 'lucide-react';
import Card from '../ui/Card';
import { servicesData } from '../../constants';

const Services: React.FC = () => {
  const icons = [
    Code,
    Camera,
    Calendar,
    Lightbulb
  ];

  return (
    <section id="sluzby" className="py-20 bg-dark-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-[#1daab1] uppercase mb-2">
            {servicesData.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {servicesData.subtitle}
          </h3>
          <p className="max-w-2xl mx-auto text-gray-400">
            {servicesData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {servicesData.services.map((service, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <Card
                icon={icons[index]}
                title={service.title}
                description={service.description}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;