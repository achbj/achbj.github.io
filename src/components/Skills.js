import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = ({ data }) => {
  return (
    <section className="skills" id="skills">
      <div className="hexagon-pattern"></div>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <div className="skills-grid">
        {data.skills.map((skill, index) => (
          <motion.div
            key={index}
            className="skill-card"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.05 }}
            whileHover={{ scale: 1.08, rotate: 2 }}
          >
            <div className="skill-hexagon"></div>
            <span className="skill-name">{skill}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
