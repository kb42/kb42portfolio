import { motion } from 'framer-motion';
import { useState } from 'react';

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'fullstack' | 'ml'>('all');

  const projects = {
    fullstack: [
      {
        title: "Personal Portfolio",
        description: "A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS. Features smooth animations, dark mode, and a clean, minimalist design.",
        technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
        image: "/projects/portfolio.png"
      },
      {
        title: "SportFlow",
        description: "Designed a microservices platform using Spring Boot, MongoDB, Angular, and Docker, orchestrated via AWS Kubernetes. Established a Jenkins CI/CD pipeline integrated with Selenium testing (80% coverage), cutting deployment cycles by 40%.",
        technologies: ["Spring Boot", "MongoDB", "Angular", "Docker", "AWS", "Jenkins", "Selenium"],
        image: "/projects/sportflow.png"
      },
      {
        title: "Curriculum Crafter",
        description: "Designed a full-stack web app to assist students in creating personalized academic plans with course data and transfer records. Spearheaded Flask back-end development, optimizing MySQL queries with relational algebra for 30% faster response time.",
        technologies: ["Flask", "React", "MySQL", "TypeScript", "Tailwind CSS"],
        image: "/projects/curriculum-crafter.png"
      }
    ],
    ml: [
      {
        title: "Innovative Illuminations",
        description: "An AI-powered lighting control system that adapts to user preferences and environmental conditions, optimizing energy usage while maintaining comfort.",
        technologies: ["Python", "TensorFlow", "IoT", "Raspberry Pi"],
        image: "/projects/innovative-illuminations.png"
      },
      {
        title: "SoccerViz Analytics Dashboard",
        description: "Built an interactive soccer data dashboard using Shiny and ggplot2, improving analysis efficiency by 40% and processing 50,000+ competition records.",
        technologies: ["R", "Shiny", "ggplot2", "D3.js"],
        image: "/projects/soccer-viz.png"
      },
      {
        title: "SummarizedSpeech",
        description: "Built a speech-to-text system with Wav2Vec, achieving 85% accuracy in sentiment analysis and 90% context relevance for key topics.",
        technologies: ["Python", "Wav2Vec", "NLP", "Speech Recognition"],
        image: "/projects/summarized-speech.png"
      }
    ]
  };

  const filteredProjects = activeCategory === 'all'
    ? [...projects.fullstack, ...projects.ml]
    : projects[activeCategory];

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Projects</h2>
          <p className="section-subtitle">Some Things I've Built</p>
        </motion.div>

        {/* Category Toggle */}
        <div className="flex justify-center space-x-4 mb-12">
          {['all', 'fullstack', 'ml'].map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category as 'all' | 'fullstack' | 'ml')}
              className={`px-4 py-2 rounded-full text-sm font-sf-mono transition-colors duration-300 ${
                activeCategory === category
                  ? 'bg-secondary text-primary'
                  : 'text-text hover:text-secondary'
              }`}
            >
              {category === 'all' ? 'All Projects' : category === 'fullstack' ? 'Full Stack' : 'ML/AI'}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="card group"
            >
              <div className="relative overflow-hidden rounded-lg mb-4">
                <div className="aspect-video bg-secondary/10 flex items-center justify-center">
                  <span className="text-secondary text-2xl">{project.title[0]}</span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-primary/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>
              <h3 className="text-text-light font-semibold mb-2">{project.title}</h3>
              <p className="text-text text-sm mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech) => (
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
        </div>
      </div>
    </section>
  );
};

export default Projects; 