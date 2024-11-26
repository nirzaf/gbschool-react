import React from 'react';
import FeaturesSection from './home/FeaturesSection';
import TestimonialsSection from './home/TestimonialsSection';
import NewsletterSection from './home/NewsletterSection';

const Home: React.FC = () => {
  return (
    <div>
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