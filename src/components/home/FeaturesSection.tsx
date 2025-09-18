import React from 'react';

const FeaturesSection: React.FC = () => {
  const features = [
    {
      title: 'World-Class Faculty with Real-World Experience',
      description: 'Our faculty is our greatest asset. They are a dynamic blend of academics and industry veterans. In addition to holding advanced degrees such as PhDs and MBAs, our instructors bring invaluable experience from their successful careers as executives in diverse sectors like IT, banking, manufacturing, and multinational corporations. This ensures that every lesson is practical, relevant, and practice-oriented.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      )
    },
    {
      title: 'Industry-Driven and Globally Aligned Curriculum',
      description: 'Our curriculum is meticulously crafted with input from an advisory board of business leaders to ensure it meets the evolving demands of the industry. We offer a range of programs, from undergraduate degrees like the BBA to postgraduate qualifications like the MBA, alongside professional programs that prepare students for critical certification exams. Our courses are globally accredited, emphasizing a curriculum that is both internationally recognized and highly relevant to the Sri Lankan and South Asian economic landscape.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      title: 'A Holistic Approach to Development',
      description: 'We believe in nurturing well-rounded professionals. Life at GBS Kandy is a vibrant blend of challenging academics, hands-on professional training, and enriching co-curricular activities. Our state-of-the-art campus provides a stimulating environment that encourages problem-solving, critical thinking, and collaboration, ensuring the comprehensive growth of our students.',
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
        </svg>
      )
    },
    {
      title: 'Flexible and Customized Learning Solutions',
      description: 'Understanding the needs of modern professionals, GBS Kandy offers flexible learning pathways. This includes full-time degree programs, modular training with high completion rates, and specialized executive education courses. We also partner with corporations to provide customized short courses and strategic management training—delivered either onsite or offsite—to meet specific organizational goals.',
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
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
