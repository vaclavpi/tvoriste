import React from 'react';
import { aboutData } from '../../constants';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-dark-100">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-[#1daab1] uppercase mb-2">
            {aboutData.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {aboutData.subtitle}
          </h3>
          <p className="max-w-2xl mx-auto text-gray-400">
            {aboutData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {aboutData.stats.map((stat, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fadeInUp bg-dark-200 p-8 rounded-lg text-center"
              style={{ animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="text-4xl font-bold text-[#1daab1] mb-2">
                {stat.number}
              </div>
              <div className="text-gray-400">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;