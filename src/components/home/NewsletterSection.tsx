import React, { useState } from 'react';
import { db } from '../../lib/supabase';

const NewsletterSection: React.FC = () => {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');
    
    try {
      await db.newsletter.subscribe(email);
      setStatus('success');
      setEmail('');
      setTimeout(() => setStatus('idle'), 3000);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Something went wrong. Please try again.');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <section className="py-20 bg-gradient-to-br from-white to-[#f6f0e8]">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#101b43] to-[#1e2d5b] rounded-2xl p-12 shadow-xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold mb-4 bg-gradient-to-r from-[#f6f0e8] to-[#cab293] bg-clip-text text-transparent">
              Stay Updated with GBS
            </h2>
            <p className="text-lg text-[#f6f0e8]/90">
              Subscribe to our newsletter for the latest course updates, industry insights, and student success stories
            </p>
          </div>
          <form onSubmit={handleSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-lg bg-white/10 backdrop-blur-sm border border-[#cab293]/30 text-[#f6f0e8] placeholder-[#f6f0e8]/50 focus:outline-none focus:border-[#cab293] transition-colors"
                required
                disabled={status === 'loading'}
              />
              <button
                type="submit"
                disabled={status === 'loading'}
                className={`px-8 py-3 rounded-lg font-semibold transition-all duration-300
                  ${status === 'loading' 
                    ? 'bg-[#cab293]/50 cursor-wait' 
                    : 'bg-[#cab293] hover:bg-[#cab293]/90'
                  }
                  text-[#101b43]`}
              >
                {status === 'loading' ? 'Subscribing...' : 'Subscribe'}
              </button>
            </div>
            {status === 'success' && (
              <p className="mt-4 text-sm text-[#f6f0e8]/90 text-center">
                Thank you for subscribing! We'll keep you updated with our latest news.
              </p>
            )}
            {status === 'error' && (
              <p className="mt-4 text-sm text-red-400 text-center">
                {errorMessage}
              </p>
            )}
          </form>
          <div className="mt-8 text-center">
            <p className="text-sm text-[#f6f0e8]/60">
              By subscribing, you agree to receive marketing communications from GBS.
              <br />
              You can unsubscribe at any time.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterSection;
