import React from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import profileImg from '../data/profile.png';
import './Hero.css';

const Hero = ({ data }) => {
  return (
    <section className="hero">
      <div className="hexagon-pattern"></div>
      <div className="hero-content">
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="arc-reactor-ring"></div>
          <img src={profileImg} alt={data.name} className="hero-image" />
        </motion.div>

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <h1 className="hero-name">{data.name}</h1>
          <h2 className="hero-title">{data.title}</h2>
          <p className="hero-status">{data.status}</p>

          <div className="hero-social">
            <motion.a
              href={`https://${data.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiGithub />
            </motion.a>
            <motion.a
              href={`https://${data.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiLinkedin />
            </motion.a>
            <motion.a
              href={`mailto:${data.email}`}
              className="social-icon"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiMail />
            </motion.a>
          </div>

          <motion.a
            href="#contact"
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get In Touch
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        <div className="scroll-line"></div>
      </motion.div>
    </section>
  );
};

export default Hero;
