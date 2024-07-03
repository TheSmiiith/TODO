import { Inter } from "next/font/google";
import React, { useState } from "react";
import { Todo } from "@/pages/constants";
import { dateFormatter } from "@/lib/dateFormatter";
import { Icons } from "@/components/Icons";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [todos, setTodos] = useState<Array<Todo>>([]);
  const [nextId, setNextId] = useState<number>(0);
  const [title, setTitle] = useState<string>("");

  const handleDelete = (id: Todo["id"]) =>
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));

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

  const renderTodos = () => {
    return todos.map((todo) => {
      return (
        <li
          key={todo.id}
          className="group flex cursor-pointer items-center justify-between rounded bg-white p-4 shadow hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600"
        >
          <div className="flex w-full flex-row content-between">
            <div className="flex flex-1 flex-col">
              <h3 className="text-lg">{todo.title}</h3>
              <span className="text-sm text-gray-400">
                {dateFormatter.format(todo.date)}
              </span>
            </div>
            <button
              className="hidden text-gray-400 hover:text-red-500 group-hover:block"
              onClick={() => handleDelete(todo.id)}
            >
              <Icons.Trash />
            </button>
          </div>
        </li>
      );
    });
  };

  return (
    <div
      className={`flex h-screen w-screen items-center justify-center overflow-hidden text-gray-950 dark:text-gray-200 ${inter.className}`}
    >
      <div className="sm:width-8/12 flex h-4/5 w-10/12 flex-col gap-4 p-4 md:w-6/12 lg:w-5/12">
        <div className="flex flex-col gap-4 overflow-auto text-center">
          <h1 className="text-3xl font-bold">TODO Application</h1>
          <form className="flex flex-row" onSubmit={handleAdd}>
            <input
              className="min-w-0 flex-1 rounded-l border-2 border-r-0 p-4 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700"
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Create a new todo..."
            />
            <button
              type="submit"
              className="text-nowrap rounded-r bg-blue-500 px-4 text-white hover:bg-blue-600"
            >
              + Add
            </button>
          </form>
        </div>
        <div className="flex flex-1 flex-col overflow-auto rounded-lg bg-gray-50 p-6 shadow-lg dark:bg-gray-800">
          <ul className="flex flex-1 flex-col gap-2 overflow-scroll">
            {renderTodos()}
          </ul>
        </div>
      </div>
    </div>
  );
}
