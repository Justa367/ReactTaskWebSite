import { MainHeader } from './main-header/main-header.tsx';
import { Box, Container } from '@mui/material';
import { TaskStateProvider } from './task-context/task-context.tsx';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <TaskStateProvider>
      <Box>
        <MainHeader />
        <Container maxWidth="md" sx={{ mt: 4 }}>
          {/*TODO: co to jest outlet*/}
          <Outlet />
        </Container>
      </Box>
    </TaskStateProvider>
  );
}
