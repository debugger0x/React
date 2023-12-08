import { AddFriendForm } from "./AddFriendForm";
import { FreindList } from "./FreindList";

const initialFriends = [
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
];

export default function App() {
  return (
    <div className="app">
      <div className="sidebar">
        <FreindList />

        <AddFriendForm />
        <button className="button">Add</button>
      </div>
      <FormSplitBill />
    </div>
  );
}

function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with x</h2>

      <label> Bill Value</label>
      <input type="text" />

      <label>Your expense</label>
      <input type="text" />

      <label>X expense</label>
      <input type="text" disabled />

      <label>Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <button className="button">Split bill</button>
    </form>
  );
}
