import React from 'react';
import '../styles/Education.css';

interface EducationProps {
  education: {
    title: string;
    schools: {
      name: string;
      location: string;
      degree: string;
      duration: string;
      score: string;
      courses: string[];
    }[];
  };
}

const EducationSection: React.FC<EducationProps> = ({ education }) => {
  return (
    <section id="education" className="education">
      <div className="container">
        <h2 className="section-title">{education.title}</h2>
        <div className="education-grid">
          {education.schools.map((school, index) => (
            <div key={index} className="education-card">
              <div className="school-header">
                <h3 className="school-name">{school.name}</h3>
                <span className="school-location">{school.location}</span>
              </div>
              <div className="school-details">
                <h4 className="degree">{school.degree}</h4>
                <span className="duration">{school.duration}</span>
                <span className="score">{school.score}</span>
              </div>
              <div className="courses">
                <h5>Relevant Courses</h5>
                <ul className="course-list">
                  {school.courses.map((course, courseIndex) => (
                    <li key={courseIndex}>{course}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;