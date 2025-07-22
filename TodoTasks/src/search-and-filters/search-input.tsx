import { Stack, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTasksState } from '../task-context/task-context';

//TODO: Change name of component on the same name as file
export const SearchInput = () => {
  const { filters, setFilters } = useTasksState();

  const handleChange = (term: React.ChangeEvent<HTMLInputElement>) => {
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
