import { useState } from "react";
import { AddFriendForm } from "./AddFriendForm";
import { FormSplitBill } from "./FormSplitBill";
import { FreindList } from "./FreindList";

// const initialFriends = [
//   {
//     id: 118836,
//     name: "Clark",
//     image: "https://i.pravatar.cc/48?u=118836",
//     balance: -7,
//   },
//   {
//     id: 933372,
//     name: "Sarah",
//     image: "https://i.pravatar.cc/48?u=933372",
//     balance: 20,
//   },
//   {
//     id: 499476,
//     name: "Anthony",
//     image: "https://i.pravatar.cc/48?u=499476",
//     balance: 0,
//   },
// ];

export default function App() {
  const [showAddFriend, setShowAddFriend] = useState(false);
  const [initialFriends, setInitialFriends] = useState([
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ]);

  function toogleAddFriend() {
    setShowAddFriend((el) => !el);
  }

  function handleAddFriend(newFriend) {
    setInitialFriends((el) => [...el, newFriend]);
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FreindList friendList={initialFriends} />
        {showAddFriend && <AddFriendForm addFriends={handleAddFriend} />}
        <button className="button" onClick={toogleAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </button>
      </div>
      <FormSplitBill />
    </div>
  );
}
