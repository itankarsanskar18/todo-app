import { useState } from 'react';
// Importing two components: Header (input) and ToDoList (task list)
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  // State to hold the list of to-do items
  const [todos, setTodos] = useState([]);

  // Function to add a new to-do item
  const addTodo = (text) => {
    const newTodo = {
      id: Date.now(),       // Unique ID using current timestamp
      text: text,           // Task text passed from input
      completed: false      // Task is initially not completed
    };
    setTodos([...todos, newTodo]);  // Add new task to the list
  };

  // Function to delete a to-do item
  const deleteTodo = (id) => {
    // Filter out the item with the matching ID
    setTodos(todos.filter(todo => todo.id !== id));
  };

  // Function to mark a task as completed or uncompleted
  const toggleComplete = (id) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, completed: !todo.completed } // toggle completed flag
          : todo
      )
    );
  };

  // Function to edit a task's text
  const editTodo = (id, newText) => {
    setTodos(
      todos.map(todo =>
        todo.id === id
          ? { ...todo, text: newText } // update the text
          : todo
      )
    );
  };

  return (
    <div className="max-w-xl mx-auto mt-10 px-4">
      {/* Title */}
      <h1 className="text-2xl font-bold text-center mb-6">📝 To-Do List</h1>
      
      {/* Input component - adds new todo */}
      <Header addTodo={addTodo} />

      {/* Task list component - handles display, delete, complete, edit */}
      <ToDoList
        todos={todos}
        deleteTodo={deleteTodo}
        toggleComplete={toggleComplete}
        editTodo={editTodo}
      />
    </div>
  );
}

// Export the App component so it's accessible from main.jsx
export default App;

