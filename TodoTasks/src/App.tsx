import { MainHeader } from './main-header/main-header.tsx';
import { AddTaskForm } from './add-task-form/add-task-form.tsx';
import { Box, Container, Stack } from '@mui/material';
import { SearchAndFilterForm } from './search-and-filters/search-and-filter-form.tsx';
import { QuickFilterForm } from './quick-filters/quick-filter-form.tsx';
import { DisplayTaskCard } from './display-tasks/display-task-form.tsx';

export default function App() {
  const appName = 'TaskFlow Manager';

  return (
    <Box>
      <MainHeader title={appName} />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Stack spacing={4}>
          <AddTaskForm />
          {/*TODO: wynieść te CARDY tak jak jest to zrobione w AddTaskForm*/}
          <SearchAndFilterForm />
          <QuickFilterForm />
          <DisplayTaskCard />
        </Stack>
      </Container>
    </Box>
  );
}
