import { motion } from 'framer-motion';
import { FiBook } from 'react-icons/fi';

const Education = () => {
  const education = {
    degree: "BS in Computer Engineering",
    school: "University of Illinois Urbana-Champaign",
    period: "August 2022 - May 2025",
    honors: "Honors Candidate",
    coursework: [
      "Database Systems",
      "Software Development",
      "Computer Systems",
      "Algorithms",
      "Data Structures",
      "Machine Learning",
      "Computer Vision",
      "Statistical Data Management",
      "Statistics and Probability"
    ]
  };

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Education</h2>
          <p className="section-subtitle">My Academic Background</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="card max-w-4xl mx-auto"
        >
          <div className="flex items-center space-x-3 mb-6">
            <FiBook className="w-6 h-6 text-secondary" />
            <h3 className="text-2xl font-bold text-text-light">{education.degree}</h3>
          </div>
          
          <div className="space-y-4">
            <div>
              <p className="text-secondary text-lg">{education.school}</p>
              <p className="text-text">{education.period}</p>
              <p className="text-text-light">{education.honors}</p>
            </div>

            <div>
              <h4 className="text-text-light font-semibold mb-2">Relevant Coursework</h4>
              <div className="flex flex-wrap gap-2">
                {education.coursework.map((course) => (
                  <span
                    key={course}
                    className="px-3 py-1 text-sm font-sf-mono bg-secondary/10 text-secondary rounded-full"
                  >
                    {course}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Education; 