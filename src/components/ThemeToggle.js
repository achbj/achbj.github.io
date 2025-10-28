import React from 'react';
import { FiSun, FiMoon } from 'react-icons/fi';
import './ThemeToggle.css';

const ThemeToggle = ({ theme, toggleTheme }) => {
  return (
    <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
      {theme === 'dark' ? <FiSun /> : <FiMoon />}
    </button>
  );
};

export default ThemeToggle;
