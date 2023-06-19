import { useState } from "react";
import * as S from "../TodoInput/TodoInput.styled";

const EditTodoInput = ({ editTodo, todo }) => {
  const [value, setValue] = useState(todo.todo);
  
  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editTodo(todo.id, value, );
    
    console.log(value);
  };

  return (
    <S.Wrapper>
      <S.Form onSubmit={onSubmit}>
        <S.Input
          data-testid="modify-input"
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
