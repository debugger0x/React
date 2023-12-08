export function Stats({ items }) {
  if (items.length === 0)
    return <em className="stats">Start adding some items 🎒</em>;

  const numItems = items.length;
  const numPackedItems = items.filter((el) => el.packed).length;
  const packedPercentage = (numPackedItems / numItems) * 100;

  return (
    <div className="stats">
      {packedPercentage === 100
        ? `You are now ready for school 🏫`
        : `You have gotten ${numPackedItems} of ${numItems} items. (${packedPercentage}
      %)`}
    </div>
  );
}
