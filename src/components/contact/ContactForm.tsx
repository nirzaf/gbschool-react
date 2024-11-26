import React, { useState } from 'react';
import AppointmentCalendar from './AppointmentCalendar';
import { db } from '../../lib/supabase';

interface FormFieldProps {
  id: string;
  label: string;
  type: string;
  placeholder: string;
  rows?: number;
  value: string;
  onChange: (value: string) => void;
}

const FormField: React.FC<FormFieldProps> = ({ 
  id, 
  label, 
  type, 
  placeholder, 
  rows,
  value,
  onChange 
}) => {
  const isTextarea = type === 'textarea';
  const InputComponent = isTextarea ? 'textarea' : 'input';

  return (
    <div className="mb-4">
      <label htmlFor={id} className="block text-[#101b43] text-sm font-medium mb-2">{label}</label>
      <InputComponent
        id={id}
        type={type !== 'textarea' ? type : undefined}
        rows={rows}
        value={value}
        onChange={(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => onChange(e.target.value)}
        className="w-full px-4 py-3 bg-white/50 backdrop-blur-sm border border-[#cab293]/30 rounded-lg 
          focus:ring-2 focus:ring-[#cab293] focus:border-[#cab293] transition-all duration-300
          text-[#101b43] placeholder-[#101b43]/50"
        placeholder={placeholder}
      />
    </div>
  );
};

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const formFields = [
    {
      id: 'name',
      label: 'Full Name',
      type: 'text',
      placeholder: 'John Doe'
    },
    {
      id: 'email',
      label: 'Email Address',
      type: 'email',
      placeholder: 'john@example.com'
    },
    {
      id: 'subject',
      label: 'Subject',
      type: 'text',
      placeholder: 'How can we help you?'
    },
    {
      id: 'message',
      label: 'Message',
      type: 'textarea',
      placeholder: 'Write your message here...',
      rows: 4
    }
  ];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    try {
      const { error } = await db.contacts.submit({
        ...formData,
        submission_type: 'contact'
      });

      if (error) throw error;
      
      setStatus('success');
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error: any) {
      console.error('Error submitting form:', error);
      setStatus('error');
      setErrorMessage(error.message || 'Something went wrong. Please try again.');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <div className="space-y-8">
      <div>
        <h3 className="text-2xl font-bold text-[#101b43] mb-6 bg-gradient-to-r from-[#101b43] to-[#1e2d5b] bg-clip-text text-transparent">
          Send us a Message
        </h3>
        <form onSubmit={handleSubmit} className="space-y-4">
          {formFields.map(field => (
            <FormField
              key={field.id}
              {...field}
              value={formData[field.id as keyof typeof formData]}
              onChange={(value) => setFormData(prev => ({ ...prev, [field.id]: value }))}
            />
          ))}
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`w-full px-8 py-3 rounded-lg font-semibold transition-all duration-300
              ${status === 'loading' 
                ? 'bg-[#cab293]/70 cursor-wait' 
                : status === 'success'
                ? 'bg-green-500 text-white'
                : status === 'error'
                ? 'bg-red-500 text-white'
                : 'bg-[#cab293] hover:bg-[#cab293]/90 text-[#101b43]'
              }`}
          >
            {status === 'loading' 
              ? 'Sending...' 
              : status === 'success' 
              ? 'Message Sent!' 
              : status === 'error'
              ? 'Failed to Send'
              : 'Send Message'
            }
          </button>

          {/* Status Messages */}
          {status === 'success' && (
            <p className="text-green-600 text-sm text-center mt-2">
              Your message has been sent successfully! We'll get back to you soon.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-sm text-center mt-2">
              {errorMessage}
            </p>
          )}
        </form>
      </div>

      <div>
        <AppointmentCalendar />
      </div>
    </div>
  );
};

export default ContactForm;
