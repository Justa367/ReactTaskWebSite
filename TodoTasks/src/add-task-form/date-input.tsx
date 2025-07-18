import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { Controller, useFormContext } from 'react-hook-form';
import { Stack } from '@mui/material';

export const DateInput = () => {
  const { control } = useFormContext();

  return (
    <Stack direction="row" spacing={2} alignItems="center" sx={{ width: '100%' }}>
      <Controller
        name="date"
        control={control}
        render={({ field }) => (
          <DatePicker
            label="Due Date"
            value={field.value ?? null}
            onChange={(date) => field.onChange(date)}
            slotProps={{ textField: { variant: 'outlined', fullWidth: true } }}
          />
        )}
      />
    </Stack>
  );
};
