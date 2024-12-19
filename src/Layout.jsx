import React from "react";
import Header from "./ReactRouter/Header/Headre";
import Footer from "./ReactRouter/Footer/Footer";
import { Outlet } from "react-router-dom";

export default function Layout() {
    <>
        <Header />
        <Outlet />
        <Footer />
    </>
} 