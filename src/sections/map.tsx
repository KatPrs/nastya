export const Map = () => (
  <section className="w-full py-10">
    <div className="max-w-[800px] mx-auto px-4">
      <div className="mb-20">
      <h1 className="text-4xl md:text-6xl italic text-[#EE5E79] text-center font-better-land">
        Расположение
      </h1>
    </div>
      
      {/* Контейнер для карты */}
      <div className="w-full h-[400px] rounded-xl overflow-hidden shadow-lg border-2 border-[#a8d5e2]">
        <iframe
          src="https://yandex.ru/map-widget/v1/?um=constructor%3A0b85761ded76089c24f216e87cd2987d13418bdd8d8ad2e4dc275fafb8e020b4" 
          width="100%" 
          height="100%" 
          frameBorder="0"
          title="Карта проезда"
          className="transition-all duration-500"
        ></iframe>
      </div>
    </div>
  </section>
  
);