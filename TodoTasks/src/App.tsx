import { MainHeader } from './main-header/main-header.tsx';
import { AddTaskForm } from './add-task-form/add-task-form.tsx';
import { Box, Container, Stack } from '@mui/material';
import { SearchAndFilterForm } from './search-and-filters/search-and-filter-form.tsx';
import { QuickFilterForm } from './quick-filters/quick-filter-form.tsx';
import { DisplayTaskCard } from './display-tasks/display-task-form.tsx';
import { useState } from 'react';
import type { TaskType } from './types/task-type.ts';
import { ProgressOverviewForm } from './prorgress-overview/progess-overview-form.tsx';

export default function App() {
  const [tasks, setTasks] = useState<Array<TaskType>>([]);
  return (
    //TUtaj użycie Providera
    <Box>
      <MainHeader tasks={tasks} />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Stack spacing={4}>
          <AddTaskForm tasks={tasks} setTasks={setTasks} />
          <SearchAndFilterForm />
          <QuickFilterForm />
          <DisplayTaskCard tasks={tasks} setTasks={setTasks} />
          {/*TODO:  Progress overwiev*/}
          <ProgressOverviewForm tasks={tasks} />
        </Stack>
      </Container>
    </Box>
  );
}

// Context API:
// 1. tasks - useState
// 2. Provider
// 3. hook - useTasksState()

// później dodanie informacji do tego kontekstu jakie filtry zastosoweał użytkownik
// przefiltrować taski i zwrócić je z kontekstu np.
// const filteredTasks = tasks przefiltrowane przez zmienną filters

//filtry: {
//  search: "dasda",
//  quick filters - quickFilter: "ALL" | "Active" | "Completed" -> filtracja na logikę
// }
