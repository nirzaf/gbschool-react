import React from 'react';

interface TopCourseCardProps {
  title: string;
  description: string;
  additionalInfo: string;
  imageUrl: string;
  imageAlt: string;
}

const TopCourseCard: React.FC<TopCourseCardProps> = ({
  title,
  description,
  additionalInfo,
  imageUrl,
  imageAlt
}) => {
  return (
    <div className="lg:w-1/3 p-4 flex">
      <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 flex flex-col h-full w-full overflow-hidden border border-gray-100">
        <div className="relative h-48 overflow-hidden">
          <img 
            src={imageUrl} 
            alt={imageAlt} 
            className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
        </div>
        <div className="p-6 flex-grow">
          <h3 className="text-xl font-bold text-gray-800 mb-4 line-clamp-2 min-h-[3.5rem]">{title}</h3>
          <div className="space-y-4">
            <p className="text-gray-600 line-clamp-3">{description}</p>
            <p className="text-gray-600 line-clamp-3">{additionalInfo}</p>
          </div>
        </div>
        <div className="p-6 pt-4 border-t border-gray-100">
          <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center space-x-2">
            <span>Enroll Now</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopCourseCard;
