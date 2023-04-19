import React, { useState } from "react";
import * as S from "../TodoInput/TodoInput.styled";

function EditTodoInput({ editTodo, todo }) {
  const [value, setValue] = useState(todo.todo);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editTodo(value, todo.id);
    console.log(value);
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={onSubmit}>
        <S.Input
          data-testid="new-todo-input"
          placeholder="Update task"
          onChange={onChange}
          value={value || "???"}
        />
        <S.Button data-testid="submit-button" type="submit">
          완료
        </S.Button>
        <S.Button data-testid="cancel-button" type="submit">
          취소
        </S.Button>
      </S.Form>
    </S.Wrapper>
  );
}

export default EditTodoInput;
