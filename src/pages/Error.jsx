import { Box, Button, Typography } from "@mui/material";
import React from "react";
import MiniLogo from "../components/dynamic/MiniLogo";

import Header from "../components/header/Header";
import { useNavigate } from "react-router";
import Footer from "../components/Footers/Footer";

export default function Error() {
    let navigate = useNavigate();
    return (
        <>
            <Header />
            <Box sx={{ p: 20, textAlign: "center" }}>
                <Typography
                    align="center"
                    sx={{
                        textAlign: "center",
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",

                        fontSize: "4.5rem",
                        gap: 1,
                    }}
                >
                    4 <MiniLogo /> 4
                </Typography>
                <Button
                    variant="outlined"
                    onClick={() => {
                        navigate(-1);
                    }}
                >
                    Go Back
                </Button>
            </Box>
            <Footer />
        </>
    );
}
