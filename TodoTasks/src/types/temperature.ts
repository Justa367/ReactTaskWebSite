import type dayjs from 'dayjs';

export type TemperatureRowType = {
  id: number;
  time: dayjs.Dayjs;
  temperature: number;
};