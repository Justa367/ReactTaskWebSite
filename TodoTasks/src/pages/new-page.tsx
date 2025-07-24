import axios from 'axios';
import { useEffect, useState } from 'react';
import { Box, Typography, List, ListItem, ListItemText } from '@mui/material';

// api 'https://api.open-meteo.com/v1/forecast?latitude=52.52&longitude=13.41&hourly=temperature_2m&models=jma_seamless'
export const NewPage = () => {
  const [data, setData] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

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

  return (
    <Box sx={{ p: 4 }}>
      <Typography variant="h5">Temperature</Typography>
      <List>
        {data.hourly.time.map((time: string, index: number) => (
          <ListItem key={time}>
            <ListItemText primary={`${time} — ${data.hourly.temperature_2m[index]}°C`} />
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
