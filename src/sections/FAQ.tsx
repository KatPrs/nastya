"use client";

import { useState } from 'react';

const questions = [
  { q: "Где проходит свадьба?", a: "В усадьбе 'Двор Стайки'. Адрес пришлем отдельно." },
  { q: "Во сколько начинается и заканчивается мероприятие?", a: "Сбор гостей — в 15:30. Торжественная часть стартует в 16:00. Ориентировочное окончание — около полуночи, но праздник может затянуться — мы предупредим!" },
  { q: "Есть ли дресс-код?", a: "Да, землистые тона: шампань, медь, оливковый." },
  { q: "Как добраться до места проведения?", a: "Мы организуем трансфер для всех гостей." },
  { q: "До какого числа нужно заполнить анкету?", a: "Просим подтвердить участие до 6 июля. Это поможет нам точно спланировать рассадку, меню и трансфер. Если вы не успеваете — напишите нам лично." },
  { q: "Что подарить молодожёнам?", a: "Если хочется сделать нам что-то личное и душевное — мы будем очень рады виниловой пластинке. Любой жанр, любой исполнитель — главное, чтобы это была музыка, которую любите вы. А чтобы упростить вам жизнь и не ломать голову над выбором — мы будем искренне рады подарку в конверте." },
  { q: "Что, если у меня изменятся планы после заполнения анкеты?", a: "Ничего страшного — напишите нам как можно скорее, и мы всё скорректируем. Контакты для связи будут в персональном приглашении." },
];

export const FAQ = () => {
  // Храним индекс открытого вопроса (-1 значит, что все закрыты)
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="mb-20 mt-20 max-w-2xl mx-auto px-6">
      <h1 className="text-6xl italic text-[#EE5E79] mb-12 text-center" style={{ fontFamily: "'Better Land', cursive" }}>
        Вопросы и ответы
      </h1>
      
      <div className="space-y-4">
        {questions.map((item, i) => (
          <div key={i} className="border-b border-stone-200 pb-4">
            <button 
              onClick={() => toggle(i)}
              className="flex justify-between w-full text-left font-bold text-lg hover:text-[#EE5E79] transition-colors"
            >
              {item.q}
              <span>{openIndex === i ? '−' : '+'}</span>
            </button>
            
            {/* Анимация плавного появления */}
            <div className={`overflow-hidden text-left transition-all duration-300 ${openIndex === i ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'}`}>
              <p className="text-stone-600 font-light">{item.a}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};