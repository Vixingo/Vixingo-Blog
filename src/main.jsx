import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvider } from "./themes/Theme.jsx";
import { BrowserRouter } from "react-router";
import { Provider } from "react-redux";
import { store } from "./utils/store.jsx";
createRoot(document.getElementById("root")).render(
    <StrictMode>
        <ThemeProvider>
            <BrowserRouter>
                <Provider store={store}>
                    <App />
                </Provider>
            </BrowserRouter>
        </ThemeProvider>
    </StrictMode>
);
