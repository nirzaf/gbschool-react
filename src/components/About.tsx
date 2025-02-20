import React from 'react';
import HeroSection from './about/HeroSection';
import MissionSection from './about/MissionSection';
import AcademicProgramsSection from '../components/about/AcademicProgramsSection';
import TeachingMethodologySection from '../components/about/TeachingMethodologySection';
import DiversitySection from '../components/about/DiversitySection';
import CareerDevelopmentSection from './about/CareerDevelopmentSection';

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-white to-[#f6f0e8]">
      <HeroSection />
      <MissionSection />
      <AcademicProgramsSection />
      <TeachingMethodologySection />
      <DiversitySection />
      <CareerDevelopmentSection />
    </div>
  );
};

export default About;