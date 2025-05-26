import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center wood-grain">
      <div className="container-custom pt-24 pb-16">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <div className="space-y-6">
              <motion.h2
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="text-xl md:text-2xl text-accent-primary dark:text-accent-secondary font-medium"
              >
                Hello, I'm
              </motion.h2>
              
              <motion.h1
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-wood-dark dark:text-wood-light"
              >
                Pawan
              </motion.h1>
              
              <motion.h3
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-2xl md:text-3xl font-serif text-wood-dark/80 dark:text-wood-light/80"
              >
                Web Developer & Digital Craftsman
              </motion.h3>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="text-lg md:text-xl text-wood-dark/70 dark:text-wood-light/70 max-w-lg"
              >
                I craft beautiful, functional websites with the precision of fine woodworking, combining artistry with technical expertise.
              </motion.p>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 0.6 }}
                className="flex gap-4"
              >
                <a href="#projects" className="btn-primary">
                  View My Work
                </a>
                <a href="#contact" className="btn-secondary">
                  Get In Touch
                </a>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2, duration: 0.6 }}
                className="flex items-center gap-6 pt-4"
              >
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
                  href="" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-wood-dark/80 dark:text-wood-light/80 hover:text-accent-primary dark:hover:text-accent-secondary transition-colors"
                  aria-label="Twitter Profile"
                >
                  <FaTwitter className="w-6 h-6" />
                </a>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="order-1 md:order-2 flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-accent-primary/20 to-accent-secondary/20 blur-xl animate-float"></div>
              <div className="relative wood-card rounded-2xl overflow-hidden h-80 w-80 sm:h-96 sm:w-96">
                <img 
                  src="https://images.pexels.com/photos/1516680/pexels-photo-1516680.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Pawan Kumar - Web Developer" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-wood-dark/30 dark:bg-wood-darkest/40"></div>
                <div className="absolute inset-0 border-[8px] border-wood-light/40 dark:border-wood-dark/40 rounded-2xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;