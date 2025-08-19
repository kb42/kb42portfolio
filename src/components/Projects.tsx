// import { motion } from 'framer-motion';
// import { useState } from 'react';
// import { AiFillGithub } from 'react-icons/ai';
// import { FiExternalLink } from 'react-icons/fi';

// // Project definition with optional links
// interface Project {
//   title: string;
//   description: string;
//   technologies: string[];
//   image: string;
//   github?: string;
//   website?: string;
// }

// type Category = 'all' | 'fullstack' | 'ml';

// const Projects = () => {
//   const [activeCategory, setActiveCategory] = useState<Category>('all');

//   const projects: Record<'fullstack' | 'ml', Project[]> = {
//     fullstack: [
//       {
//         title: 'Personal Portfolio',
//         description: 'A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and a clean, minimalist design.',
//         technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Netlify'],
//         image: '/projects/portfolio.png'
//       },
//       {
//         title: 'SportFlow',
//         description: 'A dynamic fantasy sports analytics platform that combines a microservices architecture with modern web technologies. Built with Spring Boot, MongoDB, Angular, and Docker, and orchestrated through AWS Kubernetes, offering a fluid user experience with interactive analytics features.',
//         technologies: ['Spring Boot', 'MongoDB', 'Angular', 'Docker', 'AWS', 'Jenkins', 'Selenium'],
//         image: '/projects/sportflow.png'
//       },
//       {
//         title: 'Curriculum Crafter',
//         description: 'A full-stack academic planning tool that empowers students to create personalized academic pathways. This project integrates course catalog data and degree requirements using Flask, React, MySQL, and TypeScript, featuring interactive planning modules and dynamic visualizations.',
//         technologies: ['Flask', 'React', 'MySQL', 'TypeScript', 'CSS', 'GCP'],
//         image: '/images/cc_web.png',
//         github: 'https://github.com/kb42/curriculumcrafter',
//         website: 'https://curriculumcrafter.netlify.app/'
//       }
//     ],
//     ml: [
//       {
//         title: 'Innovative Illuminations',
//         description: 'A real-time facial emotion recognition system that enhances interactive experiences with adaptive visual effects. This project utilizes Python, OpenCV, and Mediapipe to process live video feeds and apply dynamic face filters based on detected emotions.',
//         technologies: ['Python', 'TensorFlow', 'OpenCV', 'Mediapipe', 'Keras'],
//         image: '/projects/innovative-illuminations.png',
//         github: 'https://github.com/yourusername/innovative-illuminations',
//         website: 'https://innovative-illuminations.example.com'
//       },
//       {
//         title: 'SoccerViz Analytics Dashboard',
//         description: 'An interactive dashboard that visualizes soccer competition trends and player performance. This project employs Shiny, ggplot2, and D3.js to deliver customizable analytics and intuitive data exploration.',
//         technologies: ['R', 'Shiny', 'ggplot2', 'D3.js'],
//         image: '/projects/soccer-viz.png'
//       },
//       {
//         title: 'SummarizedSpeech',
//         description: 'A speech-to-text processing system that transforms live audio into searchable content. This project leverages Wav2Vec, Python, and NLP to transcribe spoken language, analyze sentiment, and generate contextual links.',
//         technologies: ['Python', 'Wav2Vec', 'NLP', 'Speech Recognition', 'Spacy', 'Jupyter'],
//         image: '/projects/summarized-speech.png'
//       }
//     ]
//   };

//   const filteredProjects =
//     activeCategory === 'all'
//       ? [...projects.fullstack, ...projects.ml]
//       : projects[activeCategory];

//   return (
//     <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto">
//         <motion.div
//           initial={{ opacity: 0, y: 20 }}
//           whileInView={{ opacity: 1, y: 0 }}
//           viewport={{ once: true }}
//           transition={{ duration: 0.5 }}
//           className="text-center mb-16"
//         >
//           <h2 className="section-title">Projects</h2>
//           <p className="section-subtitle">Some Things I've Built</p>
//         </motion.div>

//         <div className="flex justify-center space-x-4 mb-12">
//           {['all', 'fullstack', 'ml'].map((category) => (
//             <button
//               key={category}
//               onClick={() => setActiveCategory(category as Category)}
//               className={`px-4 py-2 rounded-full text-sm font-sf-mono transition-colors duration-300 ${
//                 activeCategory === category
//                   ? 'bg-secondary text-primary'
//                   : 'text-text hover:text-secondary'
//               }`}
//             >
//               {category === 'all'
//                 ? 'All Projects'
//                 : category === 'fullstack'
//                 ? 'Full Stack'
//                 : 'ML/AI'}
//             </button>
//           ))}
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//           {filteredProjects.map((project, index) => (
//             <motion.div
//               key={project.title}
//               initial={{ opacity: 0, y: 20 }}
//               whileInView={{ opacity: 1, y: 0 }}
//               viewport={{ once: true }}
//               transition={{ duration: 0.5, delay: index * 0.1 }}
//               className="card group"
//             >
//               <div className="relative overflow-hidden rounded-lg mb-4">
//                 <div className="aspect-video bg-secondary/10 flex items-center justify-center">
//                   <span className="text-secondary text-2xl">{project.title[0]}</span>
//                 </div>
//                 <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
//               </div>

//               <h3 className="text-text-light font-semibold mb-2">{project.title}</h3>
//               <p className="text-text text-sm mb-4">{project.description}</p>

//               <div className="flex flex-wrap gap-2 mb-4">
//                 {project.technologies.map((tech) => (
//                   <span
//                     key={tech}
//                     className="px-2 py-1 text-xs font-sf-mono bg-secondary/10 text-secondary rounded"
//                   >
//                     {tech}
//                   </span>
//                 ))}
//               </div>

//               {/* Only these two have links */}
//               {(project.github || project.website) && (
//                 <div className="flex space-x-4">
//                   {project.github && (
//                     <motion.a
//                       href={project.github}
//                       target="_blank"
//                       rel="noreferrer"
//                       whileHover={{ scale: 1.2 }}
//                       whileTap={{ scale: 0.9 }}
//                       transition={{ type: 'spring', stiffness: 300 }}
//                       className="text-secondary"
//                       title="GitHub Repository"
//                     >
//                       <AiFillGithub size={24} />
//                     </motion.a>
//                   )}
//                   {project.website && (
//                     <motion.a
//                       href={project.website}
//                       target="_blank"
//                       rel="noreferrer"
//                       whileHover={{ scale: 1.2 }}
//                       whileTap={{ scale: 0.9 }}
//                       transition={{ type: 'spring', stiffness: 300 }}
//                       className="text-secondary"
//                       title="Live Website"
//                     >
//                       <FiExternalLink size={24} />
//                     </motion.a>
//                   )}
//                 </div>
//               )}
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;


import { motion } from 'framer-motion';
import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';

// Project definition with optional links
interface Project {
  title: string;
  description: string;
  technologies: string[];
  image?: string; // now optional
  github?: string;
  website?: string;
}

type Category = 'all' | 'fullstack' | 'ml';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const projects: Record<'fullstack' | 'ml', Project[]> = {
    fullstack: [
      {
        title: 'Curriculum Crafter',
        description: 'A full-stack academic planning tool that empowers students to create personalized academic pathways. This project integrates course catalog data and degree requirements using Flask, React, MySQL, and TypeScript, featuring interactive planning modules and dynamic visualizations.',
        technologies: ['Flask', 'React', 'MySQL', 'TypeScript', 'CSS', 'GCP', 'D3.js'],
        image: '/images/cc_web.png',
        github: 'https://github.com/cs411-alawini/fa24-cs411-team016-Indianess-of-411',
        website: 'https://curriculumcrafter.netlify.app/'
      },
      {
        title: 'Melodic Eyes',
        description: 'An eye-tracker navigable art carousel page that allows the user for auditory immersion into artworks by mapping colors in a painting to sounds. Developed using VueJS and Flask and presented at the Engineering Open House.',
        technologies: ['VueJS', 'Bootstrap', 'HTML/CSS', 'TailwindCSS'],
        image: '/images/meyes.png',
        github: 'https://github.com/sigchi-uiuc/interactive-art',
        website: 'https://interactiveart.web.illinois.edu/'
      },
      {
        title: 'SportFlow',
        description: 'A dynamic fantasy sports analytics platform that combines a microservices architecture with modern web technologies. Built with Spring Boot, MongoDB, Angular, and Docker, and orchestrated through AWS Kubernetes, offering a fluid user experience with interactive analytics features.',
        technologies: ['Spring Boot', 'MongoDB', 'Angular', 'Docker', 'AWS', 'Jenkins', 'Selenium'],
        // image: '/projects/sportflow.png'
      }
    ],
    ml: [
      {
        title: 'Innovative Illuminations',
        description: 'A real-time facial emotion recognition system that enhances interactive experiences with adaptive visual effects. This project utilizes Python, OpenCV, and Mediapipe to process live video feeds and apply dynamic face filters based on detected emotions.',
        technologies: ['Python', 'TensorFlow', 'OpenCV', 'Mediapipe', 'Keras'],
        image: '/images/eohproj.jpg',
        github: 'https://github.com/open-source-at-illinois/eoh23',
        // website: 'https://innovative-illuminations.example.com'
      },
      {
        title: 'DocQA PDF AI Assistant',
        description: 'An intelligent document analysis system that enables natural language querying of PDF content. Features extractive QA with RoBERTa and generative responses via Groq LLaMA, with advanced semantic search and production-ready rate limiting',
        technologies: ['Python', 'Streamlit', 'FAISS', 'Transformers', 'RoBERTa', 'OpenAI', 'LLaMA', 'PyTorch'],
        image: '/images/docqa_web.png',
        github: 'https://github.com/kb42/docqa-pdf',
        website: 'https://pdf-doc-reader.streamlit.app/'
      },
      {
        title: 'SummarizedSpeech',
        description: 'A speech-to-text processing system that transforms live audio into searchable content. This project leverages Wav2Vec, Python, and NLP to transcribe spoken language, analyze sentiment, and generate contextual links.',
        technologies: ['Python', 'Wav2Vec', 'NLP', 'Speech Recognition', 'Spacy', 'Jupyter'],
        // no image provided will fallback
      }
    ]
  };

  const filteredProjects =
    activeCategory === 'all'
      ? [...projects.fullstack, ...projects.ml]
      : projects[activeCategory];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Some Things I've Built</p>
        </motion.div>

        <div className="flex justify-center space-x-4 mb-12">
          {['all', 'fullstack', 'ml'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as Category)}
              className={`px-4 py-2 rounded-full text-sm font-sf-mono transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-secondary text-primary'
                  : 'text-text hover:text-secondary'
              }`}
            >
              {category === 'all'
                ? 'All Projects'
                : category === 'fullstack'
                ? 'Full Stack'
                : 'ML/AI'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 8 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.25, delay: index * 0.05, ease: "easeOut" }}
              className="card group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4 h-48">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={`${project.title} Screenshot`}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="aspect-video bg-secondary/10 flex items-center justify-center w-full h-full">
                    <span className="text-secondary text-2xl">
                      {project.title[0]}
                    </span>
                  </div>
                )}
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <h3 className="text-text-light font-semibold mb-2">{project.title}</h3>
              <p className="text-text text-sm mb-4">{project.description}</p>

              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-sf-mono bg-secondary/10 text-secondary rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Only these two have links */}
              {(project.github || project.website) && (
                <div className="flex space-x-4">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="text-secondary"
                      title="GitHub Repository"
                    >
                      <AiFillGithub size={24} />
                    </motion.a>
                  )}
                  {project.website && (
                    <motion.a
                      href={project.website}
                      target="_blank"
                      rel="noreferrer"
                      whileHover={{ scale: 1.2 }}
                      whileTap={{ scale: 0.9 }}
                      transition={{ type: 'spring', stiffness: 300 }}
                      className="text-secondary"
                      title="Live Website"
                    >
                      <FiExternalLink size={24} />
                    </motion.a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
