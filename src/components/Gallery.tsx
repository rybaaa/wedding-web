import React from 'react';
import { Camera } from 'lucide-react';

const Gallery: React.FC = () => {
  return (
    <section id="gallery" className="py-16 px-4 bg-custom-bg">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <Camera className="w-12 h-12 mx-auto mb-4 text-custom-button" />
          <h2 className="text-4xl font-title text-custom-text mb-4">Our Story</h2>
          <p className="text-custom-text">A glimpse of our journey together</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {[1, 2, 3, 4, 5, 6].map((i) => (
            <div
              key={i}
              className="bg-white rounded-[10px] h-64 flex items-center justify-center shadow-md"
            >
              <Camera className="w-12 h-12 text-custom-button opacity-30" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;