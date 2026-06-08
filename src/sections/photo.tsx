import Image from 'next/image';

export const Photo = () => {
  return (
    <section>
      {/* RSVP Плашка */}
      <a
        href="#rsvp"
        className="absolute top-10 right-10 z-50 bg-[#a8d5e2] text-white px-4 py-2 rounded shadow-md text-sm font-semibold">
        ЗАПОЛНИТЬ АНКЕТУ
      </a>

      {/* Лента на фоне */}
      <div className="absolute -top-0 w-full max-w-[800px] h-[160px] z-1000">
        <Image
          src="/lenta.svg"
          alt="Лента"
          fill
          className="object-contain"
        />
      </div>

      <div className="flex flex-col items-center mt-21 relative">
        <h1 className="text-5xl md:text-7xl text-[#e94b75] mb-8 font-better-land">
          Илья и Настя
        </h1>

        <div className="relative w-full max-w-[500px] h-[497px] mx-auto">
          <Image
            src="/kids.svg"
            alt="Наши детские фото"
            fill
            className="object-contain"
          />
          <span className="absolute -left-12 top-1/3"><img src='zhenih.svg' className="w-30"></img></span>
          <span className="absolute -right-12 top-1/3"><img src='nevesta.svg' className="w-30"></img></span>
        </div>
      </div>
      <div className="w-full bg-[#e94b75] text-white py-6 text-4xl md:text-6xl mb-16 font-better-land">
        Мы женимся!
      </div>
    </section>
  );
};