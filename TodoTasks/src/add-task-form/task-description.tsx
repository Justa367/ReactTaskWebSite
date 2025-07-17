import { FormControl, InputLabel, Select, MenuItem, Stack, TextField } from '@mui/material';

export const TaskDescription = () => {
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
      <TextField id="outlined-basic" label="Task description" variant="outlined" fullWidth />
      <FormControl sx={{ width: 150 }}>
        <InputLabel id="priority-label">Priority</InputLabel>
        <Select labelId="priority-label" id="priority-select" label="Priority">
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};
