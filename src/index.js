import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import Modal from "react-modal";
import { BrowserRouter } from "react-router-dom";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);
Modal.setAppElement("#root");

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();
