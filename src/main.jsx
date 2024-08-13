import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/Reset.css";
import "./styles/Variables.css";
import "./styles/Fonts.css";
import "./styles/Global.css";
import App from "./App.jsx";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <App />
    </StrictMode>
);
