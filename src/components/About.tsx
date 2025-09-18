import React from 'react';
import { Helmet } from 'react-helmet-async';
import HeroSection from './about/HeroSection';
import MissionSection from './about/MissionSection';
import AcademicProgramsSection from '../components/about/AcademicProgramsSection';
import TeachingMethodologySection from '../components/about/TeachingMethodologySection';
import DiversitySection from '../components/about/DiversitySection';
import CareerDevelopmentSection from './about/CareerDevelopmentSection';

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-white to-[#f6f0e8]">
      <Helmet>
        <title>About | Global Business School</title>
        <meta name="description" content="Learn about Global Business School's mission, values, and our commitment to providing high-quality professional education in Kandy." />
      </Helmet>
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