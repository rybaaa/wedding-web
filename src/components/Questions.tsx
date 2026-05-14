import React from 'react';

const Questions: React.FC = () => {
  return (
    <section id="questions" className="py-16 px-4 bg-custom-bg">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl font-title text-custom-text mb-8 text-center">
          Если появятся вопросы
        </h2>

        <div className="max-w-3xl mx-auto text-center space-y-6 text-custom-text leading-relaxed">
          <p>
            Если у вас появятся идеи, сюрпризы или вопросы по организации дня,<br />
            пожалуйста, свяжитесь с нашим организатором:
          </p>
          <div className="text-lg">
            <p className="font-semibold">Татьяна</p>
            <p>📞 номер телефона</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Questions;