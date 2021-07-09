import React from "react";
import "./App.css";
import TodoList from "./components/TodoList";
import { TodoApp } from "./components/StyledComponents";
function App() {
  return (
    <TodoApp className="todo-app">
      <TodoList />
    </TodoApp>
  );
}

export default App;
