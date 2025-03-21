import { motion } from 'framer-motion';
import { FiCode, FiBook, FiTarget } from 'react-icons/fi';

const About = () => {
  const interests = [
    {
      icon: <FiCode className="w-6 h-6" />,
      title: "Software Development",
      description: "Passionate about building web applications and exploring new technologies in full-stack development."
    },
    {
      icon: <FiBook className="w-6 h-6" />,
      title: "Computer Science",
      description: "Studying core CS concepts and algorithms while applying them to real-world projects."
    },
    {
      icon: <FiTarget className="w-6 h-6" />,
      title: "Career Goals",
      description: "Aspiring to become a software engineer and contribute to innovative tech solutions."
    }
  ];

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">About Me</h2>
          <p className="section-subtitle">My Journey in Computer Science</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* About Text */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="space-y-6"
          >
            <p className="text-text-light text-lg">
              I'm a Computer Science student with a passion for software development and technology.
              My journey in computer science began with a curiosity about how things work on the internet,
              which led me to explore web development and programming.
            </p>
            <p className="text-text-light text-lg">
              Currently, I'm focused on building my foundation in computer science while developing
              practical skills through personal projects and coursework. I enjoy learning new technologies
              and applying them to create meaningful solutions.
            </p>
            <p className="text-text-light text-lg">
              When I'm not coding, you can find me exploring new technologies, contributing to open-source
              projects, or learning about the latest developments in the tech industry.
            </p>
          </motion.div>

          {/* Interests Grid */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="grid grid-cols-1 gap-6"
          >
            {interests.map((interest, index) => (
              <motion.div
                key={interest.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                className="card group"
              >
                <div className="flex items-start space-x-4">
                  <div className="text-secondary group-hover:text-secondary-light transition-colors duration-300">
                    {interest.icon}
                  </div>
                  <div>
                    <h3 className="text-text-light font-semibold mb-2">{interest.title}</h3>
                    <p className="text-text">{interest.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About; 