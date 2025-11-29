import { useState } from "react";

export default function ToDoSearch({ onAdd }) {
  const [input, setInput] = useState("");

  function handleSubmit() {
    if (!input.trim()) return;
    onAdd(input.trim());
    setInput("");
  }

  return (
    <div className="search-wrap">
        <form
          className="search-bar"
          onSubmit={(e) => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />

          <button type="submit" className="btn">
            Add Task
          </button>
        </form>
      </div>
  );
}
