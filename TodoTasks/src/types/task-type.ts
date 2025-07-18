import type { Dayjs } from 'dayjs';

export type TaskType = {
  taskDescription: string;
  priority: 'LOW' | 'NORMAL' | 'HIGH';
  date: Dayjs | null;
  createdAt: Dayjs;
};
