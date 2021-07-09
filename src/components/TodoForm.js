import React, { useState, useEffect, useRef } from "react";
import { Form, InputEdit, ButtonEdit, Input, Button } from "./StyledComponents";
function TodoForm(props) {
  const [input, setInput] = useState(props.edit ? props.edit.value : "");

  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  });

  const handleChange = (e) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e?.preventDefault();

    props.onSubmit({
      id: props.edit?.id ? props.edit.id : Math.floor(Math.random() * 10000),
      text: input,
      isComplete: props.edit?.isComplete ? props.edit.isComplete : false,
    });
    setInput("");
  };

  return (
    <Form onSubmit={handleSubmit}>
      {props.edit ? (
        <>
          <InputEdit
            placeholder="Update your item"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
          />
          <ButtonEdit
            onClick={() => {
              handleSubmit();
            }}
          >
            Update
          </ButtonEdit>
        </>
      ) : (
        <>
          <Input
            placeholder="Add a todo"
            value={input}
            onChange={handleChange}
            name="text"
            ref={inputRef}
          />
          <Button onClick={handleSubmit}>Add</Button>
        </>
      )}
    </Form>
  );
}

export default TodoForm;
