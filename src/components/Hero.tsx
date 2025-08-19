import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiCode } from 'react-icons/fi';

const Hero = () => {
  const socialLinks = [
    { icon: <FiGithub />, url: 'https://github.com/kb42', label: 'GitHub' },
    { icon: <FiLinkedin />, url: 'https://linkedin.com/in/karthik-bagavathy', label: 'LinkedIn' },
    { icon: <FiMail />, url: 'mailto:kb42@illinois.edu', label: 'Email' },
    { icon: <FiCode />, url: 'https://www.hackerrank.com/kb42', label: 'HackerRank' }
  ];

  return (
    <section id="home" className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content Side */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block mb-6">
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="w-32 h-32 rounded-full overflow-hidden border-4 border-secondary/20 mx-auto lg:mx-0"
              >
                <img
                  src="/images/kbprofile.jpg"
                  alt="Karthik Alwar Bagavathy"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center"
              >
                <span className="text-primary text-sm font-bold">KB</span>
              </motion.div>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light mb-4">
              Hi! I'm <span className="text-secondary">Karthik</span>
            </h1>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-6">
              Software Engineer
            </h2>
            <p className="text-lg text-text mb-8 max-w-2xl mx-auto lg:mx-0">
              Passionate about building innovative solutions and exploring the intersection of software engineering and machine learning.
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
              <a
                href="#projects"
                className="btn-primary"
              >
                View Projects
              </a>
              <a
                href="#contact"
                className="btn-secondary"
              >
                Get in Touch
              </a>
            </div>
            <div className="flex justify-center lg:justify-start space-x-6">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-text hover:text-secondary transition-colors duration-300"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Animated Coding Illustration */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full h-[500px]">
              <svg
                viewBox="0 0 600 500"
                className="w-full h-full"
                xmlns="http://www.w3.org/2000/svg"
              >
                {/* Background */}
                <rect width="600" height="500" fill="#1a1b26" />
                
                {/* Desk */}
                <rect x="50" y="300" width="500" height="20" fill="#24283b" />
                <rect x="100" y="320" width="400" height="80" fill="#16161e" />
                
                {/* Monitor */}
                <rect x="150" y="100" width="300" height="200" fill="#24283b" rx="10" />
                <rect x="160" y="110" width="280" height="180" fill="#1a1b26" rx="5" />
                
                {/* Code Lines with Typing Animation */}
                <g>
                  <text x="170" y="140" fill="#7aa2f7" fontFamily="monospace" fontSize="12">
                    <tspan className="animate-typing-line" style={{ animationDelay: '0s' }}>const greeting = "Hello!";</tspan>
                    <tspan x="170" y="160" className="animate-typing-line" style={{ animationDelay: '1s' }}>function sayHello() {'{'}</tspan>
                    <tspan x="185" y="180" className="animate-typing-line" style={{ animationDelay: '2s' }}>  console.log(greeting);</tspan>
                    <tspan x="170" y="200" className="animate-typing-line" style={{ animationDelay: '3s' }}>{'}'}</tspan>
                    <tspan x="170" y="220" className="animate-typing-line" style={{ animationDelay: '4s' }}>sayHello();</tspan>
                  </text>
                </g>
              </svg>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 