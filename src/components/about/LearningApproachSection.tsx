import React from 'react';

interface ApproachCardProps {
  title: string;
  description: string;
}

const ApproachCard: React.FC<ApproachCardProps> = ({ title, description }) => (
  <div className="lg:w-1/3 p-4">
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h3 className="text-xl font-bold">{title}</h3>
      <p>{description}</p>
    </div>
  </div>
);

const LearningApproachSection: React.FC = () => {
  const approaches = [
    {
      title: 'Personalized Learning Plans',
      description: 'We create personalized learning plans tailored to each student\'s needs, ensuring that they receive the support and resources necessary to succeed.'
    },
    {
      title: 'Interactive Sessions',
      description: 'Our interactive sessions engage students in the learning process, making it more enjoyable and effective. We use a variety of teaching methods to cater to different learning styles.'
    },
    {
      title: 'Real-World Applications',
      description: 'We incorporate real-world applications into our lessons, helping students understand how the concepts they learn in the classroom apply to real-life situations.'
    }
  ];

  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold">Lesson Customization</h2>
          <p>Our Approach to Customized Learning</p>
        </div>
        <div className="flex flex-col lg:flex-row justify-center">
          {approaches.map((approach, index) => (
            <ApproachCard
              key={index}
              title={approach.title}
              description={approach.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LearningApproachSection;
