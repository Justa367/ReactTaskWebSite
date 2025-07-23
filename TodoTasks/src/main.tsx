import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import { StyledEngineProvider } from '@mui/material/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { BrowserRouter } from 'react-router-dom';
import { Routing } from './routing.tsx';

import isBetween from 'dayjs/plugin/isBetween';
import dayjs from 'dayjs';

dayjs.extend(isBetween);

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <BrowserRouter>
          <Routing />
        </BrowserRouter>
      </LocalizationProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);
