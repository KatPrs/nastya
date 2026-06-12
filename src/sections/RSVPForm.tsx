"use client";

import { useState } from 'react';

export default function RSVPForm() {
  const [status, setStatus] = useState('');
  const [selectedDrinks, setSelectedDrinks] = useState<string[]>([]);
  const [showOtherInput, setShowOtherInput] = useState(false);
  const [otherDrink, setOtherDrink] = useState('');

  const drinkOptions = [
    "Игристое", "Вино белое", "Вино красное",
    "Коньяк/бренди", "Виски", "Водка", "Я не пью"
  ];

  const toggleDrink = (drink: string) => {
    setSelectedDrinks(prev =>
      prev.includes(drink) ? prev.filter(d => d !== drink) : [...prev, drink]
    );
  };

  async function handleSubmit(e: any) {
    e.preventDefault();
    setStatus('Отправляю...');

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      attendance: e.target.attendance.value,
      drinks: [...selectedDrinks, showOtherInput ? otherDrink : ''].filter(Boolean).join(', '),
      allergies: e.target.allergies.value,
      comment: e.target.comment.value,
    };

    try {
      await fetch('https://script.google.com/macros/s/AKfycbwevSTpiPAi-Km0eUk9lywaohIoTWqviagr0Mx07rfClAQyd1VtVtjZnqQXgXJlPEqK/exec', {
        method: 'POST',
        body: JSON.stringify(formData),
      });
      setStatus('Спасибо! Мы получили ваш ответ.');
      e.target.reset();
      setSelectedDrinks([]);
      setShowOtherInput(false);
      setOtherDrink('');
    } catch {
      setStatus('Ошибка при отправке, попробуйте еще раз.');
    }
  }

  return (
    <section id="rsvp" className="pt-12 md:pt-20 mb-12 md:mb-20 max-w-2xl mx-auto px-6 scroll-mt-0">
      <h1 className="text-4xl sm:text-5xl md:text-6xl text-[#EE5E79] mb-10 text-center font-better-land">
        Анкета гостя
      </h1>

      <form onSubmit={handleSubmit} className="space-y-6">
        <textarea
          name="name"
          required
          rows={1}
          className="w-full bg-transparent border-b border-stone-300 py-2 outline-none transition-colors resize-none overflow-hidden focus:border-[#EE5E79] placeholder:whitespace-pre-line sm:placeholder:whitespace-nowrap [field-sizing:content] min-h-[40px]"
          placeholder="Имя, фамилия &#10;(и спутника, если Вы приглашены вместе)"
        />

        <input name="phone" type="tel" placeholder="Номер телефона" required className="w-full border-b border-stone-300 bg-transparent py-2 focus:border-[#EE5E79] outline-none" />

        <select name="attendance" className="w-full border-b border-stone-300 bg-transparent py-2 focus:border-[#EE5E79] outline-none text-stone-600">
          <option value="Буду">С радостью буду!</option>
          <option value="Не смогу">К сожалению, не смогу</option>
        </select>

        <div className="space-y-3">
          <p className="text-stone-500 text-sm">Предпочтения по напиткам:</p>
          <div className="grid grid-cols-2 gap-2">
            {drinkOptions.map(drink => (
              <button
                key={drink}
                type="button"
                onClick={() => toggleDrink(drink)}
                className={`px-2 py-1.5 text-xs border transition-all ${selectedDrinks.includes(drink)
                  ? "bg-[#EE5E79] text-white border-[#EE5E79]"
                  : "bg-transparent text-stone-600 border-stone-300 hover:border-stone-500"
                  }`}
              >
                {drink}
              </button>
            ))}
            <button
              type="button"
              onClick={() => setShowOtherInput(!showOtherInput)}
              className="px-2 py-1.5 text-xs border border-dashed border-stone-400 text-stone-500 hover:bg-stone-50"
            >
              {showOtherInput ? 'Скрыть поле' : '+ Свой вариант'}
            </button>
          </div>
          {showOtherInput && (
            <input
              type="text"
              placeholder="Укажите ваш напиток"
              value={otherDrink}
              onChange={(e) => setOtherDrink(e.target.value)}
              className="w-full border-b border-[#EE5E79] bg-transparent py-2 mt-2 outline-none"
            />
          )}
        </div>

        <textarea
          name="allergies"
          rows={1}
          className="w-full bg-transparent border-b border-stone-300 py-2 outline-none transition-colors resize-none overflow-hidden focus:border-[#EE5E79] placeholder:whitespace-pre-line sm:placeholder:whitespace-nowrap [field-sizing:content] min-h-[40px]"
          placeholder="Пищевые аллергии /&#10;непереносимости"
        />
        <textarea
          name="comment"
          placeholder="Ваши пожелания"
          rows={1} // Начинаем с 1 строки
          onInput={(e) => {
            const target = e.target as HTMLTextAreaElement;
            target.style.height = 'auto'; // Сбрасываем высоту
            target.style.height = target.scrollHeight + 'px'; // Устанавливаем по контенту
          }}
          className="w-full border-b border-stone-300 bg-transparent py-2 focus:border-[#EE5E79] outline-none resize-none overflow-hidden font-palatino"
        />
        <button className="w-full py-4 mt-4 bg-stone-800 text-white hover:bg-[#EE5E79] transition-all duration-300 font-medium uppercase text-sm tracking-wider">
          Отправить
        </button>
        <p className="text-center text-sm text-stone-500">{status}</p>
      </form>
    </section>
  );
}