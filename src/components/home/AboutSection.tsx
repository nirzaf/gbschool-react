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
              About Global Business School
            </h2>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Global Business School is a premier educational institution dedicated to empowering students with professional qualifications and practical skills. Our commitment to excellence and industry-relevant education sets us apart in the field of professional education.
            </p>
            <p className="text-gray-600 mb-8 leading-relaxed">
              We offer a wide range of professional courses including ACCA, Revit, and specialized accounting programs. Our experienced faculty and modern teaching methodologies ensure that students receive the highest quality education and practical training.
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
