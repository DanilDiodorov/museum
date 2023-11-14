import './globals.css'

export const metadata = {
    title: 'Сайт музея школы',
    description: 'Сайт музея школы МКОУ СОШ №7',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en" className="">
            <body className="w-full">{children}</body>
        </html>
    )
}
