import Image from 'next/image';

export const Photo = () => {
  return (
    <section className="relative w-full">
      {/* RSVP Плашка */}
      <a
        href="#rsvp"
        className="absolute top-5 right-5 z-20 bg-[#FFB5CD] text-white px-4 py-2 md:py-4 rounded-full shadow-md text-[10px] md:text-sm font-semibold hover:bg-[#e94b75] transition-colors"
      >
        ЗАПОЛНИТЬ АНКЕТУ
      </a>

      {/* Контейнер для изображения */}
      <div className="w-full max-w-3xl mx-auto pt-6">
        <div className="relative w-full aspect-[1091/1134]">
          <Image
            src="/vse.png"
            alt="Приглашение"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>

      {/* Блок "Мы женимся" */}
      <div className="max-w-2xl mx-auto w-full">
        <div className="
      -mx-4 md:mx-0 
      w-[calc(100%+2rem)] md:w-full 
      bg-[#e94b75] text-white 
      py-4 md:py-6 
      text-4xl md:text-6xl 
      font-better-land text-center
    ">
          Мы женимся!
        </div>
      </div>
    </section>
  );
};