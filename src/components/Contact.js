import React from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiGithub, FiLinkedin, FiMapPin, FiClock } from 'react-icons/fi';
import './Contact.css';

const Contact = ({ data }) => {
  return (
    <section className="contact" id="contact">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </motion.h2>

      <div className="contact-wrapper">
        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <p className="contact-cta">{data.contact?.cta || 'Let\'s work together.'}</p>

          <div className="contact-info">
            <div className="contact-info-item">
              <FiMapPin size={14} />
              <span>{data.location}</span>
            </div>
            <div className="contact-info-item">
              <FiClock size={14} />
              <span>{data.contact?.availability || data.availability}</span>
            </div>
          </div>

          <div className="contact-links">
            <motion.a
              href={`mailto:${data.contact?.email || data.email}`}
              className="contact-link primary-link"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
            >
              <FiMail />
              {data.contact?.email || data.email}
            </motion.a>

            <motion.a
              href={`https://${data.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              whileHover={{ x: 4 }}
            >
              <FiLinkedin />
              LinkedIn — {data.linkedin}
            </motion.a>

            <motion.a
              href={`https://${data.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="contact-link"
              whileHover={{ x: 4 }}
            >
              <FiGithub />
              {data.github}
            </motion.a>

            {data.github2 && (
              <motion.a
                href={`https://${data.github2}`}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-link"
                whileHover={{ x: 4 }}
              >
                <FiGithub />
                {data.github2}
              </motion.a>
            )}
          </div>
        </motion.div>

        <motion.div
          className="contact-right"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="contact-card">
            <div className="contact-card-header mono">
              <span className="card-dot dot-red"></span>
              <span className="card-dot dot-yellow"></span>
              <span className="card-dot dot-green"></span>
              <span className="card-label">quick_intro.py</span>
            </div>
            <pre className="contact-code">{`# Bijaya Acharya
# ML Engineer · AI Researcher

profile = {
  "name": "${data.name}",
  "role": "MSc Data Analytics",
  "location": "${data.location}",
  "languages": ["Python", "SQL", "German(A2)"],
  "seeking": "Werkstudent / Research roles",
  "ieee_paper": True,
  "gpt_from_scratch": True,  # PIGPT-60M
}

# Let's connect →
email = "${data.contact?.email || data.email}"`}
            </pre>
          </div>
        </motion.div>
      </div>

      <div className="contact-footer">
        <p className="footer-text mono">
          Built with React · Deployed on GitHub Pages · {new Date().getFullYear()}
        </p>
        <p className="footer-text mono">
          <a href="/llms.txt" className="footer-link">llms.txt</a>
          {' · '}
          <a href="/ai.json" className="footer-link">ai.json</a>
        </p>
      </div>
    </section>
  );
};

export default Contact;
