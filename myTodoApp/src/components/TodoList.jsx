import { useState } from "react";



export function TodoList() {
  const [todos, setTodos] = useState([]);

  function handleAddToDo(event) {
    event.preventDefault();

    const todo = event.target.elements.todo.value;
    setTodos((todos) => [...todos, todo]);

    event.target.elements.todo.value = '';
  }

  function handleRemove(index) {
    setTodos((todos) => todos.filter((_, i) => i !== index));
  }

  function handleResetTodos() {
    setTodos([]);
  }

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleAddToDo}>
        <input
          type="text"
          placeholder="Enter todo"
          name="todo"
          id="todo-input"
        />
        <button type="submit">Add Todo</button>
      </form>
      <button onClick={handleResetTodos}>Reset</button>

      <ul id="todo-list">
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => handleRemove(index)}>✅</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
