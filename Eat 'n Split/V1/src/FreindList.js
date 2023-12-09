import { useState } from "react";

export function FreindList({
  friendList,
  setSelectFriendFunction,
  selectedFriend,
}) {
  const friends = friendList;
  return (
    <ul>
      {friends.map((friend) => (
        <ListFriends
          friend={friend}
          key={friend.id}
          setSelectFriendFunction={setSelectFriendFunction}
          selectedFriend={selectedFriend}
        />
      ))}
    </ul>
  );
}

function ListFriends({ friend, setSelectFriendFunction, selectedFriend }) {
  const isSelected = selectedFriend.id === friend.id;

  return (
    <li className={isSelected ? "selected" : ""}>
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
      {friend.balance === 0 && <p>You and {friend.name} are even</p>}

      <button
        className="button"
        onClick={() => setSelectFriendFunction(friend)}
      >
        Select
      </button>
    </li>
  );
}
