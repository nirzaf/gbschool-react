import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import FeaturesSection from './home/FeaturesSection';
import TestimonialsSection from './home/TestimonialsSection';
import NewsletterSection from './home/NewsletterSection';
import HeroSection from './home/HeroSection';
import AboutGBSSection from './home/AboutGBSSection';
import VisionMissionSection from './home/VisionMissionSection';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Home: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div>
      <Helmet>
        <title>Global Business School | Home</title>
        <meta name="description" content="Welcome to Global Business School, Kandy. We offer a range of professional courses to help you achieve your career goals." />
      </Helmet>
      {/* Hero Section */}
      <HeroSection />

      {/* About GBS Section */}
      <AboutGBSSection />

      {/* Vision Mission Section */}
      <VisionMissionSection />

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