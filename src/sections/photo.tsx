import Image from 'next/image';

export const Photo = () => {
  return (
    <section className="relative w-full">
      {/* RSVP Плашка */}
      <a
        href="#rsvp"
        className="absolute top-0 md:top-10 right-5 md:right-10 bg-[#FFB5CD] text-white px-4 py-4 rounded-full shadow-md text-[10px] md:text-sm font-semibold hover:bg-[#95c5d3] transition-colors"
      >
        ЗАПОЛНИТЬ АНКЕТУ
      </a>

      {/* Лента на фоне */}
      <div className="relative w-full max-w-[800px] h-[80px] md:h-[160px] mx-auto z-10">
        <Image
          src="/lenta.svg"
          alt="Лента"
          fill
          className="object-contain"
        />
      </div>

      <div className="flex flex-col items-center mt-6 relative">
        <h1 className="text-6xl md:text-7xl text-[#e94b75] mb-8 font-better-land px-4">
          Илья и Настя
        </h1>

        <div className="relative w-full max-w-[500px] h-[300px] md:h-[497px] mx-auto">
          <Image
            src="/kids.svg"
            alt="Наши детские фото"
            fill
            className="object-contain"
          />
          
          {/* Адаптивные иконки жениха и невесты */}
          {/* Используем scale для мобильных, чтобы не вылезали за края */}
          <span className="absolute -left-2 md:-left-12 top-1/3 scale-75 md:scale-100">
            <img src='zhenih.svg' className="w-24 md:w-30" alt="Жених" />
          </span>
          <span className="absolute -right-2 md:-right-12 top-1/3 scale-75 md:scale-100">
            <img src='nevesta.svg' className="w-24 md:w-30" alt="Невеста" />
          </span>
        </div>
      </div>

      <div className="w-full bg-[#e94b75] text-white py-4 md:py-6 text-5xl md:text-6xl my-8 md:mb-16 font-better-land text-center">
        Мы женимся!
      </div>
    </section>
  );
};