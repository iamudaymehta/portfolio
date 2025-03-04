import React, { useState, useEffect } from 'react';
import '../styles/HeroSection.css';
import { portfolioData } from '../helpers/constants';
import TypeWriter from './TypeWriter';

const HeroSection: React.FC = () => {
  const { hero } = portfolioData;
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [currentSubtitleIndex, setCurrentSubtitleIndex] = useState(0);

  useEffect(() => {
    // Start showing subtitle after the title is completely typed
    const titleTimeout = setTimeout(() => {
      setShowSubtitle(true);
    }, hero.title.length * 100 + 500); // Wait for title to finish typing

    return () => clearTimeout(titleTimeout);
  }, []);

  useEffect(() => {
    let subtitleInterval: NodeJS.Timeout;
    
    if (showSubtitle) {
      subtitleInterval = setInterval(() => {
        setCurrentSubtitleIndex((prevIndex) => 
          (prevIndex + 1) % hero.subtitles.length
        );
      }, 3000); // Change subtitle every 3 seconds
    }

    return () => clearInterval(subtitleInterval);
  }, [showSubtitle, hero.subtitles]);

  return (
    <section className="hero" id="about" > 
      <div className="container">
        <div className="hero-content">
          <h1 className="hero-title">{hero.title}</h1>
          <h2 className="hero-subtitle">
              <TypeWriter 
                texts={hero.subtitles}
                typeSpeed={100}
                eraseSpeed={50}
                delayBetween={2000}
              />
              </h2>
          <p className="hero-description">{hero.description}</p>
          
          {/* Social Links */}
          <div className="hero-social-links">
            {portfolioData.socialLinks.map((social, index) => (
              <a 
                key={index} 
                href={social.url} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="social-link"
              >
                {social.icon === 'github' && '🐱'}
                {social.icon === 'linkedin' && '💼'}
                {social.icon === 'twitter' && '🐦'}
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a 
              href="https://drive.google.com/file/d/1euYdSdCjIN77G6xGVRgnIZMlzs2NH0MT/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-secondary"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;