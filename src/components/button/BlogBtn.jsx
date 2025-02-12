import { Button } from "@mui/material";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router";

export default function BlogBtn() {
    return (
        <>
            <NavLink to="/blog">
                <Button variant="outlined">Read Blogs</Button>
            </NavLink>
        </>
    );
}
