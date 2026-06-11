export const Map = () => (
  <section className="w-full">
    <div className="max-w-[800px] mx-auto px-4">
      {/* Контейнер для карты: высота 300px для мобильных, 400px для десктопа */}
      <div className="w-full h-[300px] md:h-[400px] rounded-xl overflow-hidden shadow-lg border-2 border-[#a8d5e2]">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A0b85761ded76089c24f216e87cd2987d13418bdd8d8ad2e4dc275fafb8e020b4&amp;source=constructor" 
          width="100%"
          height="100%"
          frameBorder="0"
          title="Карта проезда"
        ></iframe>
      </div>
    </div>
  </section>
);