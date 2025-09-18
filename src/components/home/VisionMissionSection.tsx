import React from 'react';

const VisionMissionSection: React.FC = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          <div className="w-full md:w-1/2 px-4 mb-8 md:mb-0">
            <div className="bg-gray-100 p-8 rounded-lg h-full">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Vision  visionary</h2>
              <p className="text-gray-600 leading-relaxed">
                To be Sri Lanka's leading institution for practical business education, recognized for producing ethically-grounded and innovative professionals who can successfully navigate and solve the complex challenges of the modern business world.
              </p>
            </div>
          </div>
          <div className="w-full md:w-1/2 px-4">
            <div className="bg-gray-100 p-8 rounded-lg h-full">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Our Mission 🎯</h2>
              <ul className="text-gray-600 leading-relaxed space-y-2">
                <li><strong>Delivering</strong> an industry-focused curriculum developed in partnership with leading corporate advisors.</li>
                <li><strong>Fostering</strong> an engaging learning environment led by a distinguished faculty of academics and seasoned industry executives.</li>
                <li><strong>Instilling</strong> a strong sense of professional ethics, social responsibility, and commitment to community service in every student.</li>
                <li><strong>Providing</strong> a diverse portfolio of local and globally accredited programs to cater to every stage of a professional's career journey.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMissionSection;
