import React from 'react';
import '../styles/Experience.css';

interface ExperienceProps {
  experience: {
    title: string;
    jobs: {
      company: string;
      location: string;
      position: string;
      type: string;
      duration: string;
      project: {
        name: string;
        description: string;
        technologies: string[];
      };
      responsibilities: string[];
    }[];
  };
}

const ExperienceSection: React.FC<ExperienceProps> = ({ experience }) => {
  return (
    <section id="experience" className="experience">
      <div className="container">
        <h2 className="section-title">{experience.title}</h2>
        <div className="experience-timeline">
          {experience.jobs.map((job, index) => (
            <div key={index} className="job-card">
              <div className="job-header">
                <h3 className="job-title">{job.position}</h3>
                <span className="job-company">{job.company}, {job.location}</span>
                <span className="job-duration">{job.duration}</span>
                <span className="job-type">{job.type}</span>
              </div>
              <div className="job-project">
                <h4 className="project-name">{job.project.name}</h4>
                <p className="project-description">{job.project.description}</p>
                <div className="project-technologies">
                  {job.project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <ul className="job-responsibilities">
                {job.responsibilities.map((responsibility, respIndex) => (
                  <li key={respIndex}>{responsibility}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;