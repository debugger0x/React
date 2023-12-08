export function PackingBody({ items, deleteItem, checkItem }) {
  return (
    <div className="list">
      <ul>
        {items.map((el) => (
          <PackingList
            item={el}
            key={el.id}
            items={items}
            deleteItem={deleteItem}
            checkItem={checkItem}
          />
        ))}
      </ul>
      <div>Footer</div>
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
