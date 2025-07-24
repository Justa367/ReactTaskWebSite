import { DataGrid } from '@mui/x-data-grid';
import { Stack } from '@mui/material';
import type { TemperatureRowType } from '../types/temperature';
import DeleteIcon from '@mui/icons-material/Delete';
import Toolbar from '@mui/material/Toolbar';

type TemperatureTableProps = {
  rows: TemperatureRowType[];
};

const CustomToolbar = () => {
  return (
    <Toolbar sx={{ justifyContent: 'flex-end' }}>
      <DeleteIcon />
    </Toolbar>
  );
};

export const TemperatureTable = ({ rows }: TemperatureTableProps) => (
  <Stack sx={{ height: 500, width: '100%', mb: 4 }}>
    <DataGrid
      showToolbar
      slots={{
        toolbar: CustomToolbar,
      }}
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
