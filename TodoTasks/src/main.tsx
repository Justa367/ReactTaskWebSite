import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import './index.css';
import { StyledEngineProvider } from '@mui/material/styles';
import App from './App';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

ReactDOM.createRoot(document.querySelector('#root')!).render(
  <React.StrictMode>
    <StyledEngineProvider injectFirst>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <App />
      </LocalizationProvider>
    </StyledEngineProvider>
  </React.StrictMode>,
);
