// Ten folder wyrzuca na świat połączone ze sobą np. name-input z date-input
import { Card, CardContent, Stack, Typography } from '@mui/material';
import { TaskDescription } from './task-description.tsx';
import { ChooseDate } from './date-input.tsx';

export const AddTaskForm = () => {
  //TODO: npm i react-hook-form
  //TODO: Stworzyc formularz z react-hook-form używając register i useForm
  //TODO: na submicie console.log z wartoscami z formularza
  //TODO: register musi być przekazany do komponentów z formularza - task description i choose date (propsem)

  return (
    <Card elevation={1} sx={{ borderRadius: 2, p: 2 }}>
      <CardContent sx={{ p: 0 }}>
        <Typography variant="h6" fontWeight="bold" color="#1e3799" gutterBottom>
          Add New Task
        </Typography>
      </CardContent>
      <form>
        <Stack spacing={2}>
          <TaskDescription />
          <ChooseDate />
        </Stack>
      </form>
    </Card>
  );
};
