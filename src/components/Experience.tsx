import { motion } from 'framer-motion';
import { FiBriefcase, FiAward } from 'react-icons/fi';

const Experience = () => {
  const experiences = {
    professional: [
      {
        title: "Software Engineering Intern",
        company: "Informatica",
        period: "June 2024 - August 2024",
        description: "Engineered a retrieval-augmented generation (RAG) system using LlamaIndex and PostgreSQL for text-to-SQL conversion, achieving 20% boost in query retrieval accuracy. Streamlined report generation with Pandas and OpenPyXL, cutting processing time by 30%.",
        technologies: ["Python", "LlamaIndex", "PostgreSQL", "Pandas", "OpenPyXL", "Pytest"]
      },
      {
        title: "Software Engineering Intern",
        company: "Informatica",
        period: "June 2023 - August 2023",
        description: "Modeled an entity extraction system using SpaCy to process 10,000+ configuration records, boosting parameter identification accuracy by 15%. Refined LLM APIs for the Informatica Knowledge Base, achieving 91% accuracy in misconfiguration detection.",
        technologies: ["Python", "SpaCy", "LLM", "Agile"]
      }
    ],
    academic: [
      {
        title: "Project Manager",
        company: "Project Code UIUC",
        period: "August 2023 - May 2024",
        description: "Directed a 12-member team developing a full-stack UIUC Apartments website. Implemented interactive mapping with LeafletJS and optimized MySQL indexing to reduce query response times by 25%. Coordinated Agile sprints via Trello, achieving 90% task completion rate.",
        technologies: ["React", "MySQL", "Flask", "LeafletJS", "Agile", "Trello"]
      },
      {
        title: "Research Assistant",
        company: "ClassTranscribe Group",
        period: "August 2023 - January 2024",
        description: "Devised TensorFlow-based CNN transcription models for lecture video accessibility, boosting diagram recognition accuracy by 30%. Optimized OpenCV image processing pipelines to cut OCR latency.",
        technologies: ["TensorFlow", "CNN", "OpenCV", "OCR"]
      }
    ]
  };

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Experience</h2>
          <p className="section-subtitle">My Professional Journey</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Professional Experience */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-3 mb-8">
              <FiBriefcase className="w-6 h-6 text-secondary" />
              <h3 className="text-2xl font-bold text-text-light">Professional Experience</h3>
            </div>
            {experiences.professional.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="flex items-center space-x-3 mb-8">
              <FiAward className="w-6 h-6 text-secondary" />
              <h3 className="text-2xl font-bold text-text-light">Academic Experience</h3>
            </div>
            {experiences.academic.map((exp, index) => (
              <motion.div
                key={exp.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
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