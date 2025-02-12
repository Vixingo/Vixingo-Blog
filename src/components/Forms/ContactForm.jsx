import { Box, Button, TextField, Typography } from "@mui/material";
import React from "react";

export default function ContactForm() {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 5,
                    padding: "3rem 3rem ",
                    border: "1px solid #ffffff30",
                    borderRadius: "8px",
                    backgroundColor: "#ffffff10",
                    margin: "3rem",
                }}
            >
                <Typography variant="h4">Get in Touch</Typography>
                <TextField variant="standard" placeholder="Your Name" />
                <TextField variant="standard" placeholder="Your Email" />
                <TextField variant="standard" placeholder="Your Message" />
                <br />
                <Button variant="contained" color="primary">
                    Send Message{" "}
                </Button>
            </Box>
        </>
    );
}
