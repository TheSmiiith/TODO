export type Todo = {
  id: number;
  title: string;
  date: Date;
  completed: boolean;
};

export type Filter = "All" | "Active" | "Completed";
