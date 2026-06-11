export const Footer = () => (
    <footer className="py-10 mt-12 md:mt-20 bg-[#5B4242]">
        <div className="w-full max-w-[600px] mx-auto px-6 text-center text-white space-y-8">

            <p className="text-xs sm:text-sm md:text-lg leading-relaxed opacity-90 italic">
                По всем вопросам, связанным с трансфером, размещением гостей, торжественным вечером и сюрпризами, обращайтесь к нашему организатору
            </p>

            {/* Контакты: структура Flex */}
            <div className="flex items-center justify-center gap-4 md:gap-8">

                {/* Колонка 1: Имя */}
                <div className="flex-1 text-right">
                    <span className="text-base md:text-xl font-medium whitespace-nowrap">
                        Виктория
                    </span>
                </div>

                {/* Колонка 2: Телефон */}
                <div className="flex-1 text-center">
                    <a
                        href="tel:+375291900920"
                        className="text-base md:text-xl hover:text-[#a8d5e2] transition-colors whitespace-nowrap font-bold"
                    >
                        +375 29 190 09 20
                    </a>
                </div>

                {/* Колонка 3: Иконки */}
                <div className="flex-1 flex justify-start gap-2">
                    <a
                        href="https://t.me/weddingvictory"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 md:w-10 md:h-10 hover:scale-105 transition-transform flex items-center justify-center"
                    >
                        <img src="Telegram.svg" className="w-full h-full object-contain" alt="Telegram" />
                    </a>
                    <a
                        href="viber://chat?number=+375291900920"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 md:w-10 md:h-10 hover:scale-105 transition-transform flex items-center justify-center"
                    >
                        <img src="Viber.svg" className="w-full h-full object-contain" alt="Viber" />
                    </a>
                </div>
            </div>

        </div>
    </footer>
);