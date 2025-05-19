import React from 'react';
import { portfolioData } from '../../constants';

const Portfolio: React.FC = () => {
  return (
    <section id="portfolio" className="py-20 bg-dark-200">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-sm font-semibold tracking-wider text-[#1daab1] uppercase mb-2">
            {portfolioData.title}
          </h2>
          <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            {portfolioData.subtitle}
          </h3>
          <p className="max-w-2xl mx-auto text-gray-400">
            {portfolioData.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {portfolioData.projects.map((project, index) => (
            <div 
              key={index}
              className="opacity-0 animate-fadeInUp"
              style={{ animationDelay: `${0.1 + index * 0.1}s`, animationFillMode: 'forwards' }}
            >
              <div className="group relative overflow-hidden rounded-lg shadow-lg">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex flex-col justify-end p-6">
                  <span className="text-[#1daab1] text-sm font-medium mb-2">
                    {project.category}
                  </span>
                  <h4 className="text-xl font-semibold text-white">
                    {project.title}
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;