import React, { useState } from "react";
import {
    ThemeProvider as MuiThemeProvider,
    createTheme,
} from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";

const getTheme = (mode) =>
    createTheme({
        palette: {
            mode: mode, // 'light' or 'dark'
            ...(mode === "dark"
                ? {
                      primary: {
                          main: "#ededed",
                      },
                      background: { default: "#121212", paper: "#1e1e1e" },
                      text: { primary: "#ffffff", secondary: "#b0b0b0" },
                  }
                : {
                      primary: { main: "#121212" },
                      background: { default: "#ffffff", paper: "#f5f5f5" },
                      text: { primary: "#000000", secondary: "#4f4f4f" },
                  }),
        },
        typography: {
            fontFamily: "Roboto, Arial, sans-serif",
        },
    });
export const ThemeProvider = ({ children }) => {
    // Detect system preference
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    // Create theme based on system preference
    const theme = React.useMemo(
        () => getTheme(prefersDarkMode ? "dark" : "light"),
        [prefersDarkMode]
    );

    const ThemeContext = React.createContext();
    const [themeMode, setThemeMode] = useState("light");

    const toggleTheme = () => {
        const newThemeMode = themeMode === "light" ? "dark" : "light";
        setThemeMode(newThemeMode);
    };

    // const theme = createTheme({
    //     components: {
    //         MuiButton: {
    //             styleOverrides: {
    //                 outlined: {
    //                     border: "3px solid transparent", // Transparent border to allow gradient
    //                     borderRadius: "23px", // Rounded corners
    //                     backgroundImage:
    //                         "linear-gradient( #fff, #fff), linear-gradient(270deg, #2E27FE 0%, #9A12FF 73.96%, #CD05FF 100%)",
    //                     backgroundSize: "10px 100%",
    //                     backgroundPosition: "0 0, 100% 0",
    //                     backgroundRepeat: "no-repeat",
    //                     // backgroundOrigin: "border-box",
    //                     // backgroundClip: "content-box,border-box",

    //                     color: "#9A12FF", // Text color to match gradient
    //                     padding: "10px 20px",
    //                     // backgroundSize: "3px 100%",

    //                     // borderImage:
    //                     //     " -webkit-gradient(linear, 11 10, 100 90%, from(#fff), to(#2E27FE))",
    //                     // borderImageSlice: 1, // Safari fix
    //                     // borderImageWidth: 1,
    //                     // borderImageOutset: 0,

    //                     // Optional rounded corners
    //                     textTransform: "none", // Disable uppercase text
    //                     "&:hover": {
    //                         backgroundColor: "#f9f9f9", // Optional subtle hover effect
    //                         boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)", // Optional hover shadow
    //                     },
    //                 },
    //             },
    //             variants: [
    //                 {
    //                     props: { variant: "gradient" }, // Custom variant name
    //                     style: {
    //                         background:
    //                             "linear-gradient(270deg, #2E27FE 0%, #9A12FF 73.96%, #CD05FF 100%)", // Gradient background
    //                         color: "#fff",
    //                         borderRadius: "12px", // Rounded corners
    //                         padding: "10px 20px",
    //                         textTransform: "none", // Disable uppercase
    //                         boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)", // Optional: Shadow
    //                         transition: "background 1s ease !important", // Optional: Smooth transition
    //                         "&:hover": {
    //                             transition: "background 1s ease !important", // Optional: Smooth transition
    //                             background:
    //                                 "linear-gradient(90deg, #2575fc 0%, #6a11cb 100%)", // Hover effect
    //                         },
    //                     },
    //                 },
    //             ],
    //         },
    //     },
    //     breakpoints: {
    //         values: {
    //             xs: 0,
    //             sm: 600,
    //             md: 1024,
    //             lg: 1440,
    //             xl: 1660,
    //         },
    //     },
    //     palette: {
    //         mode: themeMode,
    //         primary: { main: "##9A12FF" },
    //         secondary: { main: "#373737" },
    //     },

    //     typography: {
    //         fontFamily: "",
    //         h1: {
    //             fontSize: "59px",
    //             lineHeight: "120%",
    //             fontWeight: "700",
    //             "@media (max-width:1440px)": {
    //                 fontSize: "42px",
    //             },
    //         },
    //         h2: {
    //             fontSize: "32px",
    //             fontWeight: "700",
    //             "@media (max-width:600px)": {
    //                 fontSize: "28px",
    //             },
    //         },
    //         h3: {
    //             fontSize: "24px",
    //             fontWeight: "700",
    //             "@media (max-width:1440px)": {
    //                 fontSize: "18px",
    //             },
    //             "@media (max-width:600px)": {
    //                 fontSize: "14px",
    //             },
    //         },
    //         h4: {
    //             fontSize: "25px",
    //             fontWeight: "400",
    //             "@media (max-width:1440px)": {
    //                 fontSize: "20px",
    //             },
    //         },
    //         h5: {
    //             fontSize: "20px",
    //             fontWeight: "600",
    //         },
    //         h6: {
    //             fontSize: "18px",
    //             fontWeight: "400",
    //             "@media (max-width:1440px)": {
    //                 fontSize: "15px",
    //             },
    //         },
    //         subtitle1: {
    //             fontSize: "14px",
    //             color: "rgba(255,255,255,0.6)",
    //         },
    //         subtitle2: {
    //             fontSize: "12px",
    //         },
    //     },
    // });

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme }}>
            <MuiThemeProvider theme={theme}>{children}</MuiThemeProvider>{" "}
        </ThemeContext.Provider>
    );
};
