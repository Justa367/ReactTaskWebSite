import { useEffect, useState } from 'react';
import axios from 'axios';
import { Box, Typography, CircularProgress } from '@mui/material';
import { DataGrid, type GridColDef } from '@mui/x-data-grid';

export const NewPage = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const columns: GridColDef[] = [
    { field: 'time', headerName: 'Hour', flex: 1 },
    { field: 'temperature', headerName: 'Temperature (°C)', flex: 1 },
  ];

  useEffect(() => {
    axios
      .get(
        'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&models=jma_seamless',
      )
      .then((response) => {
        console.log('API response:', response.data);
        setData(response.data);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  const rows = data.hourly.time.map((time: string, index: number) => ({
    id: index,
    time,
    temperature: data.hourly.temperature_2m[index],
  }));

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5" gutterBottom>
        Temperature in Japan
      </Typography>
      <Box sx={{ height: 500, width: '100%' }}>
        <DataGrid rows={rows} columns={columns} />
      </Box>
    </Box>
  );
};
