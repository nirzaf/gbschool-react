import React from 'react';
import HeroSection from './about/HeroSection';
import MissionSection from './about/MissionSection';
import TeamSection from './about/TeamSection';
import ValuesSection from './about/ValuesSection';

const About: React.FC = () => {
  return (
    <div className="bg-gradient-to-br from-white to-[#f6f0e8]">
      <HeroSection />
      <MissionSection />
      <ValuesSection />
      <TeamSection />
    </div>
  );
};

export default About;