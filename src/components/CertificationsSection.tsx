import React from 'react';
import '../styles/Certifications.css';
import { SiCoursera, SiUdemy } from 'react-icons/si';

interface CertificationsProps {
  certifications: {
    title: string;
    list: {
      name: string;
      issuer: string;
      link: string;
    }[];
  };
}

const getIssuerIcon = (issuer: string) => {
  switch(issuer.toLowerCase()) {
    case 'coursera':
      return <SiCoursera />;
    case 'udemy':
      return <SiUdemy />;
    default:
      return <span>📜</span>;
  }
};

const CertificationsSection: React.FC<CertificationsProps> = ({ certifications }) => {
  return (
    <section id="certifications" className="certifications">
      <div className="container">
        <h2 className="section-title">{certifications.title}</h2>
        <div className="certifications-grid">
          {certifications.list.map((cert, index) => (
            <a 
              href={cert.link}
              target="_blank"
              rel="noopener noreferrer"
              key={index} 
              className="certification-card"
            >
              <div className="certification-icon">
                {getIssuerIcon(cert.issuer)}
              </div>
              <div className="certification-details">
                <h3 className="certification-name">{cert.name}</h3>
                <p className="certification-issuer">{cert.issuer}</p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CertificationsSection;