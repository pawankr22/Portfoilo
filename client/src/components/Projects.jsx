import { useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import ProjectCard from './ProjectCard';
import projects from '../data/projects';

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [filter, setFilter] = useState('all');

  // Get unique tags from all projects
  const allTags = [...new Set(projects.flatMap(project => project.tags))];
  
  // Filter projects based on selected tag
  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.tags.includes(filter));

  return (
    <section id="projects" className="py-20">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title">My Projects</h2>
          <p className="section-subtitle font-serif">Showcasing my finest digital creations</p>
          <p className="text-lg text-wood-dark/80 dark:text-wood-light/80">
            Here are some of my recent projects that demonstrate my skills and expertise.
            Each project represents a unique challenge and solution.
          </p>
        </motion.div>

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          <button
            onClick={() => setFilter('all')}
            className={`px-4 py-2 rounded-full transition-all ${
              filter === 'all'
                ? 'bg-accent-primary text-white shadow-md'
                : 'bg-wood-light dark:bg-wood-dark text-wood-dark dark:text-wood-light hover:bg-accent-secondary dark:hover:bg-accent-secondary/70'
            }`}
          >
            All
          </button>
          
          {allTags.map((tag, index) => (
            <button
              key={index}
              onClick={() => setFilter(tag)}
              className={`px-4 py-2 rounded-full transition-all ${
                filter === tag
                  ? 'bg-accent-primary text-white shadow-md'
                  : 'bg-wood-light dark:bg-wood-dark text-wood-dark dark:text-wood-light hover:bg-accent-secondary dark:hover:bg-accent-secondary/70'
              }`}
            >
              {tag}
            </button>
          ))}
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;