import { MainHeader } from './main-header/main-header.tsx';
import { AddTaskForm } from './add-task-form/add-task-form.tsx';
import { Box, Button, Container, Stack } from '@mui/material';
import { SearchAndFilterForm } from './search-and-filters/search-and-filter-form.tsx';
import { QuickFilterForm } from './quick-filters/quick-filter-form.tsx';
import { DisplayTaskCard } from './display-tasks/display-task-form.tsx';
import { useState } from 'react';

export default function App() {
  const appName = 'TaskFlow Manager';
  const [counter, setCounter] = useState(0);
  //TODO: useState for tasks
  // const [tasks, setTasks] = useState<Array<any>>([]);

  return (
    <Box>
      <MainHeader title={appName} />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Stack spacing={4}>
          <AddTaskForm />
          <SearchAndFilterForm />
          <QuickFilterForm />
          <DisplayTaskCard />
        </Stack>
      </Container>
      {counter}
      <Button
        onClick={() => {
          setCounter((prevState) => {
            // console.log(prevState);
            return prevState + 1;
          });
          // setTasks((prevState) => {
          //   // console.log(prevState);
          //   return [...prevState, counter];
          // });
        }}
      >
        Dodaj
      </Button>
    </Box>
  );
}
