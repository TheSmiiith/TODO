import { Inter } from "next/font/google";
import React, { useState } from "react";
import { Todo } from "@/lib/types";
import { dateFormatter } from "@/lib/dateFormatter";
import { usePersistedState } from "@/lib/hooks/usePersistedState";
import serializeTodoList from "@/lib/serializeTodoList";
import deserializeTodoList from "@/lib/deserializeTodoList";
import { TrashIcon, PencilIcon } from "@heroicons/react/24/outline";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [todos, setTodos] = usePersistedState<Array<Todo>>(
    "todos",
    [],
    serializeTodoList,
    deserializeTodoList,
  );
  const [nextId, setNextId] = usePersistedState<number>("nextId", 0);
  const [title, setTitle] = useState<string>("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();

    const newTodo: Todo = {
      id: nextId,
      title: title,
      date: new Date(),
      completed: false,
    };

    setTodos((prevTodos) => [...prevTodos, newTodo]);
    setNextId((prevNextId) => prevNextId + 1);
    setTitle("");
  };

  const handleDelete = (
    e: React.MouseEvent<HTMLButtonElement>,
    id: Todo["id"],
  ) => {
    e.stopPropagation();
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleCheck = (id: Todo["id"]) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const renderNoTodos = () => {
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

  const renderTodos = () => {
    return todos.map((todo) => {
      return (
        <li
          key={todo.id}
          className="group flex cursor-pointer items-center justify-between rounded bg-white p-2 shadow hover:bg-gray-100 lg:p-4 dark:bg-gray-700 dark:hover:bg-gray-600"
          onClick={() => handleCheck(todo.id)}
        >
          <div className="flex w-full flex-row content-between items-center">
            <input
              type="checkbox"
              className="mr-3 h-4 w-4 lg:mr-4 lg:h-5 lg:w-5"
              checked={todo.completed}
              readOnly
            />
            <div className={`flex flex-1 flex-col`}>
              <h3
                className={`text-md lg:text-lg ${todo.completed && "text-gray-400 line-through"}`}
              >
                {todo.title}
              </h3>
              <span className={`text-xs text-gray-400 lg:text-sm`}>
                {dateFormatter.format(todo.date)}
              </span>
            </div>
            <button
              className="hidden text-gray-400 hover:text-red-500 group-hover:block"
              onClick={(e) => handleDelete(e, todo.id)}
            >
              <TrashIcon className="size-5 lg:size-6" />
            </button>
          </div>
        </li>
      );
    });
  };

  return (
    <div
      className={`flex h-svh w-screen items-center justify-center overflow-hidden text-gray-950 dark:text-gray-200 ${inter.className}`}
    >
      <div className="flex h-5/6 w-11/12 max-w-3xl flex-col gap-4 sm:w-9/12 lg:w-6/12">
        <div className="flex flex-col gap-4 overflow-auto text-center">
          <h1 className="text-3xl font-bold">TODO Application</h1>
          <form className="flex flex-row" onSubmit={handleAdd}>
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
        </div>
        <div className="flex flex-1 flex-col overflow-auto rounded-lg bg-gray-50 p-3 shadow-lg lg:p-5 dark:bg-gray-800">
          <ul className="flex flex-1 flex-col gap-2 overflow-scroll">
            {!todos || todos.length === 0 ? renderNoTodos() : renderTodos()}
          </ul>
        </div>
      </div>
    </div>
  );
}
