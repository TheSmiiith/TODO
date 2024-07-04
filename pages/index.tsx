import React, { useMemo, useState } from "react";
import { Filter, Todo } from "@/lib/types";
import { usePersistedState } from "@/lib/hooks/usePersistedState";
import serializeTodoList from "@/lib/serializeTodoList";
import deserializeTodoList from "@/lib/deserializeTodoList";
import TodoList from "@/components/ui/TodoList";
import AddTodoItem from "@/components/ui/AddTodoItem";
import FilterRow from "@/components/ui/FilterRow";

const defaultFilter: Filter = "All";

export default function Home() {
  const [todos, setTodos] = usePersistedState<Array<Todo>>(
    "todos",
    [],
    serializeTodoList,
    deserializeTodoList,
  );
  const [nextId, setNextId] = usePersistedState<number>("nextId", 0);
  const [filter, setFilter] = useState<Filter>(defaultFilter);

  const handleAdd = (title: Todo["title"]) => {
    setTodos((prevTodos) => [
      ...prevTodos,
      {
        id: nextId,
        title: title,
        date: new Date(),
        completed: false,
      },
    ]);
    setNextId((prevNextId) => prevNextId + 1);
  };

  const handleDelete = (id: Todo["id"]) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
  };

  const handleCheck = (id: Todo["id"]) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo,
      ),
    );
  };

  const handleClearCompleted = () =>
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.completed));

  const filteredTodos = useMemo(
    () =>
      todos.filter((value) => {
        switch (filter) {
          case "Active":
            return !value.completed;
          case "Completed":
            return value.completed;
          default:
            return true;
        }
      }),
    [filter, todos],
  );

  return (
    <div className="flex h-5/6 w-11/12 max-w-3xl flex-col gap-4 sm:w-9/12 lg:w-6/12">
      <div className="flex flex-col gap-4 overflow-auto text-center">
        <h1 className="text-3xl font-bold">TODO Application</h1>
        <AddTodoItem handleAdd={handleAdd} />
      </div>
      <div className="flex flex-1 flex-col overflow-auto rounded-lg bg-gray-50 p-3 shadow-lg lg:p-5 dark:bg-gray-800">
        <ul className="flex flex-1 flex-col gap-2 overflow-scroll">
          <TodoList
            todos={filteredTodos}
            handleDelete={handleDelete}
            handleCheck={handleCheck}
          />
        </ul>
      </div>
      <FilterRow
        itemCount={filteredTodos.length}
        filter={filter}
        setFilter={setFilter}
        handleClearCompleted={handleClearCompleted}
      />
    </div>
  );
}
