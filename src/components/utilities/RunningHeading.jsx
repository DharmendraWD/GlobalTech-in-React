import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

function RunningHeading({ label }) {
  const textRef = useRef(null);

  useEffect(() => {
    const textElement = textRef.current;

    // Clear previous content
    textElement.innerHTML = '';

    // Split the label into an array of characters
    const characters = label.split("");

    // Create a timeline for the animation
    const tl = gsap.timeline({ repeat: -1, repeatDelay: 1 }); // Infinite repeat with a delay of 1 second between repetitions

    // Loop through each character
    characters.forEach((char, index) => {
      // Create a span element for each character
      const span = document.createElement("span");
      span.textContent = char;
      span.style.opacity = 0; // Start with opacity 0
      
      // Append the span to the text element
      textElement.appendChild(span);
      
      // Animate the opacity of the span
      tl.to(span, { opacity: 1, duration: 0.5, ease: "power3.out" }, index * 0.1); // Adjust the delay as needed
    });

    // Repeat the animation
    tl.to(textElement.children, { opacity: 0, duration: 0.5, delay: 1 }); // Fade out
    tl.to(textElement.children, { opacity: 1, duration: 0.5, delay: 1}); // Fade in
  }, [label]);

  return (
    <>
    <h1 ref={textRef} className='runningHeading text-xl text-center mt-[25px]' ></h1>
    </>
  );
}

export default RunningHeading;
