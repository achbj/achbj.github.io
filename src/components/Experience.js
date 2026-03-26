import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase, FiCalendar, FiStar } from 'react-icons/fi';
import './Experience.css';

const Experience = ({ data }) => {
  if (!data.experience || data.experience.length === 0) return null;

  return (
    <section className="experience" id="experience">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Experience
      </motion.h2>

      <div className="experience-timeline">
        {data.experience.map((exp, index) => (
          <motion.div
            key={index}
            className="exp-item"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
          >
            <div className="exp-line-container">
              <div className="exp-dot">
                <FiBriefcase size={12} />
              </div>
              {index < data.experience.length - 1 && <div className="exp-line"></div>}
            </div>

            <div className="exp-card">
              <div className="exp-header">
                <div>
                  <h3 className="exp-title">{exp.title}</h3>
                  <p className="exp-company">{exp.company}</p>
                </div>
                <div className="exp-meta">
                  <span className="exp-dates">
                    <FiCalendar size={11} />
                    {exp.dates}
                  </span>
                  {exp.highlight && (
                    <span className="exp-highlight">
                      <FiStar size={10} />
                      {exp.highlight}
                    </span>
                  )}
                </div>
              </div>

              {exp.bullets && (
                <ul className="exp-bullets">
                  {exp.bullets.map((bullet, i) => (
                    <li key={i}>{bullet}</li>
                  ))}
                </ul>
              )}
              {exp.description && !exp.bullets && (
                <p className="exp-description">{exp.description}</p>
              )}

              <div className="exp-glow"></div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
