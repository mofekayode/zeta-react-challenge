import React, { useState } from "react";
import TodoForm from "./TodoForm";
import EditIcon from "@material-ui/icons/Edit";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { blue } from "@material-ui/core/colors";
import { withStyles } from "@material-ui/core/styles";
import CancelIcon from "@material-ui/icons/Cancel";
import styled from "styled-components";

import { Icons, DeleteSpace, TodoItem } from "./StyledComponents";

const Todo = ({
  todos,
  completeTodo,
  removeTodo,
  updateTodo,
  filterOption,
}) => {
  const getTodos = () => {
    console.log(filterOption);
    if (filterOption == "All") {
      return todos;
    }
    if (filterOption == "Complete") {
      return todos.filter((elem) => elem.isComplete == true);
    }
    if (filterOption == "Incomplete") {
      return todos.filter((elem) => elem.isComplete == false);
    } else {
      return todos;
    }
  };

  const GreenCheckbox = withStyles({
    root: {
      color: blue[400],
      "&$checked": {
        color: blue[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

  const [edit, setEdit] = useState({
    id: null,
    value: "",
    isComplete: false,
  });

  const submitUpdate = (value) => {
    updateTodo(edit.id, value, edit.isComplete);
    setEdit({
      id: null,
      value: "",
      isComplete: false,
    });
  };

  if (edit.id) {
    return <TodoForm edit={edit} onSubmit={submitUpdate} />;
  }

  return getTodos().map((todo, index) => (
    <TodoItem
      style={{
        textDecoration: todo.isComplete ? `line-through` : `none`,
        opacity: todo.isComplete ? `0.9` : `1`,
      }}
      key={index}
    >
      {console.log(todo)}
      <FormControlLabel
        onClick={() => completeTodo(todo.id)}
        control={<GreenCheckbox checked={todo.isComplete} name="checkedG" />}
      />
      <div key={todo.id}>{todo.text}</div>
      <Icons>
        <EditIcon
          onClick={() =>
            setEdit({
              id: todo.id,
              value: todo.text,
              isComplete: todo.isComplete,
            })
          }
          style={{ color: "white", marginRight: "70px" }}
        />
        <div>
          <DeleteSpace
            className="delete-space"
            onClick={() => removeTodo(todo.id)}
          >
            <CancelIcon style={{ color: "white" }} />
          </DeleteSpace>
        </div>
      </Icons>
    </TodoItem>
  ));
};

export default Todo;
