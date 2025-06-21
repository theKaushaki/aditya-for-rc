import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm shadow-md z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="font-bold text-xl text-indigo-900">
            Hrudaya for RC
          </div>
          
          {/* Desktop Menu */}
          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => scrollToSection('about')}
              className="text-gray-700 hover:text-indigo-700 transition-colors font-medium"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection('pillars')}
              className="text-gray-700 hover:text-indigo-700 transition-colors font-medium"
            >
              Vision
            </button>
            <button
              onClick={() => scrollToSection('why-vote')}
              className="text-gray-700 hover:text-indigo-700 transition-colors font-medium"
            >
              Why Vote
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-700 hover:text-indigo-700 transition-colors font-medium"
            >
              Get Involved
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-indigo-700"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection('about')}
                className="block px-3 py-2 text-gray-700 hover:text-indigo-700 font-medium w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection('pillars')}
                className="block px-3 py-2 text-gray-700 hover:text-indigo-700 font-medium w-full text-left"
              >
                Pillars
              </button>
              <button
                onClick={() => scrollToSection('why-vote')}
                className="block px-3 py-2 text-gray-700 hover:text-indigo-700 font-medium w-full text-left"
              >
                Why Vote
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="block px-3 py-2 text-gray-700 hover:text-indigo-700 font-medium w-full text-left"
              >
                Get Involved
              </button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;