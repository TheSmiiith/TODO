import React from "react";
import { Todo } from "@/lib/types";
import TodoItem from "@/components/ui/TodoItem";
import { PencilIcon } from "@heroicons/react/24/outline";

type TodoListProps = {
  todos: Array<Todo>;
  handleDelete: (id: Todo["id"]) => void;
  handleCheck: (id: Todo["id"]) => void;
};

const TodoList = (props: TodoListProps) => {
  const { todos, handleDelete, handleCheck } = props;

  const renderList = () => {
    return todos.map((todo) => {
      return (
        <TodoItem
          key={todo.id}
          item={todo}
          handleDelete={() => handleDelete(todo.id)}
          handleCheck={() => handleCheck(todo.id)}
        />
      );
    });
  };

  const renderEmptyList = () => {
    return (
      <div className="flex flex-1 flex-col items-center justify-center text-center">
        <PencilIcon className="size-12" />
        <h1 className="mt-4 text-xl font-semibold text-gray-900 dark:text-gray-100">
          No Todos
        </h1>
        <p className="text-gray-600 dark:text-gray-300">
          Add some items to see them here
        </p>
      </div>
    );
  };

  return todos.length > 0 ? renderList() : renderEmptyList();
};

export default TodoList;
