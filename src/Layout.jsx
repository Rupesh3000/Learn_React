import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from './Reactrouter/Header/Header'
import Footer from './Reactrouter/Footer/Footer'

function Layout() {
    return (
        <>
            <Header />
            <Outlet />
            <Footer />

        </>
    )
}

export default Layout