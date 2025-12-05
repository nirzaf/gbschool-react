import React from "react";
import { Link } from "react-router-dom";
import Logo from "./Logo";

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-br from-[#101b43] to-[#1e2d5b] text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Brand Column */}
          <div>
            <Link to="/" className="inline-block mb-4">
              <Logo className="h-10 w-auto" />
            </Link>
            <p className="text-[#f6f0e8]/80 mb-4 max-w-md text-sm">
              Empowering professionals through world-class education and
              comprehensive training programs.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://facebook.com/gbschool.cc"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors duration-300"
              >
                <span className="sr-only">Facebook</span>
                <i className="bi bi-facebook text-lg"></i>
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-semibold mb-3 text-[#cab293]">
              Contact Us
            </h3>
            <div className="text-[#f6f0e8]/80 space-y-2 text-sm">
              <p>291 DS Senanayake Veediya</p>
              <p>Kandy, Sri Lanka, 20000</p>
              <p>Phone: +94 77 102 0580</p>
              <p>Email: info@gbschool.cc</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-4 border-t border-white/10">
          <div className="text-center text-[#f6f0e8]/60 text-sm">
            <p>
              &copy; {currentYear} Global Business School. All rights reserved.
            </p>
            <p className="mt-1">
              Powered by{" "}
              <a
                href="https://quadrate.lk"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white"
              >
                Quadrate Tech Solutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
