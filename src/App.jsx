import "./App.css";
import { useState } from "react";
import { Button, Paper, Typography } from "@mui/material";
import { Route, Routes } from "react-router";
import LandingLayout from "./layouts/LandingLayout";
import Landing from "./pages/Landing";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import Error from "./pages/Error";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Routes>
                <Route element={<LandingLayout />}>
                    <Route index element={<Landing />} />

                    <Route path="contact" element={<Contact />} />
                    <Route path="blog" element={<Blog />} />
                </Route>
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}

export default App;
