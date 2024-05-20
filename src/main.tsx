import React from "react"
import ReactDOM from "react-dom/client"

// Pages
import App from "./App.tsx"

// Style
import "./css/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
