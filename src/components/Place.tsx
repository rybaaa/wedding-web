import React from 'react';
import { MapPin } from 'lucide-react';
// @ts-ignore
import agro2 from '../assets/agro2.WEBP';
// @ts-ignore
import agro3 from '../assets/agro3.jpg';
import { motion } from 'framer-motion';
import { sectionVariants } from '../utils/sectionVariants';

const Place: React.FC = () => {
  return (
    <section id="place" className="py-4 px-4 bg-custom-bg">
      <div className="container mx-auto max-w-4xl">
        {/* Section Title */}
        <h3 className="text-center text-4xl font-title text-custom-text mb-4">
          Про день, который мы запомним
        </h3>
        
        {/* Date - Large */}
        <h2 className="text-center text-4xl md:text-5xl font-title text-custom-text mb-8">
          26 августа 2026
        </h2>

        {/* Description */}
        <p className="text-center text-custom-text leading-relaxed mb-12 max-w-3xl mx-auto">
          Мы выбрали формат свадьбы на природе не случайно.
          Для нас это про тишину, тепло и ощущение дома - как те летние дни в деревне у бабушки, 
          когда никуда не нужно спешить.
          <br /><br />
          Нам важно провести этот день спокойно, без суеты, рядом с теми, кто нам дорог.
        </p>

        {/* Place Title */}
        <div className="text-center mb-2">
          <MapPin className="w-12 h-12 mx-auto mb-4 text-custom-button" />
          <h2 className="text-4xl font-title text-custom-text mb-2">Место среди природы</h2>
        </div>

        {/* Location Box */}
        <div className="p-2 mb-2 text-center">
          <p className="text-2xl text-custom-text mb-2">
            Польша, агроусадьба Agro-pustelnik
          </p>
          <p className="text-custom-text mb-6">
            Церемония и праздник пройдут в одном месте — среди природы и тишины.
          </p>
          
          <a 
            href="https://maps.app.goo.gl/SSnpfV7TsSZGsP9N8"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 bg-custom-button text-custom-button-text rounded-[10px] hover:opacity-90 transition-all font-medium"
          >
            Посмотреть на карте
          </a>
        </div>


        {/* Image of location */}
        {/* Two overlapping images of location */}
        <motion.div
         className="mb-8 mt-8 relative max-w-2xl mx-auto h-[300px] md:h-[400px] lg:h-[500px]"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          // @ts-ignore
          variants={sectionVariants}
          >
          {/* First image - positioned top left */}
          <div className="absolute top-0 left-0 w-[70%] rounded-[10px] overflow-hidden shadow-lg transform -rotate-2 z-10">
            <img 
              src={agro2} 
              alt="Agro-pustelnik 1" 
              className="w-full h-[200px] md:h-[300px] lg:h-[350px] object-cover"
            />
          </div>
          
          {/* Second image - positioned bottom right, overlapping */}
          <div className="absolute bottom-[-60px] md:bottom-[-100px] right-0 md:right-[-100px] w-[70%] rounded-[10px] overflow-hidden shadow-lg transform rotate-2">
            <img 
              src={agro3} 
              alt="Agro-pustelnik 2" 
              className="w-full h-[200px] md:h-[300px] lg:h-[350px] object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Place;