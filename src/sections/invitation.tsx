import Image from 'next/image';

export const Invitation = () => (
  <section>
    {/* 3. Имена */}
    <div className="mb-16">
      <h1 className="text-7xl italic text-[#EE5E79]" style={{ fontFamily: "'Better Land', cursive" }}>
        Настя и Илья
      </h1>
    </div>

    {/* 4. Текст приглашения */}
    <div className="mb-16">
      <p className="text-lg text-stone-700 max-w-md mx-auto uppercase">
        С огромным удовольствием приглашаем тебя разделить этот важный для нас день — день нашей свадьбы!
      </p>
    </div>

    {/* 5. Место */}
    <div className="mb-8">
      <h3 className="text-lg font-bold mb-1">УСАДЬБА «ВОЛОДИНО»</h3>
      <p className="text-stone-600">Агрогородок Юрьево, Лесная улица, 17</p>
    </div>

    {/* 6. Календарь */}
    <div className="flex items-center justify-center w-full h-full mb-8">
      <div className="relative w-70 h-70 ">
        <Image
          src="/calendar.svg"
          alt="Дата"
          fill
          className="object-contain"
        />
      </div>
    </div>
  </section>
);