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
};

const TaskContext = createContext<TaskContextType>({
  tasks: [],
  setTasks: () => undefined,
  filters: { showDone: null },
  setFilters: () => undefined,
});

export function TaskStateProvider({ children }: PropsWithChildren) {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [filters, setFilters] = useState<TaskFilters>({ showDone: null });

  return (
    <TaskContext.Provider value={{ tasks, setTasks, filters, setFilters }}>
      {children}
    </TaskContext.Provider>
  );
}

export const useTasksState = () => useContext(TaskContext);
