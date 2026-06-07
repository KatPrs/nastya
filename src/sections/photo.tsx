import Image from 'next/image';

export const Photo = () => {
  return (
    <section>
      {/* RSVP Плашка */}
      <div className="fixed top-10 right-10 z-50 bg-[#a8d5e2] text-white px-4 py-2 rounded shadow-md text-sm font-semibold rotate-3">
        ЗАПОЛНИТЬ АНКЕТУ
      </div>

      {/* Лента на фоне */}
      <div className="absolute -top-0 w-full max-w-[800px] h-[160px] z-1000">
        <Image
          src="/lenta.svg"
          alt="Лента"
          fill
          className="object-contain"
        />
      </div>

      <div className="flex flex-col items-center mb-16 mt-21 relative">
        <h1 className="text-7xl italic text-stone-800 mb-8" style={{ fontFamily: "'Better Land', cursive" }}>
          Мы женимся!
        </h1>

        {/* Контейнер для фото - теперь он не пытается впихнуть в себя всё */}
        <div className="relative w-full max-w-[500px] aspect-[4/3] mx-auto">
          <Image
            src="/kids.png"
            alt="Наши детские фото"
            fill
            className="object-contain"
          />
          <span className="absolute -left-12 top-1/3"><img src='zhenih.svg' className="w-30"></img></span>
          <span className="absolute -right-12 top-1/3"><img src='nevesta.svg' className="w-30"></img></span>
        </div>
      </div>

      {/* 2. Плашка SAVE THE DATE */}
      <div className="w-full bg-[#e94b75] text-white py-6 text-3xl tracking-[0.2em] font-light mb-16">
        SAVE THE DATE
      </div>
    </section>
  );
};