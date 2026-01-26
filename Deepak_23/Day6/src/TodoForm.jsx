import React, { useState } from "react";

const TodoForm = ({ addTodo }) => {
  const [text, setText] = useState("");

  const handleAdd = () => {
    if (!text.trim()) return;
    addTodo(text);
    setText("");
  };

  return (
    <div className="flex items-center gap-2 mb-6">
      <input
        type="text"
        placeholder="What needs to be done?"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 px-4 py-3 border border-gray-300 rounded-xl
                   focus:ring-2 focus:ring-indigo-500 focus:outline-none"
      />
      <button
        onClick={handleAdd}
        disabled={!text.trim()}
        className="px-5 py-3 bg-indigo-600 text-white font-medium rounded-xl
                   hover:bg-indigo-700 transition
                   disabled:bg-indigo-300"
      >
        Add
      </button>
    </div>
  );
};

export default TodoForm;
