import { useState } from 'react';

export function PackingBody({ items, deleteItem, checkItem, clearItems }) {
  const [sorting, setSorting] = useState('input');

  let sortedItems;

  if (sorting === 'input') sortedItems = items;
  if (sorting === 'description')
    sortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  if (sorting === 'packed')
    sortedItems = items
      .slice()
      .sort((a, b) => Number(a.packed) - Number(b.packed));

  return (
    <div className="list">
      <ul>
        {sortedItems.map((el) => (
          <PackingList
            item={el}
            key={el.id}
            items={items}
            deleteItem={deleteItem}
            checkItem={checkItem}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sorting} onChange={(e) => setSorting(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={() => clearItems()}>Clear all Items ❌</button>
      </div>
    </div>
  );
}

function PackingList({ item, deleteItem, checkItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => checkItem(item.id)}
      />
      <span style={item.packed ? { textDecoration: 'line-through' } : {}}>
        {`${item.quantity}
      ${item.description} 
      `}
      </span>
      <button onClick={() => deleteItem(item.id)}>✖️</button>
    </li>
  );
}
