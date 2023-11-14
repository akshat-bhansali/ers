import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-8">
      <div className="flex justify-between items-center">
        <div>
          <h3 className="text-lg font-bold">Employee Management System</h3>
          <p className="text-sm">© {new Date().getFullYear()} All rights reserved</p>
        </div>
        <div className="flex items-center space-x-4">
          {/* Social Media Links */}
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-facebook"></i>
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>

          {/* Buy Me a Coffee */}
          <div className="flex items-center">
            <span className="mr-2">Buy me a coffee</span>
            <a href="https://buymeacoffee.com/yourusername" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/ios/50/000000/coffee.png" alt="Buy me a coffee" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
