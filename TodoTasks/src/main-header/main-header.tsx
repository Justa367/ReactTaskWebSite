import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { Button, styled } from '@mui/material';
import { NavLink } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useTasksState } from '../task-context/task-context';
import LinearProgress from '@mui/material/LinearProgress';

const StyledNavLink = styled(NavLink)`
  &.active button {
    color: red;
  }
`;

export const MainHeader = () => {
  const location = useLocation();
  const { progressPercent } = useTasksState();
  const isHomePage = location.pathname === '/';

  const renderProgressBar = () =>
    isHomePage ? (
      <Stack direction="row" spacing={1} alignItems="center">
        <Typography variant="body2">Task Progress</Typography>
        <LinearProgress
          variant="buffer"
          value={progressPercent}
          valueBuffer={100}
          sx={{
            width: 100,
            height: 8,
            borderRadius: 5,
            backgroundColor: '#4b6584',
            '& .MuiLinearProgress-bar1': { backgroundColor: '#20bf6b' },
            '& .MuiLinearProgress-bar2': { backgroundColor: 'white' },
          }}
        />
      </Stack>
    ) : null;

  return (
    <Box sx={{ flexGrow: 1, paddingTop: '64px' }}>
      <AppBar position="fixed" sx={{ backgroundColor: '#1e3799' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CheckCircleIcon />
            <Typography variant="h6" component="div">
              TaskFlow Menager
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} alignItems="center">
            {/*TODO: Dodać obsługę pokazywania, który link jest teraz aktywny*/}
            {renderProgressBar()}
            <StyledNavLink to="/" className={({ isActive }) => (isActive ? 'active' : '')}>
              <Button sx={{ color: 'white' }}>Home</Button>
            </StyledNavLink>
            <StyledNavLink to="/new-page" className={({ isActive }) => (isActive ? 'active' : '')}>
              <Button sx={{ color: 'white' }}>New Page</Button>
            </StyledNavLink>
          </Stack>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
