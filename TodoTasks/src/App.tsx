import { MainHeader } from './main-header/main-header.tsx';
import { AddTaskForm } from './add-task-form/add-task-form.tsx';
import { Box, Card, Container, Stack } from '@mui/material';
import { SearchAndFilterForm } from './search-and-filters/search-and-filter-form.tsx';
import { SearchTask } from './search-and-filters/search-input.tsx';
import { QuickFilterForm } from './quick-filters/quick-filter-form.tsx';
import { QuickFilterButtons } from './quick-filters/quick-filter-buttons.tsx';
import { DisplayTaskForm } from './display-tasks/display-task-form.tsx';

export default function App() {
  const appName = 'Todo task';

  return (
    <Box>
      <MainHeader title={appName} />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Stack spacing={4}>
          <AddTaskForm />
          {/*TODO: wynieść te CARDY tak jak jest to zrobione w AddTaskForm*/}
          <Card elevation={1} sx={{ borderRadius: 2, p: 2 }}>
            <Stack spacing={4}>
              <SearchAndFilterForm />
              <SearchTask />
            </Stack>
          </Card>
          <Card elevation={1} sx={{ borderRadius: 2, p: 2 }}>
            <Stack spacing={4}>
              <QuickFilterForm />
              <QuickFilterButtons />
            </Stack>
          </Card>
          <Card elevation={1} sx={{ borderRadius: 2, p: 2 }}>
            <Stack spacing={4}>
              <DisplayTaskForm />
            </Stack>
          </Card>
          <Card elevation={1} sx={{ borderRadius: 2, p: 2 }}>
            <Stack spacing={4}></Stack>
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}
