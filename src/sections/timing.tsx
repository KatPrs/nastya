import Image from 'next/image';

export const Timing = () => {
    return (
        <section className="px-15">
            <div className="flex items-center justify-center w-full">
                {/* Адаптивный контейнер */}
                <div className="relative w-full max-w-[440px] aspect-[110/165]">
                    <Image
                        src="/timing.svg"
                        alt="Расписание дня"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
};