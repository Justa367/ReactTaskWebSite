import { FormControl, InputLabel, Select, MenuItem, Stack, TextField } from '@mui/material';

export const TaskDescription = ({ register }: any) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%' }}>
      <TextField
        label="Task description"
        variant="outlined"
        fullWidth
        {...register('taskDescription', { required: true })}
      />
      <FormControl sx={{ width: 150 }}>
        <InputLabel id="priority-label">Priority</InputLabel>
        <Select label="Priority" defaultValue="" {...register('priority', { required: true })}>
          <MenuItem value="low">Low</MenuItem>
          <MenuItem value="medium">Medium</MenuItem>
          <MenuItem value="high">High</MenuItem>
        </Select>
      </FormControl>
    </Stack>
  );
};
