import React, { useEffect, useState } from 'react';
import { Typography, Stack, CircularProgress, Button } from '@mui/material';
import { TemperatureTable } from '../new-page-components/temperature-table';
import { TemperatureChart } from '../new-page-components/temperature-chart';
import type { TemperatureRowType } from '../types/temperature';
import {
  fetchJapanTemperature,
  fetchCanadaTemperature,
  fetchGermanTemperature,
} from '../new-page-components/apis';
import { TemperatureBarChart } from '../new-page-components/temperature-bar-chart';
import type { GridRowSelectionModel } from '@mui/x-data-grid';
import { NavLink } from 'react-router';

export type MultiCountryData = {
  japan: TemperatureRowType[];
  canada: TemperatureRowType[];
  germany: TemperatureRowType[];
};

export const NewPage = () => {
  const [data, setData] = useState<MultiCountryData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const [rowSelectionModel, setRowSelectionModel] = React.useState<GridRowSelectionModel>({
    type: 'include',
    ids: new Set(),
  });

  useEffect(() => {
    Promise.all([fetchJapanTemperature(), fetchCanadaTemperature(), fetchGermanTemperature()])
      .then(([japan, canada, germany]) => {
        setData({ japan, canada, germany });
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);

  if (loading) return <CircularProgress />;
  if (error) return <Typography color="error">{error}</Typography>;
  return (
    <Stack sx={{ p: 4 }}>
      <Stack mb={1} alignItems={'center'}>
        <NavLink to="/pdf-viewer">
          <Button variant={'outlined'}>Export temperature data to pdf</Button>
        </NavLink>
      </Stack>
      <Typography variant="h5" align="center" sx={{ padding: 5 }}>
        Temperature in Japan
      </Typography>
      <TemperatureTable
        rows={data?.japan ?? []}
        rowSelectionModel={rowSelectionModel}
        setRowSelectionModel={setRowSelectionModel}
        setData={setData}
        countryKey="japan"
      />
      <Typography variant="h5" align="center">
        Temperature Plot for Japan, Canada and Germany
      </Typography>
      <TemperatureChart
        japanData={data?.japan ?? []}
        canadaData={data?.canada ?? []}
        germanyData={data?.germany ?? []}
      />
      <Typography variant="h5" align="center">
        Min and Max Bar Chart for Temperature in Canada
      </Typography>
      <TemperatureBarChart canadaData={data?.canada ?? []} />
    </Stack>
  );
};
