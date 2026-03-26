import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiMapPin } from 'react-icons/fi';
import profileImg from '../data/profile.png';
import './Hero.css';

const Hero = ({ data }) => {
  const [displayText, setDisplayText] = useState('');
  const [lineIndex, setLineIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const lines = React.useMemo(
    () => data.typewriterLines || [data.title],
    [data.typewriterLines, data.title]
  );

  useEffect(() => {
    const currentLine = lines[lineIndex];
    let timeout;

    if (!isDeleting && charIndex < currentLine.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentLine.slice(0, charIndex + 1));
        setCharIndex(c => c + 1);
      }, 45);
    } else if (!isDeleting && charIndex === currentLine.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2200);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentLine.slice(0, charIndex - 1));
        setCharIndex(c => c - 1);
      }, 22);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setLineIndex(i => (i + 1) % lines.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, lineIndex, lines]);

  return (
    <section className="hero">
      <div className="hero-content">
        <motion.div
          className="hero-image-container"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: 'easeOut' }}
        >
          <div className="avatar-ring ring-1"></div>
          <div className="avatar-ring ring-2"></div>
          <img src={profileImg} alt={data.name} className="hero-image" />
          <div className="avatar-status">
            <span className="status-dot"></span>
            <span className="status-text">Available</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="hero-label mono">
            <span className="label-bracket">&gt;</span> ML Engineer · Researcher · Builder
          </div>
          <h1 className="hero-name">{data.name}</h1>

          <div className="hero-typewriter mono">
            <span className="typewriter-text">{displayText}</span>
            <span className="typewriter-cursor">▋</span>
          </div>

          <div className="hero-location">
            <FiMapPin size={13} />
            <span>{data.location}</span>
          </div>

          <div className="hero-social">
            <motion.a
              href={`https://${data.github}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              title="GitHub"
            >
              <FiGithub />
            </motion.a>
            <motion.a
              href={`https://${data.linkedin}`}
              target="_blank"
              rel="noopener noreferrer"
              className="social-icon"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              title="LinkedIn"
            >
              <FiLinkedin />
            </motion.a>
            <motion.a
              href={`mailto:${data.email}`}
              className="social-icon"
              whileHover={{ scale: 1.15, y: -2 }}
              whileTap={{ scale: 0.9 }}
              title="Email"
            >
              <FiMail />
            </motion.a>
          </div>

          <div className="hero-ctas">
            <motion.a
              href="#projects"
              className="cta-primary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              View Projects
            </motion.a>
            <motion.a
              href="#contact"
              className="cta-secondary"
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.96 }}
            >
              Get In Touch
            </motion.a>
          </div>
        </motion.div>
      </div>

      <motion.div
        className="scroll-indicator"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity }}
      >
        <div className="scroll-line"></div>
        <span className="scroll-label mono">scroll</span>
      </motion.div>
    </section>
  );
};

export default Hero;
