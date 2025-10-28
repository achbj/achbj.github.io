import React, { useEffect, useRef } from 'react';
import './CustomCursor.css';

const CustomCursor = ({ theme }) => {
  const cursorRef = useRef(null);
  const cursorGlowRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorGlow = cursorGlowRef.current;

    const moveCursor = (e) => {
      const x = e.clientX;
      const y = e.clientY;

      cursor.style.transform = `translate(${x}px, ${y}px)`;
      cursorGlow.style.transform = `translate(${x}px, ${y}px)`;
    };

    const handleMouseDown = () => {
      cursor.style.transform = `${cursor.style.transform} scale(0.8)`;
    };

    const handleMouseUp = () => {
      cursor.style.transform = cursor.style.transform.replace('scale(0.8)', '');
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mousedown', handleMouseDown);
    window.addEventListener('mouseup', handleMouseUp);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mousedown', handleMouseDown);
      window.removeEventListener('mouseup', handleMouseUp);
    };
  }, []);

  return (
    <>
      <div ref={cursorGlowRef} className="cursor-glow"></div>
      <div ref={cursorRef} className="custom-cursor">
        <div className="cursor-inner"></div>
      </div>
    </>
  );
};

export default CustomCursor;
