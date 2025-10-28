import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiUser, FiMessageSquare, FiSend } from 'react-icons/fi';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = ({ data }) => {
  const formRef = useRef();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [status, setStatus] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus('');

    try {
      // Initialize EmailJS with your public key
      // You'll need to replace these with your actual EmailJS credentials
      // Sign up at https://www.emailjs.com/
      const result = await emailjs.sendForm(
        'YOUR_SERVICE_ID',  // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        formRef.current,
        'YOUR_PUBLIC_KEY'   // Replace with your EmailJS public key
      );

      if (result.text === 'OK') {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus('error');
    }

    setLoading(false);
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section className="contact" id="contact">
      <div className="hexagon-pattern"></div>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Get In Touch
      </motion.h2>

      <div className="contact-content">
        <motion.div
          className="contact-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h3 className="contact-subtitle">Let's Connect</h3>
          <p className="contact-description">
            I'm always interested in hearing about new opportunities, collaborations, 
            or just a friendly chat about technology and innovation.
          </p>
          <div className="contact-details">
            <div className="contact-item">
              <FiMail className="contact-icon" />
              <a href={`mailto:${data.email}`}>{data.email}</a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="contact-form-container"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <form ref={formRef} onSubmit={handleSubmit} className="contact-form">
            <div className="form-group">
              <label htmlFor="name">
                <FiUser /> Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email">
                <FiMail /> Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your.email@example.com"
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">
                <FiMessageSquare /> Message
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="6"
                placeholder="Your message..."
              />
            </div>

            <motion.button
              type="submit"
              className="submit-btn"
              disabled={loading}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {loading ? 'Sending...' : (
                <>
                  <FiSend /> Send Message
                </>
              )}
            </motion.button>

            {status === 'success' && (
              <motion.p
                className="status-message success"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Message sent successfully! I'll get back to you soon.
              </motion.p>
            )}

            {status === 'error' && (
              <motion.p
                className="status-message error"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
              >
                Failed to send message. Please try again or email directly.
              </motion.p>
            )}
          </form>
        </motion.div>
      </div>

      <footer className="footer">
        <p>© 2025 {data.name}. Built with React & Iron Man inspiration.</p>
      </footer>
    </section>
  );
};

export default Contact;
