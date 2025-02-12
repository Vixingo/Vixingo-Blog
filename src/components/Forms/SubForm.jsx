import React from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import FormHelperText from "@mui/material/FormHelperText";
import {
    Box,
    IconButton,
    InputAdornment,
    TextField,
    Typography,
} from "@mui/material";
import ArrowForwardIosSharpIcon from "@mui/icons-material/ArrowForwardIosSharp";

function MyFormHelperText() {
    const { focused } = useFormControl() || {};

    const helperText = React.useMemo(() => {
        if (focused) {
            return "We will make your inbox happy";
        }

        return "Please enter a valid email";
    }, [focused]);

    return <FormHelperText>{helperText}</FormHelperText>;
}

export default function SubForm() {
    return (
        <>
            <Box
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    // alignItems: "center",
                    gap: 2,
                    maxWidth: "400px",
                    // margin: "0 auto",
                    padding: "12px",
                }}
            >
                <TextField
                    variant="standard"
                    label="Enter Your Work Email"
                    fullWidth
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end">
                                    <IconButton
                                        sx={{ p: 1, right: -10, bottom: 5 }}
                                    >
                                        <ArrowForwardIosSharpIcon />
                                    </IconButton>
                                </InputAdornment>
                            ),
                        },
                    }}
                    sx={{ fontSize: "16px" }}
                />
                <Typography variant="body1">Start Building Today</Typography>
            </Box>
        </>
    );
}
