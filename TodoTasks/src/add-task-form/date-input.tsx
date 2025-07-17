import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import Button from '@mui/material/Button';
import { Stack } from '@mui/material';

export const ChooseDate = () => {
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
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <DatePicker
          label="Due Date"
          slotProps={{ textField: { variant: 'outlined', fullWidth: true } }}
        />
      </LocalizationProvider>
      <Button
        variant="contained"
        disableElevation
        sx={{ width: 150, backgroundColor: '#1e3799', height: 50 }}
      >
        + Add Task
      </Button>
    </Stack>
  );
};
