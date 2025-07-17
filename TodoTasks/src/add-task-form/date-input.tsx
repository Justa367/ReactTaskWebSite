import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller } from 'react-hook-form';
import { Stack } from '@mui/material';
import dayjs from 'dayjs';

export const DateInput = ({ control }: any) => {
  return (
    <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%' }}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Controller
          name="date"
          control={control}
          defaultValue={dayjs()}
          render={({ field }) => (
            <DatePicker
              label="Due Date"
              value={field.value}
              onChange={(date) => field.onChange(date)}
              slotProps={{ textField: { variant: 'outlined', fullWidth: true } }}
            />
          )}
        />
      </LocalizationProvider>
    </Stack>
  );
};
