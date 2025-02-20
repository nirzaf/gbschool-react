import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';

const DiversitySection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const diversityFeatures = [
    {
      title: 'Cultural Diversity',
      description: 'Our diverse student body represents various cultural backgrounds, creating a rich learning environment.',
      icon: 'M12 21a9.004 9.004 0 008.716-6.747M12 21a9.004 9.004 0 01-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 017.843 4.582M12 3a8.997 8.997 0 00-7.843 4.582m15.686 0A11.953 11.953 0 0112 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0121 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0112 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 013 12c0-1.605.42-3.113 1.157-4.418'
    },
    {
      title: 'Equal Opportunities',
      description: 'We ensure equal opportunities for all students, fostering an inclusive environment where everyone can thrive.',
      icon: 'M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z'
    },
    {
      title: 'Collaborative Learning',
      description: 'Our diverse environment promotes collaboration and creativity among students from different backgrounds.',
      icon: 'M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-[#f6f0e8]">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 
            className="text-3xl md:text-4xl font-bold text-[#101b43] mb-6"
            data-aos="fade-up"
          >
            Diversity & Inclusion
          </h2>
          <p 
            className="text-gray-600 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            At GBS Kandy, we celebrate diversity and foster an inclusive environment that enriches the learning experience for all our students.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {diversityFeatures.map((feature, index) => (
            <div 
              key={feature.title}
              className="bg-white rounded-xl shadow-lg p-8 transform hover:-translate-y-1 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="w-12 h-12 bg-gradient-to-br from-[#101b43] to-[#1e2d5b] rounded-full flex items-center justify-center mb-6">
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
                    d={feature.icon}
                  />
                </svg>
              </div>

              <h3 className="text-xl font-bold text-[#101b43] mb-4">
                {feature.title}
              </h3>

              <p className="text-gray-600">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        {/* Global Perspective Section */}
        <div className="mt-16 bg-gradient-to-r from-[#101b43] to-[#1e2d5b] rounded-2xl overflow-hidden shadow-xl">
          <div className="grid md:grid-cols-2 items-center">
            <div className="p-8 md:p-12">
              <h3 
                className="text-2xl md:text-3xl font-bold text-white mb-6"
                data-aos="fade-right"
              >
                Global Perspective
              </h3>
              <p 
                className="text-[#f6f0e8]/90 leading-relaxed mb-8"
                data-aos="fade-right"
                data-aos-delay="100"
              >
                In an increasingly interconnected world, we emphasize the importance of a global mindset. Our programs integrate international perspectives, providing students with the tools to navigate the complexities of the global business landscape.
              </p>
              <div 
                className="flex flex-wrap gap-4"
                data-aos="fade-right"
                data-aos-delay="200"
              >
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                  International Exposure
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                  Cross-cultural Communication
                </div>
                <div className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-white text-sm">
                  Global Business Practices
                </div>
              </div>
            </div>
            <div 
              className="relative h-full min-h-[300px] md:min-h-[400px] bg-cover bg-center"
              style={{
                backgroundImage: 'url("https://ik.imagekit.io/d36vkx7c33/diversity-image.jpg?updatedAt=1732635978259")'
              }}
              data-aos="fade-left"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#101b43] via-transparent to-transparent md:hidden"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiversitySection;