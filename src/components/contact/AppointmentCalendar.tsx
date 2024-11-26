import React, { useState, useEffect } from 'react';
import { format, addDays, setHours, setMinutes, startOfWeek, isSameDay } from 'date-fns';
import { db } from '../../lib/supabase';

interface TimeSlot {
  time: Date;
  isBooked: boolean;
}

interface AppointmentFormData {
  name: string;
  email: string;
  phone: string;
}

const AppointmentCalendar: React.FC = () => {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [selectedSlot, setSelectedSlot] = useState<TimeSlot | null>(null);
  const [bookedSlots, setBookedSlots] = useState<Date[]>([]);
  const [formData, setFormData] = useState<AppointmentFormData>({
    name: '',
    email: '',
    phone: ''
  });
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');

  // Generate random booked slots for the week when component mounts
  useEffect(() => {
    const generateRandomBookedSlots = () => {
      const slots: Date[] = [];
      const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 }); // Start from Monday
      
      // Generate 4-5 random booked slots
      const numberOfSlots = Math.floor(Math.random() * 2) + 4; // 4 or 5 slots
      
      while (slots.length < numberOfSlots) {
        // Random day (0-4 for Monday to Friday)
        const randomDay = Math.floor(Math.random() * 5);
        const date = addDays(weekStart, randomDay);
        
        // Random hour (9-12 for 9 AM to 12 PM)
        const randomHour = Math.floor(Math.random() * 4) + 9;
        // Random minutes (0 or 45)
        const randomMinutes = Math.random() < 0.5 ? 0 : 45;
        
        const slot = setMinutes(setHours(date, randomHour), randomMinutes);
        
        // Check if slot is already booked
        if (!slots.some(existingSlot => isSameDay(existingSlot, slot) && 
            existingSlot.getHours() === slot.getHours() && 
            existingSlot.getMinutes() === slot.getMinutes())) {
          slots.push(slot);
        }
      }
      
      return slots;
    };

    setBookedSlots(generateRandomBookedSlots());
  }, []);

  // Generate time slots for a given date (9 AM to 1 PM, 45-minute intervals)
  const generateTimeSlots = (date: Date): TimeSlot[] => {
    const slots: TimeSlot[] = [];
    let currentTime = setHours(setMinutes(date, 0), 9); // Start at 9 AM
    const endTime = setHours(setMinutes(date, 0), 13); // End at 1 PM

    while (currentTime < endTime) {
      const isSlotBooked = bookedSlots.some(bookedTime =>
        isSameDay(currentTime, bookedTime) &&
        currentTime.getHours() === bookedTime.getHours() &&
        currentTime.getMinutes() === bookedTime.getMinutes()
      );

      slots.push({
        time: currentTime,
        isBooked: isSlotBooked
      });

      currentTime = new Date(currentTime.getTime() + 45 * 60000); // Add 45 minutes
    }

    return slots;
  };

  // Generate weekdays for the current week
  const generateWeekDays = (): Date[] => {
    const weekStart = startOfWeek(new Date(), { weekStartsOn: 1 }); // Start from Monday
    const days: Date[] = [];

    for (let i = 0; i < 5; i++) { // Monday to Friday
      days.push(addDays(weekStart, i));
    }

    return days;
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setSelectedSlot(null);
  };

  const handleTimeSlotClick = (slot: TimeSlot) => {
    if (!slot.isBooked) {
      setSelectedSlot(slot);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedSlot) {
      setErrorMessage('Please select a time slot');
      return;
    }

    setStatus('loading');
    setErrorMessage('');
    
    try {
      const { error } = await db.contacts.submit({
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        appointment_time: selectedSlot.time.toISOString(),
        submission_type: 'appointment'
      });

      if (error) {
        console.error('Error booking appointment:', error);
        setStatus('error');
        setErrorMessage(error.message || 'Failed to book appointment. Please try again.');
        return;
      }
      
      setStatus('success');
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: ''
      });
      setSelectedSlot(null);
      
      // Reset status after 3 seconds
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 3000);
    } catch (error: any) {
      console.error('Error booking appointment:', error);
      setStatus('error');
      setErrorMessage('An unexpected error occurred. Please try again.');
      setTimeout(() => {
        setStatus('idle');
        setErrorMessage('');
      }, 3000);
    }
  };

  const timeSlots = generateTimeSlots(selectedDate);
  const weekDays = generateWeekDays();

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
      <h3 className="text-2xl font-bold text-[#101b43] mb-6 bg-gradient-to-r from-[#101b43] to-[#1e2d5b] bg-clip-text text-transparent">
        Book an Appointment
      </h3>
      
      {/* Calendar Week View */}
      <div className="mb-8">
        <div className="grid grid-cols-5 gap-2">
          {weekDays.map((date, index) => (
            <div key={index} className="text-center">
              <div className="text-sm font-medium text-[#101b43]/70 mb-2">
                {format(date, 'EEE')}
              </div>
              <button
                onClick={() => handleDateClick(date)}
                className={`w-full py-2 px-1 rounded-lg text-sm transition-all duration-300 ${
                  isSameDay(selectedDate, date)
                    ? 'bg-[#101b43] text-white'
                    : 'hover:bg-[#101b43]/10'
                }`}
              >
                <span className="block font-medium">
                  {format(date, 'd')}
                </span>
                <span className="text-xs opacity-70">
                  {format(date, 'MMM')}
                </span>
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Time Slots */}
      <div className="mb-6">
        <h4 className="text-lg font-semibold text-[#101b43] mb-4">
          Available Times for {format(selectedDate, 'MMMM d, yyyy')}
        </h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {timeSlots.map((slot, index) => (
            <button
              key={index}
              onClick={() => handleTimeSlotClick(slot)}
              disabled={slot.isBooked}
              className={`
                px-4 py-3 rounded-lg text-sm font-medium transition-all duration-300
                ${selectedSlot?.time === slot.time
                  ? 'bg-[#101b43] text-white shadow-lg'
                  : slot.isBooked
                  ? 'bg-red-100 text-red-500 cursor-not-allowed'
                  : 'bg-white hover:bg-[#101b43]/10 text-[#101b43] shadow-sm'
                }
              `}
            >
              {format(slot.time, 'h:mm a')}
            </button>
          ))}
        </div>
      </div>

      {/* Selected Time Display and Contact Form */}
      {selectedSlot && (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="p-4 bg-[#101b43]/5 rounded-lg border border-[#101b43]/10 mb-4">
            <p className="text-[#101b43] font-medium">
              Selected Time: {format(selectedSlot.time, 'EEEE, MMMM d')} at {format(selectedSlot.time, 'h:mm a')}
            </p>
          </div>

          {/* Contact Details Form */}
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#101b43] mb-1">
                Full Name *
              </label>
              <input
                type="text"
                id="name"
                required
                value={formData.name}
                onChange={(e) => setFormData(prev => ({ ...prev, name: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg bg-white border border-[#cab293]/30 focus:ring-2 focus:ring-[#cab293] focus:border-[#cab293] transition-all duration-300"
                placeholder="John Doe"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#101b43] mb-1">
                Email Address *
              </label>
              <input
                type="email"
                id="email"
                required
                value={formData.email}
                onChange={(e) => setFormData(prev => ({ ...prev, email: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg bg-white border border-[#cab293]/30 focus:ring-2 focus:ring-[#cab293] focus:border-[#cab293] transition-all duration-300"
                placeholder="john@example.com"
              />
            </div>
            
            <div>
              <label htmlFor="phone" className="block text-sm font-medium text-[#101b43] mb-1">
                Phone Number *
              </label>
              <input
                type="tel"
                id="phone"
                required
                value={formData.phone}
                onChange={(e) => setFormData(prev => ({ ...prev, phone: e.target.value }))}
                className="w-full px-4 py-2 rounded-lg bg-white border border-[#cab293]/30 focus:ring-2 focus:ring-[#cab293] focus:border-[#cab293] transition-all duration-300"
                placeholder="+94 77 123 4567"
              />
            </div>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={status === 'loading'}
            className={`
              w-full px-6 py-3 rounded-lg font-semibold text-center transition-all duration-300
              ${status === 'loading'
                ? 'bg-[#cab293]/70 cursor-wait'
                : status === 'success'
                ? 'bg-green-500 text-white'
                : status === 'error'
                ? 'bg-red-500 text-white'
                : 'bg-[#cab293] hover:bg-[#cab293]/90 text-[#101b43]'
              }
            `}
          >
            {status === 'loading' 
              ? 'Booking...' 
              : status === 'success'
              ? 'Appointment Booked!'
              : status === 'error'
              ? 'Booking Failed'
              : 'Book Appointment'
            }
          </button>

          {/* Error Message */}
          {errorMessage && (
            <p className="text-red-600 text-sm text-center mt-2">
              {errorMessage}
            </p>
          )}

          {/* Status Message */}
          {status === 'success' && (
            <p className="text-green-600 text-sm text-center">
              Your appointment has been booked successfully! We'll send you a confirmation email shortly.
            </p>
          )}
          {status === 'error' && (
            <p className="text-red-600 text-sm text-center">
              Something went wrong. Please try again.
            </p>
          )}
        </form>
      )}
    </div>
  );
};

export default AppointmentCalendar;
