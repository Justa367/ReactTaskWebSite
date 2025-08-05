import { Button, Stack } from '@mui/material';
import { NavLink } from 'react-router';
import ListAltIcon from '@mui/icons-material/ListAlt';
import ThermostatIcon from '@mui/icons-material/Thermostat';
import DownloadIcon from '@mui/icons-material/Download';
import { PDFDownloadLink } from '@react-pdf/renderer';
import { MyDocument } from './pdf-document';
import { useChartImage } from '../chat-img-context/chat-img-context';

export const PdfButtons = () => {
  const { image } = useChartImage();
  return (
    <Stack mb={2} direction={'row'} justifyContent={'space-between'}>
      <Stack direction={'row'} spacing={2}>
        <NavLink to={'/'}>
          <Button size="small" startIcon={<ListAltIcon />} variant={'contained'}>
            Back to Task Page
          </Button>
        </NavLink>
        <NavLink to={'/new-page'}>
          <Button size="small" startIcon={<ThermostatIcon />} variant={'contained'}>
            Back to Weather Page
          </Button>
        </NavLink>
      </Stack>
      <Stack>
        <PDFDownloadLink document={<MyDocument image={image} />} fileName="temperature-data.pdf">
          {({ loading }) => (
            <Button
              size="small"
              startIcon={<DownloadIcon />}
              variant="contained"
              disabled={loading}
            >
              {loading ? 'Generating...' : 'Download Pdf'}
            </Button>
          )}
        </PDFDownloadLink>
      </Stack>
    </Stack>
  );
};
