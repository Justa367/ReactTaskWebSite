import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import LinearProgress from '@mui/material/LinearProgress';
import Stack from '@mui/material/Stack';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export const MainHeader = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundColor: '#1e3799' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <CheckCircleIcon />
            <Typography variant="h6" component="div">
              TaskFlow Manager
            </Typography>
          </Box>
          <Stack direction="row" spacing={2} alignItems="center">
            <Typography variant="body2">Task Progress</Typography>
            <LinearProgress
              variant="buffer"
              value={50}
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
        </Toolbar>
      </AppBar>
    </Box>
  );
};
