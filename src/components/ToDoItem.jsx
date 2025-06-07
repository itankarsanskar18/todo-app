import { useState } from 'react';

export default function ToDoItem({ todo, deleteTodo, toggleComplete, editTodo }) {
  const { id, text, completed } = todo;

  // Local state for edit mode and edited text
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(text);

  // Save edited text and exit edit mode
  const handleSave = () => {
    if (editText.trim() === '') return; // prevent empty tasks
    editTodo(id, editText);
    setIsEditing(false);
  };

  return (
    <div className="flex items-center justify-between mb-2 p-2 border rounded">
      {/* Checkbox to mark complete */}
      <input
        type="checkbox"
        checked={completed}
        onChange={() => toggleComplete(id)}
        className="mr-3"
      />

      {/* Task text or edit input */}
      {isEditing ? (
        <input
          type="text"
          value={editText}
          onChange={(e) => setEditText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleSave()}
          className="flex-grow px-2 py-1 border rounded"
          autoFocus
        />
      ) : (
        <span
          style={{ textDecoration: completed ? 'line-through' : 'none' }}
          className="flex-grow cursor-pointer"
          onDoubleClick={() => setIsEditing(true)}
          title="Double-click to edit"
        >
          {text}
        </span>
      )}

      {/* Buttons */}
      {isEditing ? (
        <button
          onClick={handleSave}
          className="ml-2 bg-green-500 text-white px-2 rounded hover:bg-green-600"
        >
          Save
        </button>
      ) : (
        <>
          <button
            onClick={() => setIsEditing(true)}
            className="ml-2 bg-yellow-400 text-white px-2 rounded hover:bg-yellow-500"
          >
            Edit
          </button>
          <button
            onClick={() => deleteTodo(id)}
            className="ml-2 bg-red-500 text-white px-2 rounded hover:bg-red-600"
          >
            Delete
          </button>
        </>
      )}
    </div>
  );
}
