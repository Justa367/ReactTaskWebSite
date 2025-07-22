import { Stack, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTasksState } from '../task-context/task-context';
import _ from 'lodash';
import { useState, useMemo } from 'react';

export const SearchInput = () => {
  const { setFilters } = useTasksState();
  const [inputValue, setInputValue] = useState('');

  const debouncedSetFilter = useMemo(
    () =>
      _.debounce((value: string) => {
        setFilters((prev) => ({ ...prev, searchTerm: value }));
      }, 500),
    [setFilters],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    debouncedSetFilter(value);
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
        value={inputValue}
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
