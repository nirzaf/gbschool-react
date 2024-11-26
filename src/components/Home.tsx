import React from 'react';
import HeroSection from './home/HeroSection';
import FeaturesSection from './home/FeaturesSection';
import TestimonialsSection from './home/TestimonialsSection';
import NewsletterSection from './home/NewsletterSection';

const Home: React.FC = () => {
  return (
    <div>
      {/* Hero Section with Gradient Overlay */}
      <div className="relative bg-gradient-to-br from-[#101b43] to-[#1e2d5b]">
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[#101b43]/30"></div>
        <HeroSection />
      </div>

      {/* Features Section */}
      <div className="bg-gradient-to-br from-white to-[#f6f0e8]">
        <FeaturesSection />
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-br from-[#f6f0e8] to-white">
        <TestimonialsSection />
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-br from-[#101b43] to-[#1e2d5b] text-white">
        <NewsletterSection />
      </div>
    </div>
  );
};

export default Home;