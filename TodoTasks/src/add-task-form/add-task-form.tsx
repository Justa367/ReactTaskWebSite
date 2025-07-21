import { Card, CardContent, Stack, Typography, Button } from '@mui/material';
import { TaskDescription } from './task-description.tsx';
import { DateInput } from './date-input.tsx';
import { FormProvider, useForm } from 'react-hook-form';
import type { SubmitHandler } from 'react-hook-form';
import type { TaskType } from '../types/task-type.ts';
import type { Dispatch, SetStateAction } from 'react';
import dayjs from 'dayjs';

type FormValues = TaskType;

type Props = {
  tasks: TaskType[];
  setTasks: Dispatch<SetStateAction<TaskType[]>>;
};

export const AddTaskForm = ({ tasks, setTasks }: Props) => {
  //const {setTasks} = useTasksState() - wtedy juz nie są potrzebne propsy

  const form = useForm<FormValues>({
    defaultValues: {
      createdAt: dayjs(),
    },
  });

  const { handleSubmit } = form;

  const onSubmit: SubmitHandler<FormValues> = (data) => {
    console.log(tasks);
    setTasks((prev) => {
      const updatedTasks = [...prev, data];
      console.log('All:', updatedTasks);
      return updatedTasks;
    });
  };

  return (
    <Card elevation={1} sx={{ borderRadius: 2, p: 2 }}>
      <CardContent sx={{ p: 0 }}>
        <Typography variant="h6" fontWeight="bold" color="#1e3799" gutterBottom>
          Add New Task
        </Typography>
      </CardContent>
      <FormProvider {...form}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack spacing={2}>
            <TaskDescription />
            <Stack spacing={2} direction="row">
              <DateInput />
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
      </FormProvider>
    </Card>
  );
};
