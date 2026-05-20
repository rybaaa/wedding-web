import React from 'react';

const InsteadOfFlowers: React.FC = () => {
  return (
    <section id="instead-of-flowers" className="px-4 pb-8 bg-custom-bg">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-title text-custom-text mb-2 text-center">
          Вместо цветов
        </h2>

        <div className="max-w-3xl mx-auto text-center space-y-2 text-custom-text leading-relaxed">
          <p>
            Пожалуйста, не дарите нам цветы 🤍
          </p>
          <p>
            Если вам хочется прийти не с пустыми руками, мы будем рады бутылке вашего любимого алкоголя.
          </p>
          <p>
            А если вы не пьёте - будем благодарны, если вы поддержите любой приют для животных,<br />
            например ratujemyzwierzaki.pl.
          </p>
        </div>
      </div>
    </section>
  );
};

export default InsteadOfFlowers;