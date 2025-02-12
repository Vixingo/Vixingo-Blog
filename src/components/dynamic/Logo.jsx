import { Box, Typography, useMediaQuery } from "@mui/material";
import { NavLink } from "react-router";

export default function Logo() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const logo = prefersDarkMode ? "/img/logo.png" : "/img/lightlogo.png";

    return (
        <>
            <NavLink
                to="/"
                style={{
                    textDecoration: "none",
                    margin: "2px auto",
                    flex: 1,
                }}
            >
                <Typography
                    variant="h6"
                    component="div"
                    sx={{
                        flex: 1,
                        display: { xs: "flex", sm: "flex" },
                        alignItems: "center",
                        justifyContent: {
                            xs: "center",
                            sm: "flex-start",
                        },

                        textTransform: "uppercase",
                        color: (theme) => theme.palette.text.primary,
                    }}
                >
                    <img
                        src={logo}
                        alt="logo"
                        width={50}
                        height={50}
                        style={{ marginRight: "10px" }}
                    />
                    <b>Vixingo</b>Blog
                </Typography>
            </NavLink>{" "}
        </>
    );
}
