import { Stack, TextField, InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { useTasksState } from '../task-context/task-context';
import debounce from 'lodash/debounce';
import { useState, useMemo, useEffect } from 'react';

export const SearchInput = () => {
  const { setFilters, filters } = useTasksState();
  const [inputValue, setInputValue] = useState(filters.searchTerm);

  const debouncedSetFilter = useMemo(
    () =>
      debounce((value: string) => {
        setFilters((prev) => ({ ...prev, searchTerm: value }));
      }, 500),
    [setFilters],
  );

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setInputValue(value);
    debouncedSetFilter(value);
  };

  //TODO: Poczytać o useEffect
  useEffect(() => {
    if (!filters.searchTerm) {
      setInputValue('');
    }
  }, [filters.searchTerm]);

  return (
    <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%' }}>
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
