import React, { useState, useEffect } from 'react';
import './App.css';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import NeuralBackground from './components/NeuralBackground';
import CustomCursor from './components/CustomCursor';
import ThemeToggle from './components/ThemeToggle';
import data from './data/data.json';

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="App">
      <NeuralBackground theme={theme} />
      <CustomCursor theme={theme} />
      <ThemeToggle theme={theme} toggleTheme={toggleTheme} />
      <Hero data={data} />
      <About data={data} />
      <Skills data={data} />
      <Experience data={data} />
      <Projects data={data} />
      <Contact data={data} />
    </div>
  );
}

export default App;
