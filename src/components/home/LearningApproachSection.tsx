import React from 'react';

interface ApproachCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

export const ApproachCard: React.FC<ApproachCardProps> = ({ icon, title, description, delay }) => (
  <div 
    className="bg-white p-8 rounded-2xl shadow-lg transform hover:-translate-y-2 transition-transform duration-300" 
    data-aos="fade-up" 
    data-aos-delay={delay}
  >
    <div className="text-4xl text-blue-600 mb-6">
      <i className={`bi ${icon}`}></i>
    </div>
    <h3 className="text-2xl font-bold mb-4">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const LearningApproachSection: React.FC = () => {
  const approaches = [
    {
      title: 'Professional Instructors',
      description: 'Learn from industry experts with years of practical experience',
      icon: '👨‍🏫'
    },
    {
      title: 'Hands-on Training',
      description: 'Gain practical experience through real-world projects and case studies',
      icon: '💻'
    },
    {
      title: 'Flexible Learning',
      description: 'Choose from various study modes to fit your schedule',
      icon: '📚'
    },
    {
      title: 'Career Support',
      description: 'Get guidance for career development and job placement',
      icon: '🎯'
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">
            Our Learning Approach
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            We combine modern teaching methodologies with practical training to ensure our students receive the best possible education
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {approaches.map((approach, index) => (
            <div
              key={index}
              className="bg-gray-50 p-6 rounded-lg shadow-sm hover:shadow-md transition duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-4xl mb-4">{approach.icon}</div>
              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {approach.title}
              </h3>
              <p className="text-gray-600">
                {approach.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningApproachSection;
