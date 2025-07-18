import { MainHeader } from './main-header/main-header.tsx';
import { AddTaskForm } from './add-task-form/add-task-form.tsx';
import { Box, Container, Stack } from '@mui/material';
import { SearchAndFilterForm } from './search-and-filters/search-and-filter-form.tsx';
import { QuickFilterForm } from './quick-filters/quick-filter-form.tsx';
import { DisplayTaskCard } from './display-tasks/display-task-form.tsx';
import { useState } from 'react';
import type { TaskType } from './types/task-type.ts';

export default function App() {
  const [tasks, setTasks] = useState<Array<TaskType>>([]);

  return (
    <Box>
      <MainHeader tasks={tasks} />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Stack spacing={4}>
          <AddTaskForm tasks={tasks} setTasks={setTasks} />
          <SearchAndFilterForm />
          <QuickFilterForm />
          {/*TODO: Display Tasks from useState*/}
          <DisplayTaskCard tasks={tasks} setTasks={setTasks} />
        </Stack>
      </Container>
    </Box>
  );
}
