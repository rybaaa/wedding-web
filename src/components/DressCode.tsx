import React from 'react';

const DressCode: React.FC = () => {
  return (
    <section id="dress-code" className="pt-4 px-4 bg-custom-bg">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-title text-custom-text mb-4 text-center">
          Вечерние образы
        </h2>

        <div className="max-w-3xl mx-auto text-center space-y-2 text-custom-text leading-relaxed mb-12">
          <p>
            Нам близок вечерний стиль - аккуратный, праздничный и комфортный.
          </p>
          <p>
            Пожалуйста, выбирайте образы, в которых вам будет удобно провести весь день и вечер, но без джинсов и кроссовок.
          </p>
          <p>
            Будем рады спокойным, естественным оттенкам и просим по возможности избегать слишком ярких и кислотных цветов.
          </p>
          <p>
            Праздник пройдёт на природе, поэтому часть вечера предстоит ходить по траве — тонкие шпильки могут оказаться не самым удобным вариантом 🤍
          </p>
        </div>
      </div>
    </section>
  );
};

export default DressCode;