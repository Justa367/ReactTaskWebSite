import { MainHeader } from './main-header/main-header.tsx';
import { AddTaskForm } from './add-task-form/add-task-form.tsx';
import { Box, Card, Container, Stack } from '@mui/material';
import { TaskDescription } from './add-task-form/task-description.tsx';
import { ChooseDate } from './add-task-form/date-input.tsx';

export default function App() {
  return (
    <Box>
      <MainHeader />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        <Card elevation={1} sx={{ borderRadius: 2, p: 2 }}>
          <AddTaskForm />
          <Stack spacing={4}>
            <TaskDescription />
            <ChooseDate />
          </Stack>
        </Card>
      </Container>
    </Box>
  );
}


