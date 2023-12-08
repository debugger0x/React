import { useState } from 'react';

export function Form({ addNewItem }) {
  const [quantity, setQuantity] = useState(1);
  const [text, setText] = useState('');

  const handleFormSubmission = (e) => {
    e.preventDefault();

    if (!text) return;
    const newItem = {
      id: Date.now(),
      description: text,
      quantity,
      packed: false,
    };

    addNewItem(newItem);

    setQuantity(1);
    setText('');
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
