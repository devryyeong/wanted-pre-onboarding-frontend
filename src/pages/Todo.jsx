import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  getTodoApi,
  createTodoApi,
  deleteTodoApi,
} from "../apis/todo";
import { MainContainer } from '../utils/globalStyle';
import TodoInput from "../components/Todo/TodoInput/TodoInput";
import EditTodoInput from "../components/Todo/EditTodoInput/EditTodoInput";
import TodoItem from "../components/Todo/TodoItem/TodoItem";
import { v4 as uuidv4 } from "uuid";
uuidv4();

const Todo = () => {
  const [todos, setTodos] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [editTodoItem, setEditTodoItem] = useState(0); // 현재 수정하는 Todo id 저장
  const navigate = useNavigate();
  const token = localStorage.getItem("access_token");

  const addTodo = (todo) => {
    createTodoApi(todo).then((res) => setTodos([...res.data]));
  };

  const deleteTodo = (id) => {
    deleteTodoApi(id).then((res) => {
      const newTodo = todos.filter((el) => el.id !== id);
      setTodos([...newTodo]);
    });
  };


  // 수정 버튼 클릭
  const onEditClick = (id) => {
    setIsEditing(!isEditing);
    setEditTodoItem(id);
    console.log(id);
  };


  useEffect(() => {
    if (!token) {
      alert("로그인 후 다시 접속해주세요.\n로그인 페이지로 이동합니다.")
      navigate("/signin", { replace: true });
    }
    
    getTodoApi()
      .then((res) => {
        setTodos(res.data);
        console.log('초기:'+res.data)
      })
      .catch((err) => {
        throw new Error(err);
      });
  }, [token]);

  return (
    <MainContainer>
      <TodoInput addTodo={addTodo} />
      {todos.map((todo) =>
        isEditing && todo.id === editTodoItem ? (
          <EditTodoInput
            onEditClick={onEditClick}
            setIsEditing={setIsEditing}
            todo={todo}
            setTodos={setTodos}
            key={todo.id}
          />
        ) : (
          <TodoItem
            todo={todo}
            setTodos={setTodos}
            key={todo.id}
            deleteTodo={deleteTodo}
            onEditClick={onEditClick}
          />
        )
      )}
    </MainContainer>
  );
}

export default Todo;