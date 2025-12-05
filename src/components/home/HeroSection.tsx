import React from 'react';
import { ReactTyped } from 'react-typed';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-[80vh] flex items-center justify-center bg-cover bg-center bg-primary-dark"
      style={{
        backgroundImage: 'url("https://ik.imagekit.io/d36vkx7c33/hero-image-gbs.jpg?updatedAt=1732635978259")',
      }}
    >
      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/85 to-primary-mythical/85"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <h1
            className="text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-lg"
            data-aos="fade-up"
          >
            Global Business School
          </h1>

          <div
            className="text-xl md:text-3xl text-white mb-8"
            data-aos="fade-up"
            data-aos-delay="200"
            aria-label="Rotating taglines showcasing our mission"
          >
            <ReactTyped
              strings={[
                "Nurturing Future Business Leaders",
                "Fostering Innovation & Excellence",
                "Creating Global Perspectives",
                "Empowering Through Education",
                "Building Tomorrow's Entrepreneurs"
              ]}
              typeSpeed={40}
              backSpeed={30}
              loop
              className="font-semibold"
            />
          </div>

          <p
            className="text-xl md:text-2xl mb-8 text-surface-beach"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Your Gateway to Professional Excellence and Global Success
          </p>

          <div
            data-aos="fade-up"
            data-aos-delay="600"
          >
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <svg
          className="w-6 h-6 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
