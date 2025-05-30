// src/components/Contact.tsx
import { motion } from 'framer-motion'
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'
import { useState } from 'react'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // prepare URL-encoded form body
    const body = new URLSearchParams()
    body.append('form-name', 'contact')
    body.append('name', formData.name)
    body.append('email', formData.email)
    body.append('message', formData.message)

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true))
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
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="section-title">Contact</h2>
          <p className="section-subtitle">Get In Touch</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card"
          >
            <form
              name="contact"
              method="POST"
              data-netlify="true"
              onSubmit={handleSubmit}
              className="space-y-6"
            >
              {/* Netlify needs this hidden input */}
              <input type="hidden" name="form-name" value="contact" />

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

              <button
                type="submit"
                disabled={submitted}
                className="btn-primary w-full flex items-center justify-center space-x-2 disabled:opacity-50"
              >
                <FiSend className="w-5 h-5" />
                <span>{submitted ? 'Sent!' : 'Send Message'}</span>
              </button>
            </form>

            {/* Success message */}
            {submitted && (
              <p className="mt-4 text-center text-green-500">
                Thank you! Your message has been sent.
              </p>
            )}
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="card space-y-8"
          >
            <div>
              <h3 className="text-text-light font-semibold mb-4">Let's Connect</h3>
              <p className="text-text">
                I’m open to full-time Software Engineering roles and new projects.
              </p>
            </div>

            <div>
              <h3 className="text-text-light font-semibold mb-4">Social Links</h3>
              <div className="flex space-x-6">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-text hover:text-secondary transition-colors duration-300"
                    aria-label={link.label}
                  >
                    {link.icon}
                  </a>
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