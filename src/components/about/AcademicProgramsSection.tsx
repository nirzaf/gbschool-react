import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';

const AcademicProgramsSection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const programs = [
    {
      title: 'Bachelor of Business Administration (BBA)',
      description: 'Foundational knowledge in business principles and practices, preparing students for entry-level positions in various sectors.',
      icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z',
      features: ['Business Fundamentals', 'Marketing Principles', 'Financial Management', 'Organizational Behavior']
    },
    {
      title: 'Master of Business Administration (MBA)',
      description: 'Advanced business concepts and leadership skills with specializations in marketing, finance, and international business.',
      icon: 'M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z',
      features: ['Strategic Management', 'Leadership Development', 'Global Business Strategy', 'Research Methods']
    },
    {
      title: 'Professional Development Courses',
      description: 'Short-term courses aimed at enhancing specific skills relevant to the business environment.',
      icon: 'M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z',
      features: ['Digital Marketing', 'Project Management', 'Entrepreneurship', 'Business Analytics']
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f6f0e8] to-white">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-[#101b43] mb-6"
            data-aos="fade-up"
          >
            Academic Programs
          </h2>
          <p 
            className="text-gray-600 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Our comprehensive range of programs is designed to meet the diverse needs of aspiring business professionals, combining theoretical knowledge with practical applications.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {programs.map((program, index) => (
            <div 
              key={program.title}
              className="bg-white rounded-xl shadow-lg overflow-hidden transform hover:-translate-y-1 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="p-8">
                <div className="w-12 h-12 bg-gradient-to-br from-[#101b43] to-[#1e2d5b] rounded-lg flex items-center justify-center mb-6">
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
                      d={program.icon}
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-[#101b43] mb-4">
                  {program.title}
                </h3>

                <p className="text-gray-600 mb-6">
                  {program.description}
                </p>

                <div className="space-y-3">
                  {program.features.map((feature, i) => (
                    <div key={i} className="flex items-center space-x-2">
                      <svg
                        className="w-5 h-5 text-[#cab293]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M9 12l2 2 4-4"
                        />
                      </svg>
                      <span className="text-gray-600 text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AcademicProgramsSection;