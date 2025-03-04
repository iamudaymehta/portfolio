import React from 'react';
import '../styles/main.css';
import { portfolioData } from '../helpers/constants';

import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import SkillsSection from '../components/SkillsSection';
import ExperienceSection from '../components/ExperienceSection';
import EducationSection from '../components/EducationSection';
import AchievementsSection from '../components/AchievementsSection';
import CertificationsSection from '../components/CertificationsSection';
import ContactSection from '../components/ContactSection';

const Home: React.FC = () => {
  const { 
    skills, 
    experience, 
    education, 
    achievements, 
    certifications 
  } = portfolioData;

  return (
    <div>
      {/* Navigation */}
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* Skills Section */}
      <SkillsSection skills={skills} />

      {/* Experience Section */}
      <ExperienceSection experience={experience} />

      {/* Education Section */}
      <EducationSection education={education} />

      {/* Achievements Section */}
      <AchievementsSection achievements={achievements} />

      {/* Certifications Section */}
      <CertificationsSection certifications={certifications} />

      {/* Contact Section */}
      <ContactSection />
    </div>
  );
};

export default Home;