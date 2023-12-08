import { useState } from 'react';
import { Form } from './Form';
import { Logo } from './Logo';
import { PackingBody } from './PackingBody';
import { Stats } from './Stats';
import './index.css';

export default function App() {
  // const [items, setNewItem] = useState([
  //   { id: 1, description: 'Passports', quantity: 2, packed: false },
  //   { id: 2, description: 'Socks', quantity: 12, packed: false },
  //   { id: 3, description: 'Charger', quantity: 3, packed: true },
  // ]);
  const [items, setNewItem] = useState([]);

  function handleAddingItems(item) {
    setNewItem((items) => [...items, item]);
    console.log([...items]);
  }

  function handleDeletingItems(id) {
    setNewItem((el) => el.filter((e) => e.id !== id));
  }

  function handlePacking(id) {
    setNewItem((el) =>
      el.map((e) => (e.id === id ? { ...e, packed: !e.packed } : e))
    );
  }
  //
  return (
    <div className="app">
      <Logo />
      <Form addNewItem={handleAddingItems} />
      <PackingBody
        items={items}
        deleteItem={handleDeletingItems}
        checkItem={handlePacking}
      />
      <Stats items={items} />
    </div>
  );
}
