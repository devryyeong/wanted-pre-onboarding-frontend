import { authApi } from "./utils";

export const getTodoApi = async () => {
  return authApi.get("/todos");
};

export const createTodoApi = async (todo) => {
  return authApi.post("/todos", { todo }).then(() => getTodoApi());
};

export const updateTodoApi = async (id, todo, isCompleted) => {
  return authApi
    .put(`/todos/${id}`, { todo, isCompleted })
    .then(() => getTodoApi());
};

export const deleteTodoApi = async (id) => {
  return authApi.delete(`/todos/${id}`);
};