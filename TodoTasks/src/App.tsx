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
        <MainHeader /> {/* jeśli potrzebuje tasks, użyj hooka */}
        <Container maxWidth="md" sx={{ mt: 4 }}>
          <Stack spacing={4}>
            <AddTaskForm />
            <SearchAndFilterForm />
            <QuickFilterForm />
            <DisplayTaskCard />
            {/*TODO:  Progress overview*/}
            <ProgressOverviewForm />
          </Stack>
        </Container>
      </Box>
    </TaskStateProvider>
  );
}

// Context API: done
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
