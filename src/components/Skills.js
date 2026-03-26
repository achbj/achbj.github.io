import React from 'react';
import { motion } from 'framer-motion';
import './Skills.css';

const Skills = ({ data }) => {
  // Support both old flat array and new grouped array
  const isGrouped = data.skills.length > 0 && typeof data.skills[0] === 'object' && data.skills[0].group;

  if (!isGrouped) {
    return (
      <section className="skills" id="skills">
        <motion.h2 className="section-title" initial={{ opacity: 0, y: -40 }}
          whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
          Skills
        </motion.h2>
        <div className="skills-flat-grid">
          {data.skills.map((skill, index) => (
            <motion.div key={index} className="skill-tag"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.04 }}
              whileHover={{ scale: 1.06 }}>
              {skill}
            </motion.div>
          ))}
        </div>
      </section>
    );
  }

  return (
    <section className="skills" id="skills">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Skills
      </motion.h2>

      <div className="skills-groups">
        {data.skills.map((group, gIndex) => (
          <motion.div
            key={gIndex}
            className="skill-group"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: gIndex * 0.1 }}
          >
            <div className="skill-group-header">
              <span className="skill-group-dot"></span>
              <h4 className="skill-group-name">{group.group}</h4>
            </div>
            <div className="skill-items">
              {group.items.map((item, iIndex) => (
                <motion.span
                  key={iIndex}
                  className="skill-tag"
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: gIndex * 0.1 + iIndex * 0.04 }}
                  whileHover={{ scale: 1.06, y: -2 }}
                >
                  {item}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
