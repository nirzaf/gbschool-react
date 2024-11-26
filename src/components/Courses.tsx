import React, { useEffect } from 'react';
import HeroSection from './courses/HeroSection';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Link } from 'react-router-dom';

// Import course images
const courseImages = {
  acca: 'https://ik.imagekit.io/d36vkx7c33/img/acca.jpg?updatedAt=1732615647441',
  accaAlt: 'https://ik.imagekit.io/d36vkx7c33/img/acca%20dec%2009.jpg?updatedAt=1732615648692',
  revit: 'https://ik.imagekit.io/d36vkx7c33/img/revit.jpg?updatedAt=1732615653586',
  computerizedAccounting: 'https://ik.imagekit.io/d36vkx7c33/img/computerized%20accounting.jpg?updatedAt=1732615647665',
  diplomaAccounting: 'https://ik.imagekit.io/d36vkx7c33/img/diploma%20in%20accounting.jpg?updatedAt=1732615651486',
  course1: 'https://ik.imagekit.io/d36vkx7c33/img/course-1.jpg?updatedAt=1732615647353',
  course2: 'https://ik.imagekit.io/d36vkx7c33/img/course-2.jpg?updatedAt=1732615647412',
  course3: 'https://ik.imagekit.io/d36vkx7c33/img/course-3.jpg?updatedAt=1732615647575'
};

const courseDetails = [
  {
    id: 'acca',
    title: 'ACCA Professional Qualification',
    image: courseImages.acca,
    hoverImage: courseImages.accaAlt,
    duration: '2.5 Years',
    level: 'Professional',
    students: 420,
    rating: 4.8,
    description: 'Become a chartered accountant with our comprehensive ACCA program. Get BSc degree from Oxford Brooks University, UK.',
    features: ['Interactive Sessions', 'Mock Exams', 'Study Materials', 'Career Guidance']
  },
  {
    id: 'revit',
    title: 'Autodesk Revit Architecture',
    image: courseImages.revit,
    duration: '6 Months',
    level: 'Professional',
    students: 280,
    rating: 4.7,
    description: 'Master Building Information Modeling (BIM) with Revit Architecture. Learn from industry experts.',
    features: ['3D Modeling', 'Project Work', 'Industry Standards', 'Certification']
  },
  {
    id: 'computerized-accounting',
    title: 'Computerized Accounting',
    image: courseImages.computerizedAccounting,
    duration: '3 Months',
    level: 'Intermediate',
    students: 350,
    rating: 4.6,
    description: 'Learn modern accounting software including QuickBooks, Sage, and Excel for today\'s digital workplace.',
    features: ['Practical Training', 'Real-world Projects', 'Software Skills', 'Job Placement']
  },
  {
    id: 'diploma-accounting',
    title: 'Diploma in Professional Accounting',
    image: courseImages.diplomaAccounting,
    duration: '1 Year',
    level: 'Intermediate',
    students: 290,
    rating: 4.5,
    description: 'Comprehensive diploma program covering all aspects of professional accounting and finance.',
    features: ['Foundation Course', 'Industry Exposure', 'Professional Skills', 'Career Support']
  }
];

const featuredCourses = [
  {
    title: 'Business Analytics',
    image: courseImages.course1,
    category: 'Business',
    price: '$299'
  },
  {
    title: 'Digital Marketing',
    image: courseImages.course2,
    category: 'Marketing',
    price: '$199'
  },
  {
    title: 'Financial Management',
    image: courseImages.course3,
    category: 'Finance',
    price: '$249'
  }
];

const Courses: React.FC = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  return (
    <div className="bg-[#F3F4F6]">
      <HeroSection 
        title="Professional Courses" 
        description="Advance your career with our industry-recognized professional qualifications"
      />
      
      {/* Main Courses Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {courseDetails.map((course) => (
              <div
                key={course.id}
                data-aos="fade-up"
                className="bg-gradient-to-br from-white to-[#DBEAFE] rounded-2xl shadow-lg overflow-hidden transform hover:scale-[1.02] transition-all duration-300"
              >
                <div className="relative group">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-110"
                  />
                  {course.hoverImage && (
                    <img
                      src={course.hoverImage}
                      alt={`${course.title} Alternative`}
                      className="absolute inset-0 w-full h-64 object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#101b43]/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-[#101b43]">{course.title}</h3>
                    <div className="flex items-center">
                      <span className="text-[#F59E0B]">★</span>
                      <span className="ml-1 text-[#6B7280]">{course.rating}</span>
                    </div>
                  </div>
                  <p className="text-[#6B7280] mb-4">{course.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <span className="px-3 py-1 bg-[#DBEAFE] text-[#1e2d5b] rounded-full text-sm font-medium">
                      {course.duration}
                    </span>
                    <span className="px-3 py-1 bg-[#F3E8FF] text-[#7C3AED] rounded-full text-sm font-medium">
                      {course.level}
                    </span>
                    <span className="px-3 py-1 bg-[#f6f0e8] text-[#cab293] rounded-full text-sm font-medium">
                      {course.students} Students
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {course.features.map((feature, index) => (
                      <div key={index} className="flex items-center">
                        <svg className="w-5 h-5 text-[#1e2d5b] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                        </svg>
                        <span className="text-[#6B7280] text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    to={`/courses/${course.id}`}
                    className="block w-full text-center bg-gradient-to-r from-[#101b43] to-[#1e2d5b] text-white py-3 rounded-lg transition-all duration-300 hover:shadow-lg hover:from-[#1e2d5b] hover:to-[#101b43]"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Short Courses */}
      <section className="py-16 bg-gradient-to-br from-white to-[#f6f0e8]">
        <div className="container mx-auto px-4">
          <h2 
            className="text-3xl font-bold text-center mb-12 bg-gradient-to-r from-[#101b43] to-[#1e2d5b] bg-clip-text text-transparent"
            data-aos="fade-up"
          >
            Featured Short Courses
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {featuredCourses.map((course, index) => (
              <div
                key={index}
                data-aos="fade-up"
                data-aos-delay={index * 100}
                className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 hover:scale-[1.02]"
              >
                <div className="relative">
                  <img
                    src={course.image}
                    alt={course.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-sm font-semibold text-[#1e2d5b] shadow-lg">
                    {course.price}
                  </div>
                </div>
                <div className="p-6">
                  <span className="text-sm font-semibold text-[#cab293]">{course.category}</span>
                  <h3 className="text-xl font-bold text-[#101b43] mt-2">{course.title}</h3>
                  <button className="mt-4 w-full bg-gradient-to-r from-[#cab293] to-[#f6f0e8] text-[#101b43] py-2 rounded-lg transition-all duration-300 hover:shadow-lg font-medium">
                    View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Courses;