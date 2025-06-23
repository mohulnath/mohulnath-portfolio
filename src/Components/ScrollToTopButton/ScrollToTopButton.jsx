import React, { useEffect, useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import './ScrollToTopButton.css';

export default function ScrollToTopButton() {
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowButton(window.scrollY > 100); // only 200px scroll required now
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {showButton && (
        <button className="scroll-to-top-btn" onClick={scrollToTop}>
          <FaArrowUp />
        </button>
      )}
    </>
  );
}
