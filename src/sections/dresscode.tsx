const colors = ['#E5D3B3', '#D2B48C', '#8FBC8F', '#556B2F', '#2F4F4F'];

export const DressCode = () => (
  <section className="py-20 bg-white text-center">
    <h2 className="font-serif text-3xl mb-8 uppercase tracking-widest">Dress Code</h2>
    <p className="mb-10 text-stone-500">Будем признательны, если вы поддержите палитру нашей свадьбы:</p>
    <div className="flex flex-wrap justify-center gap-4">
      {colors.map(color => (
        <div 
          key={color} 
          className="w-12 h-12 rounded-full border border-stone-200" 
          style={{ backgroundColor: color }} 
        />
      ))}
    </div>
  </section>
);