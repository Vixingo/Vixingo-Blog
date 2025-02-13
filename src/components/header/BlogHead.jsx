import { ArrowBack } from "@mui/icons-material";
import { IconButton } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router";

export default function BlogHead() {
    let navigate = useNavigate();
    return (
        <IconButton onclilck={() => navigate(-1)} sx={{ margin: "0.5rem" }}>
            <ArrowBack />
        </IconButton>
    );
}
