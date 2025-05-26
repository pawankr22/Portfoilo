import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ project, index }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className="wood-card h-full flex flex-col group"
    >
      <div className="relative overflow-hidden h-60">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-wood-dark/30 dark:bg-wood-darkest/50 group-hover:bg-wood-dark/10 dark:group-hover:bg-wood-darkest/30 transition-all duration-300"></div>
        <div className="absolute inset-0 border-b-4 border-accent-primary"></div>
      </div>
      
      <div className="p-6 flex-grow flex flex-col">
        <h3 className="text-2xl font-serif font-bold text-wood-dark dark:text-wood-light mb-2">
          {project.title}
        </h3>
        
        <p className="text-wood-dark/80 dark:text-wood-light/80 mb-4 flex-grow">
          {project.description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {project.tags.map((tag, tagIndex) => (
            <span 
              key={tagIndex}
              className="text-xs px-2 py-1 bg-wood-light dark:bg-wood-dark rounded-full text-wood-dark/90 dark:text-wood-light/90"
            >
              {tag}
            </span>
          ))}
        </div>
        
        <div className="flex justify-between">
          <a 
            href={project.repoUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-wood-dark/80 dark:text-wood-light/80 hover:text-accent-primary dark:hover:text-accent-secondary transition-colors"
            aria-label={`View ${project.title} repository`}
          >
            <FaGithub />
            <span>Code</span>
          </a>
          
          <a 
            href={project.liveUrl} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-wood-dark/80 dark:text-wood-light/80 hover:text-accent-primary dark:hover:text-accent-secondary transition-colors"
            aria-label={`View ${project.title} live site`}
          >
            <span>Live Demo</span>
            <FaExternalLinkAlt />
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;