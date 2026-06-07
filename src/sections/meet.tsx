import Image from 'next/image';

export const Meet = () => (
  <section>
    <div className="mb-16">
      <p className="text-lg text-stone-700 mb-6 mx-auto">
        МЫ БУДЕМ РАДЫ, ЕСЛИ ТЫ ОТКАЖЕШЬСЯ ОТ ПОКУПКИ ЖИВЫХ ЦВЕТОВ
        И ЗАМЕНИШЬ ИХ НА ПОДАРОЧНЫЙ СЕРТИФИКАТ
        ДЛЯ ОБУСТРОЙСТВА НАШЕГО УЮТНОГО ДОМА ИЛИ НА ЯРКИЕ ВПЕЧАТЛЕНИЯ –
        ТАКИЕ ПОДАРКИ БУДУТ РАДОВАТЬ НАС НАМНОГО ДОЛЬШЕ!
      </p>
      <p className="text-lg text-stone-700 mx-auto">
        ДЛЯ ТВОЕГО УДОБСТВА БУДЕТ ОРГАНИЗОВАН ТРАНСФЕР.
        ДЕТАЛИ СООБЩИМ ПОЗДНЕЕ
      </p>
    </div>

    <div className="mb-20 mt-20">
      <h1 className="text-7xl italic text-[#EE5E79]" style={{ fontFamily: "'Better Land', cursive" }}>
        До встречи!
      </h1>
    </div>

    <div className="relative w-full max-w-[500px] mx-auto aspect-[853/1280]">
      <Image
        src="/we.png"
        alt="Наше фото"
        fill
        className="object-contain"
        sizes="(max-width: 768px) 100vw, 500px"
      />
    </div>
  </section>
);