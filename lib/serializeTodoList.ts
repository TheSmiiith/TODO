import { Todo } from "@/lib/types";

const serializeTodoList = (todos: Array<Todo>): string => {
  return JSON.stringify(todos, (key, value) => {
    return value;
  });
};

export default serializeTodoList;
