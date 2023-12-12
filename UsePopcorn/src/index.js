import React from "react";
import ReactDOM from "react-dom/client";
// import StarRating from "./StarRating";
import StarRatings from "./StarRatings";
// import "./index.css";
// import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/* <StarRating maxRating={5} /> */}
    <StarRatings maxRating={5} />
  </React.StrictMode>
);
