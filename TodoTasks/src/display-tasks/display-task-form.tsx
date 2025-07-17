import { CardContent, Typography } from '@mui/material';

export const DisplayTaskForm = () => {
  return (
    <CardContent sx={{ p: 0 }}>
      <Typography variant="h6" fontWeight="bold" color="#1e3799" gutterBottom>
        Your Tasks
      </Typography>
    </CardContent>
  );
};
