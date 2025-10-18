// src/components/Contact.tsx
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'
import { useState } from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

const Contact = () => {
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle')

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setStatus('submitting')

    // prepare URL-encoded form body
    const body = new URLSearchParams()
    body.append('form-name', 'contact')
    body.append('name', formData.name)
    body.append('email', formData.email)
    body.append('message', formData.message)

    try {
      const response = await fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body.toString(),
      })

      if (response.ok) {
        setStatus('success')
        setFormData({ name: '', email: '', message: '' })
      } else {
        setStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setStatus('error')
    }
  }

  const socialLinks = [
    { icon: <FiGithub />, href: 'https://github.com/kb42', label: 'GitHub' },
    {
      icon: <FiLinkedin />,
      href: 'https://linkedin.com/in/karthikbaga24',
      label: 'LinkedIn',
    },
    {
      icon: <FiMail />,
      href: 'mailto:karthikbaga04@gmail.com',
      label: 'Email',
    },
  ]

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto" ref={ref}>
        {/* Title */}
        <div className={`reveal ${isVisible ? 'reveal-visible' : ''} text-center mb-16`}>
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Get In Touch</p>
        </div>

        <div className={`reveal ${isVisible ? 'reveal-visible' : ''} grid grid-cols-1 md:grid-cols-2 gap-12`}>
          {/* Contact Form */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="card"
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              data-netlify-honeypot="bot-field"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Netlify needs these hidden inputs */}
              <input type="hidden" name="form-name" value="contact" />
              <input type="hidden" name="bot-field" />

              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-text-light mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-text-light"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-text-light mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-text-light"
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-text-light mb-2"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary text-text-light"
                  required
                />
              </div>

              <motion.button
                type="submit"
                disabled={status === 'submitting' || status === 'success'}
                whileHover={{ scale: status === 'submitting' || status === 'success' ? 1 : 1.02 }}
                whileTap={{ scale: status === 'submitting' || status === 'success' ? 1 : 0.98 }}
                transition={{ type: 'spring', stiffness: 400, damping: 17 }}
                className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <FiSend className="w-5 h-5" />
                <span>
                  {status === 'submitting' && 'Sending...'}
                  {status === 'success' && 'Sent!'}
                  {status === 'idle' && 'Send Message'}
                  {status === 'error' && 'Send Message'}
                </span>
              </motion.button>
            </form>

            {/* Status messages */}
            {status === 'success' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-green-500 font-medium"
              >
                ✓ Thank you! Your message has been sent successfully.
              </motion.p>
            )}
            {status === 'error' && (
              <motion.p
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-4 text-center text-red-500 font-medium"
              >
                ✗ Something went wrong. Please try again or email me directly.
              </motion.p>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            whileHover={{ scale: 1.01 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            className="card space-y-8"
          >
            <div>
              <h3 className="text-text-light font-semibold mb-4">Let's Connect</h3>
              <p className="text-text">
                I'm open to full-time Software Engineering roles and new projects.
              </p>
            </div>

            <div>
              <h3 className="text-text-light font-semibold mb-4">Social Links</h3>
              <div className="flex space-x-6">
                {socialLinks.map((link) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
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
              </div>
            </div>

            <div>
              <h3 className="text-text-light font-semibold mb-4">Location</h3>
              <p className="text-text">Chicago, Illinois</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Contact
