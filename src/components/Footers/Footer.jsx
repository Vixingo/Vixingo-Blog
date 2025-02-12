import { Box, Stack, Typography } from "@mui/material";
import React from "react";
import Grid from "@mui/material/Grid2";
import Logo from "../dynamic/Logo";
import { NavLink } from "react-router";
import SubForm from "../Forms/SubForm";

export default function Footer() {
    return (
        <>
            <Box
                // sx={{
                //     bgcolor: "background.paper",
                //     backgroundImage: "url(/img/footer.png)",
                //     backgroundPosition: "top center",
                //     backgroundRepeat: "no-repeat",
                //     backgroundSize: "cover",
                //     backdropFilter: "grayscale(100%)",
                //     p: 6,
                // }}
                sx={{ bgcolor: "background.paper", p: 6 }}
            >
                <footer
                    style={{
                        marginTop: "20px",
                        maxWidth: "1140px",
                        margin: "0 auto",
                    }}
                >
                    <Grid
                        container
                        spacing={2}
                        direction={{ xs: "row-reverse", md: "row" }}
                        sx={
                            {
                                // textAlign: { xs: "center", md: "left" },
                            }
                        }
                        columns={{ xs: 2, md: 12 }}
                    >
                        <Grid item size={{ xs: 2, md: 4 }}>
                            <Box
                                sx={{
                                    display: "flex",
                                    flexDirection: {
                                        xs: "column-reverse",
                                        md: "column",
                                    },
                                }}
                            >
                                {" "}
                                <SubForm />
                                <Box
                                    width={200}
                                    margin={{
                                        // xs: "30px auto auto auto",
                                        md: "60px 0px 0px 0px",
                                    }}
                                >
                                    <Logo />
                                </Box>
                            </Box>
                            {/* <Typography
                                variant="body2"
                                sx={{ mt: 2, mb: 2, color: "text.secondary" }}
                            >
                                Copyright ©VixingoBrain 2025. <br /> All rights
                                reserved by Vixingo Brain LLC.
                            </Typography>{" "} */}
                        </Grid>
                        {/* Developers */}
                        <Grid item size={{ xs: 1, md: 2 }} sx={{ mt: 1 }}>
                            <Typography
                                variant="body2"
                                sx={{ color: "text.secondary", mb: 1 }}
                            >
                                Developers
                            </Typography>
                            <Stack spacing={1}>
                                <NavLink
                                    to={"/"}
                                    style={{ textDecoration: "none" }}
                                >
                                    Developer Hub
                                </NavLink>
                                <NavLink
                                    to="/blog"
                                    style={{ textDecoration: "none" }}
                                >
                                    Blog posts
                                </NavLink>
                                <NavLink
                                    to="/terms"
                                    style={{ textDecoration: "none" }}
                                >
                                    Code Samples
                                </NavLink>
                                <NavLink
                                    to="/cookies"
                                    style={{ textDecoration: "none" }}
                                >
                                    Articles
                                </NavLink>
                                <NavLink
                                    to={"/"}
                                    style={{ textDecoration: "none" }}
                                >
                                    Community
                                </NavLink>
                            </Stack>
                        </Grid>
                        <Grid item size={{ xs: 1, md: 2 }} sx={{ mt: 1 }}>
                            <Typography
                                variant="body2"
                                sx={{ color: "text.secondary", mb: 1 }}
                            >
                                Social{" "}
                            </Typography>
                            <Stack spacing={1}>
                                <NavLink
                                    to="/"
                                    style={{ textDecoration: "none" }}
                                >
                                    Twitter
                                </NavLink>{" "}
                                <NavLink
                                    to="/"
                                    style={{ textDecoration: "none" }}
                                >
                                    LinkedIn
                                </NavLink>
                                <NavLink
                                    to="/"
                                    style={{ textDecoration: "none" }}
                                >
                                    Discord
                                </NavLink>
                                <NavLink
                                    to="/"
                                    style={{ textDecoration: "none" }}
                                >
                                    <Typography>Facebook</Typography>
                                </NavLink>
                            </Stack>
                        </Grid>
                        <Grid item size={{ xs: 1, md: 2 }} sx={{ mt: 1 }}>
                            <Typography
                                variant="body2"
                                sx={{ color: "text.secondary", mb: 1 }}
                            >
                                Policies
                            </Typography>
                            <Stack spacing={1}>
                                <NavLink
                                    to={"/"}
                                    style={{ textDecoration: "none" }}
                                >
                                    Your Data
                                </NavLink>
                                <NavLink
                                    to="/privacy"
                                    style={{ textDecoration: "none" }}
                                >
                                    Privacy
                                </NavLink>
                                <NavLink
                                    to="/terms"
                                    style={{ textDecoration: "none" }}
                                >
                                    Terms
                                </NavLink>
                                <NavLink
                                    to="/cookies"
                                    style={{ textDecoration: "none" }}
                                >
                                    Cookies
                                </NavLink>
                                <NavLink
                                    to={"/"}
                                    style={{ textDecoration: "none" }}
                                >
                                    Refund
                                </NavLink>
                            </Stack>
                        </Grid>

                        {/* company */}
                        <Grid item size={{ xs: 1, md: 2 }} sx={{ mt: 1 }}>
                            <Typography
                                variant="body2"
                                sx={{ color: "text.secondary", mb: 1, mb: 1 }}
                            >
                                Company
                            </Typography>
                            <Stack spacing={1}>
                                {" "}
                                <NavLink
                                    to="/about"
                                    style={{ textDecoration: "none" }}
                                >
                                    About
                                </NavLink>
                                <NavLink
                                    to="/careers"
                                    style={{ textDecoration: "none" }}
                                >
                                    Careers
                                </NavLink>
                                <NavLink
                                    to="/team"
                                    style={{ textDecoration: "none" }}
                                >
                                    Team
                                </NavLink>
                                <NavLink
                                    to="/Partners"
                                    style={{ textDecoration: "none" }}
                                >
                                    Partners
                                </NavLink>
                                <NavLink
                                    to="/contact"
                                    style={{ textDecoration: "none" }}
                                >
                                    Contact
                                </NavLink>
                            </Stack>
                        </Grid>
                        <Grid
                            container
                            justifyContent="space-between"
                            alignItems="center"
                            flexDirection={{ sm: "row" }}
                            sx={{ fontSize: "12px" }}
                            size={12}
                        >
                            <Grid sx={{ order: { xs: 2, sm: 1 } }}>
                                <Typography
                                    variant="body2"
                                    sx={{
                                        mt: 2,
                                        mb: 2,
                                        color: "text.secondary",
                                    }}
                                >
                                    Copyright ©VixingoBlog 2025. <br /> All
                                    rights reserved by Vixingo Blog LLC.
                                </Typography>{" "}
                            </Grid>
                            {/* <Grid
                                container
                                columnSpacing={1}
                                sx={{ order: { xs: 1, sm: 2 }, mt: 2 }}
                            >
                                <Grid>
                                    <NavLink to={"/"}>Link A</NavLink>
                                </Grid>
                                <Grid>
                                    <NavLink to={"/"}>Link B</NavLink>
                                </Grid>
                                <Grid>
                                    <NavLink to={"/"}>Link C</NavLink>
                                </Grid>
                            </Grid> */}
                        </Grid>
                    </Grid>
                </footer>
            </Box>
        </>
    );
}
