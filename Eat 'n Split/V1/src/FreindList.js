export function FreindList({ friendList }) {
  const friends = friendList;
  return (
    <ul>
      {friends.map((friend) => (
        <ListFriends friend={friend} key={friend.id} />
      ))}
    </ul>
  );
}

function ListFriends({ friend }) {
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>

      {friend.balance < 0 && (
        <p className="red">
          You owe {friend.name} ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance > 0 && (
        <p className="green">
          {friend.name} owes you ${Math.abs(friend.balance)}
        </p>
      )}
      {friend.balance == 0 && <p>You and {friend.name} are even</p>}

      <button className="button">Select</button>
    </li>
  );
}
