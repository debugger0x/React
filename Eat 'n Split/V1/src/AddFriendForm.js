import { useState } from "react";

export function AddFriendForm({ addFriends, toggleAddFriendForm }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmission(e) {
    e.preventDefault();
    if (!name) return;
    const id = crypto.randomUUID();

    const newFriend = {
      name,
      image: `${image}?=${id}`,
      balance: 0,
      id,
    };

    addFriends(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48");

    toggleAddFriendForm((el) => false);
  }

  return (
    <form className="form-add-friend" onSubmit={handleSubmission}>
      <label>🫂Friend name</label>
      <input
        type="text"
        placeholder="Enter a friends name here ..."
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <label>🖼 Image Url</label>
      <input
        type="text"
        value={image}
        onChange={(e) => setImage(e.target.value)}
        placeholder="Link to your friends picture here"
      />

      <button className="button" onClick={handleSubmission}>
        Add
      </button>
    </form>
  );
}
