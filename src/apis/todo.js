import { authInstance } from "./utils";

export const getTodoApi = async () => {
  return authInstance.get("/todos");
};

export const createTodoApi = async (todo) => {
  return authInstance.post("/todos", { todo });
};

export const updateTodoApi = async (id, todo, isCompleted) => {
  return authInstance.put(`/todos/${id}`, { todo, isCompleted });
};

export const deleteTodoApi = async (id) => {
  return authInstance.delete(`/todos/${id}`);
};