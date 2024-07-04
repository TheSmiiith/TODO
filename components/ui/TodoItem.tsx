import React from "react";
import { Todo } from "@/lib/types";
import { dateFormatter } from "@/lib/dateFormatter";
import { TrashIcon } from "@heroicons/react/24/outline";

type TodoItemProps = {
  item: Pick<Todo, "title" | "date" | "completed">;
  handleDelete: () => void;
  handleCheck: () => void;
};

const TodoItem = (props: TodoItemProps) => {
  const { item, handleDelete, handleCheck } = props;

  const handleOnDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    handleDelete();
  };

  return (
    <li
      className="group flex cursor-pointer items-center justify-between rounded bg-white p-2 shadow hover:bg-gray-100 lg:p-4 dark:bg-gray-700 dark:hover:bg-gray-600"
      onClick={() => handleCheck()}
    >
      <div className="flex w-full flex-row content-between items-center">
        <input
          type="checkbox"
          className="mr-3 h-4 w-4 lg:mr-4 lg:h-5 lg:w-5"
          checked={item.completed}
          readOnly
        />
        <div className={`flex flex-1 flex-col`}>
          <h3
            className={`text-md lg:text-lg ${item.completed && "text-gray-400 line-through"}`}
          >
            {item.title}
          </h3>
          <span className={`text-xs text-gray-400 lg:text-sm`}>
            {dateFormatter.format(item.date)}
          </span>
        </div>
        <button
          className="hidden text-gray-400 hover:text-red-500 group-hover:block"
          onClick={(e) => handleOnDeleteClick(e)}
        >
          <TrashIcon className="size-5 lg:size-6" />
        </button>
      </div>
    </li>
  );
};

export default TodoItem;
