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
  createdBefore?: Dayjs | null;
  dueDateRange?: [Dayjs | null, Dayjs | null];
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

    const matchesCreatedBefore =
      !filters.createdBefore ||
      task.createdAt.isSame(filters.createdBefore, 'day') ||
      task.createdAt.isBefore(filters.createdBefore);

    const matchesPriority = filters.priority === '' || task.priority === filters.priority;

    //TODO: use isBetween from dayjs
    const matchesDueDateRange = () => {
      const [start, end] = filters.dueDateRange || [null, null];

      if (!task.date) return false;

      return start && end
        ? task.date.isSame(start, 'day') ||
            task.date.isSame(end, 'day') ||
            (task.date.isAfter(start) && task.date.isBefore(end))
        : start
          ? task.date.isSame(start, 'day') || task.date.isAfter(start)
          : end
            ? task.date.isSame(end, 'day') || task.date.isBefore(end)
            : true;
    };
    return (
      matchesDoneStatus &&
      matchesSearchTerm &&
      matchesCreatedAfter &&
      matchesCreatedBefore &&
      matchesPriority &&
      matchesDueDateRange()
    );
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
