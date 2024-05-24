import React, { useEffect, useState, useRef } from 'react';
import hands from '../../media/hands.png';
import sy from './mask.module.css';

const HoverReveal = () => {
    const [mousePosition, setMousePosition] = useState({ x: '50%', y: '50%' });
    const containerRef = useRef(null);
    const requestRef = useRef();
  
    const handleMouseMove = (e) => {
      const rect = containerRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setMousePosition({ x: `${x}%`, y: `${y}%` });
    };
  
    const updateMousePosition = (e) => {
      requestRef.current = requestAnimationFrame(() => handleMouseMove(e));
    };
  
    useEffect(() => {
      const container = containerRef.current;
      container.addEventListener('mousemove', updateMousePosition);
  
      return () => {
        container.removeEventListener('mousemove', updateMousePosition);
        cancelAnimationFrame(requestRef.current);
      };
    }, []);
    return (
        <div
            className={sy.revealcont}
            ref={containerRef}
            style={{ '--mouse-x': mousePosition.x, '--mouse-y': mousePosition.y }}
        >
            <div className={sy.revealed}></div>
        </div>
    )
}

export default HoverReveal;