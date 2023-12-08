export function FormSplitBill() {
  return (
    <form className="form-split-bill">
      <h2>Split a bill with x</h2>

      <label>💰 Bill </label>
      <input type="text" />

      <label>🫵 Your expense</label>
      <input type="text" />

      <label>🧒X expense</label>
      <input type="text" disabled />

      <label> 💵Who is paying the bill?</label>
      <select>
        <option value="user">You</option>
        <option value="friend">X</option>
      </select>

      <button className="button">Split bill</button>
    </form>
  );
}
