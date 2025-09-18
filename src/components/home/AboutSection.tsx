import React from 'react';

interface AboutSectionProps {
  aboutImage: string;
}

const AboutSection: React.FC<AboutSectionProps> = ({ aboutImage }) => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2" data-aos="fade-right">
            <img
              src={aboutImage}
              alt="About Global Business School"
              className="rounded-lg shadow-lg w-full h-auto"
            />
          </div>
          <div className="lg:w-1/2" data-aos="fade-left">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Global Business School (GBS) Kandy: Shaping the Future of Business in Sri Lanka
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              At <strong>Global Business School (GBS) Kandy</strong>, we are dedicated to cultivating the next generation of business leaders and innovators. Situated in the heart of Sri Lanka's cultural capital, GBS Kandy stands as a beacon of excellence, specializing in providing a world-class education that prepares students to excel in the dynamic global marketplace while staying rooted in local relevance.
            </p>
            <a
              href="/about"
              className="bg-blue-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-blue-700 transition duration-300 inline-block"
            >
              Learn More About Us
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
