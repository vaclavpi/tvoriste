import React from 'react';
import { ServiceProps } from '../../types';

const Card: React.FC<ServiceProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="bg-dark-200 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col items-center text-center border border-dark-300">
      <div className="w-16 h-16 flex items-center justify-center rounded-full bg-[#1daab1]/20 mb-4">
        <Icon className="w-8 h-8 text-[#1daab1]" />
      </div>
      <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
      <p className="text-gray-400">{description}</p>
    </div>
  );
};

export default Card;