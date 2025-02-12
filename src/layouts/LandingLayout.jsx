import React from "react";
import { Outlet } from "react-router";
import Header from "../components/header/Header";
import Footer from "../components/Footers/Footer";

export default function LandingLayout() {
    return (
        <>
            <div
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                    padding: "64px 20px",
                }}
            >
                <Header />
                <Outlet />
            </div>
            <Footer />
        </>
    );
}
