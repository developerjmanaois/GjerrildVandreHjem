import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './header/Header'
import Footer from './Footer'



const Layout = () => {
    return (

        <section>

            <Header />

            <main>
                <Outlet />
            </main>

            <Footer />
        </section>
    )
}

export default Layout