import React from 'react';

interface Course {
  image: string;
  title: string;
  description: string;
}

interface FeaturedCoursesSectionProps {
  courses: Course[];
}

const FeaturedCoursesSection: React.FC<FeaturedCoursesSectionProps> = ({ courses }) => {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Featured Courses
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Explore our most popular professional courses designed to advance your career
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col h-full transform hover:-translate-y-1"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-56 overflow-hidden rounded-t-xl">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>
              <div className="p-8 flex-grow flex flex-col">
                <h3 className="text-2xl font-bold text-gray-800 mb-4 group-hover:text-blue-600 transition-colors duration-300">
                  {course.title}
                </h3>
                <p className="text-gray-600 mb-6 flex-grow line-clamp-3">
                  {course.description}
                </p>
                <a
                  href="/courses"
                  className="inline-flex items-center justify-center bg-blue-600 text-white py-3 px-6 rounded-lg text-sm font-semibold hover:bg-blue-700 transition duration-300 group-hover:shadow-lg"
                >
                  <span>Learn More</span>
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16" data-aos="fade-up">
          <a
            href="/courses"
            className="inline-flex items-center justify-center bg-blue-600 text-white py-4 px-8 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1"
          >
            <span>View All Courses</span>
            <svg 
              className="w-5 h-5 ml-2" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedCoursesSection;
