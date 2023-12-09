export function FormSplitBill({ selectFriend }) {
  const friend = selectFriend === "" ? "X" : selectFriend;

  return (
    selectFriend && (
      <form className="form-split-bill">
        <h2>Split a bill with {friend}</h2>

        <label>💰 Bill </label>
        <input type="text" />

        <label>🫵 Your expense</label>
        <input type="text" />

        <label>🧒 {friend}'s expense</label>
        <input type="text" disabled />

        <label> 💵Who is paying the bill?</label>
        <select>
          <option value="user">You</option>
          <option value="friend">{friend}</option>
        </select>

        <button className="button">Split bill</button>
      </form>
    )
  );
}
