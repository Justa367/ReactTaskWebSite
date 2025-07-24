import { MainHeader } from './main-header/main-header.tsx';
import { Box, Container } from '@mui/material';
import { Outlet } from 'react-router-dom';

export default function Layout() {
  return (
    <Box>
      <MainHeader />
      <Container maxWidth="md" sx={{ mt: 4 }}>
        {/*TODO: co to jest outlet*/}
        <Outlet />
      </Container>
    </Box>
  );
}
