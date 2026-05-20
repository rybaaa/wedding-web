import React from 'react';

const AboutGifts: React.FC = () => {
  return (
    <section id="about-gifts" className="py-8 px-4 bg-custom-bg">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-title text-custom-text mb-2 text-center text-[36px]">
          Про подарки
        </h2>

        <div className="max-w-3xl mx-auto text-center text-custom-text leading-relaxed">
          <p>
            Если вы задумываетесь о подарке, самый удобный вариант для нас - это деньги.<br />
            Мы будем вам очень благодарны.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutGifts;