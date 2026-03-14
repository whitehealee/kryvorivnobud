import Link from 'next/link';

export function Footer() {
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-secondary text-white">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <span className="text-2xl">🏗️</span>
                            <span className="text-xl font-bold">КривоРівноБуд</span>
                        </div>
                        <p className="text-neutral-300 text-sm leading-relaxed">
                            Професійні штукатурні роботи в Київській області. Працюємо якісно, швидко та за доступними цінами.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Послуги</h4>
                        <ul className="space-y-2 text-neutral-300 text-sm">
                            <li>Машинна штукатурка</li>
                            <li>Ручна штукатурка</li>
                            <li>Штукатурка фасадів</li>
                            <li>Вирівнювання стін</li>
                            <li>Штукатурка стель</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4">Контакти</h4>
                        <ul className="space-y-3 text-neutral-300 text-sm">
                            <li className="flex items-center gap-2">
                                <span>📍</span>
                                <span>Київська область</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>📞</span>
                                <Link href="tel:+380XXXXXXXXX" className="text-primary-light no-underline hover:underline">
                                    +380 (XX) XXX-XX-XX
                                </Link>
                            </li>
                            <li className="flex items-center gap-2">
                                <span>📧</span>
                                <Link href="mailto:info@kryvorivnobud.com" className="text-primary-light no-underline hover:underline">
                                    info@kryvorivnobud.com
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-10 pt-8 text-center text-neutral-400 text-sm">
                    <p>&copy; {currentYear} КривоРівноБуд. Всі права захищені.</p>
                </div>
            </div>
        </footer>
    );
}
