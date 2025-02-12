import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Button, Paper, Typography } from "@mui/material";
import Header from "./components/header/Header";
import { Route, Routes } from "react-router";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Capabilities from "./pages/Capabilities";
import Signup from "./pages/Signup";
import Blog from "./pages/Blog";

function App() {
    const [count, setCount] = useState(0);

    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<Landing />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Paper>contact</Paper>} />
                <Route path="/research" element={<Paper>research</Paper>} />
                <Route path="/capabilities" element={<Capabilities />} />

                <Route path="/blog" element={<Blog />} />

                <Route path="*" element={<Paper>404</Paper>} />
            </Routes>
        </>
    );
}

export default App;
