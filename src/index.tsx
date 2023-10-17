import { createRoot } from "react-dom/client";
import "./App.css";
import App from "./App";
import React from "react";

const root = createRoot(document.getElementById("root"));

root.render(
  <App
    greeting={"Hello"}
    user={"Swetha"}
    projectTitle={
      "Welcome to the journey of setting up your own typescript react project from scratch"
    }
  />
);
