import { CardContent, Typography } from '@mui/material';
import { useTasksState } from '../task-context/task-context';

export const ProgressOverviewForm = () => {
  const { tasks } = useTasksState();

  // TODO: wynieść do useTasksState i wyciagnąć tutaj i w headerze
  const completedTasksCount = tasks.filter((task) => task.isDone).length;
  const progressPercent = tasks.length === 0 ? 0 : (completedTasksCount / tasks.length) * 100;

  return (
    <CardContent sx={{ p: 0, textAlign: 'center' }}>
      <Typography variant="h6" fontWeight="bold" color="#1e3799" gutterBottom>
        Progress Overview
      </Typography>

      <Typography variant="subtitle1" fontWeight="medium">
        {Math.round(progressPercent)}% Complete
      </Typography>

      <Typography variant="body2" color="text.secondary" mt={1}>
        Keep up the great work! You've completed {completedTasksCount} out of {tasks.length} tasks.
      </Typography>
    </CardContent>
  );
};
