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
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="text-center lg:text-left"
          >
            <div className="relative inline-block mb-6">
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="w-32 h-32 rounded-full overflow-hidden border-4 border-secondary/20 mx-auto lg:mx-0"
              >
                <img
                  src="/images/kbprofile.jpg"
                  alt="Karthik Alwar Bagavathy"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ duration: 0.4, delay: 0.3, ease: [0.34, 1.56, 0.64, 1] }}
                className="absolute -bottom-2 -right-2 w-8 h-8 bg-secondary rounded-full flex items-center justify-center"
              >
                <span className="text-primary text-sm font-bold">KB</span>
              </motion.div>
            </div>
            <motion.h1
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-text-light mb-4"
            >
              Hi! I'm <span className="text-secondary">Karthik</span>
            </motion.h1>
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text-light mb-6"
            >
              Software Engineer
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-lg text-text mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Passionate about building innovative solutions and exploring the intersection of software engineering and machine learning.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8"
            >
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
            </motion.div>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="flex justify-center lg:justify-start space-x-6"
            >
              {socialLinks.map((link) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                  className="text-text hover:text-secondary transition-colors duration-200 text-xl"
                  aria-label={link.label}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Animated Coding Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            <div className="relative w-full h-[500px] flex items-center justify-center">
              {/* Modern Code Editor Card */}
              <div className="w-full max-w-md bg-[#24283b] rounded-xl shadow-2xl overflow-hidden border border-secondary/20">
                {/* Editor Header */}
                <div className="bg-[#16161e] px-4 py-3 flex items-center space-x-2 border-b border-secondary/10">
                  <div className="flex space-x-2">
                    <div className="w-3 h-3 rounded-full bg-[#f7768e]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#e0af68]"></div>
                    <div className="w-3 h-3 rounded-full bg-[#9ece6a]"></div>
                  </div>
                  <div className="flex-1 text-center">
                    <span className="text-xs text-text/60 font-sf-mono">hello.js</span>
                  </div>
                </div>

                {/* Code Content */}
                <div className="p-6 font-sf-mono text-sm leading-relaxed">
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8, duration: 0.4 }}
                  >
                    {/* Line 1 */}
                    <div className="flex items-center mb-3">
                      <span className="text-text/40 w-8 text-right mr-4">1</span>
                      <div className="code-line typing" style={{ animationDelay: '1s' }}>
                        <span className="text-[#bb9af7]">const</span>
                        <span className="text-text-light"> greeting </span>
                        <span className="text-[#89ddff]">=</span>
                        <span className="text-[#9ece6a]"> "Hello!"</span>
                        <span className="text-text/60">;</span>
                      </div>
                    </div>

                    {/* Line 2 */}
                    <div className="flex items-center mb-3">
                      <span className="text-text/40 w-8 text-right mr-4">2</span>
                      <div className="code-line typing" style={{ animationDelay: '2.2s' }}>
                        <span className="text-[#bb9af7]">function</span>
                        <span className="text-[#7aa2f7]"> sayHello</span>
                        <span className="text-text/60">() {'{'}</span>
                      </div>
                    </div>

                    {/* Line 3 */}
                    <div className="flex items-center mb-3">
                      <span className="text-text/40 w-8 text-right mr-4">3</span>
                      <div className="code-line typing" style={{ animationDelay: '3.4s' }}>
                        <span className="text-text/60 ml-4">  </span>
                        <span className="text-text-light">console</span>
                        <span className="text-text/60">.</span>
                        <span className="text-[#7aa2f7]">log</span>
                        <span className="text-text/60">(</span>
                        <span className="text-text-light">greeting</span>
                        <span className="text-text/60">);</span>
                      </div>
                    </div>

                    {/* Line 4 */}
                    <div className="flex items-center mb-3">
                      <span className="text-text/40 w-8 text-right mr-4">4</span>
                      <div className="code-line typing" style={{ animationDelay: '4.6s' }}>
                        <span className="text-text/60">{'}'}</span>
                      </div>
                    </div>

                    {/* Line 5 - Empty */}
                    <div className="flex items-center mb-3">
                      <span className="text-text/40 w-8 text-right mr-4">5</span>
                      <div></div>
                    </div>

                    {/* Line 6 - Active line with cursor */}
                    <div className="flex items-center">
                      <span className="text-text/40 w-8 text-right mr-4">6</span>
                      <div className="code-line active typing" style={{ animationDelay: '5.8s' }}>
                        <span className="text-[#7aa2f7]">sayHello</span>
                        <span className="text-text/60">();</span>
                        <motion.span
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 7, duration: 0.1 }}
                          className="code-cursor"
                        />
                      </div>
                    </div>
                  </motion.div>
                </div>

                {/* Terminal Output */}
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ delay: 7.5, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-[#16161e] border-t border-secondary/10 px-6 py-4 overflow-hidden"
                >
                  <div className="font-sf-mono text-xs">
                    <span className="text-[#9ece6a]">❯</span>
                    <span className="text-text/80 ml-2">Hello!</span>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 