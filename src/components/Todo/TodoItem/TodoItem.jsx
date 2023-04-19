import React, { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { updateTodoApi } from "../../../apis/todo";
import * as S from "./TodoItem.styled";

function TodoItem({ todo, deleteTodo, editTodo, onEditClick }) {
  const [isChecked, setIsChecked] = useState(todo.isCompleted);
  const [modifyToggle, setModifyToggle] = useState(false);

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const toggleComplete = () => {
    setIsChecked(!isChecked);
    // console.log("isChecked: " + !isChecked);

    // updateTodoApi(todo.id, todo.todo, !isChecked).then((res) => {
    //   editTodo([res.data]);
    //   console.log(todo);
    // });

    // -----
    editTodo(todo.id, todo.todo, isChecked)
  };

  // 수정 버튼 클릭
  const handleEdit = () => {
    onEditClick(todo.id);
    // updateTodoApi(todo.id, todo.todo, !isChecked).then((res) => {
    //   editTodo([res.data]);
    //   console.log(res.data);
    // });
  };

  return (
    <S.Wrapper>
      <li style={{ listStyle: "none" }}>
        <S.LabelWrapper>
          <S.Input
            type="checkbox"
            style={{ marginRight: "12px", width: "20px" }}
            onChange={toggleComplete}
          />
          <span> {todo.todo}</span>
        </S.LabelWrapper>
      </li>
      <S.IconWrapper>
        <FontAwesomeIcon
          icon={faPenToSquare}
          data-testid="modify-button"
          onClick={handleEdit}
        />
        <FontAwesomeIcon
          icon={faTrash}
          data-testid="delete-button"
          style={{ marginLeft: "12px" }}
          onClick={handleDelete}
        />
      </S.IconWrapper>
    </S.Wrapper>
  );
}

export default TodoItem;