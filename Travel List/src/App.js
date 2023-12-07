import { useState } from "react";

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

function Logo() {
  return <h1>🌴 Far away 👜</h1>;
}
function Form({ onAddItems }) {
  const [description, setDescription] = useState("");
  const [selection, setSelection] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!description) return;
    const newItem = { description, selection, packed: false, id: Date.now() };

    onAddItems(newItem);

    setDescription("");
    setSelection(1);
  }

  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip? 😍</h3>
      <select
        value={selection}
        onChange={(el) => setSelection(Number(el.target.value))}
      >
        {Array.from({ length: 20 }, (x, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button>ADD</button>
    </form>
  );
}
function PackingList({ items, onDeleteItems, onToggleItems, onClearList }) {
  const [sortBy, setSortBy] = useState("input");

  let sortedItems;

  if (sortBy === "input") sortedItems = items;
  if (sortBy === "description")
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sortBy === "packed")
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((item) => (
          <Items
            items={item}
            onDeleteItems={onDeleteItems}
            onToggleItems={onToggleItems}
            key={item.id}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
          <option value="input">Sort by the input order</option>
          <option value="description">Sort Alphabetically</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => onClearList()}>Clear list</button>
      </div>
    </div>
  );
}

function Items({ items, onDeleteItems, onToggleItems }) {
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
