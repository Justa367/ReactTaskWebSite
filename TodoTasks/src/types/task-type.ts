import type { Dayjs } from 'dayjs';

export type TaskType = {
  id: string;
  taskDescription: string;
  priority: 'low' | 'medium' | 'high';
  date: Dayjs | null;
  createdAt: Dayjs;
  isDone: boolean;
};
