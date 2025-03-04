import React, { useState, useEffect } from 'react';

interface TypeWriterProps {
  texts: string[];
  typeSpeed?: number;
  eraseSpeed?: number;
  delayBetween?: number;
  className?: string;
}

const TypeWriter: React.FC<TypeWriterProps> = ({
  texts,
  typeSpeed = 100,
  eraseSpeed = 50,
  delayBetween = 2000,
  className
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  // const [isTyping, setIsTyping] = useState(true);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout: NodeJS.Timeout;

    const currentText = texts[currentIndex];
    
    if (!isDeleting) {
      if (displayText.length < currentText.length) {
        // Still typing
        timeout = setTimeout(() => {
          setDisplayText(currentText.slice(0, displayText.length + 1));
        }, typeSpeed);
      } else {
        // Finished typing, wait before deleting
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetween);
      }
    } else if (isDeleting) {
      if (displayText.length === 0) {
        // Finished deleting, move to next text
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
      } else {
        // Still deleting
        timeout = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, eraseSpeed);
      }
    }

    return () => clearTimeout(timeout);
  }, [displayText, currentIndex, isDeleting, texts, typeSpeed, eraseSpeed, delayBetween]);

  return (
    <span className={className}>
      {displayText}
      {/* <span className="typing-cursor">|</span> */}
    </span>
  );
};

export default TypeWriter;