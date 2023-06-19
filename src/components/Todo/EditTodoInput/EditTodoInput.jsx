import { useState } from "react";
import * as S from "../TodoInput/TodoInput.styled";

const EditTodoInput = ({ editTodo, onEditClick, todo }) => {
  const [value, setValue] = useState(todo.todo);

  const onChange = (e) => {
    setValue(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    editTodo(todo.id, value);

    console.log(value);
  };

  // 수정 취소 버튼 클릭
  const handleEditCancel = () => {
    onEditClick(null)
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
        <S.Button data-testid="cancel-button" onClick={handleEditCancel}>
          취소
        </S.Button>
      </S.Form>
    </S.Wrapper>
  );
}

export default EditTodoInput;
