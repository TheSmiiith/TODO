import React from "react";
import { TrashIcon } from "@heroicons/react/24/outline";
import { Filter } from "@/lib/types";

type FilterRowProps = {
  itemCount: number;
  filter: Filter;
  setFilter: React.Dispatch<React.SetStateAction<Filter>>;
  handleClearCompleted: () => void;
};

const FilterRow = (props: FilterRowProps) => {
  const { itemCount, filter, setFilter, handleClearCompleted } = props;

  return (
    <div className="flex flex-col items-center gap-2 text-sm text-gray-600 lg:flex-row dark:text-gray-400">
      <span className="flex-1 text-left">{itemCount} items</span>
      <div className="flex-1 space-x-4 text-center">
        <button
          className={`${filter == "All" && "font-bold"}`}
          onClick={() => setFilter("All")}
        >
          All
        </button>
        <button
          className={`${filter == "Active" && "font-bold"} text-green-500`}
          onClick={() => setFilter("Active")}
        >
          Active
        </button>
        <button
          className={`${filter == "Completed" && "font-bold"} line-through`}
          onClick={() => setFilter("Completed")}
        >
          Completed
        </button>
      </div>
      <button
        className="text-md flex flex-1 flex-row flex-nowrap items-center justify-end gap-2"
        onClick={handleClearCompleted}
      >
        <TrashIcon className="size-5" /> Clear completed
      </button>
    </div>
  );
};

export default FilterRow;
