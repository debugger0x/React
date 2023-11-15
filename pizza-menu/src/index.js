import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  // const styles = { color: "red", fontSize: "42px", textTransform: "uppercase" };
  const styles = {};
  return (
    <header className="header">
      <h1 style={styles}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const numLength = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {numLength < 1 ? (
        <p>Nothing available now. Please check back soon!</p>
      ) : (
        <ul className="pizzas">
          {pizzaData.map((el) => (
            <Pizza pizzaObj={el} key={el.name} />
          ))}
        </ul>
      )}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const currentHour = new Date().getHours();
  const closeHour = 22;
  const openHour = 8;
  const isOpen = currentHour <= closeHour && currentHour >= openHour;
  console.log(isOpen);

  return (
    <div>
      {isOpen ? (
        <Order closeHour={closeHour} />
      ) : (
        <p>We are closed until {openHour}:00. See you soon!</p>
      )}
    </div>
  );
}

function Order(props) {
  return <p>We are open until {props.closeHour}:00. Place your orders now</p>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// Rendering
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
