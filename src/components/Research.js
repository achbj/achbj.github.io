import React from 'react';
import { motion } from 'framer-motion';
import { FiExternalLink, FiBookOpen, FiAward } from 'react-icons/fi';
import './Research.css';

const Research = ({ data }) => {
  if (!data.research || data.research.length === 0) return null;

  return (
    <section className="research" id="research">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Research
      </motion.h2>

      <div className="research-grid">
        {data.research.map((paper, index) => (
          <motion.div
            key={index}
            className="research-card"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            <div className="research-card-header">
              <div className="research-icon">
                <FiBookOpen />
              </div>
              <div className="research-badges">
                <span className="badge badge-venue">
                  <FiAward size={11} />
                  {paper.venue}
                </span>
                <span className="badge badge-status">
                  {paper.status}
                </span>
                <span className="badge badge-year">{paper.year}</span>
              </div>
            </div>

            <h3 className="research-title">{paper.title}</h3>
            <p className="research-description">{paper.description}</p>

            <div className="research-tags">
              {paper.tags.map((tag, i) => (
                <span key={i} className="research-tag">{tag}</span>
              ))}
            </div>

            <motion.a
              href={paper.link}
              target="_blank"
              rel="noopener noreferrer"
              className="research-link"
              whileHover={{ x: 4 }}
            >
              <FiExternalLink size={14} />
              Read on IEEE Xplore
            </motion.a>

            <div className="research-glow"></div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Research;
