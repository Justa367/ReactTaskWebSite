import { Stack, Typography } from '@mui/material';
import type { TemperatureRowType } from '../types/temperature';
import DeleteIcon from '@mui/icons-material/Delete';
import Toolbar from '@mui/material/Toolbar';
import { DataGrid, type GridRowSelectionModel } from '@mui/x-data-grid';
import React from 'react';

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

export const TemperatureTable = ({ rows }: TemperatureTableProps) => {
  const [rowSelectionModel, setRowSelectionModel] = React.useState<GridRowSelectionModel>({
    type: 'include',
    ids: new Set(),
  });

  const indexedRows = rows.map((row, idx) => ({
    ...row,
    index: idx + 1,
    id: row.id ?? idx,
  }));

  return (
    <Stack sx={{ height: 500, width: '100%', mb: 4 }}>
      <DataGrid
        showToolbar
        slots={{
          toolbar: CustomToolbar,
        }}
        rows={indexedRows}
        columns={[
          { field: 'index', headerName: 'Index', width: 80 },
          { field: 'time', headerName: 'Time', flex: 1 },
          { field: 'temperature', headerName: 'Temperature (°C)', flex: 1 },
        ]}
        checkboxSelection
        onRowSelectionModelChange={(newRowSelectionModel) => {
          setRowSelectionModel(newRowSelectionModel);
        }}
        rowSelectionModel={rowSelectionModel}
        {...indexedRows}
      />
    </Stack>
  );
};
