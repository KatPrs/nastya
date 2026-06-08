import Image from 'next/image';

export const Invitation = () => (
  <section className="flex flex-col items-center text-center px-4">
    {/* Текст приглашения */}
    <div className="mb-16 text-lg max-w-lg mx-auto uppercase">
      <p className="mb-3">Дорогие гости!</p>
      <p>С огромным удовольствием приглашаем вас разделить этот важный для нас день —</p>
      <p>день нашей свадьбы!</p>
    </div>

    {/* Место */}
    <div className="relative mb-16">
      <h3 className="text-2xl md:text-3xl font-bold mb-1">УСАДЬБА «ВОЛОДИНО»</h3>
      <p className="text-lg md:text-xl italic">Агрогородок Юрьево, Лесная улица, 17</p>
      
      {/* Иконка "ГДЕ?" - Сдвинул правее: было -right-16, стало -right-32 */}
      <div className="absolute -top-12 -right-32 md:-right-40 w-24 md:w-32">
        <Image src="/where.svg" alt="Где?" width={110} height={100} className="object-contain" />
      </div>
    </div>

    {/* Календарь */}
    <div className="relative flex justify-center items-center mb-8">
      <div className="relative w-60 h-60 md:w-72 md:h-72">
        <Image src="/calendar.svg" alt="Дата" fill className="object-contain" />
      </div>

      {/* Иконка "КОГДА?" - Опустил ниже: было top-10, стало top-24 */}
      <div className="absolute top-24 -left-20 md:-left-36 w-24 md:w-32">
        <Image src="/when.svg" alt="Когда?" width={148} height={92} className="object-contain" />
      </div>
    </div>
  </section>
);