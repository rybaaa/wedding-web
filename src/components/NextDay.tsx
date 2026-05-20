import React from 'react';

const NextDay: React.FC = () => {
  return (
    <section id="next-day" className="py-4 px-4 bg-custom-bg">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl font-title text-custom-text mb-2 text-center">
          На следующий день
        </h2>

        <div className="max-w-4xl mx-auto text-center space-y-2 text-custom-text leading-relaxed">
          <p>
            Это будет продолжение праздника - без формальностей, но с настроением.
          </p>
          <p>
            В Agro-pustelnik есть сауна и пруд, где можно плавать.<br />
            Планируем гриль, игры и просто хороший день вместе.
          </p>
          <p className="font-semibold">Для вашего удобства:</p>
          <p>
            Тем, кто остаётся на второй день и ночь, предоставляется трансфер обратно во Вроцлав.
          </p>
          <p>
            Тем, кто остаётся только на один день, утром второго дня будет организован трансфер до железнодорожной станции.
          </p>
          <p>
            Если кому-то понадобится поработать, на территории есть удобное место<br />
            и хороший интернет
          </p>
        </div>

        {/* What to bring */}
        <div className="mt-4 mb-4 max-w-md mx-auto text-center">
          <p className="text-custom-text mb-2">Возможно, вам пригодятся:</p>
          <ul className="text-custom-text space-y-2">
            <li>купальник / плавки</li>
            <li>шлепки</li>
            <li>полотенце</li>
            <li>удобная одежда для отдыха</li>
          </ul>
          <p className="text-custom-text mt-4">Всё остальное - по желанию и настроению.</p>
        </div>
      </div>
    </section>
  );
};

export default NextDay;