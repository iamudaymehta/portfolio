import React from 'react';
import '../styles/Skills.css';

interface SkillsProps {
  skills: {
    title: string;
    categories: {
      title: string;
      skills: string[];
    }[];
  };
}

const SkillsSection: React.FC<SkillsProps> = ({ skills }) => {
  return (
    <section id="skills" className="skills-section">
      <div className="container">
        <h2 className="section-title">{skills.title}</h2>
        <div className="skills-grid">
          {skills.categories.map((category, index) => (
            <div key={index} className="skill-card">
              <div className="skill-card-inner">
                <h3 className="skill-card-title">{category.title}</h3>
                <div className="skill-list-wrapper">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-tag">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;