import React from 'react';
import { motion } from 'framer-motion';
import { FiBriefcase } from 'react-icons/fi';
import './Experience.css';

const Experience = ({ data }) => {
  if (!data.experience || data.experience.length === 0) return null;

  return (
    <section className="experience" id="experience">
      <div className="hexagon-pattern"></div>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
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
            className="experience-card"
            initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="exp-icon">
              <FiBriefcase />
            </div>
            <div className="exp-content">
              <h3 className="exp-title">{exp.title}</h3>
              <p className="exp-company">{exp.company}</p>
              <p className="exp-dates">{exp.dates}</p>
              <p className="exp-description">{exp.description}</p>
            </div>
            <div className="exp-glow"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
