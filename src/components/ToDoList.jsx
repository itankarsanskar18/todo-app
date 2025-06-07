import ToDoItem from './ToDoItem';

// Receives todos array and functions from App via props
export default function ToDoList({ todos, deleteTodo, toggleComplete, editTodo }) {
  return (
    <div>
      {/* If no tasks yet */}
      {todos.length === 0 ? (
        <p className="text-gray-500 text-center">No tasks yet. Add something!</p>
      ) : (
        // Render each to-do item using map
        todos.map((todo) => (
          <ToDoItem
            key={todo.id}                  // ✅ Unique key for React
            todo={todo}                    // the todo item object
            deleteTodo={deleteTodo}        // delete function
            toggleComplete={toggleComplete} // toggle complete function
            editTodo={editTodo}            // edit function
          />
        ))
      )}
    </div>
  );
}
