import React, { useEffect, useRef } from 'react';
import './NeuralBackground.css';

const NeuralBackground = ({ theme }) => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Respect reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const isDark = theme === 'dark';
    const nodeColor = isDark ? 'rgba(0, 212, 255,' : 'rgba(0, 102, 204,';
    const lineColor = isDark ? 'rgba(0, 212, 255,' : 'rgba(0, 102, 204,';
    const accentColor = isDark ? 'rgba(0, 255, 136,' : 'rgba(5, 150, 105,';

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4;
        this.vy = prefersReducedMotion ? 0 : (Math.random() - 0.5) * 0.4;
        this.radius = Math.random() * 1.5 + 0.5;
        this.pulse = Math.random() * Math.PI * 2;
        this.isAccent = Math.random() < 0.15; // 15% are green accent nodes
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulse += 0.02;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;
      }

      draw() {
        const pulseFactor = 0.7 + Math.sin(this.pulse) * 0.3;
        const opacity = isDark ? 0.6 * pulseFactor : 0.5 * pulseFactor;
        const color = this.isAccent ? accentColor : nodeColor;

        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = `${color}${opacity})`;
        ctx.fill();

        // Glow for accent nodes
        if (this.isAccent) {
          ctx.beginPath();
          ctx.arc(this.x, this.y, this.radius * 3, 0, Math.PI * 2);
          ctx.fillStyle = `${color}${0.08 * pulseFactor})`;
          ctx.fill();
        }
      }
    }

    const initParticles = () => {
      particles = [];
      const density = prefersReducedMotion ? 30000 : 18000;
      const particleCount = Math.min(
        Math.floor((canvas.width * canvas.height) / density),
        120
      );
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    initParticles();

    const connectParticles = () => {
      const maxDist = 140;
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const dx = particles[i].x - particles[j].x;
          const dy = particles[i].y - particles[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < maxDist) {
            const opacity = (isDark ? 0.18 : 0.12) * (1 - distance / maxDist);
            ctx.beginPath();
            ctx.strokeStyle = `${lineColor}${opacity})`;
            ctx.lineWidth = 0.6;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => { p.update(); p.draw(); });
      connectParticles();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  return <canvas ref={canvasRef} className="neural-background" />;
};

export default NeuralBackground;
