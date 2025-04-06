import React from "react";

const Footer = () => {
  return (
    <footer className="bg-transparent py-6">
      <div className="container mx-auto px-4 flex justify-between items-center text-gray-400 text-sm">
        <div className="flex space-x-4">
          <a href="#" className="hover:text-white transition-colors">
            Terms & Conditions
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
        </div>
        <div>© 2025 teamify. All rights reserved.</div>
      </div>
    </footer>
  );
};

export default Footer;
