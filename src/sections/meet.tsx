import Image from 'next/image';

export const Meet = () => (
  <section className="my-12 md:my-20 px-4">
    <div className="mb-8 md:mb-16">
      <h1 className="text-5xl md:text-6xl italic text-[#EE5E79] font-better-land">
        До встречи!
      </h1>
    </div>

    {/* Адаптивная высота фото: 350px на мобильных, 500px на десктопе */}
    <div className="relative w-full max-w-[500px] mx-auto h-[350px] md:h-[500px]">
      <Image
        src="/photo.jpg"
        alt="Наше фото"
        fill
        className="object-contain"
      />
    </div>
  </section>
);