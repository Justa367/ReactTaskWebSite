import { Button, Stack } from '@mui/material';
import type { TemperatureRowType } from '../types/temperature';
import DeleteIcon from '@mui/icons-material/Delete';
import Toolbar from '@mui/material/Toolbar';
import { DataGrid, type GridRowSelectionModel } from '@mui/x-data-grid';
import { type Dispatch } from 'react';
import type { MultiCountryData } from '../pages/new-page';

type TemperatureTableProps = {
  rows: TemperatureRowType[];
  rowSelectionModel: GridRowSelectionModel;
  setRowSelectionModel: Dispatch<GridRowSelectionModel>;
  setData: Dispatch<MultiCountryData | null>;
};

declare module '@mui/x-data-grid' {
  interface ToolbarPropsOverrides {
    deleteData: () => void;
  }
}

const CustomToolbar = (props: { deleteData: () => void }) => {
  return (
    <Toolbar sx={{ justifyContent: 'flex-end' }}>
      <Button color={'inherit'} endIcon={<DeleteIcon />} onClick={() => props.deleteData()}>
        Delete
      </Button>
    </Toolbar>
  );
};

export const TemperatureTable = ({
  rows,
  rowSelectionModel,
  setRowSelectionModel,
  setData,
}: TemperatureTableProps) => {
  const indexedRows = rows.map((row, idx) => ({
    ...row,
    index: idx + 1,
    id: row.id ?? idx,
  }));

  const handleDeleteItems = () => {
    // setData
    console.log(rowSelectionModel);
  };

  return (
    <Stack sx={{ height: 500, width: '100%', mb: 4 }}>
      <DataGrid
        showToolbar
        slots={{
          toolbar: rowSelectionModel.ids.size > 0 ? CustomToolbar : () => <></>,
        }}
        slotProps={{
          toolbar: {
            deleteData: handleDeleteItems,
          },
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
