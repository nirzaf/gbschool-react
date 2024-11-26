import React from 'react';

interface StatItemProps {
  value: string;
  label: string;
}

const StatItem: React.FC<StatItemProps> = ({ value, label }) => (
  <div className="lg:w-1/4 p-4">
    <span className="text-4xl font-bold">{value}</span>
    <p>{label}</p>
  </div>
);

const StatsSection: React.FC = () => {
  const stats = [
    { value: '614', label: 'Students' },
    { value: '12', label: 'Courses' },
    { value: '12', label: 'Job Fairs Events' },
    { value: '20', label: 'Lecturers' }
  ];

  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row justify-center text-center">
          {stats.map((stat, index) => (
            <StatItem key={index} value={stat.value} label={stat.label} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
