import React from 'react';

const VisionMissionSection: React.FC = () => {
  const missionPoints = [
    'Delivering an industry-focused curriculum developed in partnership with leading corporate advisors.',
    'Fostering an engaging learning environment led by a distinguished faculty of academics and seasoned industry executives.',
    'Instilling a strong sense of professional ethics, social responsibility, and commitment to community service in every student.',
    'Providing a diverse portfolio of local and globally accredited programs to cater to every stage of a professional\'s career journey.',
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#f6f0e8] to-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Vision Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-5xl mb-6 text-[#cab293]">
               visionary
            </div>
            <h3 className="text-2xl font-bold text-[#101b43] mb-4">Our Vision</h3>
            <p className="text-[#1e2d5b]">
              To be Sri Lanka's leading institution for practical business education, recognized for producing ethically-grounded and innovative professionals who can successfully navigate and solve the complex challenges of the modern business world.
            </p>
          </div>

          {/* Mission Section */}
          <div className="bg-white rounded-xl p-8 shadow-lg text-center">
            <div className="text-5xl mb-6 text-[#cab293]">
              🎯
            </div>
            <h3 className="text-2xl font-bold text-[#101b43] mb-4">Our Mission</h3>
            <p className="text-[#1e2d5b] mb-6">
              Our mission is to empower students by merging rigorous academic theory with real-world industry application.
            </p>
            <ul className="text-left text-[#1e2d5b] space-y-4">
              {missionPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <svg className="w-6 h-6 text-[#cab293] mr-3 mt-1 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
