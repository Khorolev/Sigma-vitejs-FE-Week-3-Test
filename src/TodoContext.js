import { createContext } from "react";

const todos = [];
const setTodos = () => {};

export const TodoContext = createContext({ todos, setTodos });
