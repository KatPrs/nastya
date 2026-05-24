export const Hero = () => (
  <section className="h-screen relative flex items-center justify-center overflow-hidden">
    {/* Фото на фоне */}
    <div className="absolute inset-0 z-0">
      <img 
        src="/path-to-your-photo.jpg" 
        className="w-full h-full object-cover opacity-80" 
        alt="Wedding"
      />
      <div className="absolute inset-0 bg-stone-900/20" /> {/* Затемнение */}
    </div>
    
    <div className="relative z-10 text-center text-white">
      <h1 className="font-serif text-6xl md:text-8xl italic mb-6">Настя и Андрей</h1>
      <p className="uppercase tracking-[0.3em] text-lg">15.08.2026</p>
    </div>
  </section>
);