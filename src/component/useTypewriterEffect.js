import { useState, useEffect } from 'react';

const useTypewriterEffect = (text, delay) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    let animationFrameId;

    const animateTyping = () => {
      if (currentIndex <= text.length) {
        setDisplayText(text.slice(0, currentIndex));
        setCurrentIndex(currentIndex + 1);
        animationFrameId = requestAnimationFrame(animateTyping);
      }
    };

    if (currentIndex <= text.length) {
      animationFrameId = requestAnimationFrame(animateTyping);
    }

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [text, currentIndex, delay]);

  return displayText;
};

export default useTypewriterEffect;
