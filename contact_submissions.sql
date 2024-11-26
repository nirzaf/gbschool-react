create table public.contact_submissions (
  id uuid default uuid_generate_v4() primary key,
  name text not null,
  email text not null,
  phone text,
  subject text,
  message text,
  appointment_time timestamp with time zone,
  submission_type text not null check (submission_type in ('contact', 'appointment')),
  status text not null default 'pending' check (status in ('pending', 'processed')),
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Add RLS policies
alter table public.contact_submissions enable row level security;

-- Allow anyone to insert
create policy "Anyone can insert contact submissions"
on public.contact_submissions for insert
to anon
with check (true);

-- Only authenticated users can view submissions
create policy "Only authenticated users can view submissions"
on public.contact_submissions for select
to authenticated
using (true);