const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Charger', quantity: 3, packed: true },
];

export function Form() {
  return (
    <div className="add-form">
      <span>What will you need for school today? 🤔</span>
      <select>
        {Array.from({ length: 20 }, (x, i) => i + 1).map((num) => (
          <option value={num}>{num}</option>
        ))}
      </select>
      <input type="text" placeholder="Enter Item here..."></input>
    </div>
  );
}
