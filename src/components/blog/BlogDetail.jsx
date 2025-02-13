import { Box, Skeleton, Typography } from "@mui/material";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router";

export default function BlogDetail() {
    // Get the blog ID from the URL
    const { id } = useParams();
    // Access the blogs array from the Redux store
    const { blogs } = useSelector((state) => state.blogs);
    console.log(blogs, "Blog Details", id);

    // Find the blog with the matching ID
    const blog = blogs.find((blog) => blog.id === parseInt(id));

    if (!blog) return <p>Blog not found!</p>;
    return (
        <>
            <Box
                sx={{
                    textAlign: "center",
                    mx: "auto",
                    maxWidth: "800px",
                    p: 3,
                }}
            >
                <Typography variant="h4" pt={5}>
                    {blog.title}
                </Typography>
                <Typography variant="subtitle1" color="text.secondary">
                    Author Name - fabruary 13, 2025
                </Typography>
                <br />
                <Skeleton
                    variant="rectangular"
                    sx={{ width: "100%", height: "300px" }}
                />

                <p>{blog.body}</p>
            </Box>
        </>
    );
}
