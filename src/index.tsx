import { createRoot } from "react-dom/client";

import { App } from "./App";
import "./styles/global.css";

const container = document.getElementById("root");
const root = createRoot(container);
// root.render(<h1> test </h1>);
root.render(<App />);
