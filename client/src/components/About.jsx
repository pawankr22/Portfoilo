import { motion } from 'framer-motion'; // for animations like fade-in and slide-in
import { useInView } from 'react-intersection-observer'; // for detecting when the component is in view
import { FaCode, FaLaptopCode, FaPalette, FaMobileAlt } from 'react-icons/fa'; // for icons representing different skill categories


const skillCategories = [
  {
    title: "Frontend Development",
    icon: <FaCode className="w-6 h-6" />, // icon for frontend skills
    skills: ["JavaScript", "React", "HTML5", "CSS3", "Tailwind CSS"]
  },
  {
    title: "Backend Development",
    icon: <FaLaptopCode className="w-6 h-6" />, // icon for backend skills
    skills: ["Node.js", "Express", "MongoDB", "RESTful APIs"]
  },
  {
    title: "UI/UX Design",
    icon: <FaPalette className="w-6 h-6" />, // icon for design skills
    skills: ["Figma", "Adobe XD", "Responsive Design", "Prototyping"]
  },
  {
    title: "Mobile Development",
    icon: <FaMobileAlt className="w-6 h-6" />, // icon for mobile skills
    skills: ["React Native", "Progressive Web Apps", "Mobile-First Design"]
  }
];

// About component that showcases my journey and skills
const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  return (
    <section id="about" className="py-20 bg-wood-light/20 dark:bg-wood-dark/20 wood-grain">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle font-serif">Crafting digital experiences with precision</p>
          <p className="text-lg text-wood-dark/80 dark:text-wood-light/80">
            As a dedicated web developer, I approach each project with the same care and 
            attention to detail as a master woodworker crafting a fine piece of furniture. 
            My passion lies in creating beautiful, functional websites that not only look stunning but also 
            deliver exceptional user experiences.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="wood-card p-6">
              <h3 className="text-2xl font-serif font-bold text-wood-dark dark:text-wood-light mb-4">
                My Journey
              </h3>
              <div className="space-y-4 text-wood-dark/80 dark:text-wood-light/80">
                <p>
                  My journey began in 2023 when I built my first website for a local carpentry business. 
                  The blend of creativity and problem-solving captivated me, leading me to pursue a career 
                  in web development.
                </p>
                <p>
                  Since then, I've had the privilege of working with agencies, startups, and established 
                  businesses to create digital experiences that exceed expectations. My approach combines 
                  clean code, thoughtful design, and cutting-edge technologies.
                </p>
                <p>
                  When I'm not coding, you'll find me in my workshop crafting wooden furniture or exploring 
                  the great outdoors for inspiration. This balance between digital and physical craftsmanship 
                  keeps my creativity flowing and perspective fresh.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <div className="wood-card p-6">
              <h3 className="text-2xl font-serif font-bold text-wood-dark dark:text-wood-light mb-4">
                My Skills
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {skillCategories.map((category, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                    className="bg-wood-lightest/40 dark:bg-wood-darkest/40 rounded-lg p-4"
                  >
                    <div className="flex items-center mb-3">
                      <div className="p-2 bg-accent-primary/10 dark:bg-accent-secondary/10 rounded-md text-accent-primary dark:text-accent-secondary mr-3">
                        {category.icon}
                      </div>
                      <h4 className="font-bold">{category.title}</h4>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill, skillIndex) => (
                        <span 
                          key={skillIndex}
                          className="text-sm px-3 py-1 bg-wood-light dark:bg-wood-dark rounded-full text-wood-dark/90 dark:text-wood-light/90"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;