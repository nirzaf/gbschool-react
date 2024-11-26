import React from 'react';
import HeroSection from './contact/HeroSection';
import ContactForm from './contact/ContactForm';
import LocationMap from './contact/LocationMap';
import ContactInfo from './contact/ContactInfo';

const Contact: React.FC = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-[#f6f0e8]">
      {/* Hero Section */}
      <div className="relative">
        <HeroSection />
      </div>
      
      {/* Contact Form and Info Section */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info and Map */}
          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[#cab293]/20">
              <ContactInfo />
            </div>
            <LocationMap />
          </div>
          
          {/* Contact Form */}
          <div className="lg:col-span-2 bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-xl border border-[#cab293]/20">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
