import Link from 'next/link';
import { Header } from 'components/header';
import { Footer } from 'components/footer';

const services = [
    {
        icon: '⚙️',
        title: 'Машинна штукатурка',
        description:
            'Швидке та рівномірне нанесення штукатурки за допомогою сучасного обладнання. Ідеально для великих площ.',
    },
    {
        icon: '🧱',
        title: 'Ручна штукатурка',
        description:
            'Традиційний метод для складних поверхонь та невеликих приміщень. Точність та увага до деталей.',
    },
    {
        icon: '🏢',
        title: 'Штукатурка фасадів',
        description:
            'Зовнішнє оздоблення будівель з використанням морозостійких та водостійких сумішей.',
    },
    {
        icon: '📐',
        title: 'Вирівнювання стін',
        description:
            'Підготовка стін під фарбування або поклейку шпалер. Ідеально рівні поверхні.',
    },
    {
        icon: '🔝',
        title: 'Штукатурка стель',
        description:
            'Професійне вирівнювання стель будь-якої складності. Підготовка під фінішне покриття.',
    },
    {
        icon: '🏠',
        title: 'Декоративна штукатурка',
        description:
            'Нанесення декоративних покриттів для створення унікального інтер\'єру. Різні фактури та ефекти.',
    },
];

const advantages = [
    {
        icon: '✅',
        title: 'Досвід понад 10 років',
        description: 'Багаторічний досвід роботи з різними типами приміщень та матеріалами.',
    },
    {
        icon: '⏱️',
        title: 'Дотримання термінів',
        description: 'Чітке дотримання узгоджених строків виконання робіт.',
    },
    {
        icon: '💰',
        title: 'Чесні ціни',
        description: 'Прозоре ціноутворення без прихованих доплат та витрат.',
    },
    {
        icon: '🛡️',
        title: 'Гарантія якості',
        description: 'Надаємо гарантію на всі виконані роботи від 2 років.',
    },
    {
        icon: '📋',
        title: 'Безкоштовний замір',
        description: 'Виїзд майстра для оцінки обсягу робіт та розрахунку вартості — безкоштовно.',
    },
    {
        icon: '🧹',
        title: 'Чистота на об\'єкті',
        description: 'Після завершення робіт прибираємо за собою та вивозимо будівельне сміття.',
    },
];

const pricingItems = [
    { service: 'Машинна штукатурка стін', price: 'від 150', unit: 'грн/м²' },
    { service: 'Ручна штукатурка стін', price: 'від 200', unit: 'грн/м²' },
    { service: 'Штукатурка фасадів', price: 'від 220', unit: 'грн/м²' },
    { service: 'Вирівнювання стін (маяки)', price: 'від 180', unit: 'грн/м²' },
    { service: 'Штукатурка стель', price: 'від 250', unit: 'грн/м²' },
    { service: 'Декоративна штукатурка', price: 'від 300', unit: 'грн/м²' },
];

export default function Page() {
    return (
        <>
            <Header />

            {/* Hero Section */}
            <section className="relative bg-secondary text-white pt-28 sm:pt-36 pb-16 sm:pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary-light to-secondary opacity-90" />
                <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="max-w-3xl">
                        <p className="text-primary-light font-semibold mb-4 text-lg">
                            Штукатурні роботи в Київській області
                        </p>
                        <h1 className="mb-6 text-white leading-tight">
                            Професійна штукатурка стін та фасадів
                        </h1>
                        <p className="text-xl text-neutral-300 mb-8 leading-relaxed max-w-2xl">
                            Виконуємо штукатурні роботи будь-якої складності — від квартир до комерційних об&apos;єктів.
                            Машинна та ручна штукатурка з гарантією якості.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4">
                            <Link href="#contact" className="btn btn-primary btn-lg no-underline">
                                Замовити безкоштовний замір
                            </Link>
                            <Link href="#services" className="btn btn-lg no-underline border-2 border-white/30 text-white hover:bg-white/10">
                                Наші послуги
                            </Link>
                        </div>
                        <div className="flex flex-wrap gap-8 mt-12 pt-8 border-t border-white/10">
                            <div>
                                <p className="text-3xl font-bold text-primary-light">10+</p>
                                <p className="text-sm text-neutral-400">років досвіду</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary-light">500+</p>
                                <p className="text-sm text-neutral-400">виконаних об&apos;єктів</p>
                            </div>
                            <div>
                                <p className="text-3xl font-bold text-primary-light">100%</p>
                                <p className="text-sm text-neutral-400">задоволених клієнтів</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section */}
            <section id="services" className="section-padding bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <p className="text-primary font-semibold mb-2">Що ми пропонуємо</p>
                        <h2>Наші послуги</h2>
                        <p className="mt-4 text-neutral-600 max-w-2xl mx-auto">
                            Повний спектр штукатурних робіт для приватних будинків, квартир та комерційних приміщень
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {services.map((service, index) => (
                            <div
                                key={index}
                                className="p-6 sm:p-8 rounded-xl bg-surface hover:shadow-lg transition-shadow border border-neutral-100"
                            >
                                <span className="text-4xl mb-4 block">{service.icon}</span>
                                <h3 className="mb-3">{service.title}</h3>
                                <p className="text-neutral-600 leading-relaxed">{service.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Advantages Section */}
            <section id="advantages" className="section-padding bg-surface">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <p className="text-primary font-semibold mb-2">Чому обирають нас</p>
                        <h2>Наші переваги</h2>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {advantages.map((item, index) => (
                            <div key={index} className="flex gap-4">
                                <span className="text-3xl shrink-0">{item.icon}</span>
                                <div>
                                    <h3 className="mb-2 text-lg">{item.title}</h3>
                                    <p className="text-neutral-600 text-sm leading-relaxed">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pricing Section */}
            <section id="pricing" className="section-padding bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <p className="text-primary font-semibold mb-2">Прозоре ціноутворення</p>
                        <h2>Ціни на послуги</h2>
                        <p className="mt-4 text-neutral-600">
                            Остаточна вартість залежить від обсягу, складності та матеріалів. Зателефонуйте для точного розрахунку.
                        </p>
                    </div>
                    <div className="rounded-xl overflow-hidden border border-neutral-200">
                        <table className="w-full">
                            <thead>
                                <tr className="bg-secondary text-white">
                                    <th className="text-left px-6 py-4 font-semibold">Послуга</th>
                                    <th className="text-right px-6 py-4 font-semibold">Вартість</th>
                                </tr>
                            </thead>
                            <tbody>
                                {pricingItems.map((item, index) => (
                                    <tr
                                        key={index}
                                        className={index % 2 === 0 ? 'bg-white' : 'bg-surface'}
                                    >
                                        <td className="px-6 py-4 text-neutral-700">{item.service}</td>
                                        <td className="px-6 py-4 text-right font-bold text-primary-dark whitespace-nowrap">
                                            {item.price} <span className="font-normal text-neutral-500 text-sm">{item.unit}</span>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <p className="mt-6 text-center text-neutral-500 text-sm">
                        * Ціни вказані орієнтовно. Для точного розрахунку зв&apos;яжіться з нами.
                    </p>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-16 sm:py-20 bg-primary">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-white mb-4">Готові розпочати ремонт?</h2>
                    <p className="text-white/80 text-lg mb-8 max-w-2xl mx-auto">
                        Зателефонуйте нам або залиште заявку — ми безкоштовно приїдемо на замір та розрахуємо вартість робіт
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link
                            href="tel:+380XXXXXXXXX"
                            className="btn btn-lg no-underline bg-white text-primary-dark font-bold hover:bg-neutral-100"
                        >
                            📞 Зателефонувати
                        </Link>
                        <Link
                            href="#contact"
                            className="btn btn-lg no-underline border-2 border-white text-white hover:bg-white/10"
                        >
                            Залишити заявку
                        </Link>
                    </div>
                </div>
            </section>

            {/* Contact Section */}
            <section id="contact" className="section-padding bg-white">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12 sm:mb-16">
                        <p className="text-primary font-semibold mb-2">Зв&apos;яжіться з нами</p>
                        <h2>Контакти</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                        <div className="text-center p-6 rounded-xl bg-surface">
                            <span className="text-4xl mb-4 block">📞</span>
                            <h3 className="mb-2 text-lg">Телефон</h3>
                            <Link
                                href="tel:+380XXXXXXXXX"
                                className="text-primary font-semibold no-underline hover:underline"
                            >
                                +380 (XX) XXX-XX-XX
                            </Link>
                            <p className="text-neutral-500 text-sm mt-1">Пн-Сб: 8:00 — 20:00</p>
                        </div>
                        <div className="text-center p-6 rounded-xl bg-surface">
                            <span className="text-4xl mb-4 block">📧</span>
                            <h3 className="mb-2 text-lg">Email</h3>
                            <Link
                                href="mailto:info@kryvorivnobud.com"
                                className="text-primary font-semibold no-underline hover:underline"
                            >
                                info@kryvorivnobud.com
                            </Link>
                            <p className="text-neutral-500 text-sm mt-1">Відповідаємо протягом дня</p>
                        </div>
                        <div className="text-center p-6 rounded-xl bg-surface">
                            <span className="text-4xl mb-4 block">📍</span>
                            <h3 className="mb-2 text-lg">Адреса</h3>
                            <p className="text-neutral-700 font-semibold">Київська область</p>
                            <p className="text-neutral-500 text-sm mt-1">Виїзд по всій області</p>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </>
    );
}
