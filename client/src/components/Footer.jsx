import { FaGithub, FaLinkedin, FaTwitter, FaHeart } from 'react-icons/fa';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-wood-light/30 dark:bg-wood-dark/30 py-10 wood-grain">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="font-serif text-2xl font-bold text-wood-dark dark:text-wood-light mb-2">
              Pawan Kumar
            </h3>
            <p className="text-wood-dark/70 dark:text-wood-light/70 max-w-md">
              Crafting beautiful, functional websites with the precision of fine woodworking.
            </p>
          </div>
          
          <div className="flex items-center space-x-6">
            <a 
              href="https://github.com/pawankr22" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-wood-dark/80 dark:text-wood-light/80 hover:text-accent-primary dark:hover:text-accent-secondary transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-wood-dark/80 dark:text-wood-light/80 hover:text-accent-primary dark:hover:text-accent-secondary transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin className="w-6 h-6" />
            </a>
            <a 
              href="https://x.com/CnctPawan" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-wood-dark/80 dark:text-wood-light/80 hover:text-accent-primary dark:hover:text-accent-secondary transition-colors"
              aria-label="Twitter Profile"
            >
              <FaTwitter className="w-6 h-6" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-wood-medium/20 dark:border-wood-medium/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-wood-dark/70 dark:text-wood-light/70 text-sm mb-4 md:mb-0">
            &copy; {currentYear} Pawan Kumar. All rights reserved.
          </p>
          <p className="text-wood-dark/70 dark:text-wood-light/70 text-sm flex items-center">
            Crafted with 
            <FaHeart className="mx-1.5 text-accent-primary dark:text-accent-secondary" /> 
            and precision
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;