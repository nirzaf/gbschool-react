import React from 'react';
import NewCourseCard from './NewCourseCard';

const NewCoursesSection: React.FC = () => {
  const newCourses = [
    {
      title: 'Microsoft Office 365',
      duration: '3 Months',
      level: 'Beginner to Advanced',
      objectives: [
        { text: 'Master Word, Excel, PowerPoint, and Outlook' },
        { text: 'Learn cloud collaboration with OneDrive and SharePoint' },
        { text: 'Understand Microsoft Teams for business communication' }
      ]
    },
    {
      title: 'Digital Marketing Specialist',
      duration: '6 Months',
      level: 'Intermediate',
      objectives: [
        { text: 'Develop comprehensive digital marketing strategies' },
        { text: 'Master social media marketing and analytics' },
        { text: 'Learn SEO and content marketing techniques' }
      ]
    },
    {
      title: 'Project Management Professional',
      duration: '4 Months',
      level: 'Advanced',
      objectives: [
        { text: 'Learn project planning and execution methodologies' },
        { text: 'Master risk management and stakeholder communication' },
        { text: 'Prepare for PMP certification exam' }
      ]
    }
  ];

  return (
    <section className="py-12">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">New Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Start your journey with our latest professional development courses
          </p>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          {newCourses.map((course, index) => (
            <NewCourseCard
              key={index}
              title={course.title}
              duration={course.duration}
              level={course.level}
              objectives={course.objectives}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default NewCoursesSection;
