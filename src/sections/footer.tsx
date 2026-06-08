export const Footer = () => (
    <footer className="py-10 mt-20 bg-[#5B4242]">
        <div className="w-full max-w-[600px] mx-auto px-6 text-center text-white space-y-8">

            {/* Текст: на мобильных text-base (16px), на планшетах и выше text-xl (20px) */}
            <p className="text-base md:text-xl leading-relaxed opacity-90 italic">
                По всем вопросам, связанным с трансфером, размещением гостей, торжественным вечером и сюрпризами, обращайтесь к нашему организатору
            </p>

            {/* Контакты */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
                {/* Имя и номер: на мобильных text-lg (18px), на планшетах и выше text-xl (20px) */}
                <span className="text-lg md:text-xl font-medium">Виктория</span>
                <a href="tel:+375291900920" className="text-lg md:text-xl hover:text-[#a8d5e2] transition-colors">
                    +375 29 190 0920
                </a>

                {/* Иконки */}
                <div className="flex gap-3">
                    <a href="https://t.me/nick" target="_blank" className="w-10 h-10 flex items-center justify-center bg-[#EE5E79] rounded-full hover:scale-105 transition-transform">
                        <img src="tg.svg" className="w-5 h-5" alt="Telegram" />
                    </a>
                    <a href="viber://chat?number=+375291900920" target="_blank" className="w-10 h-10 flex items-center justify-center bg-[#EE5E79] rounded-full hover:scale-105 transition-transform">
                        <img src="viber.svg" className="w-6 h-6" alt="Viber" />
                    </a>
                </div>
            </div>

        </div>
    </footer>
);