import { Avatar, Box, Skeleton, Typography } from "@mui/material";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBlogs } from "../../utils/slice/Blog";
import Grid from "@mui/material/Grid2";
import PersonIcon from "@mui/icons-material/Person";
import { NavLink } from "react-router";
export default function BlogList() {
    const dispatch = useDispatch();
    const { blogs, loading, error, isFetched } = useSelector(
        (state) => state.blogs
    );

    useEffect(() => {
        if (!isFetched) {
            dispatch(fetchBlogs()); // Fetch blogs only if they haven't been fetched
        }
    }, [dispatch, isFetched]);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;
    return (
        <div>
            {blogs.map((data) => {
                return (
                    <Grid
                        key={data.id}
                        container
                        columns={{ xs: 4, sm: 8, md: 12 }}
                        spacing={1}
                        sx={{
                            maxWidth: "800px",
                            my: 2,
                            bgcolor: "background.paper",
                            borderRadius: "8px",
                        }}
                    >
                        <Grid item size={{ xs: 4, md: 4 }}>
                            {" "}
                            <Skeleton
                                variant="rounded"
                                width={"100%"}
                                height={160}
                            />
                        </Grid>
                        <Grid
                            item
                            size={{ xs: 4, md: 8 }}
                            sx={{ textAlign: "left", padding: "10px" }}
                        >
                            {" "}
                            <NavLink to={`/blog/${data.id}`}>
                                <Typography variant="h6">
                                    {data.title}
                                </Typography>
                            </NavLink>
                            <Box
                                sx={{
                                    display: "flex",
                                    alignItems: "center",
                                    gap: 1,
                                    my: 1.2,
                                }}
                            >
                                <Avatar
                                    sx={{
                                        width: "20px",
                                        height: "20px",
                                    }}
                                >
                                    <PersonIcon />
                                </Avatar>
                                <Typography
                                    variant="body2"
                                    color="text.secondary"
                                >
                                    Author Name
                                </Typography>
                                <Typography
                                    variant="caption"
                                    color="text.secondary"
                                >
                                    - February 13, 2025
                                </Typography>
                            </Box>
                            <Typography variant="body2" color="text.secondary">
                                {data.body.substring(0, 100)}...
                            </Typography>
                        </Grid>
                    </Grid>
                );
            })}
        </div>
    );
}
