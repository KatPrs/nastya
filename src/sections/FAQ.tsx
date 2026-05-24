const questions = [
  { q: "Где проходит свадьба?", a: "В усадьбе 'Двор Стайки'. Адрес пришлем отдельно." },
  { q: "Есть ли дресс-код?", a: "Да, землистые тона: шампань, медь, оливковый." },
  { q: "Как добраться?", a: "Мы организуем трансфер для всех гостей." },
];

export const FAQ = () => (
  <section className="py-20 px-6 max-w-2xl mx-auto">
    <h2 className="text-3xl font-serif text-center mb-12">Вопросы и ответы</h2>
    <div className="space-y-8">
      {questions.map((item, i) => (
        <div key={i}>
          <h3 className="font-bold text-lg mb-2">{item.q}</h3>
          <p className="text-stone-600 font-light">{item.a}</p>
        </div>
      ))}
    </div>
  </section>
);