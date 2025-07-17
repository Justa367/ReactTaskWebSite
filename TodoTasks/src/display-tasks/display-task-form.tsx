import { CardContent, Typography, Card, Stack } from '@mui/material';

export const DisplayTaskCard = () => {
  return (
    <Card elevation={1} sx={{ borderRadius: 2, p: 2 }}>
      <Stack spacing={4}>
        <CardContent sx={{ p: 0 }}>
          <Typography variant="h6" fontWeight="bold" color="#1e3799" gutterBottom>
            Your Tasks
          </Typography>
        </CardContent>
      </Stack>
    </Card>
  );
};
