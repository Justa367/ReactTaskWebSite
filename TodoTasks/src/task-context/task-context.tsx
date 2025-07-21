import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
  type PropsWithChildren,
} from 'react';
import type { TaskType } from '../types/task-type';

type TaskFilters = {
  showDone: boolean | null;
};

type TaskContextType = {
  tasks: TaskType[];
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
  filters: TaskFilters;
  setFilters: Dispatch<SetStateAction<TaskFilters>>;
  // TODO: Add types
  filteredTasks: any;
};

const TaskContext = createContext<TaskContextType>({
  tasks: [],
  setTasks: () => undefined,
  filters: { showDone: null },
  setFilters: () => undefined,
  filteredTasks: [],
});

export function TaskStateProvider({ children }: PropsWithChildren) {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [filters, setFilters] = useState<TaskFilters>({ showDone: null });

  //TODO: Dodać search po description, i reszte z advanced po ich wyswietleniu, najpierw po searchu zająć się funkcjonalnością priority
  const filteredTasksWithIndex = tasks.filter((task) => {
    //search itp...

    if (filters.showDone === null || filters.showDone === undefined) return true; // all
    if (filters.showDone) return task.isDone; // Completede
    if (!filters.showDone) return !task.isDone; // Active
    return true;
  });

  return (
    <TaskContext.Provider
      value={{ tasks, setTasks, filters, setFilters, filteredTasks: filteredTasksWithIndex }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTasksState = () => useContext(TaskContext);
