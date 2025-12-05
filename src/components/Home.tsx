import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import FeaturesSection from './home/FeaturesSection';
import TestimonialsSection from './home/TestimonialsSection';
import NewsletterSection from './home/NewsletterSection';
import HeroSection from './home/HeroSection';
import AboutGBSSection from './home/AboutGBSSection';
import VisionMissionSection from './home/VisionMissionSection';
import StatsSection from './home/StatsSection';
import StructuredData from './common/StructuredData';
import { generateOrganizationSchema } from '../lib/schemas';
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
        <title>Global Business School Kandy | Professional Courses in Accounting & Business</title>
        <meta name="description" content="Global Business School offers ACCA, Revit Architecture, and professional accounting courses in Kandy, Sri Lanka. ACCA Platinum Approved Learning Partner with Oxford Brookes University affiliation." />
        <meta property="og:title" content="Global Business School Kandy | Professional Education" />
        <meta property="og:description" content="Transform your career with professional qualifications from Global Business School, Kandy's leading institution for ACCA and business education." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gbschool.cc" />
        <meta property="og:image" content="https://gbschool.cc/og-image.jpg" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://gbschool.cc" />
      </Helmet>
      <StructuredData data={generateOrganizationSchema()} />
      {/* Hero Section */}
      <HeroSection />

      {/* About GBS Section */}
      <AboutGBSSection />

      {/* Vision Mission Section */}
      <VisionMissionSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Features Section */}
      <div className="bg-gradient-to-br from-white to-surface-beach">
        <FeaturesSection />
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-br from-surface-beach to-white">
        <TestimonialsSection />
      </div>

      {/* Newsletter Section */}
      <div className="bg-gradient-to-br from-primary-dark to-primary-mythical text-white">
        <NewsletterSection />
      </div>
    </div>
  );
};

export default Home;