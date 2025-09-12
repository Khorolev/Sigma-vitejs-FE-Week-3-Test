import { useState, useContext } from "react";
import { TodoContext } from "./TodoContext";
import TodoList from "./TodoList";

export default function App() {
  return (
    <>
      <TodoContext.Provider context={TodoContext}>
        <TodoList />
      </TodoContext.Provider>
    </>
  );
}
