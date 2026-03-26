import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiStar, FiChevronDown } from 'react-icons/fi';
import './Projects.css';

const Projects = ({ data }) => {
  const [showAll, setShowAll] = useState(false);
  const featured = data.projects.filter(p => p.featured);
  const rest = data.projects.filter(p => !p.featured);
  const visible = showAll ? data.projects : featured;

  return (
    <section className="projects" id="projects">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {visible.map((project, index) => (
          <motion.div
            key={project.name}
            className={`project-card ${project.featured ? 'featured' : ''}`}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            whileHover={{ y: -5 }}
          >
            <div className="project-card-inner">
              <div className="project-header">
                <div className="project-icon-row">
                  {project.featured && (
                    <span className="featured-badge">
                      <FiStar size={10} /> Featured
                    </span>
                  )}
                </div>
                <div className="project-links">
                  {project.github && (
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-icon"
                      whileHover={{ scale: 1.15, y: -1 }}
                      title="View Code"
                    >
                      <FiGithub />
                    </motion.a>
                  )}
                  {project.demo && (
                    <motion.a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link-icon"
                      whileHover={{ scale: 1.15, y: -1 }}
                      title="Live Demo"
                    >
                      <FiExternalLink />
                    </motion.a>
                  )}
                </div>
              </div>

              <h3 className="project-name">{project.name}</h3>
              <p className="project-tagline">{project.tagline}</p>
              <p className="project-description">{project.description}</p>

              {project.highlight && (
                <div className="project-highlight">
                  <span className="highlight-dot"></span>
                  {project.highlight}
                </div>
              )}

              <div className="project-tech">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="tech-tag">{tech}</span>
                ))}
              </div>
            </div>
            <div className="project-glow"></div>
          </motion.div>
        ))}
      </div>

      {rest.length > 0 && (
        <motion.div className="show-more-container"
          initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <button className="show-more-btn" onClick={() => setShowAll(v => !v)}>
            {showAll ? 'Show Less' : `Show ${rest.length} More Projects`}
            <motion.span animate={{ rotate: showAll ? 180 : 0 }} transition={{ duration: 0.3 }}>
              <FiChevronDown />
            </motion.span>
          </button>
        </motion.div>
      )}
    </section>
  );
};

export default Projects;
