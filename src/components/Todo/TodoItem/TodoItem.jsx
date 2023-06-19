import { useState } from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { updateTodoApi } from "../../../apis/todo";
import * as S from "./TodoItem.styled";

const TodoItem = ({ todo, setTodos, deleteTodo, editTodo, onEditClick }) => {
  const [isChecked, setIsChecked] = useState(todo.isCompleted);
  const [modifyToggle, setModifyToggle] = useState(false);
  const [content, setContent] = useState(todo);

  const handleDelete = () => {
    deleteTodo(todo.id);
  };

  const toggleComplete = (e) => {
    setIsChecked(e.target.checked);
    setTodos({ ...todo, isCompleted: !todo.isChecked });
    console.log("!: " + todo);

    updateTodoApi(content.id, content.todo, content.isCompleted).then((res) => {
      // editTodo([res.data]);
      console.log(res.data);
    });

    // -----
    editTodo(todo.id, todo.todo, isChecked);
  };

  // 수정 버튼 클릭
  const handleEdit = () => {
    onEditClick(todo.id);

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
};

export default TodoItem;