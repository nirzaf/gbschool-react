# Global Business School Kandy - Official Website

This is the official source code repository for the Global Business School Kandy website. This web application is designed to be a comprehensive, user-friendly platform for prospective and current students, faculty, and anyone interested in the educational programs offered by the institution.

The website provides detailed information about the school's courses, mission, and values. It serves as the primary digital gateway for students to explore academic offerings, enroll in courses, and engage with the school community. The platform is built with a modern technology stack to ensure a responsive, fast, and reliable user experience.

### Live Demo

[Link to the live website](https://gbschool.cc)

*Note: You can add the live URL of your deployed application here.*

## Key Features

- **Dynamic Course Catalog**: A comprehensive and dynamically loaded catalog of all courses offered at the school.
- **Detailed Course Information**: Each course has a dedicated page with in-depth information, including curriculum, duration, prerequisites, and career opportunities.
- **User Authentication**: A secure system for students to create accounts, log in, and manage their profiles.
- **Course Enrollment**: An integrated system that allows authenticated users to enroll in courses directly through the website.
- **Newsletter Subscription**: A feature for users to subscribe to the school's newsletter to receive updates and announcements.
- **Contact and Appointment System**: A dual-function form for general inquiries and for booking appointments with school representatives.
- **Responsive Design**: The website is fully responsive and optimized for a seamless experience across all devices, including desktops, tablets, and smartphones.
- **Modern UI/UX**: A clean and modern user interface built with animations and transitions to enhance the user experience.

## Tech Stack & Architecture

This project is built with a modern, robust, and scalable technology stack.

### Frontend
- **React**: A declarative, efficient, and flexible JavaScript library for building user interfaces.
- **Vite**: A next-generation frontend tooling that provides a faster and leaner development experience.
- **TypeScript**: A statically typed superset of JavaScript that adds type safety to the application.
- **Tailwind CSS**: A utility-first CSS framework for rapidly building custom user interfaces.
- **Framer Motion**: A production-ready motion library for React to create beautiful animations.
- **React Router DOM**: For declarative routing in the React application.

### Backend
- **Supabase**: An open-source Firebase alternative that provides a suite of tools to build a backend in hours.
  - **PostgreSQL Database**: For storing all application data.
  - **Authentication**: Manages user sign-ups, logins, and session management.
  - **Storage**: Used for storing user-uploaded content (if applicable).
  - **Serverless Functions**: Can be used for custom server-side logic (if applicable).

### Architecture
The application follows a client-server architecture where the frontend (React application) communicates with the Supabase backend for all data-related operations. The frontend is responsible for rendering the UI and managing the user state, while Supabase handles data persistence, user authentication, and other backend services. This architecture allows for a decoupled system that is easy to maintain and scale.

## Project Structure

The project is organized into a logical and maintainable directory structure.

```
/
├── .github/              # GitHub Actions workflows for CI/CD
├── public/               # Static assets that are publicly accessible
├── src/                  # Main source code for the React application
│   ├── assets/           # Images and other static assets used by components
│   ├── components/       # Reusable React components
│   │   ├── common/       # Components used across multiple pages (Navbar, Footer)
│   │   ├── home/         # Components specific to the Home page
│   │   ├── about/        # Components specific to the About page
│   │   ├── courses/      # Components specific to the Courses pages
│   │   └── contact/      # Components specific to the Contact page
│   ├── lib/              # Core libraries and helper functions
│   │   └── supabase.ts   # Supabase client initialization and helper functions
│   ├── App.tsx           # Root component with routing setup
│   ├── main.tsx          # Entry point of the React application
│   └── index.css         # Global CSS styles
├── package.json          # Project dependencies and scripts
├── vite.config.ts        # Vite configuration file
├── tailwind.config.js    # Tailwind CSS configuration file
└── tsconfig.json         # TypeScript configuration file
```

## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

Make sure you have the following software installed on your machine:
- [Node.js](https://nodejs.org/) (v16 or later)
- [npm](https://www.npmjs.com/) (Node Package Manager)

### Installation

1. **Clone the repository**
   ```sh
   git clone https://github.com/nirzaf/gbschool-react.git
   cd gbschool-react
   ```

2. **Install NPM packages**
   ```sh
   npm install
   ```

### Environment Variables

To run the application, you need to set up your environment variables for Supabase.

1. **Create a `.env` file** in the root of the project.
2. **Add the following variables** to the `.env` file:

   ```
   VITE_SUPABASE_URL="YOUR_SUPABASE_URL"
   VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
   ```

   You can get these values from your Supabase project dashboard.

### Running the Application

Once the installation is complete and the environment variables are set, you can run the application in development mode:

```sh
npm run dev
```

This will start the development server, and you can view the application at `http://localhost:5173` (or another port if 5173 is in use).

## Database Schema

The application uses a PostgreSQL database managed by Supabase. The schema is designed to support all the features of the application, from course management to user interactions.

Below is an overview of the main tables in the database:

### `courses`
- **Purpose**: Stores information about all the courses offered by the school.
- **Key Columns**:
  - `id`: Unique identifier for the course.
  - `title`: The title of the course.
  - `description`: A detailed description of the course.
  - `duration`: The duration of the course.
  - `price`: The fee for the course.
  - `image_url`: A URL to the course's promotional image.

### `students`
- **Purpose**: Stores information about the registered users/students. This table is linked to the `auth.users` table in Supabase.
- **Key Columns**:
  - `id`: Unique identifier for the student (foreign key to `auth.users.id`).
  - `email`: The student's email address.
  - `full_name`: The full name of the student.

### `enrollments`
- **Purpose**: Tracks which students are enrolled in which courses.
- **Key Columns**:
  - `id`: Unique identifier for the enrollment record.
  - `student_id`: Foreign key referencing the `students` table.
  - `course_id`: Foreign key referencing the `courses` table.
  - `status`: The status of the enrollment (e.g., `pending`, `active`, `completed`).

### `newsletter_subscribers`
- **Purpose**: Stores the email addresses of users who have subscribed to the newsletter.
- **Key Columns**:
  - `id`: Unique identifier for the subscriber.
  - `email`: The email address of the subscriber.
  - `status`: The status of the subscription (e.g., `active`, `unsubscribed`).

### `contact_submissions`
- **Purpose**: Stores all submissions from the contact and appointment forms.
- **Key Columns**:
  - `id`: Unique identifier for the submission.
  - `name`: The name of the person who submitted the form.
  - `email`: The email of the person.
  - `message`: The content of the message.
  - `submission_type`: The type of submission (`contact` or `appointment`).
  - `status`: The status of the submission (e.g., `pending`, `processed`).

## Deployment

The application is configured for continuous deployment to GitHub Pages using GitHub Actions.

### Deployment Process

The deployment process is automated via the `.github/workflows/static.yml` workflow. Here's how it works:

1.  **Trigger**: A push to the `main` branch automatically triggers the deployment workflow.
2.  **Build**: The workflow sets up the environment, installs all the necessary dependencies, and builds the application for production using the `npm run build` command. This creates a `dist` directory with the optimized static files.
3.  **Deploy**: The contents of the `dist` directory are then deployed to GitHub Pages.

### Manual Deployment

To build the application for production manually, you can run the following command:

```sh
npm run build
```

This will generate the `dist` directory, which can then be deployed to any static hosting service.
