import React, { useState, useEffect } from "react";
import {
  getTodoApi,
  createTodoApi,
  updateTodoApi,
  deleteTodoApi,
} from "../apis/todo";
import { MainContainer } from '../utils/globalStyle';
import TodoInput from "../components/Todo/TodoInput/TodoInput";
import EditTodoInput from "../components/Todo/EditTodoInput/EditTodoInput";
import TodoItem from "../components/Todo/TodoItem/TodoItem";
import { v4 as uuidv4 } from "uuid";
uuidv4();

function Todo() {
  const [todos, setTodos] = useState([]);
  const [isDone, setIsDone] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const addTodo = (todo) => {
    createTodoApi(todo)
      .then((res) => setTodos([...res.data]));
    console.log(todos)
  };

  const deleteTodo = (id) => {
    deleteTodoApi(id)
      .then((res) => {
        const newTodo = todos.filter((el) => el.id !== id);
        setTodos([...newTodo]);
      });
  };

  const toggleComplete = (id, isDone, isCompleted) => {
    setIsDone(!isDone);
    // console.log("isCompleted: "+isDone)
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isCompleted: !isCompleted } : todo
      )
    );
    console.log(todos)
    // updateTodoApi(todo).then((res) => setTodos([...res.data]));
  };

  const editTodo = (id, todo, isCompleted) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isEditing: !isEditing } : todo
      )
    );
  };

  const editTask = (id, todo, isCompleted) => {
    setTodos(
      todos.map((t) =>
        t.id === id ? { ...t, todo, isEditing: !todo.isEditing } : todo)
    );

    // updateTodoApi(id, isCompleted, todo)
    //   .then((res) => {
    //     setTodos([...res.data]);
    //     console.log("ok?");
    //   })
    //   .catch((err) => {
    //     throw new Error(err);
    //     console.log(err);
    //   });;
  };

  useEffect(() => {
      getTodoApi()
        .then((res) => {
          setTodos(res.data);
          console.log(todos)
        })
        .catch((err) => {
          throw new Error(err);
        });
  }, []);

  return (
    <MainContainer>
      <TodoInput addTodo={addTodo} />
      {todos.map((todo) =>
        todo.isEditing ? (
          <EditTodoInput editTodo={editTask} todo={todo} key={todo.id} />
        ) : (
          <TodoItem
            todo={todo}
            key={todo.id}
            deleteTodo={deleteTodo}
            editTodo={editTodo}
            toggleComplete={toggleComplete}
          />
        )
      )}
    </MainContainer>
  );
}

export default Todo;