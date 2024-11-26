import React from 'react';

interface FeatureListItemProps {
  text: string;
}

const FeatureListItem: React.FC<FeatureListItemProps> = ({ text }) => (
  <li className="flex items-start space-x-3">
    <svg className="w-6 h-6 text-blue-600 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
    </svg>
    <span>{text}</span>
  </li>
);

interface AboutInfoSectionProps {
  aboutImage: string;
}

const AboutInfoSection: React.FC<AboutInfoSectionProps> = ({ aboutImage }) => {
  const features = [
    'Our panel of lectures have both work and teaching experience more than 20 years with ACCA, Masters and Doctorate degrees.',
    'GBS is the only ACCA CBA exam center outside Colombo.',
    'We do exam oriented revision with 3000+ Questions and Answers.'
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <img src={aboutImage} alt="About GBS" className="w-full h-auto rounded-lg shadow-xl" />
          </div>
          <div className="lg:w-1/2 space-y-6">
            <h3 className="text-3xl font-bold text-gray-800">About GBS Kandy</h3>
            <p className="text-gray-600 text-lg">
              GBS is a popular accounting academy in Kandy preparing students for ACCA exam for more than 5 years. 
              We are partnered with London based London School of Business and Social Sciences (LSBSS) to offer 
              professional certification courses in accounting and finance.
            </p>
            <ul className="space-y-4 text-gray-600">
              {features.map((feature, index) => (
                <FeatureListItem key={index} text={feature} />
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutInfoSection;
