import Image from 'next/image';

export const Meet = () => (
  <section className="mb-20 mt-20">
    <div className="my-20">
      <h1 className="text-4xl md:text-6xl italic text-[#EE5E79] font-better-land">
        До встречи!
      </h1>
    </div>

    <div className="relative w-full max-w-[500px] mx-auto h-[500px]">
      <Image
        src="/we.svg"
        alt="Наше фото"
        fill
        className="object-contain"
      />
    </div>
  </section>
);