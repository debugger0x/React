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
  const [selectFriend, setSelectFriend] = useState(false);
  const [showAddFriend, setShowAddFriend] = useState(null);
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

  // functions
  function toogleAddFriend() {
    setShowAddFriend((el) => !el);
  }

  function handleAddFriend(newFriend) {
    setInitialFriends((el) => [...el, newFriend]);
  }

  function setSelectFriendFunction(friend) {
    console.log("This is the selected ID", selectFriend.id, friend.id);
    // setSelectFriend(friend);
    setSelectFriend((selectFriend) =>
      selectFriend.id === friend.id ? false : friend
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FreindList
          friendList={initialFriends}
          setSelectFriendFunction={setSelectFriendFunction}
          selectedFriend={selectFriend}
        />
        {showAddFriend && (
          <AddFriendForm
            addFriends={handleAddFriend}
            toggleAddFriendForm={setShowAddFriend}
          />
        )}
        <button className="button" onClick={toogleAddFriend}>
          {showAddFriend ? "Close" : "Add friend"}
        </button>
      </div>
      <FormSplitBill selectedFriend={selectFriend} />
    </div>
  );
}
