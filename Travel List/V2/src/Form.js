import { useState } from 'react';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Charger', quantity: 3, packed: true },
];

export function Form() {
  const [quantity, setQuantity] = useState(1);
  const [text, setText] = useState('');

  const handleFormSubmission = (e) => {
    e.preventDefault();

    if (!text) return;
    const newItem = [text, quantity];
    setQuantity(1);
    setText('');

    console.log(newItem);
  };

  return (
    <form className="add-form" onSubmit={handleFormSubmission}>
      <span>What will you need for school today? 🤔</span>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (x, i) => i + 1).map((num) => (
          <option key={num}>{num}</option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Enter Item here..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}
