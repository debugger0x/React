import { useState } from "react";

export function FormSplitBill({ selectedFriend, handleSplitBill }) {
  const [bill, setBill] = useState("");
  const [userPaid, setUserPaid] = useState("");
  const [whoIsPaying, setWhoIsPaying] = useState("user");

  const friendsBill = bill ? bill - userPaid : "";

  function handleSplitSubmission(e) {
    e.preventDefault();

    if (!bill || !userPaid) return;
    handleSplitBill(whoIsPaying === "user" ? friendsBill : -userPaid);
  }

  return (
    selectedFriend.name && (
      <form className="form-split-bill" onSubmit={handleSplitSubmission}>
        <h2>Split a bill with {selectedFriend.name}</h2>

        <label>💰 Bill </label>
        <input
          type="number"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />

        <label>🧍 Your expense</label>
        <input
          type="number"
          value={userPaid}
          onChange={(e) =>
            setUserPaid(
              Number(e.target.value) < bill ? Number(e.target.value) : bill
            )
          }
        />

        <label>👫 {selectedFriend.name}'s expense</label>
        <input type="text" disabled value={friendsBill} />

        <label> 💵Who is paying the bill?</label>
        <select onChange={(e) => setWhoIsPaying(e.target.value)}>
          <option value="user">You</option>
          <option value="friend">{selectedFriend.name}</option>
        </select>

        <button className="button">Split bill</button>
      </form>
    )
  );
}
