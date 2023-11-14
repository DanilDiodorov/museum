import Footer from './footer'

const { default: Header } = require('./header')

const MainLayout = ({ children }) => {
    return (
        <>
            <Header />
            <main className="bg-primary py-5">
                <section className="mx-auto container min-h-screen">
                    {children}
                </section>
            </main>
            <Footer />
        </>
    )
}

export default MainLayout
