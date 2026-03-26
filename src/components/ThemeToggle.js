import React from 'react';
import { motion } from 'framer-motion';
import { FiSun, FiMoon } from 'react-icons/fi';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => (
  <motion.button
    className="theme-toggle"
    onClick={toggleTheme}
    whileHover={{ scale: 1.08 }}
    whileTap={{ scale: 0.92 }}
    title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
  >
    <motion.span
      key={theme}
      initial={{ rotate: -30, opacity: 0 }}
      animate={{ rotate: 0, opacity: 1 }}
      transition={{ duration: 0.25 }}
    >
      {theme === 'dark' ? <FiSun size={16} /> : <FiMoon size={16} />}
    </motion.span>
  </motion.button>
);

export default ThemeToggle;
