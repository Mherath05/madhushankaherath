
import React from 'react';

const Navigation = () => {
  return (
    <nav className="fixed top-0 w-full bg-gray-900/90 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="container mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div className="text-2xl font-bold text-green-400">MHK</div>
          <div className="hidden md:flex space-x-8">
            <a href="#home" className="hover:text-green-400 transition-colors">Home</a>
            <a href="#about" className="hover:text-green-400 transition-colors">About</a>
            <a href="#skills" className="hover:text-green-400 transition-colors">Skills</a>
            <a href="#projects" className="hover:text-green-400 transition-colors">Projects</a>
            <a href="#services" className="hover:text-green-400 transition-colors">Services</a>
            <a href="#contact" className="hover:text-green-400 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
