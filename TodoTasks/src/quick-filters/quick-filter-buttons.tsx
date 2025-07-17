import { Stack } from '@mui/material';
import Button from '@mui/material/Button';

export const QuickFilterButtons = () => {
  return (
    <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%' }}>
      <Button
        variant="outlined"
        disableElevation
        sx={{
          width: 150,
          color: '#1e3799',
          borderColor: '#1e3799',
          backgroundColor: '#ffffff',
          height: 50,
          fontWeight: 'bold',
          borderRadius: 20,
          '&:hover': {
            backgroundColor: '#e6f0ff',
            borderColor: '#1e3799',
          },
        }}
      >
        All
      </Button>
      <Button
        variant="outlined"
        disableElevation
        sx={{
          width: 150,
          color: '#1e3799',
          borderColor: '#1e3799',
          backgroundColor: '#ffffff',
          borderRadius: 20,
          fontWeight: 'bold',
          height: 50,
          '&:hover': {
            backgroundColor: '#e6f0ff',
            borderColor: '#1e3799',
          },
        }}
      >
        Active
      </Button>
      <Button
        variant="outlined"
        disableElevation
        sx={{
          width: 150,
          color: '#1e3799',
          borderColor: '#1e3799',
          backgroundColor: '#ffffff',
          borderRadius: 20,
          fontWeight: 'bold',
          height: 50,
          '&:hover': {
            backgroundColor: '#e6f0ff',
            borderColor: '#1e3799',
          },
        }}
      >
        Completed
      </Button>
    </Stack>
  );
};
