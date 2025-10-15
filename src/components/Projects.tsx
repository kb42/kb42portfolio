import { motion } from 'framer-motion';
import { useState } from 'react';
import { AiFillGithub } from 'react-icons/ai';
import { FiExternalLink } from 'react-icons/fi';
import { useScrollReveal } from '../hooks/useScrollReveal';

// Project definition with optional links
interface Project {
  title: string;
  description: string;
  technologies: string[];
  categories: ('fullstack' | 'ml')[];
  image?: string; // now optional
  github?: string;
  website?: string;
}

type Category = 'all' | 'fullstack' | 'ml';

const Projects = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.15 });
  const [activeCategory, setActiveCategory] = useState<Category>('all');

  const projects: Project[] = [
    {
      title: 'Curriculum Crafter',
      description: 'A full-stack academic planning tool that empowers students to create personalized academic pathways. This project integrates course catalog data and degree requirements using Flask, React, MySQL, and TypeScript, featuring interactive planning modules and dynamic visualizations.',
      technologies: ['Flask', 'React', 'MySQL', 'TypeScript', 'CSS', 'GCP', 'D3.js'],
      categories: ['fullstack'],
      image: '/images/cc_web.png',
      github: 'https://github.com/cs411-alawini/fa24-cs411-team016-Indianess-of-411',
      website: 'https://curriculumcrafter.netlify.app/'
    },
    {
      title: 'Melodic Eyes',
      description: 'An eye-tracker navigable art carousel page that allows the user for auditory immersion into artworks by mapping colors in a painting to sounds. Developed using VueJS and Flask and presented at the Engineering Open House.',
      technologies: ['VueJS', 'Bootstrap', 'HTML/CSS', 'TailwindCSS'],
      categories: ['fullstack'],
      image: '/images/meyes.png',
      github: 'https://github.com/sigchi-uiuc/interactive-art',
      website: 'https://interactiveart.web.illinois.edu/'
    },
    {
      title: 'GainChef',
      description: 'An AI-powered nutrition coach built on Cloudflare\'s edge infrastructure that combines voice-enabled chat with intelligent macro tracking and meal planning. Features real-time speech recognition with Whisper fallback for cross-browser compatibility, session-isolated persistent storage via Durable Objects, and workflow-orchestrated meal preparation automation, all deployed serverlessly with GPT-4o-mini for conversational guidance.',
      technologies: ['GPT 4o', 'ReactJS', 'ChakraUI', 'Web Speech API', 'Cloudflare Workers', 'Durable Objects', 'Wrangler'],
      categories: ['fullstack', 'ml'],
      image: '/images/gainchef.png',
      github: 'https://github.com/kb42/cf_ai_gainchef',
      website: 'https://gainchef-next.karthikbaga04.workers.dev/'
    },
    {
      title: 'Innovative Illuminations',
      description: 'A real-time facial emotion recognition system that enhances interactive experiences with adaptive visual effects. This project utilizes Python, OpenCV, and Mediapipe to process live video feeds and apply dynamic face filters based on detected emotions.',
      technologies: ['Python', 'TensorFlow', 'OpenCV', 'Mediapipe', 'Keras'],
      categories: ['ml'],
      image: '/images/eohproj.jpg',
      github: 'https://github.com/open-source-at-illinois/eoh23',
      // website: 'https://innovative-illuminations.example.com'
    },
    {
      title: 'DocQA PDF AI Assistant',
      description: 'An intelligent document analysis system that enables natural language querying of PDF content. Features extractive QA with RoBERTa and generative responses via Groq LLaMA, with advanced semantic search and production-ready rate limiting',
      technologies: ['Python', 'Streamlit', 'FAISS', 'Transformers', 'RoBERTa', 'OpenAI', 'LLaMA', 'PyTorch'],
      categories: ['ml'],
      image: '/images/docqa_web.png',
      github: 'https://github.com/kb42/docqa-pdf',
      website: 'https://pdf-doc-reader.streamlit.app/'
    },
    {
      title: 'SummarizedSpeech',
      description: 'A speech-to-text processing system that transforms live audio into searchable content. This project leverages Wav2Vec, Python, and NLP to transcribe spoken language, analyze sentiment, and generate contextual links.',
      technologies: ['Python', 'Wav2Vec', 'NLP', 'Speech Recognition', 'Spacy', 'Jupyter'],
      categories: ['ml'],
      // no image provided will fallback
    }
  ];

  const filteredProjects =
    activeCategory === 'all'
      ? projects
      : projects.filter(project => project.categories.includes(activeCategory));

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        <div className={`reveal ${isVisible ? 'reveal-visible' : ''} text-center mb-16`}>
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Some Things I've Built</p>
        </div>

        <div className={`reveal ${isVisible ? 'reveal-visible' : ''} flex justify-center space-x-4 mb-12`}>
          {['all', 'fullstack', 'ml'].map((category) => (
            <motion.button
              key={category}
              onClick={() => setActiveCategory(category as Category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: 'spring', stiffness: 400, damping: 17 }}
              className={`px-4 py-2 rounded-full text-sm font-sf-mono transition-colors duration-200 ${
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
            </motion.button>
          ))}
        </div>

        <div className={`reveal ${isVisible ? 'reveal-visible' : ''} grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6`}>
          {filteredProjects.map((project) => (
            <motion.div
              key={project.title}
              whileHover={{ y: -8, scale: 1.02 }}
              transition={{ type: 'spring', stiffness: 300, damping: 20 }}
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
