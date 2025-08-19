import { motion } from 'framer-motion';
import { FiBriefcase, FiAward } from 'react-icons/fi';

const Experience = () => {
  const experiences = {
    professional: [
      {
        title: "Software Engineering Intern",
        company: "Informatica",
        period: "June 2024 - August 2024",
        description: "Developed a retrieval-augmented generation system using LlamaIndex and PostgreSQL to enable seamless text-to-SQL conversion. Enhanced report generation by integrating Pandas and OpenPyXL to streamline data processing and support robust analytics.",
        technologies: ["Python", "LlamaIndex", "PostgreSQL", "Pandas", "OpenPyXL", "Pytest", "Rest"]
      },
      {
        title: "Software Engineering Intern",
        company: "Informatica",
        period: "June 2023 - August 2023",
        description: "Created an entity extraction system using SpaCy to process configuration records and improve parameter identification. Refined LLM APIs for the Informatica Knowledge Base, focusing on more accurate detection of misconfigurations.",
        technologies: ["Python", "SpaCy", "OpenAI", "Agile"]
      }
    ],
    academic: [
      {
        title: "Project Manager",
        company: "Project Code UIUC",
        period: "August 2023 - May 2024",
        description: "Led a collaborative team to build a full-stack UIUC Apartments website that integrates interactive mapping with LeafletJS and efficient MySQL querying. Coordinated Agile sprints using Trello to ensure smooth project execution and effective teamwork.",
        technologies: ["React", "MySQL", "Flask", "LeafletJS", "Agile", "Trello"]
      },
      {
        title: "Research Assistant",
        company: "ClassTranscribe Group",
        period: "August 2023 - January 2024",
        description: "Developed TensorFlow-based CNN transcription models to improve lecture video accessibility and enhance diagram recognition. Optimized OpenCV image processing pipelines to reduce OCR latency and support faster content processing.",
        technologies: ["TensorFlow", "CNN", "OpenCV", "CLIP", "Python", "OpenAI"]
      }
    ]
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My Professional Journey</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-3 mb-8">
              <FiBriefcase className="w-6 h-6 text-secondary" />
              <h3 className="text-2xl font-bold text-text-light">Professional Experience</h3>
            </div>
            {experiences.professional.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.25, delay: index * 0.05, ease: "easeOut" }}
                className="card"
              >
                <h4 className="text-text-light font-semibold mb-1">{exp.title}</h4>
                <p className="text-secondary mb-2">{exp.company}</p>
                <p className="text-text text-sm mb-4">{exp.period}</p>
                <p className="text-text mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-sf-mono bg-secondary/10 text-secondary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Academic Experience */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-3 mb-8">
              <FiAward className="w-6 h-6 text-secondary" />
              <h3 className="text-2xl font-bold text-text-light">Resrarch/Leadership Experience</h3>
            </div>
            {experiences.academic.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.25, delay: index * 0.05, ease: "easeOut" }}
                className="card"
              >
                <h4 className="text-text-light font-semibold mb-1">{exp.title}</h4>
                <p className="text-secondary mb-2">{exp.company}</p>
                <p className="text-text text-sm mb-4">{exp.period}</p>
                <p className="text-text mb-4">{exp.description}</p>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs font-sf-mono bg-secondary/10 text-secondary rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience; 