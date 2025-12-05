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
    <div className="bg-gradient-to-br from-white to-surface-beach">
      <Helmet>
        <title>About Us | Global Business School Kandy</title>
        <meta name="description" content="Learn about Global Business School's mission, values, and our commitment to providing high-quality professional education in Kandy. ACCA Platinum Approved Learning Partner." />
        <meta property="og:title" content="About Global Business School" />
        <meta property="og:description" content="Discover our mission to provide world-class professional education in Kandy, Sri Lanka." />
        <link rel="canonical" href="https://gbschool.cc/about" />
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