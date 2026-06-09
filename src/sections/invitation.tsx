import Image from 'next/image';

export const Invitation = () => (
  <section className="flex flex-col items-center text-center px-4 py-8">
    {/* Текст приглашения */}
    <div className="mb-12 text-xs sm:text-sm md:text-lg max-w-lg mx-auto uppercase tracking-wide leading-relaxed">
  <p className="mb-3">Дорогие гости!</p>
  <p>С огромным удовольствием приглашаем вас </p> 
    <p>разделить этот важный для нас день —</p>
  <p>день нашей свадьбы!</p>
</div>

    {/* Место */}
    <div className="relative px-4">
      <h3 className="text-xm sm:text-xl md:text-3xl font-bold mb-1">УСАДЬБА «ВОЛОДИНО»</h3>
      <p className="text-xs sm:text-sm md:text-lg italic">Агрогородок Юрьево, Лесная улица, 17</p>
      
      {/* Иконка "ГДЕ?" */}
      {/* Добавил scale-75 для мобильных, чтобы иконка не была слишком огромной */}
      <div className="absolute -top-10 -right-15 sm:-right-24 md:-right-40 w-20 md:w-32 scale-75 md:scale-100">
        <Image src="/where.svg" alt="Где?" width={110} height={100} className="object-contain" />
      </div>
    </div>

    {/* Календарь */}
    <div className="relative flex justify-center items-center">
      <div className="relative w-52 h-52 md:w-72 md:h-72">
        <Image src="/kalendar.svg" alt="Дата" fill className="object-contain" />
      </div>

      {/* Иконка "КОГДА?" */}
      {/* top-16 для мобильных, top-24 для десктопа */}
      <div className="absolute top-16 -left-25 sm:-left-24 md:-left-36 w-28 md:w-32 scale-75 md:scale-100">
        <Image src="/when.svg" alt="Когда?" width={148} height={92} className="object-contain" />
      </div>
    </div>
  </section>
);