import React from "react";
import Grid from "@mui/material/Grid2";
import { Box, Button, Typography, useMediaQuery } from "@mui/material";

function LandingHero() {
    const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)");

    const brain = prefersDarkMode ? "/img/brain-dark.svg" : "/img/brain.svg";

    return (
        <div>
            <Box
                sx={{
                    backgroundColor: "",
                    maxWidth: "1200px",
                    margin: "0 auto",
                    px: "1.5rem",
                    py: "2rem",

                    textAlign: { xs: "center", sm: "left" },
                }}
            >
                <Grid
                    container
                    spacing={2}
                    columns={{ xs: 1, sm: 8, md: 12 }}
                    sx={{ alignItems: "center" }}
                >
                    <Grid
                        item
                        size={{ xs: 2, sm: 4, md: 7 }}
                        sx={{ backgroundColor: "", my: "4rem" }}
                    >
                        <Typography variant="h1" fontFamily={"inter"}>
                            AI Super Brain for Business{" "}
                        </Typography>
                        <Typography variant="h5" fontFamily={"inter"}>
                            The Smartest Investment for SMEs
                        </Typography>
                        <Button
                            variant="contained"
                            sx={{
                                borderRadius: "50px",
                                mt: "1rem",
                                px: "2rem",
                            }}
                        >
                            Learn More
                        </Button>
                    </Grid>
                    <Grid
                        item
                        size={{ xs: 2, sm: 4, md: 5 }}
                        sx={{ backgroundColor: "" }}
                    >
                        <img src={brain} alt="brain" width={"100%"} />
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default LandingHero;
