import {
  createContext,
  useContext,
  useState,
  type Dispatch,
  type SetStateAction,
  type PropsWithChildren,
} from 'react';
import type { TaskType } from '../types/task-type';
import { Dayjs } from 'dayjs';

type TaskFilters = {
  showDone: boolean | null;
  searchTerm: string;
  createdAfter?: Dayjs | null;
  priority: '' | 'low' | 'medium' | 'high';
};

type TaskContextType = {
  tasks: TaskType[];
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
  filters: TaskFilters;
  setFilters: Dispatch<SetStateAction<TaskFilters>>;
  filteredTasks: TaskType[];
  completedTasksCount: number;
  progressPercent: number;
};

const TaskContext = createContext<TaskContextType>({
  tasks: [],
  setTasks: () => undefined,
  filters: { showDone: null, searchTerm: '', priority: '' },
  setFilters: () => undefined,
  filteredTasks: [],
  completedTasksCount: 0,
  progressPercent: 0,
});

export function TaskStateProvider({ children }: PropsWithChildren) {
  const [tasks, setTasks] = useState<TaskType[]>([]);
  const [filters, setFilters] = useState<TaskFilters>({
    showDone: null,
    searchTerm: '',
    priority: '',
  });

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

    const matchesCreatedAfter =
      !filters.createdAfter ||
      task.createdAt.isSame(filters.createdAfter, 'day') ||
      task.createdAt.isAfter(filters.createdAfter);

    const matchesPriority = filters.priority === '' || task.priority === filters.priority;

    return matchesDoneStatus && matchesSearchTerm && matchesCreatedAfter && matchesPriority;
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
