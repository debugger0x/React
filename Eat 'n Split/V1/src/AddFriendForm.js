import { useState } from "react";

export function AddFriendForm({ addFriends }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function handleSubmission(e) {
    e.preventDefault();
    if (!name) return;

    const newFriend = {
      name,
      image,
      balance: 0,
    };

    addFriends(newFriend);
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
