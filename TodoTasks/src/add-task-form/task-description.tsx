import { FormControl, InputLabel, Select, MenuItem, Stack, TextField } from '@mui/material';
import { useFormContext, Controller } from 'react-hook-form';

export const TaskDescription = () => {
  const { control } = useFormContext();
  return (
    <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%' }}>
      <Controller
        name="taskDescription"
        control={control}
        defaultValue=""
        rules={{ required: true }}
        render={({ field }) => (
          <TextField label="Task description" variant="outlined" fullWidth {...field} />
        )}
      />
      <FormControl sx={{ width: 150 }}>
        <InputLabel id="priority-label">Priority</InputLabel>
        <Controller
          name="priority"
          control={control}
          defaultValue=""
          rules={{ required: true }}
          render={({ field }) => (
            <Select labelId="priority-label" label="Priority" {...field}>
              <MenuItem value="low">Low</MenuItem>
              <MenuItem value="medium">Medium</MenuItem>
              <MenuItem value="high">High</MenuItem>
            </Select>
          )}
        />
      </FormControl>
    </Stack>
  );
};
