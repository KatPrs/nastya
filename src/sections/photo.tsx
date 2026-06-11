import Image from 'next/image';

export const Photo = () => {
  return (
    <section className="relative w-full">
      {/* RSVP Плашка */}
      <a
        href="#rsvp"
        className="absolute -top-5 right-5 md:right-10 bg-[#FFB5CD] text-white px-4 py-2 md:py-4 rounded-full shadow-md text-[10px] md:text-sm font-semibold hover:bg-[#e94b75] transition-colors"
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

      <div className="px-2 sm:px-10 md:px-20 flex flex-col items-center mt-6 relative">
        {/* Контейнер, который держит всё вместе */}
        <div className="relative w-full max-w-[600px] flex items-center justify-center">

          {/* 1. Фон-сердце как отдельный слой (позиционируется абсолютно) */}
          <div className="absolute inset-0 -z-1000 w-full h-full">
            <img
              src="/serdce.png"
              alt="Фон сердце"
              className="w-full h-full object-contain"
            />
          </div>

          {/* 2. Контент (заголовок и фото детей) - они теперь зафиксированы относительно фона */}
          <div className="flex flex-col items-center w-full">
            <h1 className="text-5xl sm:text-6xl md:text-7xl text-[#e94b75] mb-4 font-better-land px-4">
              Илья и Настя
            </h1>

            <div className="relative w-full aspect-[4/3] max-w-[500px]">
              <Image
                src="/deti_nevesta_zenih.png"
                alt="Наши детские фото"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-2xl mx-auto w-full">
  
  {/* 2. Контейнер, который растягивается на всю ширину на мобильном, 
         а внутри "максимальной ширины" — на десктопе */}
  <div className="
    -mx-4 md:mx-0           /* Убираем отступы по бокам на мобильных */
    w-[calc(100%+2rem)] md:w-full /* Растягиваем на ширину экрана + отступы */
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