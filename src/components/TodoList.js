import React, { useState, useEffect } from "react";
import TodoForm from "./TodoForm";
import Todo from "./Todo";
import {
  Option,
  Select,
  TextPrimary,
  TextSecondary,
  TodoSpace,
} from "./StyledComponents";
function TodoList() {
  const [todos, setTodos] = useState([]);
  const [light, setLight] = useState(false);
  const [filterOption, setFilterOption] = useState("All");

  const addTodo = (todo) => {
    if (!todo.text || /^\s*$/.test(todo.text)) {
      return;
    }
    const newTodos = [todo, ...todos];
    setTodos(newTodos);
    console.log(...todos);
  };

  const updateTodo = (todoId, newValue, isComplete) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos((prev) =>
      prev.map((item) => (item.id === todoId ? newValue : item))
    );
  };

  const removeTodo = (id) => {
    const removedArr = [...todos].filter((todo) => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = (id) => {
    let updatedTodos = todos.map((todo) => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };
  useEffect(() => {
    let res = localStorage.getItem("myTodos");
    setTodos(JSON.parse(res));
  }, []);
  useEffect(() => {
    localStorage.setItem("myTodos", JSON.stringify(todos));
  }, [todos]);

  return (
    <>
      <Option>
        <Select
          onChange={(e) => {
            setFilterOption(e.target.value);
          }}
        >
          <option value="All">Filter</option>
          <option value="All">All</option>
          <option value="Complete">Complete</option>
          <option value="Incomplete">Incomplete</option>
        </Select>
      </Option>

      <TextPrimary>What would you like To-Do today?</TextPrimary>
      <TodoForm onSubmit={addTodo} />
      <TextSecondary>{filterOption} todos</TextSecondary>
      <TodoSpace>
        <Todo
          todos={todos}
          completeTodo={completeTodo}
          removeTodo={removeTodo}
          updateTodo={updateTodo}
          filterOption={filterOption}
          light={light}
        />
      </TodoSpace>
    </>
  );
}

export default TodoList;
