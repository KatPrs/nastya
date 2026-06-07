import Image from 'next/image';

export const Timing = () => {
    return (
        <section>
            <div className="flex items-center justify-center w-full h-full mb-20">
                <div className="relative w-110 h-165 ">
                    <Image
                        src="/timing.svg"
                        alt="Дата"
                        fill
                        className="object-contain"
                    />
                </div>
            </div>
        </section>
    );
};