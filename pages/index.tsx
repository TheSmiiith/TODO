import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className={`flex h-screen w-screen items-center justify-center overflow-hidden text-gray-950 dark:text-gray-200 ${inter.className}`}
    >
      <div className="sm:width-8/12 flex h-4/5 w-10/12 flex-col gap-4 p-4 md:w-6/12 lg:w-5/12">
        <div className="flex flex-col gap-4 overflow-auto text-center">
          <h1 className="text-3xl font-bold">TODO Application</h1>
          <div className="flex flex-row">
            <input
              className="min-w-0 flex-1 rounded-l border-2 border-r-0 p-4 focus:border-blue-500 focus:outline-none dark:border-gray-600 dark:bg-gray-700"
              type="text"
              placeholder="Create a new todo..."
            />
            <button className="text-nowrap rounded-r bg-blue-500 px-4 text-white hover:bg-blue-600">
              + Add
            </button>
          </div>
        </div>
        <div className="flex flex-1 flex-col overflow-auto rounded-lg bg-gray-50 p-6 shadow-lg dark:bg-gray-800">
          <ul className="flex flex-1 flex-col gap-2 overflow-scroll">
            <li className="flex cursor-pointer items-center justify-between rounded bg-white p-4 shadow hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="flex flex-col">
                <h3 className="text-lg">Todo #1</h3>
                <span className="text-sm text-gray-400">2024-07-02</span>
              </div>
            </li>
            <li className="flex cursor-pointer items-center justify-between rounded bg-white p-4 shadow hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="flex flex-col">
                <h3 className="text-lg">Todo #2</h3>
                <span className="text-sm text-gray-400">2024-07-02</span>
              </div>
            </li>
            <li className="flex cursor-pointer items-center justify-between rounded bg-white p-4 shadow hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="flex flex-col">
                <h3 className="text-lg">Todo #1</h3>
                <span className="text-sm text-gray-400">2024-07-02</span>
              </div>
            </li>
            <li className="flex cursor-pointer items-center justify-between rounded bg-white p-4 shadow hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="flex flex-col">
                <h3 className="text-lg">Todo #2</h3>
                <span className="text-sm text-gray-400">2024-07-02</span>
              </div>
            </li>
            <li className="flex cursor-pointer items-center justify-between rounded bg-white p-4 shadow hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="flex flex-col">
                <h3 className="text-lg">Todo #1</h3>
                <span className="text-sm text-gray-400">2024-07-02</span>
              </div>
            </li>
            <li className="flex cursor-pointer items-center justify-between rounded bg-white p-4 shadow hover:bg-gray-100 dark:bg-gray-700 dark:hover:bg-gray-600">
              <div className="flex flex-col">
                <h3 className="text-lg">Todo #2</h3>
                <span className="text-sm text-gray-400">2024-07-02</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
