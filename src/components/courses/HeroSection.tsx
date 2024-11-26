import React from 'react';

interface HeroSectionProps {
  title: string;
  description: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ title, description }) => {
  return (
    <section className="relative">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#101b43] to-[#1e2d5b]">
        <div className="absolute inset-0 bg-[#cab293]/10 mix-blend-overlay"></div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-[#f6f0e8] to-[#cab293] bg-clip-text text-transparent">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-[#f6f0e8]/90">
            {description}
          </p>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f6f0e8] to-transparent"></div>
    </section>
  );
};

export default HeroSection;
