import React, { useState } from 'react';
import emailjs from '@emailjs/browser';
import { toast, Toaster } from 'react-hot-toast';

const RsvpForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [attendMainDay, setAttendMainDay] = useState('');
  const [attendSecondDay, setAttendSecondDay] = useState('');
  const [needTransfer, setNeedTransfer] = useState('');
  const [alcoholPreferences, setAlcoholPreferences] = useState<string[]>([]);
  const [customAlcohol, setCustomAlcohol] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const alcoholOptions = [
    { value: 'white_wine', label: 'Белое вино' },
    { value: 'red_wine', label: 'Красное вино' },
    { value: 'champagne', label: 'Шампанское / игристое' },
    { value: 'whiskey', label: 'Виски' },
    { value: 'gin', label: 'Джин' },
    { value: 'rum', label: 'Ром' },
    { value: 'vodka', label: 'Водка' },
    { value: 'none', label: 'Не пью' },
  ];

  const handleAlcoholChange = (value: string) => {
    setAlcoholPreferences(prev => {
      if (prev.includes(value)) {
        return prev.filter(v => v !== value);
      } else {
        return [...prev, value];
      }
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!fullName || !attendMainDay || !attendSecondDay || !needTransfer || alcoholPreferences.length === 0) {
      const errorMessage = 'Пожалуйста, заполните все обязательные поля';
      setError(errorMessage);
      toast.error(errorMessage, {
        duration: 5000,
        style: {
          background: '#fee2e2',
          color: '#991b1b',
        },
      });
      return;
    }

    setLoading(true);
    setError('');

    const templateParams = {
      to_email: 'bolshayaryba22@gmail.com',
      full_name: fullName,
      attend_main_day: attendMainDay === 'yes' ? 'точно буду' : 
                       attendMainDay === 'answer later' ? 'отвечу позже' : 'не смогу присутствовать',
      attend_second_day: attendSecondDay === 'yes' ? 'Да, конечно' :
                         attendSecondDay === 'answer later' ? 'Отвечу позже' :
                         attendSecondDay === 'no' ? 'Нет' : 'Не указано',
      need_transfer: needTransfer === 'yes_toWroclaw' ? 'Да, на основной день + обратно во Вроцлав после второго дня' :
                     needTransfer === 'yes_toStation' ? 'Да, на основной день + утром второго дня до ж/д станции' :
                     needTransfer === 'no' ? 'Нет' :
                     needTransfer === 'answer later' ? 'Пока не решил/а' : 'Не указано',
      alcohol_preferences: alcoholPreferences.length > 0 ? 
        alcoholPreferences.map(v => alcoholOptions.find(o => o.value === v)?.label).join(', ') : 'Не указано',
      custom_alcohol: customAlcohol || 'Не указано',
    };

    try {
      await emailjs.send(
        // @ts-ignore
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        // @ts-ignore
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        templateParams,
        // @ts-ignore
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );
      
      setSubmitted(true);
      setFullName('');
      setAttendMainDay('');
      setAttendSecondDay('');
      setNeedTransfer('');
      setAlcoholPreferences([]);
      setCustomAlcohol('');
      toast.success('Спасибо! Ваш ответ отправлен.', {
        duration: 5000,
        style: {
          background: '#ecfccb',
          color: '#166534',
        },
      });
    } catch (err: any) {
      console.error('EmailJS Error:', err);
      setError('Не удалось отправить форму. Попробуйте еще раз.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div id="rsvp" className="bg-white rounded-[10px] shadow-lg p-6 md:p-8 max-w-2xl mx-auto">
      <h2 className="text-4xl md:text-3xl font-title text-custom-text mb-4 text-center">
        Дайте нам знать
      </h2>
      <span className='text-1xl md:text-2xl italic text-custom-text text-center mb-6 block'>
        Пожалуйста заполните анкету до 15 июня
      </span>
      <Toaster position="top-right" reverseOrder={false} />

      {submitted ? (
        <div className="bg-green-50 border border-green-200 rounded-[10px] p-4 text-green-700 text-center">
          Спасибо! Ваш ответ получен.
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && (
            <div className="bg-red-50 border border-red-200 rounded-[10px] p-3 text-red-700 text-sm">
              {error}
            </div>
          )}

          {/* Имя и Фамилия */}
          <div>
            <label className="block text-left text-custom-text mb-2 font-medium">
              Имя и Фамилия
            </label>
            <input
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              className="w-full p-3 border-2 border-dashed border-gray-300 rounded-[10px] focus:outline-none focus:border-custom-button bg-transparent text-custom-text"
              placeholder="поле ввода"
              disabled={loading}
              required
            />
          </div>

          {/* Основной день свадьбы */}
          <div>
            <label className="block text-left text-custom-text mb-2 font-medium">
              Будешь с нами на основной день свадьбы{' '}
              <span className="text-custom-button text-sm">(single-choice)</span>
            </label>
            <p className="text-sm text-custom-text mb-3">(26 августа 2026)?</p>
            <div className="space-y-2">
              <label className="flex items-start p-3 border border-gray-300 rounded-[10px] cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="attendMainDay"
                  value="yes"
                  checked={attendMainDay === 'yes'}
                  onChange={(e) => setAttendMainDay(e.target.value)}
                  className="mt-1 mr-3"
                  disabled={loading}
                />
                <span className="text-custom-text">Точно буду</span>
              </label>
              <label className="flex items-start p-3 border border-gray-300 rounded-[10px] cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="attendMainDay"
                  value="answer later"
                  checked={attendMainDay === 'answer later'}
                  onChange={(e) => setAttendMainDay(e.target.value)}
                  className="mt-1 mr-3"
                  disabled={loading}
                />
                <span className="text-custom-text">Отвечу позже</span>
              </label>
              <label className="flex items-start p-3 border border-gray-300 rounded-[10px] cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="attendMainDay"
                  value="no"
                  checked={attendMainDay === 'no'}
                  onChange={(e) => setAttendMainDay(e.target.value)}
                  className="mt-1 mr-3"
                  disabled={loading}
                />
                <span className="text-custom-text">Не смогу присутствовать</span>
              </label>
            </div>
          </div>

          {/* Второй день */}
          <div>
            <label className="block text-left text-custom-text mb-2 font-medium">
              Планируешь ли остаться на второй день{' '}
              <span className="text-red-500">*</span>
              <span className="text-custom-button text-sm">(single-choice)</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-start p-3 border border-gray-300 rounded-[10px] cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="attendSecondDay"
                  value="yes"
                  checked={attendSecondDay === 'yes'}
                  onChange={(e) => setAttendSecondDay(e.target.value)}
                  className="mt-1 mr-3"
                  disabled={loading}
                />
                <span className="text-custom-text">Да, конечно</span>
              </label>
              <label className="flex items-start p-3 border border-gray-300 rounded-[10px] cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="attendSecondDay"
                  value="answer later"
                  checked={attendSecondDay === 'answer later'}
                  onChange={(e) => setAttendSecondDay(e.target.value)}
                  className="mt-1 mr-3"
                  disabled={loading}
                />
                <span className="text-custom-text">Отвечу позже</span>
              </label>
              <label className="flex items-start p-3 border border-gray-300 rounded-[10px] cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="attendSecondDay"
                  value="no"
                  checked={attendSecondDay === 'no'}
                  onChange={(e) => setAttendSecondDay(e.target.value)}
                  className="mt-1 mr-3"
                  disabled={loading}
                />
                <span className="text-custom-text">Нет :(</span>
              </label>
            </div>
          </div>

          {/* Трансфер */}
          <div>
            <label className="block text-left text-custom-text mb-2 font-medium">
              Нужен ли тебе трансфер?{' '}
              <span className="text-red-500">*</span>
              <span className="text-custom-button text-sm">(single-choice)</span>
            </label>
            <div className="space-y-2">
              <label className="flex items-start p-3 border border-gray-300 rounded-[10px] cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="needTransfer"
                  value="yes_toWroclaw"
                  checked={needTransfer === 'yes_toWroclaw'}
                  onChange={(e) => setNeedTransfer(e.target.value)}
                  className="mt-1 mr-3"
                  disabled={loading}
                />
                <span className="text-custom-text">Да, на основной день + обратно во Вроцлав после второго дня</span>
              </label>
              <label className="flex items-start p-3 border border-gray-300 rounded-[10px] cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="needTransfer"
                  value="yes_toStation"
                  checked={needTransfer === 'yes_toStation'}
                  onChange={(e) => setNeedTransfer(e.target.value)}
                  className="mt-1 mr-3"
                  disabled={loading}
                />
                <span className="text-custom-text">Да, на основной день + утром второго дня до ж/д станции </span>
              </label>
              <label className="flex items-start p-3 border border-gray-300 rounded-[10px] cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="needTransfer"
                  value="no"
                  checked={needTransfer === 'no'}
                  onChange={(e) => setNeedTransfer(e.target.value)}
                  className="mt-1 mr-3"
                  disabled={loading}
                />
                <span className="text-custom-text">Нет, приеду самостоятельно</span>
              </label>
              <label className="flex items-start p-3 border border-gray-300 rounded-[10px] cursor-pointer hover:bg-gray-50">
                <input
                  type="radio"
                  name="needTransfer"
                  value="answer later"
                  checked={needTransfer === 'answer later'}
                  onChange={(e) => setNeedTransfer(e.target.value)}
                  className="mt-1 mr-3"
                  disabled={loading}
                />
                <span className="text-custom-text">Пока не решил/а</span>
              </label>
            </div>
          </div>

          {/* Предпочтения по алкоголю */}
          <div>
            <label className="block text-left text-custom-text mb-2 font-medium">
              Предпочтения по алкоголю{' '}
              <span className="text-red-500">*</span>
              <span className="text-custom-button text-sm">(multi-choice)</span>
            </label>
            <div className="space-y-2">
              {alcoholOptions.map((option) => (
                <label
                  key={option.value}
                  className="flex items-start p-3 border border-gray-300 rounded-[10px] cursor-pointer hover:bg-gray-50"
                >
                  <input
                    type="checkbox"
                    value={option.value}
                    checked={alcoholPreferences.includes(option.value)}
                    onChange={() => handleAlcoholChange(option.value)}
                    className="mt-1 mr-3"
                    disabled={loading}
                  />
                  <span className="text-custom-text">{option.label}</span>
                </label>
              ))}
            </div>
          </div>

          {/* Свой вариант */}
          <div>
            <input
              type="text"
              value={customAlcohol}
              onChange={(e) => setCustomAlcohol(e.target.value)}
              className="w-full p-3 border-2 border-dashed border-gray-300 rounded-[10px] focus:outline-none focus:border-custom-button bg-transparent text-custom-text"
              placeholder="свой вариант"
              disabled={loading}
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-custom-button hover:opacity-90 text-custom-button-text font-medium py-3 rounded-[10px] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Отправка...' : 'Отправить'}
          </button>
        </form>
      )}
    </div>
  );
};

export default RsvpForm;