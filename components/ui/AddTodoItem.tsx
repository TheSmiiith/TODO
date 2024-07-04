import React, { useState } from "react";
import { Todo } from "@/lib/types";

type AddTodoProps = {
  handleAdd: (title: Todo["title"]) => void;
};

const defaultTitle = "";

const AddTodoItem = (props: AddTodoProps) => {
  const { handleAdd } = props;
  const [title, setTitle] = useState<string>(defaultTitle);

  const handleOnAddClick = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setTitle(defaultTitle);
    handleAdd(title);
  };

  return (
    <form className="flex flex-row" onSubmit={handleOnAddClick}>
      <input
        className="min-w-0 flex-1 rounded-l border-2 border-r-0 p-3 focus:border-blue-500 focus:outline-none lg:p-4 dark:border-gray-600 dark:bg-gray-700"
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Create a new todo..."
      />
      <button
        type="submit"
        className="text-nowrap rounded-r bg-blue-500 px-4 text-white hover:bg-blue-600 disabled:hover:cursor-not-allowed disabled:hover:bg-gray-400"
        disabled={!title}
      >
        + Add
      </button>
    </form>
  );
};

export default AddTodoItem;
