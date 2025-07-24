import { DataGrid } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import type { TemperatureRowType } from '../types/temperature';

type TemperatureTableProps = {
  rows: TemperatureRowType[];
};

export const TemperatureTable = ({ rows }: TemperatureTableProps) => (
  <Stack sx={{ height: 500, width: '100%', mb: 4 }}>
    <DataGrid
      rows={rows}
      columns={[
        { field: 'time', headerName: 'Time', flex: 1 },
        { field: 'temperature', headerName: 'Temperature (°C)', flex: 1 },
      ]}
      checkboxSelection
      disableRowSelectionOnClick
    />
  </Stack>
);
