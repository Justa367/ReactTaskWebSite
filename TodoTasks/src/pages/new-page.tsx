import { useEffect, useState } from 'react';
import { Typography, Stack, CircularProgress } from '@mui/material';
import { TemperatureTable } from '../new-page-components/temperature-table';
import { TemperatureChart } from '../new-page-components/temperature-chart';
import type { TemperatureRowType } from '../types/temperature';
import axios from 'axios';
import dayjs from 'dayjs';

export const NewPage = () => {
  const [data, setData] = useState<TemperatureRowType[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    axios
      .get(
        'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&models=jma_seamless',
      )
      .then((response) => {
        console.log('API response:', response.data);

        const timeArr = response.data.hourly.time;
        const tempArr = response.data.hourly.temperature_2m;

        const transformedData: TemperatureRowType[] = timeArr.map(
          (time: string, index: number) => ({
            id: index,
            time: dayjs(time),
            temperature: tempArr[index],
          }),
        );

        setData(transformedData);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;

  return (
    <Stack sx={{ p: 4 }}>
      <Typography variant="h5" align="center">
        Temperature in Japan
      </Typography>
      <TemperatureTable rows={data} />
      <Typography variant="h5" align="center">
        Temperature Plot
      </Typography>
      <TemperatureChart data={data} />
    </Stack>
  );
};
