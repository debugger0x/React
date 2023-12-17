import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import StarRating from "./StarRating";
import "./index.css";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function Match() {
  const [movieRating, setMovieRating] = useState(0);
  return (
    <div>
      <StarRating
        maxRating={5}
        size={50}
        color={"red"}
        onSetRating={setMovieRating}
      />
      <p>This movie was rated {movieRating} times</p>
    </div>
  );
}
