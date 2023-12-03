import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Advance your NodeJS skill 🤹🏻",
  "Relearn MongoDB",
  "Build your resume ✉️",
  "Create a LinkedIn 🌍",
  "Apply for jobs 💼",
];

export default function App() {
  const [step, stepController] = useState(1);
  const [open, openController] = useState(true);

  const prevFunc = () => {
    if (step <= 1) return;

    stepController((e) => e - 1);
    console.log(step);
  };

  const nextFunc = () => {
    if (step >= messages.length) return;
    stepController((e) => e + 1);
    console.log(step);
  };

  return (
    <>
      <button className="close" onClick={() => openController(!open)}>
        &times;
      </button>
      {open ? (
        <div className="steps">
          <div className="numbers">
            <div className={`${step >= 1 ? "active" : ""}`}>1</div>
            <div className={`${step >= 2 ? "active" : ""}`}>2</div>
            <div className={`${step >= 3 ? "active" : ""}`}>3</div>
            <div className={`${step >= 4 ? "active" : ""}`}>4</div>
            <div className={`${step >= 5 ? "active" : ""}`}>5</div>
            <div className={`${step >= 6 ? "active" : ""}`}>6</div>
          </div>

          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <button
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={prevFunc}
            >
              Previous
            </button>
            <button
              style={{ backgroundColor: "#7950f2", color: "white" }}
              onClick={nextFunc}
            >
              Next
            </button>
          </div>
        </div>
      ) : (
        <div>
          <h2 style={{ margin: "auto", padding: "20% 20%" }}>
            Nothing to see here
          </h2>
        </div>
      )}
    </>
  );
}
