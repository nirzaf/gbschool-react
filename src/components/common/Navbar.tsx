import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/about", label: "About" },
    { path: "/courses", label: "Courses" },
    { path: "/contact", label: "Contact" },
  ];

  const isActive = (path: string) => {
    return location.pathname === path;
  };

  return (
    <>
      <nav
        className={`fixed w-full z-50 transition-all duration-300 bg-white shadow-lg`}
      >
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <Link to="/" className="flex items-center space-x-3">
              <Logo className="h-12 w-auto" />
              <span className="text-2xl font-bold">
                <span
                  className={`text-[#1E3A8A] px-3 py-1 rounded-lg border-2 border-[#DBEAFE] hover:border-[#2563EB] transition-colors duration-300`}
                >
                  GBS
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
                      ? "text-[#7C3AED] border-b-2 border-[#7C3AED]"
                      : "text-[#1F2937] hover:text-[#2563EB]"
                  }`}
                >
                  {label}
                </Link>
              ))}
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white hover:from-[#7C3AED] hover:to-[#2563EB] shadow-md hover:shadow-lg`}
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none text-[#1E3A8A]"
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
                        ? "text-[#7C3AED] bg-[#DBEAFE] rounded-lg px-4"
                        : "text-[#1F2937] hover:text-[#2563EB] hover:bg-[#F3F4F6] px-4 rounded-lg"
                    }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <button className="w-full px-4 py-2 bg-gradient-to-r from-[#1E3A8A] to-[#2563EB] text-white rounded-lg text-sm font-medium hover:from-[#7C3AED] hover:to-[#2563EB] shadow-md hover:shadow-lg transition-all duration-300">
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
