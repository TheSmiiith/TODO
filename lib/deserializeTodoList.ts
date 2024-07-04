import { Todo } from "@/lib/types";

const deserializeTodoList = (value: string): Array<Todo> => {
  return JSON.parse(value, (key, value) => {
    if (key === "date") {
      return new Date(value);
    }
    return value;
  });
};

export default deserializeTodoList;
