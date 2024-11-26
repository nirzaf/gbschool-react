/// <reference types="vite/client" />

import { createClient } from '@supabase/supabase-js';

declare global {
  interface ImportMetaEnv {
    readonly VITE_SUPABASE_URL: string
    readonly VITE_SUPABASE_ANON_KEY: string
    readonly VITE_ANON_EMAIL: string
    readonly VITE_ANON_PASSWORD: string
  }
}

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Missing Supabase environment variables');
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey, {
  auth: {
    persistSession: true,
    autoRefreshToken: true
  }
});

// Type definitions for your database tables
export type Course = {
  id: number;
  title: string;
  description: string;
  duration: string;
  price: number;
  image_url: string;
  created_at: string;
};

export type Student = {
  id: string;
  email: string;
  full_name: string;
  created_at: string;
};

export type Enrollment = {
  id: number;
  student_id: string;
  course_id: number;
  status: 'pending' | 'active' | 'completed';
  enrolled_at: string;
};

export type NewsletterSubscriber = {
  id: string;
  email: string;
  status: 'active' | 'unsubscribed';
  subscribed_at: string;
  unsubscribed_at: string | null;
  created_at: string;
  updated_at: string;
};

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message?: string;
  appointment_time?: string;
  submission_type: 'contact' | 'appointment';
  status: 'pending' | 'processed';
  created_at: string;
};

// Helper functions for database operations
export const db = {
  courses: {
    async getAll() {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      return data as Course[];
    },

    async getById(id: number) {
      const { data, error } = await supabase
        .from('courses')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data as Course;
    }
  },

  students: {
    async getCurrentStudent() {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error || !user) throw error || new Error('No user found');

      const { data, error: studentError } = await supabase
        .from('students')
        .select('*')
        .eq('id', user.id)
        .single();
      
      if (studentError) throw studentError;
      return data as Student;
    },

    async updateProfile(profile: Partial<Student>) {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error || !user) throw error || new Error('No user found');

      const { data, error: updateError } = await supabase
        .from('students')
        .update(profile)
        .eq('id', user.id)
        .select()
        .single();
      
      if (updateError) throw updateError;
      return data as Student;
    }
  },

  enrollments: {
    async getStudentEnrollments() {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error || !user) throw error || new Error('No user found');

      const { data, error: enrollmentsError } = await supabase
        .from('enrollments')
        .select(`
          *,
          courses (*)
        `)
        .eq('student_id', user.id);
      
      if (enrollmentsError) throw enrollmentsError;
      return data;
    },

    async enroll(courseId: number) {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error || !user) throw error || new Error('No user found');

      const { data, error: enrollError } = await supabase
        .from('enrollments')
        .insert({
          student_id: user.id,
          course_id: courseId,
          status: 'pending'
        })
        .select()
        .single();
      
      if (enrollError) throw enrollError;
      return data;
    }
  },

  newsletter: {
    async subscribe(email: string) {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .insert([{ email }])
        .select()
        .single();
      
      if (error) {
        if (error.code === '23505') { // Unique violation
          throw new Error('This email is already subscribed to our newsletter');
        }
        throw error;
      }
      
      return data as NewsletterSubscriber;
    },

    async unsubscribe(email: string) {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .update({ 
          status: 'unsubscribed',
          unsubscribed_at: new Date().toISOString()
        })
        .eq('email', email)
        .select()
        .single();
      
      if (error) throw error;
      return data as NewsletterSubscriber;
    },

    async checkSubscription(email: string) {
      const { data, error } = await supabase
        .from('newsletter_subscribers')
        .select('*')
        .eq('email', email)
        .single();
      
      if (error) {
        if (error.code === 'PGRST116') { // Not found
          return null;
        }
        throw error;
      }
      
      return data as NewsletterSubscriber;
    }
  },

  contacts: {
    async submit(data: Omit<ContactSubmission, 'id' | 'status' | 'created_at'>): Promise<{ error: any; data: any }> {
      // Get the current session
      const { data: session } = await supabase.auth.getSession();
      
      // If no session, create an anonymous session
      if (!session?.session) {
        const { data: anonSession, error: anonError } = await supabase.auth.signInWithPassword({
          email: import.meta.env.VITE_ANON_EMAIL || 'anonymous@example.com',
          password: import.meta.env.VITE_ANON_PASSWORD || 'anonymous'
        });
        
        if (anonError) {
          console.error('Authentication error:', anonError);
          return { error: { message: 'Failed to authenticate submission' }, data: null };
        }
      }

      try {
        const { error, data: result } = await supabase
          .from('contact_submissions')
          .insert([
            {
              ...data,
              status: 'pending'
            }
          ])
          .select()
          .single();

        if (error) {
          console.error('Submission error:', error);
          return { 
            error: { 
              message: 'Failed to submit form. Please try again or contact support.',
              details: error
            }, 
            data: null 
          };
        }

        return { error: null, data: result };
      } catch (error: any) {
        console.error('Unexpected error:', error);
        return { 
          error: { 
            message: 'An unexpected error occurred. Please try again.',
            details: error
          }, 
          data: null 
        };
      }
    },

    async getSubmissions(): Promise<{ error: any; data: ContactSubmission[] | null }> {
      const { error, data } = await supabase
        .from('contact_submissions')
        .select('*')
        .order('created_at', { ascending: false });

      return { error, data };
    }
  }
};
