import { Stack, Card, CardContent, Typography } from '@mui/material';
import { QuickFilterButtons } from './quick-filter-buttons.tsx';

export const QuickFilterForm = () => {
  return (
    <Card elevation={1} sx={{ borderRadius: 2, p: 2 }}>
      <CardContent sx={{ p: 0 }}>
        <Typography variant="h6" fontWeight="bold" color="#1e3799" gutterBottom>
          Quick Filters
        </Typography>
      </CardContent>
      <Stack spacing={4}>
        <QuickFilterButtons />
      </Stack>
    </Card>
  );
};
