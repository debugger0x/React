const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Charger', quantity: 3, packed: true },
];

export function PackingBody() {
  return (
    <div className="list">
      <ul>
        {initialItems.map((el) => (
          <PackingList item={el} />
        ))}
      </ul>
      <div>Footer</div>
    </div>
  );
}

function PackingList({ item }) {
  return (
    <li>
      {`${item.quantity}
      ${item.description}
    `}
      <button>✖️</button>
    </li>
  );
}
