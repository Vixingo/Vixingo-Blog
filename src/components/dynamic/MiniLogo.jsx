import { Box, Typography, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router";

export default function MiniLogo() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const logo = prefersDarkMode ? "/img/logo.png" : "/img/lightlogo.png";

    return (
        <>
            <NavLink
                to="/"
                style={{
                    textDecoration: "none",
                    display: "block",
                    // margin: "2px auto",
                    // flex: 1,
                }}
            >
                <img
                    src={logo}
                    alt="logo"
                    width={50}
                    height={50}
                    // style={{ marginRight: "10px" }}
                />
            </NavLink>{" "}
        </>
    );
}
