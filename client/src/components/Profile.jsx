import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { FaDownload, FaGraduationCap, FaBriefcase, FaAward } from 'react-icons/fa';

const experiences = [
  
  {
    id: 1,
    title: "Web Developer",
    company: "Craft Interactive",
    period: "2022 - 2025",
    description: "Developed responsive web applications and e-commerce solutions for various clients using React and Node.js.",
    icon: <FaBriefcase className="w-5 h-5" />
  },
  {
    id: 2,
    title: "BTech Computer Science",
    company: "University of Technology",
    period: "2023 - 2027",
    description: "Graduated with honors, specializing in web technologies and interactive media design.",
    icon: <FaGraduationCap className="w-5 h-5" />
  }
];

const achievements = [
  {
    id: 1,
    title: "Best E-commerce Solution",
    organization: "WebCraft Awards",
    year: "2022",
    icon: <FaAward className="w-5 h-5" />
  },
  {
    id: 2,
    title: "Innovative Design Recognition",
    organization: "Digital Artisan Guild",
    year: "2021",
    icon: <FaAward className="w-5 h-5" />
  }
];

const Profile = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="profile" className="py-20 bg-wood-light/20 dark:bg-wood-dark/20 wood-grain">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title">My Profile</h2>
          <p className="section-subtitle font-serif">Career journey and achievements</p>
          <div className="flex justify-center mt-6">
            <a 
              href="#" 
              className="btn-primary flex items-center gap-2"
            >
              <FaDownload className="w-5 h-5" />
              <span>Download Resume</span>
            </a>
          </div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="wood-card p-6">
              <h3 className="text-2xl font-serif font-bold text-wood-dark dark:text-wood-light mb-6">
                Experience & Education
              </h3>
              
              <div className="relative pl-8 space-y-8 before:content-[''] before:absolute before:left-3 before:top-2 before:bottom-2 before:w-px before:bg-wood-medium dark:before:bg-wood-light/30">
                {experiences.map((item, index) => (
                  <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + (index * 0.1) }}
                    className="relative"
                  >
                    <div className="absolute -left-8 p-1.5 bg-accent-primary dark:bg-accent-secondary rounded-full">
                      {item.icon}
                    </div>
                    <div className="mb-1">
                      <h4 className="text-lg font-bold text-wood-dark dark:text-wood-light">{item.title}</h4>
                      <div className="flex justify-between text-sm">
                        <span className="text-accent-primary dark:text-accent-secondary">{item.company}</span>
                        <span className="text-wood-dark/70 dark:text-wood-light/70">{item.period}</span>
                      </div>
                    </div>
                    <p className="text-wood-dark/80 dark:text-wood-light/80">
                      {item.description}
                    </p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
          
          {/* Skills & Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Achievements */}
            <div className="wood-card p-6">
              <h3 className="text-2xl font-serif font-bold text-wood-dark dark:text-wood-light mb-6">
                Achievements
              </h3>
              <div className="space-y-4">
                {achievements.map((achievement, index) => (
                  <motion.div
                    key={achievement.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                    className="flex items-start gap-4 p-4 bg-wood-lightest/40 dark:bg-wood-darkest/40 rounded-lg"
                  >
                    <div className="p-2 text-accent-primary dark:text-accent-secondary bg-accent-primary/10 dark:bg-accent-secondary/10 rounded-md">
                      {achievement.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-wood-dark dark:text-wood-light">{achievement.title}</h4>
                      <p className="text-sm text-wood-dark/70 dark:text-wood-light/70">
                        {achievement.organization} • {achievement.year}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
            
            {/* Technologies */}
            <div className="wood-card p-6">
              <h3 className="text-2xl font-serif font-bold text-wood-dark dark:text-wood-light mb-6">
                Technologies I Work With
              </h3>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex flex-wrap gap-2"
              >
                {[
                  "JavaScript", "React", "Node.js", "HTML5", "CSS3", "Tailwind CSS", 
                  "MongoDB", "Express", "Firebase", "REST APIs", "Git", "Webpack",
                  "Redux", "Next.js", "GraphQL", "PostgreSQL", "AWS", "Docker"
                ].map((tech, index) => (
                  <span 
                    key={index}
                    className="px-3 py-1.5 bg-wood-light dark:bg-wood-dark rounded-full text-wood-dark/90 dark:text-wood-light/90"
                  >
                    {tech}
                  </span>
                ))}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Profile;