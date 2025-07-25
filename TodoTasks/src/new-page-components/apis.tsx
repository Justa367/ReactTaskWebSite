import axios from 'axios';
import dayjs from 'dayjs';
import type { TemperatureRowType } from '../types/temperature';

export const fetchJapanTemperature = async (): Promise<TemperatureRowType[]> => {
  const url =
    'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&models=jma_seamless';

  const response = await axios.get(url);

  const timeArr = response.data.hourly.time;
  const tempArr = response.data.hourly.temperature_2m;

  const transformedData: TemperatureRowType[] = timeArr.map((time: string, index: number) => ({
    id: index,
    time: dayjs(time),
    temperature: tempArr[index],
  }));

  return transformedData;
};

export const fetchCanadaTemperature = async (): Promise<TemperatureRowType[]> => {
  const url =
    'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&models=gem_seamless';

  const response = await axios.get(url);

  const timeArr = response.data.hourly.time;
  const tempArr = response.data.hourly.temperature_2m;

  const transformedData: TemperatureRowType[] = timeArr.map((time: string, index: number) => ({
    id: index,
    time: dayjs(time),
    temperature: tempArr[index],
  }));

  return transformedData;
};

export const fetchGermanTemperature = async (): Promise<TemperatureRowType[]> => {
  const url =
    'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&models=icon_seamless';

  const response = await axios.get(url);

  const timeArr = response.data.hourly.time;
  const tempArr = response.data.hourly.temperature_2m;

  const transformedData: TemperatureRowType[] = timeArr.map((time: string, index: number) => ({
    id: index,
    time: dayjs(time),
    temperature: tempArr[index],
  }));

  return transformedData;
};
