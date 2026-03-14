import '../styles/globals.css';

export const metadata = {
    title: 'КривоРівноБуд — Штукатурні роботи в Київській області',
    description:
        'Професійні штукатурні роботи в Київській області. Машинна та ручна штукатурка стін, фасадів, стель. Якісно, швидко, за доступними цінами. Безкоштовний виїзд на замір.',
    keywords: 'штукатурні роботи, штукатурка стін, машинна штукатурка, Київська область, штукатурка фасадів, ремонт квартир',
    openGraph: {
        title: 'КривоРівноБуд — Штукатурні роботи в Київській області',
        description: 'Професійні штукатурні роботи в Київській області. Машинна та ручна штукатурка.',
        type: 'website',
    },
};

export default function RootLayout({ children }) {
    return (
        <html lang="uk">
            <head>
                <link rel="icon" href="/favicon.svg" sizes="any" />
            </head>
            <body className="antialiased">
                {children}
            </body>
        </html>
    );
}
