import React from 'react';
import TopCourseCard from './TopCourseCard';
import accaImg from '../../assets/acca.jpg';
import revitImg from '../../assets/revit.jpg';
import computerizedAccountingImg from '../../assets/computerized accounting.jpg';

const TopCoursesSection: React.FC = () => {
  const topCourses = [
    {
      title: 'ACCA Fast Track',
      description: 'Get a real qualification that prepares you for the job market. Complete your journey to becoming a chartered accountant with our comprehensive ACCA program.',
      additionalInfo: 'Personalized learning plans, interactive sessions, and real-world applications ensure effective concept mastery. Includes BSc degree opportunity from Oxford Brooks University, UK.',
      imageUrl: accaImg,
      imageAlt: 'ACCA Fast Track'
    },
    {
      title: 'Revit Master Class',
      description: 'Master industry-leading Revit software through our comprehensive program. Perfect for architects and engineers seeking to enhance their BIM skills.',
      additionalInfo: 'Advanced modeling techniques, practical projects, and industry best practices ensure professional expertise in building information modeling.',
      imageUrl: revitImg,
      imageAlt: 'Revit Master Class'
    },
    {
      title: 'Diploma in Computerised Accounting',
      description: 'Master modern accounting software and practices through our comprehensive program. Ideal for aspiring accountants and finance professionals.',
      additionalInfo: 'Hands-on software training combined with practical accounting principles and real-world applications for professional-level expertise.',
      imageUrl: computerizedAccountingImg,
      imageAlt: 'Diploma in Computerised Accounting'
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Featured Courses</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our most popular professional certification courses designed to advance your career
          </p>
        </div>
        <div className="flex flex-wrap justify-center -mx-4">
          {topCourses.map((course, index) => (
            <TopCourseCard
              key={index}
              title={course.title}
              description={course.description}
              additionalInfo={course.additionalInfo}
              imageUrl={course.imageUrl}
              imageAlt={course.imageAlt}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TopCoursesSection;
