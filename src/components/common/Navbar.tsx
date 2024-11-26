import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About' },
    { path: '/courses', label: 'Courses' },
    { path: '/contact', label: 'Contact' }
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav 
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled 
            ? 'bg-white shadow-lg' 
            : 'bg-[#101b43]/90 backdrop-blur-sm'
        }`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <img 
                src="https://ik.imagekit.io/d36vkx7c33/img/gbs-logo.png" 
                alt="GBS Logo" 
                className="h-12 w-auto"
              />
              <span className="text-2xl font-bold">
                <span className={`${
                  isScrolled 
                    ? 'text-[#101b43]'
                    : 'text-white'
                }`}>
                  GB
                </span>
                <span className="text-[#cab293]">
                  School
                </span>
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map(({ path, label }) => (
                <Link
                  key={path}
                  to={path}
                  className={`text-sm font-medium transition-all duration-300 ${
                    isActive(path)
                      ? isScrolled
                        ? 'text-[#cab293] border-b-2 border-[#cab293]'
                        : 'text-[#cab293] border-b-2 border-[#cab293]'
                      : isScrolled
                        ? 'text-[#1e2d5b] hover:text-[#cab293]'
                        : 'text-white hover:text-[#cab293]'
                  }`}
                >
                  {label}
                </Link>
              ))}
              <button 
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isScrolled
                    ? 'bg-gradient-to-r from-[#101b43] to-[#1e2d5b] text-white hover:shadow-lg'
                    : 'bg-[#cab293] text-[#101b43] hover:bg-[#f6f0e8]'
                }`}
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className={`md:hidden focus:outline-none ${
                isScrolled ? 'text-[#101b43]' : 'text-white'
              }`}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="md:hidden bg-white shadow-lg rounded-b-2xl">
              <div className="px-4 pt-2 pb-6 space-y-4">
                {navLinks.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`block py-2 text-sm font-medium ${
                      isActive(path)
                        ? 'text-[#cab293] bg-[#101b43]/5 rounded-lg px-4'
                        : 'text-[#1e2d5b] hover:text-[#cab293] hover:bg-[#101b43]/5 px-4 rounded-lg'
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <button className="w-full px-4 py-2 bg-gradient-to-r from-[#101b43] to-[#1e2d5b] text-white rounded-lg text-sm font-medium hover:shadow-lg transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Spacer to prevent content from hiding under fixed navbar */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;
