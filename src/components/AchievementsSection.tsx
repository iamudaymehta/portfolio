import React from 'react';
import '../styles/Achievements.css';

interface AchievementsProps {
  achievements: {
    title: string;
    list: string[];
  };
}

const AchievementsSection: React.FC<AchievementsProps> = ({ achievements }) => {
  return (
    <section id="achievements" className="achievements">
      <div className="container">
        <h2 className="section-title">{achievements.title}</h2>
        <div className="achievements-list">
          {achievements.list.map((achievement, index) => (
            <div key={index} className="achievement-item">
              <span className="achievement-icon">🏆</span>
              <p className="achievement-text">{achievement}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;