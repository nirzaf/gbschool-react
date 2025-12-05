import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Transition } from "@headlessui/react";
import Logo from "./Logo";

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

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
                  className={`text-primary px-3 py-1 rounded-lg border-2 border-surface-light hover:border-primary-light transition-colors duration-300`}
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
                  className={`text-sm font-medium transition-all duration-300 ${isActive(path)
                    ? "text-accent-purple border-b-2 border-accent-purple"
                    : "text-neutral-dark hover:text-primary-light"
                    }`}
                >
                  {label}
                </Link>
              ))}
              <button
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-gradient-to-r from-primary to-primary-light text-white hover:from-accent-purple hover:to-primary-light shadow-md hover:shadow-lg`}
              >
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden focus:outline-none text-primary"
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
          <Transition
            show={isMobileMenuOpen}
            enter="transition duration-200 ease-out"
            enterFrom="opacity-0 -translate-y-2"
            enterTo="opacity-100 translate-y-0"
            leave="transition duration-150 ease-in"
            leaveFrom="opacity-100 translate-y-0"
            leaveTo="opacity-0 -translate-y-2"
          >
            <div className="md:hidden bg-white shadow-xl rounded-b-2xl">
              <div className="px-4 pt-2 pb-6 space-y-4">
                {navLinks.map(({ path, label }) => (
                  <Link
                    key={path}
                    to={path}
                    className={`block py-2 text-sm font-medium ${isActive(path)
                      ? "text-accent-purple bg-surface-light rounded-lg px-4"
                      : "text-neutral-dark hover:text-primary-light hover:bg-neutral-light px-4 rounded-lg"
                      }`}
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {label}
                  </Link>
                ))}
                <button className="w-full px-4 py-2 bg-gradient-to-r from-primary to-primary-light text-white rounded-lg text-sm font-medium hover:from-accent-purple hover:to-primary-light shadow-md hover:shadow-lg transition-all duration-300">
                  Get Started
                </button>
              </div>
            </div>
          </Transition>
        </div>
      </nav>

      {/* Trust Badge Bar */}
      <div className="fixed top-20 w-full z-40 bg-gradient-to-r from-primary-dark to-primary-mythical text-white py-2 shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center space-x-6 text-xs md:text-sm overflow-x-auto">
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <span className="text-accent-gold">🏆</span>
              <span className="font-semibold">ACCA Platinum Approved</span>
            </div>
            <div className="hidden md:block h-4 w-px bg-white/30"></div>
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <span className="text-accent-gold">🎓</span>
              <span className="font-semibold">Oxford Brookes Partnership</span>
            </div>
            <div className="hidden md:block h-4 w-px bg-white/30"></div>
            <div className="flex items-center space-x-2 whitespace-nowrap">
              <span className="text-accent-gold">✓</span>
              <span className="font-semibold">Ministry of Education Registered</span>
            </div>
          </div>
        </div>
      </div>

      {/* Spacer to prevent content from hiding under fixed navbar + trust bar */}
      <div className="h-28"></div>
    </>
  );
};

export default Navbar;
