import React from 'react';
import { useEffect } from 'react';
import AOS from 'aos';

const TeachingMethodologySection: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  const methodologies = [
    {
      title: 'Experiential Learning',
      description: 'Students participate in real-world projects and case studies that allow them to apply theoretical knowledge in practical settings.',
      icon: 'M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5'
    },
    {
      title: 'Industry Collaborations',
      description: 'We collaborate with local businesses and international organizations to provide students with insights into current industry practices and trends.',
      icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9'
    },
    {
      title: 'Interactive Learning',
      description: 'Regular sessions with industry experts enhance the learning experience by exposing students to diverse perspectives and expertise.',
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
            Teaching Methodology
          </h2>
          <p 
            className="text-gray-600 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            We employ innovative teaching methods to ensure an engaging and effective learning experience for all our students.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {methodologies.map((method, index) => (
            <div 
              key={method.title}
              className="relative group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#101b43] to-[#1e2d5b] transform skew-y-3 group-hover:skew-y-0 transition-transform duration-300 rounded-xl opacity-75"></div>
              <div className="relative bg-white rounded-xl p-8 shadow-lg transform group-hover:-translate-y-2 transition-transform duration-300">
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
                      d={method.icon}
                    />
                  </svg>
                </div>

                <h3 className="text-xl font-bold text-[#101b43] mb-4">
                  {method.title}
                </h3>

                <p className="text-gray-600">
                  {method.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Additional Features */}
        <div className="mt-16 grid md:grid-cols-2 gap-8">
          <div 
            className="bg-gradient-to-br from-[#f6f0e8] to-white p-8 rounded-xl shadow-lg"
            data-aos="fade-right"
          >
            <h3 className="text-2xl font-bold text-[#101b43] mb-4">Personalized Learning</h3>
            <p className="text-gray-600 leading-relaxed">
              We understand that every student learns differently. Our methods include personalized learning plans, interactive sessions, and real-world applications to ensure each student can grasp concepts effectively.
            </p>
          </div>

          <div 
            className="bg-gradient-to-br from-[#f6f0e8] to-white p-8 rounded-xl shadow-lg"
            data-aos="fade-left"
          >
            <h3 className="text-2xl font-bold text-[#101b43] mb-4">Technology Integration</h3>
            <p className="text-gray-600 leading-relaxed">
              Our classrooms are equipped with modern technology to enhance the learning experience. We utilize digital tools and platforms to facilitate interactive learning and collaboration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TeachingMethodologySection;