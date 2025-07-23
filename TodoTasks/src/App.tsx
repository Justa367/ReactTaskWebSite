import { MainHeader } from './main-header/main-header.tsx';
import { Box, Container } from '@mui/material';
import { TaskStateProvider } from './task-context/task-context.tsx';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NewPage } from './pages/new-page.tsx';
import HomePage from './pages/home-page.tsx';

export default function App() {
  return (
    <BrowserRouter>
      <TaskStateProvider>
        <Box>
          <MainHeader />
          <Container maxWidth="md" sx={{ mt: 4 }}>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/newpage" element={<NewPage />} />
            </Routes>
          </Container>
        </Box>
      </TaskStateProvider>
    </BrowserRouter>
  );
}
