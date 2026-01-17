import React from "react";

const TodoList = ({ todos, toggleTodo, deleteTodo }) => {
  if (todos.length === 0) {
    return (
      <p className="text-center text-gray-400 text-sm">
        No todos yet 🚀
      </p>
    );
  }

  return (
    <ul className="space-y-3">
      {todos.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between p-3 rounded-xl
                     bg-gray-50 hover:bg-gray-100 transition"
        >
          <div
            className="flex items-center gap-3 cursor-pointer"
            onClick={() => toggleTodo(todo.id)}
          >
            <input
              type="checkbox"
              checked={todo.completed}
              readOnly
              className="w-5 h-5 accent-indigo-600"
            />
            <span
              className={`text-sm ${
                todo.completed
                  ? "line-through text-gray-400"
                  : "text-gray-700"
              }`}
            >
              {todo.text}
            </span>
          </div>

          <button
            onClick={() => deleteTodo(todo.id)}
            className="text-red-500 hover:text-red-700 transition"
          >
            ✕
          </button>
        </li>
      ))}
    </ul>
  );
};

export default TodoList;
