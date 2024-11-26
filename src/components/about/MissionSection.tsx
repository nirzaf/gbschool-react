import React from 'react';

const MissionSection: React.FC = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-[#101b43] to-[#1e2d5b] bg-clip-text text-transparent">
            Our Mission
          </h2>
          <p className="text-lg text-[#1e2d5b] mb-8">
            To empower individuals with world-class professional education and transform them into industry leaders through comprehensive training and development programs.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-gradient-to-br from-white to-[#f6f0e8] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-[#cab293] mb-4">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#101b43] mb-2">Quality Education</h3>
              <p className="text-[#1e2d5b]">
                Delivering excellence through internationally recognized qualifications and expert instructors.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-white to-[#f6f0e8] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-[#cab293] mb-4">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#101b43] mb-2">Professional Growth</h3>
              <p className="text-[#1e2d5b]">
                Supporting career advancement through practical skills and industry insights.
              </p>
            </div>
            <div className="p-6 bg-gradient-to-br from-white to-[#f6f0e8] rounded-xl shadow-lg hover:shadow-xl transition-all duration-300">
              <div className="text-[#cab293] mb-4">
                <svg className="w-10 h-10 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-[#101b43] mb-2">Global Network</h3>
              <p className="text-[#1e2d5b]">
                Building connections with industry professionals and like-minded individuals worldwide.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionSection;
