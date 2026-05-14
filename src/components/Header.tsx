import React from 'react';
import { scrollToSection } from '../utils/scroll';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 w-full bg-custom-bg/90 backdrop-blur-sm shadow-sm z-50">
      <nav className="container mx-auto px-4 py-4">
        <div className="flex justify-center items-center space-x-8">
          <button
            onClick={() => scrollToSection('home')}
            className="text-custom-text hover:text-custom-button font-medium transition-colors"
          >
            Home
          </button>
          <button
            onClick={() => scrollToSection('place')}
            className="text-custom-text hover:text-custom-button font-medium transition-colors"
          >
            Place
          </button>
          <button
            onClick={() => scrollToSection('plan')}
            className="text-custom-text hover:text-custom-button font-medium transition-colors"
          >
            Plan
          </button>
          <button
            onClick={() => scrollToSection('rsvp')}
            className="text-custom-text hover:text-custom-button font-medium transition-colors"
          >
            Форма
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;