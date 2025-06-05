import { Palette, Facebook, Instagram, Linkedin, Twitter, Mail } from 'lucide-react';
import { useTheme } from '../contexts/ThemeContext';

const Footer = () => {
  const { theme, toggleTheme } = useTheme();
  
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-gray-900 text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center space-x-2 text-primary-500 mb-4">
              <Palette size={32} />
              <span className="text-2xl font-heading font-bold">TvořištĚ</span>
            </div>
            <p className="text-gray-400 mb-6">
              Kreativní studio pro fotografování, tvorbu webů a aplikací, organizaci eventů a mnoho dalšího.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Služby</h4>
            <ul className="space-y-2">
              <li><a href="#sluzby" className="text-gray-400 hover:text-primary-500 transition-colors">Fotografování</a></li>
              <li><a href="#sluzby" className="text-gray-400 hover:text-primary-500 transition-colors">Webové stránky</a></li>
              <li><a href="#sluzby" className="text-gray-400 hover:text-primary-500 transition-colors">Mobilní aplikace</a></li>
              <li><a href="#sluzby" className="text-gray-400 hover:text-primary-500 transition-colors">Organizace eventů</a></li>
              <li><a href="#sluzby" className="text-gray-400 hover:text-primary-500 transition-colors">Video produkce</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">O nás</h4>
            <ul className="space-y-2">
              <li><a href="#o-nas" className="text-gray-400 hover:text-primary-500 transition-colors">O společnosti</a></li>
              <li><a href="#tym" className="text-gray-400 hover:text-primary-500 transition-colors">Náš tým</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Reference</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Kariéra</a></li>
              <li><a href="#" className="text-gray-400 hover:text-primary-500 transition-colors">Blog</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Kontakt</h4>
            <ul className="space-y-2">
              <li className="text-gray-400">Nádražní 25, Praha 5</li>
              <li className="text-gray-400">+420 123 456 789</li>
              <li className="text-gray-400">info@tvoriste.cz</li>
            </ul>
            
            <div className="mt-6 flex items-center space-x-3">
              <span className="text-gray-400">Přepnout motiv:</span>
              <button 
                onClick={toggleTheme}
                className="p-2 text-primary-500 hover:text-primary-400 rounded-full hover:bg-gray-800 transition-colors"
                aria-label="Přepnout motiv"
              >
                {theme === 'dark' ? 'Světlý' : 'Tmavý'}
              </button>
            </div>
          </div>
        </div>
        
        <hr className="border-gray-800 my-6" />
        
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm">
            © {currentYear} TvořištĚ s.r.o. Všechna práva vyhrazena.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <a href="#" className="text-gray-500 hover:text-primary-500 text-sm transition-colors">Obchodní podmínky</a>
            <a href="#" className="text-gray-500 hover:text-primary-500 text-sm transition-colors">Ochrana soukromí</a>
            <a href="#" className="text-gray-500 hover:text-primary-500 text-sm transition-colors">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;