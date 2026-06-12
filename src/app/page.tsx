import { Meet } from '../sections/meet';
import { Photo } from '../sections/photo';
import { Invitation } from '../sections/invitation';
import { Timing } from '../sections/timing';
import RSVPForm from '../sections/RSVPForm';
import { FAQ } from '../sections/FAQ';
import { Details } from '../sections/details';
import { Map } from '../sections/map';
import { Footer } from '../sections/footer';

export default function Home() {
  return (
    <main className="antialiased relative">
      {/* Фон сайта отдельным слоем */}
      <div className="absolute inset-0 bg-[#FDFBF7] bg-[url('/fon.png')] bg-repeat -z-50" />

      {/* Контент */}
      <div className="relative w-full py-8 md:py-16">
        <div className="w-full max-w-[800px] mx-auto px-4 text-center">
          <Photo />
          <Invitation />
          <Timing />
        </div>
      </div>

      <Details />

      <div className="relative w-full bg-white">
        <div className="w-full max-w-[800px] mx-auto px-4 text-center">
          <RSVPForm />
          <FAQ />
          <Meet />
        </div>
      </div>
      <Map />
      <Footer />
    </main>
  );
}