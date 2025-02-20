import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';

const CareerDevelopmentSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const careerServices = [
    {
      title: 'Career Counseling Services',
      description: 'Personalized guidance to help students identify career paths that align with their skills and interests.',
      icon: 'M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z'
    },
    {
      title: 'Internship Opportunities',
      description: 'Partnerships with businesses facilitate internships that provide practical experience and enhance employability.',
      icon: 'M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z'
    },
    {
      title: 'Alumni Network',
      description: 'A robust alumni network offers mentorship opportunities and connections that can lead to job placements.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-[#101b43] mb-6"
            data-aos="fade-up"
          >
            Career Development
          </h2>
          <p 
            className="text-gray-600 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We are committed to supporting our students' career growth through comprehensive resources and opportunities.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {careerServices.map((service, index) => (
            <div 
              key={service.title}
              className="group relative overflow-hidden rounded-xl shadow-lg"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-[#101b43] to-[#1e2d5b] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className="relative bg-white p-8 transform group-hover:translate-y-[-4px] transition-transform duration-300">
                <div className="w-12 h-12 bg-gradient-to-br from-[#101b43] to-[#1e2d5b] rounded-lg flex items-center justify-center mb-6 transform group-hover:scale-110 transition-transform duration-300">
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
                      d={service.icon}
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-[#101b43] mb-4 group-hover:text-white transition-colors duration-300">
                  {service.title}
                </h3>

                <p className="text-gray-600 group-hover:text-white/90 transition-colors duration-300">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Career Success Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div 
            className="text-center"
            data-aos="fade-up"
          >
            <div className="text-4xl font-bold text-[#101b43] mb-2">90%</div>
            <p className="text-gray-600">Employment Rate</p>
          </div>
          <div 
            className="text-center"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            <div className="text-4xl font-bold text-[#101b43] mb-2">500+</div>
            <p className="text-gray-600">Partner Companies</p>
          </div>
          <div 
            className="text-center"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            <div className="text-4xl font-bold text-[#101b43] mb-2">1000+</div>
            <p className="text-gray-600">Alumni Network</p>
          </div>
          <div 
            className="text-center"
            data-aos="fade-up"
            data-aos-delay="300"
          >
            <div className="text-4xl font-bold text-[#101b43] mb-2">200+</div>
            <p className="text-gray-600">Annual Internships</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareerDevelopmentSection;