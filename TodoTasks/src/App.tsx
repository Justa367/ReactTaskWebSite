import { MainHeader } from './main-header/main-header.tsx';
import { AddTaskForm } from './add-task-form/add-task-form.tsx';
import { Box, Container, Stack } from '@mui/material';
import { SearchAndFilterForm } from './search-and-filters/search-and-filter-form.tsx';
import { QuickFilterForm } from './quick-filters/quick-filter-form.tsx';
import { DisplayTaskCard } from './display-tasks/display-task-form.tsx';
import { ProgressOverviewForm } from './prorgress-overview/progess-overview-form.tsx';
import { TaskStateProvider } from './task-context/task-context.tsx';

export default function App() {
  return (
    <TaskStateProvider>
      <Box>
        <MainHeader />
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Stack spacing={4}>
            <AddTaskForm />
            <SearchAndFilterForm />
            <QuickFilterForm />
            <DisplayTaskCard />
            <ProgressOverviewForm />
          </Stack>
        </Container>
      </Box>
    </TaskStateProvider>
  );
}

// const filteredTasks = tasks przefiltrowane przez zmienną filters

//filtry: {
//  search: "dasda",
//  quick filters - quickFilter: "ALL" | "Active" | "Completed" -> filtracja na logikę
// }
