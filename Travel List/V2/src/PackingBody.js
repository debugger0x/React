const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: false },
  { id: 3, description: 'Charger', quantity: 3, packed: true },
];

export function PackingBody({ items }) {
  return (
    <div className="list">
      <ul>
        {items.map((el) => (
          <PackingList item={el} key={el.id} items={items} />
        ))}
      </ul>
      <div>Footer</div>
    </div>
  );
}

function PackingList({ item }) {
  return (
    <li>
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {`${item.quantity}
      ${item.description} 
      `}
      </span>
      <button>✖️</button>
    </li>
  );
}
