import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export const NotFound = () => {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        padding: 4,
      }}
    >
      <Typography variant="h2" color="error" gutterBottom>
        404
      </Typography>
      <Typography variant="body1" sx={{ mb: 4 }}>
        Page Not Found
      </Typography>
      <Button
        variant="outlined"
        onClick={() => navigate('/')}
        sx={{
          color: '#1e3799',
          borderColor: '#1e3799',
          '&:hover': {
            backgroundColor: '#1e3799',
            color: 'white',
            borderColor: '#1e3799',
          },
        }}
      >
        Back To Home Page
      </Button>
    </Box>
  );
};
