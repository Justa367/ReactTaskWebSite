import { CardContent, Typography } from '@mui/material';
import { useTasksState } from '../task-context/task-context';

export const ProgressOverviewForm = () => {
  const { tasks, completedTasksCount, progressPercent } = useTasksState();

  return (
    <CardContent sx={{ p: 0, textAlign: 'center' }}>
      <Typography variant="h6" fontWeight="bold" color="#1e3799" gutterBottom>
        Progress Overview
      </Typography>

      <Typography variant="subtitle1" fontWeight="medium">
        {Math.round(progressPercent)}% Complete
      </Typography>

      <Typography variant="body2" color="text.secondary" mt={1}>
        You've completed {completedTasksCount} out of {tasks.length} tasks.
      </Typography>
    </CardContent>
  );
};
