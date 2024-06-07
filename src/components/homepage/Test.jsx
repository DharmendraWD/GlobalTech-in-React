import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const ScrollEffectComponent = () => {
  const elementRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const element = elementRef.current;

      // Get the position of the element relative to the viewport
      const { top } = element.getBoundingClientRect();

      // If the element is at the top of the viewport or above it
      if (top <= 0) {
        gsap.to(element, {
          backgroundColor: 'red',
          duration: 0.5,
        });
      } else {
        // If the element is below the top of the viewport
        gsap.to(element, {
          backgroundColor: 'transparent',
          duration: 0.5,
        });
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div>
      {/* This is the element you want to animate */}
      <div
        ref={elementRef}
        style={{
          width: '100px',
          height: '100px',
          margin: '200px 0',
        }}
      >
        Element
      </div>
      {/* Other content */}
      <div style={{ height: '2000px' }}>Scroll down...</div>
    </div>
  );
};

export default ScrollEffectComponent;
