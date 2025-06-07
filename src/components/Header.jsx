import { useState } from 'react';

export default function Header({ addTodo }) {
  // Local state to store the input text
  const [text, setText] = useState('');

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload

    // Check if input is not empty
    if (text.trim() === '') return;

    // Call the addTodo function passed from App
    addTodo(text);

    // Clear input box
    setText('');
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 mb-4">
      {/* Input field to type a task */}
      <input
        type="text"
        placeholder="Add a new task..."
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="flex-1 px-3 py-2 border rounded"
      />

      {/* Add button */}
      <button type="submit" className="bg-blue-500 text-white px-4 rounded hover:bg-blue-600">
        Add
      </button>
    </form>
  );
}
