import { CardContent, Typography, Stack, Button, Card } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { ArrowDropDown } from '@mui/icons-material';
import { SearchInput } from './search-input';

export const SearchAndFilterForm = () => {
  return (
    <Card elevation={1} sx={{ borderRadius: 2, p: 2 }}>
      <CardContent sx={{ p: 0 }}>
        <Stack
          direction="row"
          spacing={2}
          alignItems="center"
          component="form"
          noValidate
          autoCapitalize="off"
          sx={{ width: '100%' }}
        >
          <Typography
            variant="h6"
            fontWeight="bold"
            color="#1e3799"
            gutterBottom
            sx={{ flexGrow: 1 }}
          >
            Search & Filter Tasks
          </Typography>
          <Button
            variant="outlined"
            startIcon={<FilterListIcon />}
            endIcon={<ArrowDropDown />}
            sx={{ color: '#1e3799' }}
          >
            Advanced
          </Button>
        </Stack>
      </CardContent>
      <Stack spacing={4}>
        <SearchInput />
      </Stack>
    </Card>
  );
};
