import React, { useState, useEffect } from "react";
import * as S from "./TodoInput.styled";

const TodoInput = ({addTodo}) => {
  const [value, setValue] = useState("");

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };

  return (
    <S.Wrapper>
      <S.Title>Get Things Done !</S.Title>
      <S.Form onSubmit={onSubmit}>
          <S.Input data-testid="new-todo-input" placeholder="What is the task today?" onChange={onChange} value={value}/>
          <S.Button data-testid="new-todo-add-button" type="submit"> Add Task
            {/* <S.ButtonText>추가</S.ButtonText> */}
          </S.Button>
      </S.Form>
    </S.Wrapper>
  );
}

export default TodoInput;