import { Stack, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTasksState } from '../task-context/task-context';

export const SearchInput = () => {
  const { filters, setFilters } = useTasksState();

  const handleChange = (term: React.ChangeEvent<HTMLInputElement>) => {
    //TODO: Add debounce
    setFilters((prev) => ({
      ...prev,
      searchTerm: term.target.value,
    }));
  };
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="center"
      component="form"
      noValidate
      autoCapitalize="off"
      sx={{ width: '100%' }}
    >
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search tasks..."
        value={filters.searchTerm}
        onChange={handleChange}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon sx={{ color: 'grey.600' }} />
              </InputAdornment>
            ),
          },
        }}
      />
    </Stack>
  );
};
