import React, { useEffect } from 'react';
import { 
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Route,
  Outlet,
  useRouteError,
  isRouteErrorResponse,
  useNavigate,
  Link
} from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Courses from './components/Courses';
import CourseDetail from './components/courses/CourseDetail';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import HubspotScript from './components/common/HubspotScript';

const ErrorBoundary = () => {
  const error = useRouteError();
  
  if (isRouteErrorResponse(error)) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="text-center p-8 bg-white rounded-lg shadow-md">
          <h1 className="text-4xl font-bold text-red-600 mb-4">
            {error.status} {error.statusText}
          </h1>
          <p className="text-gray-600 mb-4">{error.data}</p>
          <Link to="/" className="text-blue-500 hover:text-blue-700">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-md">
        <h1 className="text-4xl font-bold text-red-600 mb-4">
          Oops! Something went wrong
        </h1>
        <p className="text-gray-600 mb-4">
          We're sorry, but there was an unexpected error.
        </p>
        <Link to="/" className="text-blue-500 hover:text-blue-700">
          Return to Home
        </Link>
      </div>
    </div>
  );
};

// Redirect component for handling undefined routes
const RedirectToHome = () => {
  const navigate = useNavigate();
  
  useEffect(() => {
    navigate('/');
  }, [navigate]);

  return null;
};

const Layout = () => (
  <div className="flex flex-col min-h-screen">
    <Navbar />
    <main className="flex-grow">
      <Outlet />
    </main>
    <Footer />
    <HubspotScript />
  </div>
);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route element={<Layout />} errorElement={<ErrorBoundary />}>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/courses/:courseSlug" element={<CourseDetail />} />
      {/* Catch-all route that redirects to home */}
      <Route path="*" element={<RedirectToHome />} />
    </Route>
  )
);

const App: React.FC = () => {
  return <RouterProvider router={router} />;
};

export default App;
