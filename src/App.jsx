import { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";
import TodoList from "./TodoList";

export default function App() {
  const [todos, setTodos] = useState([]);

  return (
    <>
      <TodoContext.Provider value={{ todos, setTodos }}>
        <TodoList />
      </TodoContext.Provider>
    </>
  );
}
