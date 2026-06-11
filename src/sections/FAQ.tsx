"use client";

import { useState } from 'react';

const questions = [
  { q: "Где проходит свадьба?", a: "В усадьбе Володино. Минская область, Смолевичский район, Усяжский сельсовет, агрогородок Юрьево, Лесная улица, 17" },
  { q: "Во сколько начинается и заканчивается мероприятие?", a: "Сбор гостей — в 15:00. Ориентировочное окончание — около 23:00" },
  { q: "Есть ли дресс-код?", a: "Дресс-код отсутствует! Выбирайте наряд, который радует глаз и позволяет чувствовать себя свободно." },
  { q: "Как добраться до места проведения?", a: "Мы организуем трансфер для всех гостей." },
  { q: "До какого числа нужно заполнить анкету?", a: "Просим подтвердить участие до 6 июля. Это поможет нам точно спланировать рассадку, меню и трансфер. Если вы не успеваете — напишите нам лично." },
  { q: "Что подарить молодожёнам?", 
    a: "Ваше присутствие — самый главный подарок! А если хотите нас порадовать, мы будем очень признательны за подарок в конверте. Если же вы хотите добавить что-то от себя, будем рады сертификату в «Золотое яблоко». Цветы просим не дарить: мы вскоре после свадьбы улетаем в Испанию и не успеем ими насладиться." },
  { q: "Что, если у меня изменятся планы после заполнения анкеты?", a: "Ничего страшного — напишите нам как можно скорее, и мы всё скорректируем." },
];

export const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="my-12 md:my-20 max-w-2xl mx-auto px-6">
      <h1 className="text-4xl sm:text-5xl md:text-6xl italic text-[#EE5E79] mb-10 text-center font-better-land">
        Вопросы и ответы
      </h1>
      
      <div className="space-y-2">
        {questions.map((item, i) => (
          <div key={i} className="border-b border-stone-200 py-2">
            <button 
              onClick={() => toggle(i)}
              className="flex justify-between items-center w-full text-left font-bold text-lg py-3 hover:text-[#EE5E79] transition-colors"
            >
              <span className="leading-snug pr-4">{item.q}</span>
              <span className="text-2xl text-[#EE5E79]">{openIndex === i ? '−' : '+'}</span>
            </button>
            
            {/* Анимация без жесткого ограничения высоты */}
            <div 
              className={`grid transition-all duration-300 ease-in-out ${
                openIndex === i ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
              }`}
            >
              <div className="overflow-hidden">
                <p className="text-stone-600 font-light text-base md:text-lg pb-4 leading-relaxed text-left">
                  {item.a}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};