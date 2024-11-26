-- Drop existing table if it exists
DROP TABLE IF EXISTS newsletter_subscribers;

-- Create an enumerated type for subscription status
CREATE TYPE subscription_status AS ENUM ('active', 'unsubscribed');

-- Create the newsletter_subscribers table
CREATE TABLE newsletter_subscribers (
    id UUID DEFAULT gen_random_uuid() PRIMARY KEY,
    email TEXT UNIQUE NOT NULL,
    status subscription_status DEFAULT 'active',
    subscribed_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    unsubscribed_at TIMESTAMP WITH TIME ZONE,
    created_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW()),
    updated_at TIMESTAMP WITH TIME ZONE DEFAULT TIMEZONE('utc', NOW())
);

-- Create an index on email for faster lookups
CREATE INDEX idx_newsletter_subscribers_email ON newsletter_subscribers(email);

-- Create a function to update the updated_at timestamp
CREATE OR REPLACE FUNCTION update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
    NEW.updated_at = TIMEZONE('utc', NOW());
    RETURN NEW;
END;
$$ language 'plpgsql';

-- Create a trigger to automatically update the updated_at column
CREATE TRIGGER update_newsletter_subscribers_updated_at
    BEFORE UPDATE ON newsletter_subscribers
    FOR EACH ROW
    EXECUTE FUNCTION update_updated_at_column();

-- Enable Row Level Security
ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Drop existing policies if they exist
DROP POLICY IF EXISTS "Enable read access for all users" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Enable insert access for all users" ON newsletter_subscribers;
DROP POLICY IF EXISTS "Enable update for users based on email" ON newsletter_subscribers;

-- Create policies for public access
CREATE POLICY "Enable read access for all users" 
ON newsletter_subscribers FOR SELECT 
TO anon
USING (true);

CREATE POLICY "Enable insert access for all users" 
ON newsletter_subscribers FOR INSERT 
TO anon
WITH CHECK (true);

CREATE POLICY "Enable update for users based on email" 
ON newsletter_subscribers FOR UPDATE
TO anon
USING (true)
WITH CHECK (true);