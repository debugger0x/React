import { useState } from "react";
import { Logo } from "./Logo";
import { Form } from "./Form";
import { PackingList } from "./PackingList";

const initialItems = [
  { id: 1, description: "Passports", quantity: 2, packed: false },
  { id: 2, description: "Socks", quantity: 12, packed: false },
  { id: 3, description: "Charger", quantity: 3, packed: true },
];

export default function App() {
  const [items, setItems] = useState(initialItems);
  const numItems = items.length;
  const numPacked = items.filter((items) => items.packed).length;

  function handleAddingItems(item) {
    setItems((el) => [...el, item]);
  }
  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function handleToogleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function clearList() {
    const ans = window.confirm("Are you sure you want to clear all items?");
    if (!ans) return;
    setItems([]);
  }

  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddingItems} />
      <PackingList
        items={items}
        onDeleteItems={handleDeleteItems}
        onToggleItems={handleToogleItem}
        onClearList={clearList}
      />
      <Stats numItems={numItems} numPacked={numPacked} />
    </div>
  );
}

export function Items({ items, onDeleteItems, onToggleItems }) {
  return (
    <li>
      <input
        type="checkbox"
        value={items.packed}
        onChange={() => {
          onToggleItems(items.id);
        }}
      />
      <span style={items.packed ? { textDecoration: "line-through" } : {}}>
        {items.description} {items.quantity}
      </span>
      <button onClick={() => onDeleteItems(items.id)}>❌</button>
    </li>
  );
}
function Stats({ numItems, numPacked }) {
  const percentage = Math.round((numPacked / numItems) * 100);
  return (
    <footer className="stats">
      {percentage == 100
        ? "You got everything. Ready for takeoff ✈️"
        : `      You have ${numItems} items on your list and you already packed ${numPacked} Items.${" "}
      (${percentage}%)`}
    </footer>
  );
}
