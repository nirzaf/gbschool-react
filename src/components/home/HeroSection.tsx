import React from 'react';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  const heroImage = 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80';

  return (
    <section 
      className="relative h-screen flex items-center"
      style={{
        backgroundImage: `url(${heroImage})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#101b43]/70 to-[#1e2d5b]/70"></div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-aos="fade-up">
            <span className="text-white">Welcome to</span>{' '}
            <span className="text-[#F59E0B]">Global Business School</span>
          </h1>
          
          <div className="text-xl md:text-3xl text-white mb-8" data-aos="fade-up" data-aos-delay="200">
            <ReactTyped
              strings={[
                "Nurturing Future Business Leaders",
                "Fostering Innovation & Excellence",
                "Building Global Perspectives",
                "Empowering Through Education",
                "Creating Tomorrow's Entrepreneurs"
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
              className="inline-block"
            />
          </div>

          <p className="text-xl md:text-2xl mb-8 text-[#f6f0e8]/90" data-aos="fade-up" data-aos-delay="300">
            Empowering Futures Through Professional Education
          </p>
          
          <div className="mt-8 flex flex-col sm:flex-row gap-4" data-aos="fade-up" data-aos-delay="400">
            <Link
              to="/courses"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white font-semibold hover:from-[#7C3AED] hover:to-[#2563EB] shadow-md hover:shadow-lg transition-all duration-300"
            >
              Explore Courses
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 rounded-lg border-2 border-[#F59E0B] text-[#F59E0B] font-semibold hover:bg-[#F59E0B] hover:text-white transition-all duration-300"
            >
              Contact Us
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
