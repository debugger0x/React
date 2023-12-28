import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { StarRating } from "./StarRating";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
    {/* <StarRating maxRating={7} color={"cyan"} size={30} /> */}
  </React.StrictMode>
);
