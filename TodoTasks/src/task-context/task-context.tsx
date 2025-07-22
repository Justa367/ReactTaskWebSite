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
  searchTerm: string;
};

type TaskContextType = {
  tasks: TaskType[];
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
  filters: TaskFilters;
  setFilters: Dispatch<SetStateAction<TaskFilters>>;
  // TODO: Add types done
  filteredTasks: TaskType[];
  completedTasksCount: number;
  progressPercent: number;
};

const TaskContext = createContext<TaskContextType>({
  tasks: [],
  setTasks: () => undefined,
  filters: { showDone: null, searchTerm: '' },
  setFilters: () => undefined,
  filteredTasks: [],
  completedTasksCount: 0,
  progressPercent: 0,
});

export function TaskStateProvider({ children }: PropsWithChildren) {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [filters, setFilters] = useState<TaskFilters>({ showDone: null, searchTerm: '' });

  //TODO: Dodać search po description, i reszte z advanced po ich wyswietleniu, najpierw po searchu zająć się funkcjonalnością priority
  const filteredTasksWithIndex = tasks.filter((task: TaskType) => {
    const matchesDoneStatus =
      filters.showDone === null || filters.showDone === undefined
        ? true
        : filters.showDone
          ? task.isDone
          : !task.isDone;

    const matchesSearchTerm = task.taskDescription
      .toLowerCase()
      .includes(filters.searchTerm.toLowerCase());

    return matchesDoneStatus && matchesSearchTerm;
  });

  const completedTasksCount = tasks.filter((task) => task.isDone).length;
  const progressPercent = tasks.length === 0 ? 0 : (completedTasksCount / tasks.length) * 100;

  return (
    <TaskContext.Provider
      value={{
        tasks,
        setTasks,
        filters,
        setFilters,
        filteredTasks: filteredTasksWithIndex,
        completedTasksCount,
        progressPercent,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}

export const useTasksState = () => useContext(TaskContext);
