import React from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import * as S from "./TodoItem.styled";

function TodoItem({ todo, deleteTodo, editTodo, toggleComplete }) {
  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const handleEdit = () => {
    editTodo(todo.id);
    console.log(todo.id)
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