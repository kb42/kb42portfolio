import { motion } from 'framer-motion';
import { FiCode, FiDatabase, FiCloud, FiTool } from 'react-icons/fi';

const Skills = () => {
  const skills = {
    programming: [
      "Python",
      "Java",
      "JavaScript (ES6)",
      "TypeScript",
      "SQL",
      "C",
      "C++",
      "R",
      "Assembly",
      "HTML",
      "CSS"
    ],
    frameworks: [
      "Angular",
      "React",
      "Vue",
      "Flask",
      "Spring Boot",
      "NodeJS",
      "GraphQL",
      "Pandas",
      "TensorFlow",
      "SpaCy",
      "OpenCV"
    ],
    databases: [
      "MySQL",
      "PostgreSQL",
      "MongoDB",
      "Neo4j",
      "AWS",
      "Google Cloud",
      "Firebase",
      "Jenkins"
    ],
    tools: [
      "Linux",
      "Git",
      "REST API",
      "Kafka",
      "Docker",
      "Kubernetes",
      "Agile",
      "Microsoft Office",
      "Adobe Suite",
      "GitHub",
      "Trello",
      "Selenium"
    ]
  };

  const categories = [
    { icon: <FiCode />, title: "Programming Languages", skills: skills.programming },
    { icon: <FiDatabase />, title: "Frameworks & Libraries", skills: skills.frameworks },
    { icon: <FiCloud />, title: "Databases & Cloud", skills: skills.databases },
    { icon: <FiTool />, title: "Tools & Technologies", skills: skills.tools }
  ];

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Skills</h2>
          <p className="section-subtitle">Technologies I Work With</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {categories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.25, delay: index * 0.05, ease: "easeOut" }}
              className="card"
            >
              <div className="flex items-center space-x-3 mb-6">
                <div className="text-secondary">{category.icon}</div>
                <h3 className="text-xl font-bold text-text-light">{category.title}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 text-sm font-sf-mono bg-secondary/10 text-secondary rounded-full"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 