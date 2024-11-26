import React from 'react';
import { Link } from 'react-router-dom';

interface CourseObjective {
  text: string;
}

interface NewCourseCardProps {
  title: string;
  duration: string;
  level: string;
  objectives: CourseObjective[];
}

const NewCourseCard: React.FC<NewCourseCardProps> = ({ title, duration, level, objectives }) => {
  const getCourseSlug = (title: string) => {
    return title.toLowerCase().replace(/\s+/g, '-');
  };

  return (
    <div className="lg:w-1/3 p-4 flex">
      <div className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full w-full border border-gray-100">
        <div className="flex-grow">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2 min-h-[3.5rem]">{title}</h3>
            <div className="flex flex-wrap gap-2 mb-4">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">
                {duration}
              </span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">
                {level}
              </span>
            </div>
          </div>
          <div className="space-y-3">
            <h4 className="font-semibold text-gray-700">Course Objectives:</h4>
            <ul className="list-disc pl-5 space-y-2 text-gray-600">
              {objectives.map((objective, index) => (
                <li key={index} className="line-clamp-2 text-sm">{objective.text}</li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-6 pt-4 border-t border-gray-100">
          <Link 
            to={`/courses/${getCourseSlug(title)}`}
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2"
          >
            <span>Learn More</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewCourseCard;
