import { Hero } from '../sections/hero';
import { Invitation } from '../sections/invitation';
import { DressCode } from '../sections/dresscode';
import RSVPForm from '../sections/RSVPForm';
import { FAQ } from '../sections/FAQ';

export default function Home() {
  return (
    <main className="font-sans antialiased">
      <Hero />
      <Invitation />
      {/* Другие секции: Таймлайн, Карта */}
      <DressCode />
      <div id="rsvp" className="bg-[#F9F7F2] py-20">
        <h2 className="text-center font-serif text-4xl mb-12">Подтвердите ваше присутствие</h2>
        <RSVPForm />
      </div>
      <FAQ/>
      <footer className="py-10 text-center text-stone-400 text-sm">
        2026 • Nastya Wedding
      </footer>
    </main>
  );
}