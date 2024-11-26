import React from 'react';
import LocationMap from './LocationMap';
import ContactInfo from './ContactInfo';
import ContactForm from './ContactForm';

const ContactSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          <LocationMap />
          <div className="lg:w-1/2 space-y-8">
            <ContactInfo />
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
