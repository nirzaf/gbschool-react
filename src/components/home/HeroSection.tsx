import React from 'react';

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
        <div className="text-center text-white">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" data-aos="fade-up">
            <span className="gold-text inline-block">Welcome to Global Business School</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-[#f6f0e8]/90" data-aos="fade-up" data-aos-delay="200">
            Empowering Futures Through Professional Education
          </p>
          <div data-aos="fade-up" data-aos-delay="400">
            <a
              href="/courses"
              className="bg-[#cab293] text-[#101b43] py-3 px-8 rounded-lg text-lg font-semibold hover:bg-[#cab293]/90 transition duration-300 inline-flex items-center space-x-2"
            >
              <span>Explore Our Courses</span>
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
