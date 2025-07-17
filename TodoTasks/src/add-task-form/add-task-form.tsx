import { Card, CardContent, Stack, Typography, Button } from '@mui/material';
import { TaskDescription } from './task-description.tsx';
import { DateInput } from './date-input.tsx';
import { useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';

//TODO: npm i react-hook-form
//TODO: Stworzyc formularz z react-hook-form używając register i useForm
//TODO: na submicie console.log z wartoscami z formularza
//TODO: register musi być przekazany do komponentów z formularza - task description i choose date (propsem)

type FormValues = {
  taskDescription: string;
  priority: string;
  date: string;
};

export const AddTaskForm = () => {
  const { register, handleSubmit, control } = useForm<FormValues>();

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log('Form data:', data);
  };

  return (
    <Card elevation={1} sx={{ borderRadius: 2, p: 2 }}>
      <CardContent sx={{ p: 0 }}>
        <Typography variant="h6" fontWeight="bold" color="#1e3799" gutterBottom>
          Add New Task
        </Typography>
      </CardContent>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Stack spacing={2}>
          <TaskDescription register={register} />
          <Stack spacing={2} direction="row">
            <DateInput control={control} />
            <Button
              type="submit"
              variant="contained"
              disableElevation
              sx={{ width: 150, backgroundColor: '#1e3799', height: 50 }}
            >
              + Add Task
            </Button>
          </Stack>
        </Stack>
      </form>
    </Card>
  );
};
