import React from 'react';
import { ReactTyped } from 'react-typed';

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
          
          <div data-aos="fade-up" data-aos-delay="400">
            <a
              href="/courses"
              className="inline-block bg-[#F59E0B] text-white font-semibold px-8 py-3 rounded-full hover:bg-[#D97706] transition duration-300"
            >
              Explore Our Courses
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
