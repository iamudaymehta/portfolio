import React, { useState, useEffect } from 'react';
import '../styles/HeroSection.css';
import { portfolioData } from '../helpers/constants';
import TypeWriter from './TypeWriter';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';

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
          <div className={`social-links ${portfolioData.socialLinks.length <= 3 ? 'few-links' : ''}`}>
                          {portfolioData.socialLinks.map((social, index) => {
                            let icon;
                            let iconColor;
                            switch(social.icon) {
                              case 'github':
                                icon = <FaGithub size={24} />;
                                iconColor = '#ffffff';
                                break;
                              case 'linkedin':
                                icon = <FaLinkedin size={24} />;
                                iconColor = '#0077B5';
                                break;
                              case 'twitter':
                                icon = <FaTwitter size={24} />;
                                iconColor = '#1DA1F2';
                                break;
                              case 'leetcode':
                                icon = <SiLeetcode size={24} />;
                                iconColor = '#FFA116';
                                break;
                              default:
                                icon = social.name;
                                iconColor = 'var(--text-primary)';
                            }
                            
                            return (
                              <a 
                                key={index} 
                                href={social.url} 
                                target="_blank" 
                                rel="noopener noreferrer"
                                className={`social-icon ${portfolioData.socialLinks.length <= 3 ? 'large-icon' : ''}`}
                                aria-label={`${social.name} profile`}
                                title={social.name}
                                style={{ 
                                  color: iconColor,
                                  borderColor: iconColor
                                }}
                              >
                                {icon}
                              </a>
                            );
                          })}
                        </div>

          <div className="hero-cta">
            <a href="#contact" className="btn btn-primary">Contact Me</a>
            <a 
              href="https://drive.google.com/file/d/1BMLHWfPQUF2uLrOtd1M0j68As2JEcmc1/view?usp=sharing" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="btn btn-primary"
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