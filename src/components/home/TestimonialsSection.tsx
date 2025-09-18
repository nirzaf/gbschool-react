import React from 'react';

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: 'Kasun Ratnayake',
      role: 'Top ACCA Achiever',
      image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      quote: "The exceptional mentorship and cutting-edge resources at GBS propelled me to the top of my ACCA class. I am now thriving in a global finance career.",
      company: 'Lead Analyst at Goldman Sachs'
    },
    {
      name: 'Nuwan Rajapakshe',
      role: 'CIMA Prizewinner',
      image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      quote: "GBS's dynamic learning environment and world-class faculty were instrumental in my CIMA success. The strategic insights I gained are invaluable in my consulting role.",
      company: 'Senior Consultant at McKinsey'
    },
    {
      name: 'Abdul Shajahan',
      role: 'AAT High Scorer',
      image: 'https://cdn-icons-png.flaticon.com/512/149/149071.png',
      quote: "The comprehensive AAT program at GBS laid the perfect foundation for my career. The practical skills and industry connections I developed led me to a dream job at a top tech company.",
      company: 'Financial Controller at Google'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-[#101b43] to-[#1e2d5b] text-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#f6f0e8] to-[#cab293] bg-clip-text text-transparent">
            Student Success Stories
          </h2>
          <p className="text-lg text-[#f6f0e8]/90">
            Hear from our graduates about their journey at Global Business School
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {testimonials.map((testimonial) => (
            <div 
              key={testimonial.name}
              className="bg-white/10 backdrop-blur-sm rounded-xl p-8 hover:bg-white/20 transition-all duration-300"
            >
              <div className="relative mb-8">
                <svg className="absolute -top-4 -left-4 w-8 h-8 text-[#cab293]" fill="currentColor" viewBox="0 0 32 32">
                  <path d="M9.352 4C4.456 7.456 1 13.12 1 19.36c0 5.088 3.072 8.064 6.624 8.064 3.36 0 5.856-2.688 5.856-5.856 0-3.168-2.208-5.472-5.088-5.472-.576 0-1.344.096-1.536.192.48-3.264 3.552-7.104 6.624-9.024L9.352 4zm16.512 0c-4.8 3.456-8.256 9.12-8.256 15.36 0 5.088 3.072 8.064 6.624 8.064 3.264 0 5.856-2.688 5.856-5.856 0-3.168-2.304-5.472-5.184-5.472-.576 0-1.248.096-1.44.192.48-3.264 3.456-7.104 6.528-9.024L25.864 4z" />
                </svg>
                <p className="text-[#f6f0e8]/90 italic relative z-10">{testimonial.quote}</p>
              </div>
              <div className="flex items-center">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full border-2 border-[#cab293]"
                />
                <div className="ml-4">
                  <h4 className="font-semibold text-[#cab293]">{testimonial.name}</h4>
                  <p className="text-sm text-[#f6f0e8]/80">{testimonial.role}</p>
                  <p className="text-xs text-[#f6f0e8]/60">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
