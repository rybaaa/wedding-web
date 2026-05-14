import React from 'react';
import { Clock } from 'lucide-react';

const Plan: React.FC = () => {
  return (
    <section id="plan" className="py-4 px-4 bg-custom-bg mt-12">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-2">
          <Clock className="w-12 h-12 mx-auto mb-2 text-custom-button" />
          <h2 className="text-4xl font-title text-custom-text mb-2">Как пройдёт этот день</h2>
        </div>

        <div className="max-w-2xl mx-auto text-center space-y-4 text-custom-text text-lg">
          <div>
            <p className="text-xl font-semibold mb-2">12:30 - 13:00</p>
            <p>Выезд из Вроцлава</p>
          </div>

          <div>
            <p className="text-xl font-semibold mb-2">14:00 - 15:00</p>
            <p>Сбор в Agro-pustelnik</p>
          </div>

          <div>
            <p className="text-xl font-semibold">16:00</p>
            <p>Церемония</p>
          </div>

          <div className="">
            <p className="leading-relaxed">
              Дальше - ужин, разговоры, смех, танцы и длинный летний вечер,<br />
              который может продолжиться до 2–3 часов ночи.
            </p>
            <p className="leading-relaxed space-y-2 mt-4">
              Если у вас будет возможность приехать на своей машине, мы будем очень благодарны 🤍<br />
              Но при необходимости постараемся организовать трансфер.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Plan;