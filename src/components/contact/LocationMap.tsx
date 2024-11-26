import React from 'react';

const LocationMap: React.FC = () => {
  return (
    <div className="w-full rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3957.472708088047!2d80.63361057460988!3d7.300667992707008!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae367d45aa69fc3%3A0x5e9f75c1a902b81!2sGBS%20Kandy!5e0!3m2!1sen!2sqa!4v1706018413808!5m2!1sen!2sqa"
        width="100%"
        height="500"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="GBS Kandy Location"
        className="w-full"
      />
    </div>
  );
};

export default LocationMap;
