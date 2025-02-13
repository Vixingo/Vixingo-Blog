import React from "react";
import { Outlet } from "react-router";
import BlogHead from "../components/header/BlogHead";
import Logo from "../components/dynamic/Logo";
import MiniLogo from "../components/dynamic/MiniLogo";

export default function BlogLayout() {
    return (
        <>
            {/* <BlogHead /> */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    margin: "1rem",
                }}
            >
                <MiniLogo />
            </div>
            <Outlet />
        </>
    );
}
