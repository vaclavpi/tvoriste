import React from 'react';
import { X } from 'lucide-react';
import { navLinks } from '../../constants';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ isOpen, onClose }) => {
  return (
    <div
      className={`fixed inset-0 bg-black bg-opacity-50 z-50 transition-opacity duration-300 ${
        isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div 
        className={`fixed right-0 top-0 h-full w-64 bg-dark-200 shadow-lg transform transition-transform duration-300 ease-in-out ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="p-4 flex justify-end">
          <button 
            onClick={onClose}
            className="p-2 rounded-full hover:bg-dark-300 text-white"
            aria-label="Zavřít menu"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        <nav className="px-4 py-2">
          <ul className="space-y-4">
            {navLinks.map((link, index) => (
              <li key={index}>
                <a 
                  href={link.href}
                  className="block py-2 text-lg font-medium text-gray-300 hover:text-[#1daab1] transition-colors"
                  onClick={onClose}
                >
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MobileMenu;