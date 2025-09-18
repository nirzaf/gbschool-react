import React from 'react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'World-Class Faculty with Real-World Experience',
      description: 'Our faculty is a dynamic blend of academics and industry veterans with PhDs, MBAs, and executive experience in IT, banking, and multinational corporations, ensuring practical, relevant, and practice-oriented lessons.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: 'Industry-Driven and Globally Aligned Curriculum',
      description: 'Our curriculum, developed with an advisory board of business leaders, offers globally accredited programs like BBA and MBA, relevant to the Sri Lankan and South Asian economic landscape.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'A Holistic Approach to Development',
      description: 'We nurture well-rounded professionals through a vibrant blend of challenging academics, hands-on training, and enriching co-curricular activities in a state-of-the-art campus that fosters problem-solving and collaboration.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Flexible and Customized Learning Solutions',
      description: 'We offer flexible learning pathways, including full-time degrees, modular training, and specialized executive education. We also partner with corporations for customized courses to meet specific organizational goals.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-white to-[#f6f0e8]">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#101b43] to-[#1e2d5b] bg-clip-text text-transparent">
            What Sets GBS Kandy Apart?
          </h2>
          <p className="text-lg text-[#1e2d5b]">
            We offer a unique educational experience designed to ensure our graduates are not just qualified, but truly prepared for success.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {features.map((feature) => (
            <div 
              key={feature.title}
              className="bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 group"
            >
              <div className="text-[#cab293] mb-6 transform group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-[#101b43] mb-3">{feature.title}</h3>
              <p className="text-[#1e2d5b]">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
