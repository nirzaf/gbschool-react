import React from 'react';

/**
 * Statistics section component displaying key metrics
 * Shows placement rate, student count, years of experience, etc.
 */
const StatsSection: React.FC = () => {
    const stats = [
        {
            value: '95%',
            label: 'Placement Rate',
            icon: '🎯',
            description: 'of our graduates secure jobs within 6 months'
        },
        {
            value: '1,500+',
            label: 'Students Enrolled',
            icon: '👨‍🎓',
            description: 'across all our professional programs'
        },
        {
            value: '15+',
            label: 'Years of Excellence',
            icon: '🏆',
            description: 'providing quality education in Kandy'
        },
        {
            value: '50+',
            label: 'Industry Partners',
            icon: '🤝',
            description: 'for internships and placements'
        }
    ];

    return (
        <section className="py-16 bg-gradient-to-br from-primary-dark to-primary-mythical text-white">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Track Record</h2>
                    <p className="text-lg opacity-90">Numbers that speak for our commitment to excellence</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div
                            key={index}
                            className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-xl hover:bg-white/20 transition-all duration-300 hover:scale-105"
                            data-aos="fade-up"
                            data-aos-delay={index * 100}
                        >
                            <div className="text-4xl mb-3">{stat.icon}</div>
                            <div className="text-4xl md:text-5xl font-bold mb-2 text-accent-gold">{stat.value}</div>
                            <div className="text-xl font-semibold mb-2">{stat.label}</div>
                            <div className="text-sm opacity-75">{stat.description}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default StatsSection;
