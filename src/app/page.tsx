import { Meet } from '../sections/meet';
import { Photo } from '../sections/photo';
import { Invitation } from '../sections/invitation';
import { Timing } from '../sections/timing';
import RSVPForm from '../sections/RSVPForm';
import { FAQ } from '../sections/FAQ';

export default function Home() {
  return (
    <main className="font-sans antialiased">
      <div className="relative w-full py-16 bg-[#FDFBF7] bg-[url('/fon.png')] bg-repeat">
        <div className="w-full max-w-[800px] mx-auto px-4 text-center">
          <Photo />
          <Invitation />
        </div>
      </div>
      <div className="relative w-full py-16">
        <div className="w-full max-w-[800px] mx-auto px-4 text-center">
          <Timing />
          <Meet />

          <RSVPForm />
          <FAQ />
        </div>

      </div>

      <footer className="py-10 text-center text-stone-400 text-sm">
        2026 • Nastya Wedding
      </footer>
    </main>
  );
}