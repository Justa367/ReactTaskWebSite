// Ten folder wyrzuca na świat połączone ze sobą np. name-input z date-input
import { CardContent, Typography } from '@mui/material';

export const AddTaskForm = () => {
  return (
      <CardContent sx={{ p: 0 }}>
        <Typography variant="h6" fontWeight="bold" color="#1e3799" gutterBottom>
          Add New Task
        </Typography>
      </CardContent>
  )}