import React from 'react';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-custom-button text-custom-button-text py-8 px-4">
      <div className="container mx-auto max-w-4xl text-center">
        <Heart className="w-8 h-8 mx-auto mb-4" />
        <p className="text-lg font-title mb-2">Анастасия & Антон</p>
        <p className="text-custom-button-text/80">26 августа 2026 • Agro-pustelnik, Польша</p>
      </div>
    </footer>
  );
};

export default Footer;