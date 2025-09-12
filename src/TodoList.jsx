import { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";

export default function TodoList() {
  const todos = useContext(TodoContext).todos;
  const setTodos = useContext(TodoContext).setTodos;
  const [inputTodo, setInputTodo] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();
    setTodos([...todos, inputTodo]);
  };

  return (
    <div>
      <div>
        <ul>
          {todos.map((todo, index) => {
            return <li key={index}>{todo}</li>;
          })}
        </ul>
      </div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="addTodo">Add a todo</label>
        <input
          id="addTodo"
          value={inputTodo}
          placeholder="Enter a new todo"
          onChange={(event) => {
            setInputTodo(event.target.value);
          }}
        ></input>
        <button type="text">Submit</button>
      </form>
    </div>
  );
}
