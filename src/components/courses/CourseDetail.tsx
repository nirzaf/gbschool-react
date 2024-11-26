import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';

const CourseDetail: React.FC = () => {
  const { courseSlug } = useParams<{ courseSlug: string }>();
  const [courseContent, setCourseContent] = useState<string>('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCourseContent = async () => {
      try {
        const response = await fetch('/courses.md');
        const text = await response.text();
        
        // Parse the markdown content and find the specific course section
        const sections = text.split('---');
        const courseSection = sections.find(section => {
          const titleMatch = section.match(/##\s+(.+)/);
          if (titleMatch) {
            const sectionSlug = titleMatch[1].toLowerCase().replace(/\s+/g, '-');
            return sectionSlug === courseSlug;
          }
          return false;
        });

        // Remove image markdown syntax from the content
        const contentWithoutImages = courseSection?.replace(/!\[.*?\]\(.*?\)/g, '') || 'Course not found';
        setCourseContent(contentWithoutImages);
      } catch (error) {
        console.error('Error loading course content:', error);
        setCourseContent('Error loading course content');
      } finally {
        setLoading(false);
      }
    };

    fetchCourseContent();
  }, [courseSlug]);

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-4">
        <div className="container mx-auto px-4 py-8">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded w-1/3 mb-4"></div>
            <div className="h-4 bg-gray-200 rounded w-2/3 mb-2"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2 mb-4"></div>
            <div className="h-64 bg-gray-200 rounded mb-4"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-4">
      <div className="container mx-auto px-4 py-8">
        <Link
          to="/courses"
          className="inline-flex items-center text-blue-600 hover:text-blue-700 mb-6"
        >
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
          </svg>
          Back to Courses
        </Link>
        
        <article className="prose prose-lg max-w-none bg-white rounded-2xl shadow-lg p-8">
          <ReactMarkdown>{courseContent}</ReactMarkdown>
        </article>

        <div className="mt-8 text-center">
          <button className="bg-blue-600 text-white py-3 px-8 rounded-lg hover:bg-blue-700 transition-colors duration-300 transform hover:scale-[1.02] active:scale-[0.98]">
            Enroll Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default CourseDetail;
