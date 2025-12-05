import React from 'react';
import { ReactTyped } from 'react-typed';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center bg-cover bg-center bg-primary-dark pt-28"
      style={{
        backgroundImage: 'url("https://ik.imagekit.io/d36vkx7c33/hero-image-gbs.jpg?updatedAt=1732635978259")',
      }}
    >
      {/* Gradient overlay with improved layering */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/90 via-primary-dark/75 to-primary-mythical/85"></div>

      {/* Decorative pattern overlay */}
      <div className="absolute inset-0 opacity-5 bg-[radial-gradient(#d4af37_1px,transparent_1px)] [background-size:32px_32px]"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-5xl mx-auto">
          {/* Badge/Tagline */}
          <div
            className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full border border-white/20 mb-8"
            data-aos="fade-down"
          >
            <span className="text-accent-gold">🎓</span>
            <span className="text-white/90 text-sm font-medium">Kandy's Premier Business Education Institution</span>
          </div>

          {/* Main Heading */}
          <h1
            className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-white"
            data-aos="fade-up"
            style={{
              textShadow: '0 4px 30px rgba(0, 30, 96, 0.5), 0 2px 4px rgba(0, 0, 0, 0.3)'
            }}
          >
            Global Business School
          </h1>

          {/* Animated Tagline */}
          <div
            className="text-xl md:text-3xl lg:text-4xl text-white mb-6 h-12 flex items-center justify-center"
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
              className="font-semibold text-accent-gold"
            />
          </div>

          {/* Subtitle */}
          <p
            className="text-lg md:text-xl lg:text-2xl mb-10 text-white/80 max-w-3xl mx-auto leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            Your Gateway to Professional Excellence with
            <span className="text-accent-gold font-semibold"> ACCA</span>,
            <span className="text-accent-gold font-semibold"> Oxford Brookes</span>, and
            <span className="text-accent-gold font-semibold"> UGC Approved</span> Qualifications
          </p>

          {/* CTA Buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
            data-aos="fade-up"
            data-aos-delay="600"
          >
            <Link
              to="/courses"
              className="group relative px-8 py-4 bg-accent-gold text-primary-dark font-bold rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-accent-gold/30"
            >
              <span className="relative z-10 flex items-center gap-2">
                Explore Courses
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </Link>

            <Link
              to="/contact"
              className="group px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-semibold rounded-xl border-2 border-white/30 hover:bg-white/20 hover:border-white/50 transition-all duration-300"
            >
              <span className="flex items-center gap-2">
                Book Free Consultation
                <svg className="w-5 h-5 group-hover:rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </span>
            </Link>
          </div>

          {/* Quick Stats */}
          <div
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto"
            data-aos="fade-up"
            data-aos-delay="800"
          >
            {[
              { value: '1,500+', label: 'Students' },
              { value: '95%', label: 'Placement' },
              { value: '15+', label: 'Years' },
              { value: '20+', label: 'Courses' }
            ].map((stat, index) => (
              <div key={index} className="text-center p-4 bg-white/5 backdrop-blur-sm rounded-xl border border-white/10">
                <div className="text-2xl md:text-3xl font-bold text-accent-gold">{stat.value}</div>
                <div className="text-sm text-white/70">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        data-aos="fade-up"
        data-aos-delay="1000"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-white/60 text-sm">Scroll to explore</span>
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1.5 h-3 bg-accent-gold rounded-full mt-2 animate-bounce"></div>
          </div>
        </div>
      </div>

      {/* Decorative bottom wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path
            d="M0 60V30C240 45 480 15 720 30C960 45 1200 15 1440 30V60H0Z"
            fill="currentColor"
            className="text-white"
          />
        </svg>
      </div>
    </section>
  );
};

export default HeroSection;
