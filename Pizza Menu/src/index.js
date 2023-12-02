import React from "react";
import ReactDOM from "react-dom/client";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}
function Menu() {
  return (
    <div>
      <Pizza />
      <Pizza />
    </div>
  );
}
function Footer() {
  const hour = new Date().getHours();
  const open = 10;
  const close = 22;
  const isOpen = hour >= open && hour <= close;
  console.log(hour);

  return (
    <footer>
      {" "}
      {isOpen
        ? `We are open until ${close}:00!`
        : `We are close until ${open}:00!`}
    </footer>
  );
}
// function Header () {}

function Pizza() {
  return (
    <div>
      <h2>Pizza</h2>
      <img src="pizzas/spinaci.jpg" alt="pizza" />
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

// select the root
const root = ReactDOM.createRoot(document.getElementById("root"));
// render the roo
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
