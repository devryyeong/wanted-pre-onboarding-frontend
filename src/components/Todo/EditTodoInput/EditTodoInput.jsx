import { useState, useCallback } from "react";
import * as S from "../TodoInput/TodoInput.styled";
import { updateTodoApi } from "../../../apis/todo";

const EditTodoInput = ({ onEditClick, setIsEditing, todo, setTodos }) => {
  const [value, setValue] = useState(todo.todo);
  const [content, setContent] = useState(todo);

  const onInputChange = useCallback(
    (e) => {
      setValue(e.target.value);
    },
    [value]
  );

  // 수정 완료 버튼 클릭
  const handleCompleteBtnClick = (e) => {
    e.preventDefault();
    if (!value) {
      alert("할 일을 입력해 주세요");
      return;
    }

    updateTodoApi(content.id, value, content.isCompleted)
      .then((res) => {
        setTodos([...res.data]);
        setIsEditing(false)
        console.log(res.data);
      })
    console.log(value);
  };

  // 수정 취소 버튼 클릭
  const handleEditCancel = () => {
    onEditClick(null)
  };

  return (
    <S.Wrapper>
      <S.Form>
        <S.Input
          data-testid="modify-input"
          placeholder="Update task"
          onChange={onInputChange}
          value={value}
        />
        <S.Button
          data-testid="submit-button"
          type="submit"
          onClick={handleCompleteBtnClick}
        >
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
