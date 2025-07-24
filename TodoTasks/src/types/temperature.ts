import type { Dayjs } from 'dayjs';

export type TemperatureRowType = {
  id: number;
  time: Dayjs;
  temperature: number;
};