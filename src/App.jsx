import { useState, useContext } from "react";
import TodoContext from "./TodoContext";
import TodoList from "./TodoList";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <useContext.Provider context={TodoContext}>
        <TodoList />
      </useContext.Provider>
    </>
  );
}
