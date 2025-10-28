import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub } from 'react-icons/fi';
import './Projects.css';

const Projects = ({ data }) => {
  return (
    <section className="projects" id="projects">
      <div className="hexagon-pattern"></div>
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>

      <div className="projects-grid">
        {data.projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -10 }}
          >
            <div className="project-glow"></div>
            <h3 className="project-name">{project.name}</h3>
            <p className="project-description">{project.description}</p>
            
            <div className="project-tech">
              {project.technologies.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>

            {project.github && (
              <div className="project-links">
                <motion.a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub /> View Code
                </motion.a>
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
