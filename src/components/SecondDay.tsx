import React from 'react';

const SecondDay: React.FC = () => {
  return (
    <section id="second-day" className="py-2 px-4 bg-custom-bg">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-title text-custom-text mb-2 text-center">
          Остаться на ночь
        </h2>

        <div className="max-w-3xl mx-auto text-center space-y-2 text-custom-text text-lg">
          <p>
            Для гостей предусмотрено проживание на одну ночь.
          </p>
          <p>
            Если вам захочется остаться с нами и на второй день - мы будем очень рады.<br />
            В этом случае потребуется доплата 200 zł с человека за второй день и ночь.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondDay;